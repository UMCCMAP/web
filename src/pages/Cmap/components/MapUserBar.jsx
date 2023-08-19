import React, { useEffect, useState } from 'react';
import * as U from './styles/MapUserBar.style';
import Arrow from '../../../assets/icon/Arrow.png';
import Token from '../../dummy/Token';
function MapUserBar({ setModal }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [options, setOptions] = ['게시글', '작성자', '카페'];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setIsDropdownOpen(false);
  };
  return (
    <U.UserBarWrapper>
      <U.UserMenu
        onClick={() => {
          toggleDropdown();
        }}
      >
        <U.UserNameWrap>
          <U.UserName>sine0422</U.UserName>
          <U.UserMenuArrow>
            <img src={Arrow} width="100%" />
          </U.UserMenuArrow>
        </U.UserNameWrap>
        <U.Line />
        {isDropdownOpen && (
          <U.DropdownMenu>
            <U.DropdownList>
              {options.map((option, index) => (
                <U.DropdownItem key={index} onClick={() => handleOptionSelect(option)}>
                  {option}
                </U.DropdownItem>
              ))}
            </U.DropdownList>
          </U.DropdownMenu>
        )}
      </U.UserMenu>
      <U.IconWrapper>
        <U.IconCon>
          <U.IconBox>
            <U.LogoIcon>
              <img src="src/assets/images/cmapLogoR.svg" width="100%" />
            </U.LogoIcon>
            <U.IconText>WANT</U.IconText>
          </U.IconBox>
        </U.IconCon>
      </U.IconWrapper>
      <U.WantButton
        margin="16"
        onClick={() => {
          setModal('WANT');
        }}
      >
        WANT
        <br />
        List
      </U.WantButton>
      <U.WantButton
        margin="8"
        onClick={() => {
          setModal('WENT');
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
