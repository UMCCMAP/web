import ReactQuill, { Quill } from 'react-quill';
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import DragAndDropModule from 'quill-drag-and-drop-module';
import './Editor.css';
import baseAxios from '../../../apis/baseAxios';
function Editor({ value, setValue, img, setImg }) {
  // 버튼 클릭 시 실행될 함수

  const quillRef = useRef(null);
  Quill.register('modules/ImageResize', ImageResize);
  Quill.register('modules/dragAndDrop', DragAndDropModule);

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote'],
    ['image'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }], // 가운데 정렬, 왼쪽 정렬, 오른쪽 정렬 옵션 추가
  ];
  const handleEditorChange = (content) => {
    setValue(content); // 에디터 내용 변경
    console.log('이거실행됨');
    // 이미지 태그 추출
    const editorDiv = document.createElement('div');
    editorDiv.innerHTML = content;
    const imgElements = editorDiv.querySelectorAll('img');

    // 이미지 URL 추출
    const imageUrls = Array.from(imgElements).map((img) => img.src);

    console.log('이미지 URL 목록:', imageUrls);
    setImg(imageUrls);
  };
  const handleImageUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('multipartFile', file); // 'multipartFile'는 백엔드에서 사용하는 키

      const response = await baseAxios.post('/s3/file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Content-Type을 명시합니다.
        },
      });

      const imageUrl = response.data[0]; // 응답에서 이미지 URL을 가져옴

      if (imageUrl) {
        /* Quill 에디터 객체를 가 져옵니다. */
        const quillObj = quillRef.current?.getEditor();

        /* 에디터 커서 위치를 가져옵니다. */
        const range = quillObj?.getSelection() || { index: 0, length: 0 };

        /* 에디터의 커서 위치에 이미지 요소를 삽입합니다. */
        quillObj?.insertEmbed(range.index, 'image', imageUrl);
      }
    } catch (error) {
      console.error('이미지 업로드 오류:', error);
    }
  };
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: () => {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();

            input.onchange = async () => {
              const file = input.files[0];
              handleImageUpload(file);
            };
          },
          deleteImage: async () => {
            // 이미지 삭제 로직
            const quill = quillRef.getEditor();
            const range = quill.getSelection();
            if (range && range.length > 0) {
              const [image] = quill.getContents(range.index, range.length).ops;
              if (image && image.insert && image.insert.image) {
                const imageUrl = image.insert.image;

                try {
                  // 서버로 DELETE 요청을 보냅니다.
                  await baseAxios.delete('/s3/file', {
                    data: { imageUrl },
                  });
                  console.log('delte');
                  // 이미지 삭제 후에 에디터 내용을 업데이트합니다.
                  quill.deleteText(range.index, range.length);
                } catch (error) {
                  console.error('이미지 삭제 오류:', error);
                }
              }
            }
          },

          ImageResize: {
            // 이미지 리사이즈 모듈 설정
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize', 'Toolbar'],
          },
          dragAndDrop: {
            draggables: [
              {
                content_type_pattern: DragAndDropModule.image_content_type_pattern,
                tag: 'img',
                attr: 'src',
              },
            ],
          },
        },
      },
    };
  }, []);
  const formats = [
    'font',
    'size',
    'header',
    'color',
    'background',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
  ];
  // 글 작성이 완료되었을 때 서버로 데이터를 보내는 함수

  return (
    <ReactQuill
      style={{ height: '95%', margin: '4px' }}
      ref={(element) => {
        if (element !== null) {
          quillRef.current = element;
        }
      }}
      theme="snow"
      value={value}
      modules={modules}
      formats={formats}
      onChange={handleEditorChange}
      placeholder="내용을 입력하세요."
    />
  );
}
export default Editor;
