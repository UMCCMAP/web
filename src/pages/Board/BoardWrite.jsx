import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import * as B from './styles/BoardCU.style';
import * as C from './styles/Common.style';
import ReactQuill, { Quill } from 'react-quill';
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import DragAndDropModule from 'quill-drag-and-drop-module';
function BoardWrite() {
  const [value, setValue] = useState('');
  const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const [cafeTitle, setCafeTitle] = useState('');
  const [themes] = useState([
    '질문해요',
    '추천해요',
    '디저트',
    '파스타',
    '드립커피',
    '음료',
    'CMAP',
  ]);
  // 상태를 관리할 변수와 업데이트 함수
  const [activeButton, setActiveButton] = useState([]);

  // 버튼 클릭 시 실행될 함수
  const handleButtonClick = useCallback((theme) => {
    setActiveButton(
      (prevActive) =>
        prevActive.includes(theme)
          ? prevActive.filter((item) => item !== theme) // 이미 선택된 테마라면 제거
          : [...prevActive, theme], // 선택되지 않은 테마라면 추가
    );
  }, []);
  const quillRef = useRef(null);
  Quill.register('modules/ImageResize', ImageResize);
  Quill.register('modules/dragAndDrop', DragAndDropModule);

  const toolbarOptions = [
    ['link', 'image', 'video'],
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ];

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
      const formData = new FormData(); // Create a new FormData to send the image file

      formData.append('image', file); // Append the image file to the FormData with key 'image'

      /* FileReader를 사용하여 이미지 파일을 읽습니다. */
      const reader = new FileReader();
      console.log(formData);
      reader.onload = () => {
        /* 읽어온 이미지 파일의 URL을 imgUrl 변수에 저장합니다. */
        const imgUrl = reader.result;
        /* Quill 에디터 객체를 가 져옵니다. */
        const quillObj = quillRef.current?.getEditor();

        /* 에디터 커서 위치를 가져옵니다. */
        const range = quillObj?.getSelection() || { index: 0, length: 0 };

        /* 에디터의 커서 위치에 이미지 요소를 삽입합니다. */
        quillObj?.insertEmbed(range.index, 'image', imgUrl);
        console.log(imgUrl);
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
  ];
  // 글 작성이 완료되었을 때 서버로 데이터를 보내는 함수
  const sendDataToServer = () => {
    console.log('클릭됨');
    try {
      // 서버에 보낼 데이터를 객체 형태로 만듭니다.
      const dataToSend = {
        content: value,
        title: title,
        cafeTitle: cafeTitle,
        themes: activeButton,
        // 기타 다른 필요한 데이터들을 추가로 넣을 수 있습니다.
      };
      setData(dataToSend);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <C.Wrap>
      <C.ContentsWrap>
        <Header name="글쓰기" />
        <B.BoardWrap>
          <C.Line top="0"></C.Line>
          <B.InputWrap>
            <B.TitleInput
              placeholder="제목"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Button
              width="6rem"
              height="3rem"
              name="등록하기"
              clickHandler={sendDataToServer}
            ></Button>
          </B.InputWrap>
          <B.ContentsInput>
            <ReactQuill
              style={{ height: '95%', margin: '4px' }}
              ref={quillRef}
              theme="snow"
              value={value}
              modules={modules}
              formats={formats}
              onChange={setValue}
              placeholder="내용을 입력하세요."
            />
          </B.ContentsInput>
          <B.CafeNameInput
            placeholder="카페 이름"
            onChange={(e) => {
              setCafeTitle(e.target.value);
            }}
          />
          <B.DragDropWrap>
            <B.DragDropTitle></B.DragDropTitle>
            <B.DragDropImages>
              <B.Image></B.Image>
              <B.Image></B.Image>
              <B.Image></B.Image>
            </B.DragDropImages>
          </B.DragDropWrap>
          <B.ThemeSelectWrap>
            <B.ThemesWrap>
              {themes.map((a, i) => (
                <Button
                  key={i}
                  width="80px"
                  height="40px"
                  background={activeButton.includes(a) ? '#FF6868' : '#F1F1F1'}
                  color={activeButton.includes(a) ? '#F1F1F1' : '#373737'}
                  name={a}
                  clickHandler={() => handleButtonClick(a)}
                ></Button>
              ))}
            </B.ThemesWrap>
          </B.ThemeSelectWrap>
        </B.BoardWrap>
      </C.ContentsWrap>
      <Footer top="50px" />
    </C.Wrap>
  );
}
export default BoardWrite;
