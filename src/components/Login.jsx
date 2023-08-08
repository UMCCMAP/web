import React from 'react';
import { styled } from 'styled-components';
import Cmap from '../assets/CMAP.png';

const Logo = styled.img`
  width: 183px;
  height: 47px;
  position: absolute;
  top: 30%;
  left: 45.5%;
`;
const WelcomeText = styled.div`
  width: 396px;
  height: 33px;
  position: absolute;
  top: 38.2%;
  left: 40%;

  color: #939393;
  font-weight: 400;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '28px')};
  line-height: 33.41px;
  text-align: center;
`;

function Login() {
  return (
    <>
      <Logo src={Cmap}></Logo>
      <WelcomeText>CMAP에 오신 것을 환영합니다!</WelcomeText>
    </>
  );
}

export default Login;
