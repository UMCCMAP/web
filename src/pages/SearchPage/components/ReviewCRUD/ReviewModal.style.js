import styled from 'styled-components';

/* 리뷰 작성, 수정 */
export const ReviewWriteContainer = styled.div`
  position: relative;
  width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  padding: 20px 0;
  box-sizing: border-box;
`;

export const Title = styled.div`
  width: 90%;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  > img {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
  > p {
    font-family: Inter;
    font-size: 22px;
    font-weight: 400;
    text-align: center;
  }
`;

export const ReviewTitle = styled.input`
  width: 90%;
  border: none;
  border-radius: 32px;
  background-color: rgba(241, 241, 241, 1);
  padding: 8px 5px;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  color: rgba(147, 147, 147, 1);
`;

export const ImgContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgItem = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  border: 1px solid rgba(33, 174, 33, 1);
`;

export const ReviewContent = styled.textarea`
  width: 90%;
  height: 400px;
  border-radius: 32px;
  border: 1px solid rgba(33, 174, 33, 1);
  padding: 30px 20px;
  box-sizing: border-box;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
  resize: none;
  text-align: center;
`;

export const ReviewSubContent = styled.input`
  width: 90%;
  height: 80px;
  border-radius: 32px;
  border: 1px solid rgba(33, 174, 33, 1);
  text-align: center;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
`;

export const ReviewBtnWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
`;

export const ReviewBtn = styled.button`
  border: none;
  border-radius: 16px;
  background-color: rgba(33, 174, 33, 1);
  width: 90px;
  height: 44px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  color: rgba(249, 255, 253, 1);
`;

/* 리뷰 조회, 저장 */
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
