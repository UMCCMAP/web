import * as M from '../../../styles/Modal.style';
import * as LM from './styles/ListModal.style';
import { React, useState, useCallback, useEffect } from 'react';
import { ReactComponent as BookIcon } from '../../../assets/icon/CmapModalICon/book.svg';
import { ReactComponent as BrunchIcon } from '../../../assets/icon/CmapModalICon/brunch.svg';
import { ReactComponent as CoffeeIcon } from '../../../assets/icon/CmapModalICon/coffee.svg';
import { ReactComponent as ViewIcon } from '../../../assets/icon/CmapModalICon/view.svg';
import { ReactComponent as ParkingIcon } from '../../../assets/icon/CmapModalICon/parking.svg';
import { ReactComponent as BreadIcon } from '../../../assets/icon/CmapModalICon/bread.svg';
import { ReactComponent as CameraIcon } from '../../../assets/icon/CmapModalICon/camera.svg';
import { ReactComponent as DesertIcon } from '../../../assets/icon/CmapModalICon/desert.svg';
import Token from '../../dummy/Token';
import baseAxios from '../../../apis/baseAxios';
import tempImg1 from '../../../assets/temp/tempcafeimg.jpg';
import tempImg2 from '../../../assets/temp/tempcafeimg2.png';
import tempImg3 from '../../../assets/temp/tempcafeimg3.jpg';
import close from '../../../assets/images/close.svg';
function ListModal({ user, modal, setModal }) {
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
  const [search, setSearch] = useState('');
  useEffect(() => {
    console.log(activeButton);
  }, [activeButton]);
  useEffect(() => {
    const fetchList = async () => {
      try {
        const req = modal === 'WENT' ? 'went' : 'default';
        let response;

        if (user === 'ME') {
          response = await baseAxios.get(`cmap/user-${req}`, {
            headers: {
              // 여기에 실제 토큰 값을 넣어야 합니다
              Authorization: Token,
            },
          });
        } else {
          response = await baseAxios.get(`cmap/mates-${req}?Nickname=${user}`);
        }
        setCafes(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching want list:', error);
      }
    };

    fetchList();
  }, []);

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
            <LM.Cafe key={i}>
              <LM.CafeImg>
                {a.image ? (
                  <img src={a.image} alt={a.name} style={{ width: '100%', height: '100%' }} />
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
