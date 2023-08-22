import React from 'react';
import { styled } from 'styled-components';

const Footerdiv = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0px;
  background-color: #d9d9d9;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const Footertext = styled.div`
  width: 40%;
  height: 29px;
  text-align: center;
  margin: 0 auto;
  display: block;
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
`;

function Footer() {
  return (
    <>
      <Footerdiv>
        <Footertext>약관 / 개인정보처리방침 / 문의 보내기</Footertext>
      </Footerdiv>
    </>
  );
}

export default Footer;
