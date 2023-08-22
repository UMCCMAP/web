import React, { useEffect, useState } from 'react';
import * as U from './styles/MapUserBar.style';
import Arrow from '@/assets/icon/Arrow.png';
import baseAxios from '@/apis/baseAxios';
import cmapLogoR from '@/assets/images/cmapLogoR.svg';
function MapUserBar({ user, setUser, setModal, setCmapList }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [cmapType, setcmapType] = useState('want');
  useEffect(() => {
    const req = cmapType === 'went' ? 'went' : 'default';
    function modifyCafeData(data) {
      return data.map((item) => ({
        ...item,
        name: item.cafeName,
        idx: item.cafeIdx,
        cafeName: undefined,
        cafeIdx: undefined,
      }));
    }
    if (user === 'ME') {
      baseAxios
        .get(`cmap/user-${req}`)
        .then((response) => {
          // API 요청 성공 시 처리할 로직
          const modifiedData = modifyCafeData(response.data);
          setCmapList(modifiedData);
          console.log(response.data);
        })
        .catch((error) => {
          // API 요청 실패 시 처리할 로직
          console.error(error);
          setCmapList([]);
        });
    } else {
      baseAxios
        .get(`cmap/mates-${req}?Nickname=${user}`)
        .then((response) => {
          // API 요청 성공 시 처리할 로직
          const modifiedData = modifyCafeData(response.data);
          setCmapList(modifiedData);
          console.log(response.data);
        })
        .catch((error) => {
          // API 요청 실패 시 처리할 로직
          console.error(error);
          setCmapList([]);
        });
    }

    console.log(user);
  }, [cmapType, user]);
  const toggleDropdown = async () => {
    setIsDropdownOpen(!isDropdownOpen);

    const url = 'cmap/mates-all'; // cmap URL

    try {
      const response = await baseAxios.get(url);
      console.log('Response:', response.data); // 요청 결과 확인 (필요에 따라 수정)
      setOptions(response.data);
    } catch (error) {
      console.error('Error:', error); // 에러 처리 (필요에 따라 수정)
    }
  };

  const handleOptionSelect = (option) => {
    setIsDropdownOpen(false);
    setUser(option);
  };

  return (
    <U.UserBarWrapper>
      <U.UserMenu
        onClick={() => {
          toggleDropdown();
        }}
      >
        <U.UserNameWrap>
          <U.UserName>{user}</U.UserName>
          <U.UserMenuArrow>
            <img src={Arrow} width="100%" />
          </U.UserMenuArrow>
        </U.UserNameWrap>
        <U.Line />
        {isDropdownOpen && (
          <U.DropdownMenu>
            <U.DropdownList>
              {user !== 'ME' && (
                <U.DropdownItem onClick={() => handleOptionSelect('ME')}>{'ME'}</U.DropdownItem>
              )}
              {options.length === 0 ? (
                <U.DropdownItem>친구가 없습니다 ㅠㅠ</U.DropdownItem>
              ) : (
                options?.map((option, index) => (
                  <U.DropdownItem key={index} onClick={() => handleOptionSelect(option)}>
                    {option}
                  </U.DropdownItem>
                ))
              )}
            </U.DropdownList>
          </U.DropdownMenu>
        )}
      </U.UserMenu>
      <ToggleIcon
        initialFlex="end"
        initialPosition="top"
        cmapType={cmapType}
        setcmapType={setcmapType}
      />
      <U.WantButton
        margin="16"
        onClick={() => {
          setModal('want');
        }}
      >
        WANT
        <br />
        List
      </U.WantButton>
      <U.WantButton
        margin="8"
        onClick={() => {
          setModal('went');
        }}
      >
        WENT
        <br />
        List
      </U.WantButton>
    </U.UserBarWrapper>
  );
}
export default MapUserBar;

const ToggleIcon = ({ initialFlex, initialPosition, cmapType, setcmapType }) => {
  const [flex, setFlex] = useState(initialFlex);
  const [position, setPosition] = useState(initialPosition);
  const [shadow, setShadow] = useState('-');
  const toggleIcon = () => {
    setFlex(flex === 'end' ? 'start' : 'end');
    setPosition(position === 'top' ? 'bottom' : 'top');
    setcmapType(cmapType === 'want' ? 'went' : 'want');
    setShadow(shadow === '-' ? '' : '-');
  };

  return (
    <U.IconWrapper>
      <U.IconCon flex={flex} onClick={toggleIcon}>
        <U.IconBox shadow={shadow}>
          <U.LogoIcon>
            <img src={cmapLogoR} width="100%" alt="Logo" />
          </U.LogoIcon>
        </U.IconBox>
        <U.IconText position={position}>{cmapType.toUpperCase()}</U.IconText>
      </U.IconCon>
    </U.IconWrapper>
  );
};
