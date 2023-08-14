import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <ErrorContainer>
      <img src="src/assets/icon/CMAP.svg" alt="로고" />
      <ErrorCode>
        <img src="src/assets/images/404error.svg" alt="404" />
      </ErrorCode>
      <ErrorMsg>
        이런! <br />
        요청하신 페이지가 사라졌거나, 잘못된 경로입니다.
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
`;
const ErrorCode = styled.div`
  margin-top: 30px;
`;
const ErrorMsg = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  color: rgba(55, 55, 55, 1);
  text-align: center;
  margin-top: 150px;
  line-height: 1.3;
`;
const ErrorBtn = styled.button`
  font-family: 'Pretendard', sans-serif;
  width: 153px;
  border: 1px solid rgba(147, 147, 147, 1);
  border-radius: 8px;
  cursor: pointer;
  font-size: 22px;
  text-align: center;
  color: rgba(147, 147, 147, 1);
  padding: 10px 30px;
  background-color: transparent;
  margin-top: 80px;
  box-sizing: border-box;
`;
