import styled from 'styled-components';

export const ReviewWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ReviewInfoWrap = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: flex-start;
`;
export const ReviewInfo = styled.div`
  width: fit-content;
  gap: 5px;
  height: 2.5rem;
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;

export const ReviewIconWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  gap: 8px;
`;
export const ReviewNumber = styled.div`
  width: 50%;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(props) => props.color};
`;
export const Icon = styled.div`
  width: 33%;
  padding-bottom: 32%;
  border-radius: 100%;
  background-color: #d9d9d9;
`;
export const ReviewContentsWrap = styled.div`
  width: 100%;
  display: flex;
  height: fit-content;
  flex-direction: column;
  gap: 16px;
`;
export const Review = styled.div`
  margin-top: 40px;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  display: flex;
  gap: 16px;
`;
export const InfoWrap = styled.div`
  width: 20%;
  height: 54%;
  display: flex;
  justify-content: space-between;
`;
export const ReviewDate = styled.div`
  width: 100%;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.02em;
  text-align: left;
`;
export const ReviewUser = styled.div`
  width: 100%;
  color: black;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -0.02em;
  text-align: left;
`;
export const ReviewUserInfo = styled.div`
  width: 60%;
  height: 100%;
  text-align: left;
  color: #939393;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ReviewContent = styled.div`
  width: 100%;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
`;
export const WriteUser = styled.div`
  width: auto;
  margin-top: 15px;
  margin-left: 22px;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #939393;
`;
export const WriteText = styled.textarea`
  margin: 9px 22px;
  height: 70px;
  width: 95%;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  border: none;
  outline: none;
  resize: none;
`;
export const WriteButton = styled.div`
  position: absolute;
  bottom: 11px;
  right: 11px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #939393;
  cursor: pointer;
`;
export const ReviewWriteWrap = styled.div`
  width: 110%;
  height: 170px;
  border: 1px solid #939393;
  border-radius: 16px;
  margin-top: 40px;
  position: relative;
`;

export const BoardWrap = styled.div`
  width: 58rem;
  height: fit-content;
  margin-top: 45px;
`;
export const ButtonsWrap = styled.div`
  width: 30rem;
  display: flex;
  gap: 15px;
`;
export const TitleWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 16px;
  align-items: flex-end;
  justify-content: space-between;
`;
export const BoardTitle = styled.div`
  width: 50%;
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.02em;
  text-align: left;
  height: 54%;
`;

export const Info = styled.div`
  width: 60%;
  height: 100%;
  text-align: right;
  color: #939393;
`;
export const Date = styled.div`
  width: 100%;
  height: 50%;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
`;
export const User = styled.div`
  width: 100%;
  height: 50%;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
`;

export const CafeTitle = styled.div`
  width: 100%;
  height: 4rem;
  margin-top: 26px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 32px;
  gap: 7px;
  background-color: #f1f1f1;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #939393;
`;
export const CafeIcon = styled.div``;
export const BoardContentsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  margin-bottom: 360px;
`;
export const BoardContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: center;
`;
export const Word = styled.div`
  width: 100%;
  word-wrap: break-word;
  margin-top: 45px;
  margin-bottom: 45px;
`;
export const BoardImg = styled.div`
  width: 100%;
`;
