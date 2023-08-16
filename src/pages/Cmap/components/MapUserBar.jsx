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
