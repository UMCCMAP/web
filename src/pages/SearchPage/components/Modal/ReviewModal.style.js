import styled from 'styled-components';

export const ReviewContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ReviewBox = styled.div`
  width: 430px;
  height: 325px;
  border-radius: 20px;
  border: 1px solid black;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ReviewImgBox = styled.div`
  width: 430px;
  height: 70px;
  border-radius: 20px;
  border: 1px solid black;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ReviewBtn = styled.button`
  border: 1px solid black;
  background-color: transparent;
  width: 70px;
  height: 30px;
  font-size: 14px;
  font-weight: 700;
  margin-left: 350px;
`;
