import React from 'react';
import { styled } from 'styled-components';
import CMAP from '../assets/CMAPblack.png';

const CMAPLogo = styled.img`
  width: 78px;
  height: 24px;
  position: absolute;
  top: 43px;
  left: 60px;
`;
function Logo() {
  return (
    <>
      <CMAPLogo src={CMAP}></CMAPLogo>
    </>
  );
}

export default Logo;
