import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from './components/Footer';
import * as B from './styles/BoardCU.style';
import * as C from './styles/Common.style';
import Editor from './components/Editor';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import baseAxios from '../../apis/baseAxios';
import token from './dummy/token';

function BoardWrite() {
  const [value, setValue] = useState('');
  const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const [cafeTitle, setCafeTitle] = useState('');
  const [img, setImg] = useState([]);
  const navigate = useNavigate();
  const options = [
    '게시글',
    '작성자',
    '카페',
    '질문해요',
    '추천해요',
    '디저트',
    '파스타',
    '드립커피',
    '음료',
    'CMAP',
  ];
  const location = useLocation();
  const [themes, setThemes] = useState([location.state]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('게시글');
  // 상태를 관리할 변수와 업데이트 함수
  console.log(location.state);
  const [activeButton, setActiveButton] = useState([]);
  const handleButtonClick = useCallback((theme) => {
    setActiveButton(
      (prevActive) =>
        prevActive.includes(theme)
          ? prevActive.filter((item) => item !== theme) // 이미 선택된 테마라면 제거
          : [...prevActive, theme], // 선택되지 않은 테마라면 추가
    );
  }, []);
  function dataURLtoFile(dataUrl, filename) {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename + `.${mime.split('/')[1]}`, { type: mime });
  }
  function generateRandomFilename() {
    const randomId = Math.floor(Math.random() * 100000);
    return `image_${randomId}`;
  }
  const handleImageUpload = async (fileList) => {
    try {
      const uploadPromises = fileList.map(async (file) => {
        const randomFilename = generateRandomFilename();
        const data = dataURLtoFile(file, randomFilename);
        const formData = new FormData();
        formData.append('multipartFile', data);

        const response = await baseAxios.post('/s3/file', formData, {
          headers: {
            Authorization: token, // 헤더에 Authorization 추가
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 201) {
          return response.data[0];
        } else {
          console.error('이미지 업로드 실패:', response);
          return null;
        }
      });

      const imageUrls = await Promise.all(uploadPromises);
      return imageUrls.filter((imageUrl) => imageUrl !== null);
    } catch (error) {
      console.error('이미지 업로드 오류:', error);
      return [];
    }
  };
  const parseAndReplaceImages = (htmlContent, imageUrls) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const bodyContent = doc.body.innerHTML; // <body> 내용만 추출

    const newBody = document.createElement('div');
    newBody.innerHTML = bodyContent;

    const imageTags = newBody.getElementsByTagName('img');

    for (let i = 0; i < imageTags.length; i++) {
      const imgTag = imageTags[i];
      const src = imgTag.getAttribute('src');
      if (src) {
        imgTag.setAttribute('src', imageUrls[i] || src);
      }
    }

    return newBody.innerHTML; // 수정된 <body> 내용 반환
  };
  useEffect(() => {
    console.log(activeButton);
  }, [activeButton]);

  function checkEmptyValuesAndShowAlert(data) {
    let isEmpty = false;
    let emptyKeys = [];
    if (!data.boardTitle) {
      isEmpty = true;
      emptyKeys.push('제목');
    }
    if (!data.boardContent) {
      isEmpty = true;
      emptyKeys.push('내용');
    }
    if (data.cafeIdx === undefined || data.cafeIdx === null || data.cafeIdx === '') {
      isEmpty = true;
      emptyKeys.push('카페이름');
    }

    if (!Array.isArray(data.tagList) || data.tagList.length === 0) {
      isEmpty = true;
      emptyKeys.push('해시태그');
    }

    if (!data.imgList) {
      // imgList는 비어있어도 됨
    }

    if (isEmpty) {
      alert(`${emptyKeys.join(', ')}부분을 채워주세요!`);
      return false;
    } else {
      return true;
    }
  }

  const sendDataToServer = async () => {
    let imageUrl = await handleImageUpload(img);

    console.log(imageUrl);
    const contentWithReplacedImages = parseAndReplaceImages(value, imageUrl);
    try {
      // 서버에 보낼 데이터를 객체 형태로 만듭니다.
      const dataToSend = {
        cafeIdx: 1,
        boardContent: contentWithReplacedImages,
        boardTitle: title,

        tagList: activeButton.sort(),
        imgList: imageUrl,
        // 기타 다른 필요한 데이터들을 추가로 넣을 수 있습니다.
      };
      // POST 요청을 보냅니다.
      console.log(dataToSend);
      if (checkEmptyValuesAndShowAlert(dataToSend)) {
        const response = await baseAxios.post('board', dataToSend, {
          headers: {
            Authorization: token, // 헤더에 Authorization 추가
          },
        });

        if (response.status === 200) {
          console.log(response.data);
          alert('글이 작성되었습니다!');
          navigate('/board');
        } else {
          throw new Error('Failed to send data to server');
        }
      } else {
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  const handleOptionSelect = (option) => {
    setCafeTitle(option);
    setIsDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCafeTitle(value);
    setIsDropdownOpen(true); // 입력 중에는 dropdown 메뉴를 보이도록 설정
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.B.CafeWrap')) {
      setIsDropdownOpen(false); // 입력 창 밖을 클릭하면 dropdown 메뉴를 숨김
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);
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
            <Editor value={value} setValue={setValue} img={img} setImg={setImg} />
          </B.ContentsInput>
          <B.CafeWrap>
            <B.CafeNameInput
              placeholder="카페 이름"
              value={cafeTitle}
              onChange={handleInputChange}
            />
            <B.DropdownMenu>
              {isDropdownOpen && (
                <B.DropdownList>
                  {options.map((option, index) => (
                    <B.DropdownItem key={index} onClick={() => handleOptionSelect(option)}>
                      {option}
                    </B.DropdownItem>
                  ))}
                </B.DropdownList>
              )}
            </B.DropdownMenu>
          </B.CafeWrap>
          <B.DragDropWrap>
            <B.DragDropTitle></B.DragDropTitle>
            <B.DragDropImages>
              {img.map((a, i) => (
                <B.Image key={i}>
                  <img
                    src={a}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '7px',
                    }}
                  />
                </B.Image>
              ))}
            </B.DragDropImages>
          </B.DragDropWrap>
          <B.ThemeSelectWrap>
            <B.ThemesWrap>
              {location.state.map((a) => (
                <Button
                  key={a.tagIdx}
                  width="80px"
                  height="40px"
                  background={activeButton.includes(a.tagIdx) ? '#FF6868' : '#F1F1F1'}
                  color={activeButton.includes(a.tagIdx) ? '#F1F1F1' : '#373737'}
                  name={a.tagName}
                  clickHandler={() => handleButtonClick(a.tagIdx)}
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
