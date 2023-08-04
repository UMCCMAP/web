import styled from 'styled-components';

export const InfoContainer = styled.div`
  width: 430px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const WriterContainer = styled.div`
  font-size: 10px;
  > span:first-child {
    font-weight: 700;
    margin-right: 5px;
  }
  > span:last-child:before {
    content: '•';
    margin-right: 5px;
  }
`;

export const BtnContainer = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
