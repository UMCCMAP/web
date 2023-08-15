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
  const ImageHandler = () => {
    // input type="file" DOM을 생성합니다.
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click(); // 이미지 툴바 버튼을 클릭한 것과 같은 효과를 줍니다.

    /* 이미지를 선택한 경우 */
    input.onchange = () => {
      /* 이미지 선택 여부를 확인합니다. */
      const file = input.files ? input.files[0] : null;
      /* 이미지 선택을 취소한 경우 종료합니다. */
      if (!file) return;
      console.log(file);
      /* FileReader를 사용하여 이미지 파일을 읽습니다. */
      const reader = new FileReader();
      reader.onload = () => {
        /* 읽어온 이미지 파일의 URL을 imgUrl 변수에 저장합니다. */
        const imgUrl = reader.result;
        /* Quill 에디터 객체를 가 져옵니다. */
        const quillObj = quillRef.current?.getEditor();

        /* 에디터 커서 위치를 가져옵니다. */
        const range = quillObj?.getSelection() || { index: 0, length: 0 };

        /* 에디터의 커서 위치에 이미지 요소를 삽입합니다. */
        quillObj?.insertEmbed(range.index, 'image', imgUrl);
      };
    };
  };
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: toolbarOptions,
        handler: {
          image: ImageHandler,
        },
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
