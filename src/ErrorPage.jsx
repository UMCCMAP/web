import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <ErrorContainer>
      <img src="src/assets/icon/CMAP.svg" alt="로고" />
      <ErrorCode>404</ErrorCode>
      <hr />
      <ErrorMsg>
        찾을 수 없는 페이지 입니다. <br />
        요청하신 페이지가 사라졌거나, 잘못된 경로로 접근하셨습니다.
      </ErrorMsg>
      <ErrorBtn onClick={() => navigate(-1)}>뒤로 가기</ErrorBtn>
    </ErrorContainer>
  );
}

export default ErrorPage;

const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    width: 12rem;
  }
  > hr {
    width: 833px;
  }
`;
const ErrorCode = styled.h1`
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 250px;
  color: #000000;
`;
const ErrorMsg = styled.p`
  font-family: 'Lexend', sans-serif;
  font-size: 24px;
  color: #000000;
  text-align: center;
  font-weight: thin;
  margin: 20px 0;
  line-height: 1.3;
`;
const ErrorBtn = styled.button`
  font-family: 'Lexend', sans-serif;
  width: 250px;
  border: 5px solid black;
  cursor: pointer;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  padding: 8px 10px;
  background-color: transparent;
  margin-top: 60px;
  box-sizing: border-box;
`;
