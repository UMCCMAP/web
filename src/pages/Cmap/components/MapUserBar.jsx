import React from 'react';
import * as U from './styles/MapUserBar.style';
import Arrow from '../../../assets/icon/Arrow.png';
function MapUserBar({ setModal }) {
  return (
    <U.UserBarWrapper>
      <U.UserMenu>
        <U.UserName>sine0422</U.UserName>
        <U.UserMenuArrow>
          <img src={Arrow} width="100%" />
        </U.UserMenuArrow>
      </U.UserMenu>
      <U.IconBox>
        <U.LogoIcon>
          <img src="src/assets/images/cmapLogoR.svg" />
        </U.LogoIcon>
      </U.IconBox>
      <U.WantButton
        margin="18"
        onClick={() => {
          setModal('WANT');
        }}
      >
        WANT
      </U.WantButton>
      <U.WantButton
        margin="16"
        onClick={() => {
          setModal('WENT');
        }}
      >
        WENT
      </U.WantButton>
    </U.UserBarWrapper>
  );
}
export default MapUserBar;
