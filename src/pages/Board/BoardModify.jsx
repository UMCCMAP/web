import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from './components/Footer';
import * as B from './styles/BoardCU.style';
import * as C from './styles/Common.style';
import Editor from './components/Editor';
import React, { useState, useEffect, useCallback } from 'react';
import baseAxios from '../../apis/baseAxios';
import token from './dummy/token';
import { useLocation, useNavigate } from 'react-router-dom';
function BoardModify() {
  const location = useLocation();

  const [data, setData] = useState(location.state.data);
  const [value, setValue] = useState(location.state.data.boardContent);
  console.log(data);
  const [title, setTitle] = useState(location.state.data.boardTitle);
  const [cafeTitle, setCafeTitle] = useState();
  const [img, setImg] = useState([]);
  const [prevImg, setPrevImg] = useState([]);
  const navigate = useNavigate();
  const [themes] = useState([
    '질문해요',
    '추천해요',
    '디저트',
    '파스타',
    '드립커피',
    '음료',
    'CMAP',
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('게시글');
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
  const [activeButton, setActiveButton] = useState();
  useEffect(() => {
    // tagList 배열의 각 객체의 key 값을 추출하여 새로운 배열을 만듭니다.
    const keys = data.tagList.map((tagObj) => parseInt(Object.keys(tagObj)[0]));
    setActiveButton(keys);
    getImgs(data.boardContent);
  }, []);

  function getImgs(content) {
    // 정규식을 사용하여 <img> 태그의 src 속성 추출
    const imgSrcRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
    const matches = content.match(imgSrcRegex);

    if (matches) {
      const srcList = matches.map((match) => {
        const srcAttr = /src=["']([^"']+)["']/.exec(match);
        return srcAttr ? srcAttr[1] : null;
      });

      setPrevImg(srcList);
    } else {
      console.log('No <img> tags found in the input string.');
    }
  }
  console.log(activeButton);
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
  const handleOptionSelect = (option) => {
    setCafeTitle(option);
    setIsDropdownOpen(false);
  };

  React.useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  const sendDataToServer = async () => {
    const uniqueImages = img.filter((imgItem) => !prevImg.includes(imgItem));

    let imageUrl = await handleImageUpload(uniqueImages);

    // handleImageUpload 함수로부터 받은 imageUrl 배열과 이미지 필터(uniqueImages)를 합쳐서 모든 이미지를 포함하는 imgList 배열 생성
    const imgList = [...prevImg, ...imageUrl];

    console.log(imgList); // 전체 이미지 배열 출력

    // 나머지 작업을 수행합니다.
    const contentWithReplacedImages = parseAndReplaceImages(value, imgList);
    try {
      // 서버에 보낼 데이터를 객체 형태로 만듭니다.
      const dataToSend = {
        cafeIdx: 11,
        boardContent: contentWithReplacedImages,
        boardTitle: title,

        tagList: activeButton.sort(),
        imgList: imgList,
        // 기타 다른 필요한 데이터들을 추가로 넣을 수 있습니다.
      };
      // POST 요청을 보냅니다.
      console.log(dataToSend);

      const response = await baseAxios.patch(`/board/${data.idx}`, dataToSend, {
        headers: {
          Authorization: token,
        },
      });

      if (response.status === 200) {
        console.log(response.data);
      } else {
        throw new Error('Failed to send data to server');
      }
      navigate(`/board/${data.idx}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <C.Wrap>
      <C.ContentsWrap>
        <Header name="글 수정" />
        <B.BoardWrap>
          <C.Line top="0"></C.Line>
          <B.InputWrap>
            <B.TitleInput
              placeholder="제목"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
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
              {Object.values(location.state.keyWords).map((a, i) => (
                <Button
                  key={i}
                  width="80px"
                  height="40px"
                  background={activeButton?.includes(a.tagIdx) ? '#FF6868' : '#F1F1F1'}
                  color={activeButton?.includes(a.tagIdx) ? '#F1F1F1' : '#373737'}
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
export default BoardModify;
