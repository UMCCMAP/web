import styled from 'styled-components';

/* 리뷰 작성, 수정 */
export const ReviewWriteContainer = styled.div`
  position: relative;
  width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-left: 1px solid rgba(0, 0, 0, 0.3);
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
  &:focus {
    outline: 2px solid ${(props) => props.color};
  }
`;

export const ImgWrap = styled.div`
  width: 90%;
  height: 11%;
  border: 1px solid ${(props) => props.color};
  border-radius: 16px;
  box-sizing: border-box;
  padding: 10px;
`;

export const ReviewContentWrap = styled.div`
  width: 90%;
  height: 55%;
  border-radius: 32px;
  border: 1px solid ${(props) => props.color};
  padding: 18px 0px;
  box-sizing: border-box;
  overflow: hidden;
`;
export const ReviewContent = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
  resize: none;
  text-align: center;
  overflow-y: auto;
  border: none;
  &:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    height: 10%;
    background-color: ${(props) => props.color};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(241, 241, 241, 0.7);
  }
`;

export const ReviewSubContent = styled.input`
  width: 90%;
  height: 10%;
  border-radius: 32px;
  border: 1px solid ${(props) => props.color};
  box-sizing: border-box;
  text-align: center;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
  &:focus {
    outline: 1px solid ${(props) => props.color};
  }
`;

export const ReviewScopeWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  .reviewscope {
    cursor: pointer;
  }
`;

export const ReviewBtnWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
`;

export const ReviewBtn = styled.button`
  border: none;
  border-radius: 16px;
  background-color: ${(props) => props.color};
  width: 76px;
  height: 40px;
  font-family: Pretendard;
  font-size: 16px;
  color: rgba(249, 255, 253, 1);
  cursor: pointer;
`;
