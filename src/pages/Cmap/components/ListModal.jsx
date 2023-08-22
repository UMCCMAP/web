import * as M from '@/styles/Modal.style';
import * as LM from './styles/ListModal.style';
import { React, useState, useCallback, useEffect } from 'react';
import { ReactComponent as BookIcon } from '@/assets/icon/CmapModalIcon/book.svg';
import { ReactComponent as BrunchIcon } from '@/assets/icon/CmapModalIcon/brunch.svg';
import { ReactComponent as CoffeeIcon } from '@/assets/icon/CmapModalIcon/coffee.svg';
import { ReactComponent as ViewIcon } from '@/assets/icon/CmapModalIcon/view.svg';
import { ReactComponent as ParkingIcon } from '@/assets/icon/CmapModalIcon/parking.svg';
import { ReactComponent as BreadIcon } from '@/assets/icon/CmapModalIcon/bread.svg';
import { ReactComponent as CameraIcon } from '@/assets/icon/CmapModalIcon/camera.svg';
import { ReactComponent as DesertIcon } from '@/assets/icon/CmapModalIcon/desert.svg';
import baseAxios from '@/apis/baseAxios';
import close from '@/assets/images/close.svg';
function ListModal({ setCafeData, user, modal, setModal }) {
  const [themes] = useState([
    {
      image: (fill) => <BookIcon width="100%" height="100%" fill={fill} />,
      name: '스터디',
    },
    {
      image: (fill) => <CoffeeIcon width="100%" height="100%" fill={fill} />,
      name: '음료',
    },
    {
      image: (fill) => <ViewIcon width="100%" height="100%" fill={fill} />,
      name: '뷰',
    },
    {
      image: (fill) => <BrunchIcon width="100%" height="100%" fill={fill} />,
      name: '브런치',
    },

    { image: (fill) => <ParkingIcon width="100%" height="100%" fill={fill} />, name: '주차' },
    { image: (fill) => <CameraIcon width="100%" height="100%" fill={fill} />, name: '사진' },
    { image: (fill) => <BreadIcon width="100%" height="100%" fill={fill} />, name: '베이커리' },
    { image: (fill) => <DesertIcon width="100%" height="100%" fill={fill} />, name: '디저트' },
  ]);
  const [cafes, setCafes] = useState([]);

  const [activeButton, setActiveButton] = useState([]);
  useEffect(() => {
    console.log(activeButton);
  }, [activeButton]);
  useEffect(() => {
    const fetchList = async () => {
      try {
        let response;
        console.log();
        if (user === 'ME') {
          response = await baseAxios.get(
            `/cmap/${modal}?themeIdx=${activeButton}&nickName=${localStorage.getItem('nickname')}`,
          );
        } else {
          response = await baseAxios.get(
            `/cmap/${modal}?themeIdx=${activeButton}&nickName=${user}`,
          );
        }
        console.log(response.data.result.cmapCafe);
        setCafes(response.data.result.cmapCafe);
      } catch (error) {
        console.error('Error fetching want list:', error);
      }
    };

    fetchList();
  }, [activeButton]);

  const handleButtonClick = useCallback((theme) => {
    setActiveButton(
      (prevActive) =>
        prevActive.includes(theme)
          ? prevActive.filter((item) => item !== theme) // 이미 선택된 테마라면 제거
          : [...prevActive, theme], // 선택되지 않은 테마라면 추가
    );
  }, []);
  return (
    <M.ModalBackground>
      <LM.ListModalWrapper>
        <LM.ListModalCon>
          <LM.UserCon>
            <LM.Line></LM.Line>

            <LM.UserText>
              {user}&#39;s
              <br />
              {modal.toUpperCase()} List
            </LM.UserText>
          </LM.UserCon>
          <LM.ThemeCon>
            <LM.ThemeText>테마로 보기</LM.ThemeText>
            <LM.ThemeBox>
              {themes.map((a, i) => (
                <LM.Theme
                  key={i}
                  onClick={() => {
                    handleButtonClick(i + 1);
                  }}
                >
                  <LM.ThemeIcon>
                    {a.image(activeButton.includes(i + 1) ? '#60A7E1' : '#F1F1F1')}
                  </LM.ThemeIcon>
                  <LM.ThemeName>{a.name}</LM.ThemeName>
                </LM.Theme>
              ))}
            </LM.ThemeBox>
          </LM.ThemeCon>
        </LM.ListModalCon>
        <LM.CafesWrapper>
          {cafes.map((a, i) => (
            <LM.Cafe
              key={i}
              onClick={() => {
                setCafeData(a.cafeName);
                setModal('none');
                console.log(a.cafeName);
              }}
            >
              <LM.CafeImg>
                {a.cafeImg ? (
                  <img src={a.cafeImg} alt={a.cafeName} style={{ width: '100%', height: '100%' }} />
                ) : (
                  'No IMAGE'
                )}
              </LM.CafeImg>
              <LM.CafeName>{a.cafeName}</LM.CafeName>
            </LM.Cafe>
          ))}
          {cafes.length === 0 && <LM.NoCafeWrap>No cafe</LM.NoCafeWrap>}
        </LM.CafesWrapper>
        <LM.CloseButton
          onClick={() => {
            setModal('none');
          }}
        >
          <img src={close} style={{ width: '100%', height: '100%' }} />
        </LM.CloseButton>
      </LM.ListModalWrapper>
    </M.ModalBackground>
  );
}
export default ListModal;
