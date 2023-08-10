import React from 'react';
import { styled } from 'styled-components';
import Cmap from '../../../assets/CMAP.png';

const Logo = styled.img`
  width: 183px;
  height: 47px;
  position: absolute;
  top: 30%;
`;
const Hr = styled.div`
  border: 0;
  width: 58%;
  position: absolute;
  top: 46%;
  align: center;
  height: 1px;
  background: #939393;
`;

function Login() {
  return (
    <>
      <Logo src={Cmap}></Logo>
      <Hr></Hr>
    </>
  );
}

export default Login;
