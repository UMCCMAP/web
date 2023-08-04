import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import * as B from './styles/BoardCU.style';
import * as C from './styles/Common.style';
import Editor from './components/Editor';
import { useState, useEffect, useCallback } from 'react';
function BoardModify() {
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
  const handleButtonClick = useCallback((theme) => {
    setActiveButton(
      (prevActive) =>
        prevActive.includes(theme)
          ? prevActive.filter((item) => item !== theme) // 이미 선택된 테마라면 제거
          : [...prevActive, theme], // 선택되지 않은 테마라면 추가
    );
  }, []);
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
        <Header name="글수정" />
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
            <Editor value={value} setValue={setValue} />
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
export default BoardModify;
