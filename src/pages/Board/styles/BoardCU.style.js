import styled, { keyframes } from 'styled-components';

export const BoardWrap = styled.div`
  width: 100%;
  height: 80rem;
  display: flex;
  flex-direction: column;
`;
export const InputWrap = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 2rem;
`;
export const TitleInput = styled.input`
  width: 60%;
  height: 95%;
  outline: none;
  background: #f1f1f1;
  border-radius: 32px;
  border: none;
  color: #939393;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  padding-left: 20px;
`;
export const ContentsInput = styled.div`
  width: calc(100%-20px);
  margin-top: 14px;
  height: 52rem;
  border: 1px solid #939393;
  border-radius: 16px;
  padding: 10px;
  font-size: 20px;
  overflow: auto;
`;
export const CafeNameInput = styled.input`
  width: calc(100%-20px);
  height: 3rem;
  outline: none;
  background: #f1f1f1;
  border-radius: 32px;
  border: none;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-top: 16px;
  padding-left: 20px;
`;
export const DragDropWrap = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 8rem;
  display: flex;
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #939393;
`;

export const DragDropTitle = styled.div`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: -0.02em;
  text-align: center;
  padding-left: 2.625rem;
  color: #939393;
`;
export const DragDropImages = styled.div`
  width: 21.25rem;
  height: 6.25rem;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-right: 15px;
`;
const zoomInAnimation = keyframes`
  0%, 100% {
    transform: scale(0.8); /* 작은 크기로 시작과 끝 */
  }
  50% {
    transform: scale(1.2); /* 큰 크기로 중간에 확대 */
  }
`;
export const Image = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  background-color: #f1f1f1;
  border-radius: 32px;
  &:hover {
    transform: scale(2);
    z-index: 999;
    transition: 0.2s;
  }
  animation: ${zoomInAnimation} 0.5s ease-in-out;
`;
export const ThemeSelectWrap = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #939393;
  border-radius: 16px;
`;
export const ThemesWrap = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  margin-left: 10px;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px;
`;
