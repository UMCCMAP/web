import React from 'react';
import { styled } from 'styled-components';
import imgLogo from '../assets/CMAPblack.png';
import { Link } from 'react-router-dom';

const HeaderWrap = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: left;
  align-items: center;
  position: absolute;
  top: 0;
`;
const CMAPLogo = styled(Link)`
  width: 78px;
  height: 24px;
  margin-left: 43px;
`;
function LogoHeader() {
  return (
    <HeaderWrap>
      <CMAPLogo to="/home">
        <img src={imgLogo} />
      </CMAPLogo>
    </HeaderWrap>
  );
}

export default LogoHeader;
