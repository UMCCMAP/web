import { styled } from 'styled-components';
export const BoardWrap = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 10px;
`;
export const BoardKeywordWrap = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BoardKeyWords = styled.div`
  width: 35rem;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 2px;
  gap: 20px;
  z-index: 1;
`;

export const BoardWriteButton = styled.div`
  background: #60a7e1;
  width: 108px;
  height: 41px;
  padding: 10px 16px 10px 16px;
  border-radius: 32px;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const WriteText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: center;
  color: white;
`;
export const BoardContentsWrap = styled.div`
  height: fit-content;
  flex-direction: column;
  display: flex;
  margin-top: 5px;
`;
export const Board = styled.div`
  display: flex;
  height: 15rem;
  margin-top: 30px;
  cursor: pointer;
`;
export const BoardWords = styled.div`
  width: 48%;
  height: 100%;
`;
export const Title = styled.div`
  height: 3rem;
  font-family: Pretendard;
  font-size: 34px;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: -0.02em;
  text-align: left;
`;
export const Content = styled.div`
  height: 9rem;
  display: flex;
  align-items: center;
  line-height: 15px;
`;
export const Themes = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;
export const BoardImagesWrap = styled.div`
  width: 52%;
  height: 100%;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  align-items: flex-start;
`;
export const BoardImage = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: #f1f1f1;
  border-radius: 32px;
  background-image: url('${(props) => props.background}');
  background-size: cover;
  transition: transform 0.3s ease; /* 부드러운 애니메이션 효과를 추가합니다. */

  &:hover {
    transform: scale(1.2); /* 마우스를 올렸을 때 이미지 크기를 1.2배로 확대합니다. */
  }
`;
export const PageButtons = styled.div`
  width: 150px;
  height: 20px;
  margin-top: 43px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
`;
export const PageNums = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
`;
export const PageNum = styled.div`
  width: calc(100% / 5);
  text-align: center;
  flex: 1;
  cursor: pointer;
  color: ${(props) => props.color};
`;
export const PageMoveButton = styled.div`
  width: 15%;
  cursor: pointer;
  text-align: center;
`;
export const NoDataWrap = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: Pretendard;
  font-weight: 700;
`;
