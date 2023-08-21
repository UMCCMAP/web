import styled, { keyframes } from 'styled-components';

const BoardWrap = styled.div`
  width: 100%;
  height: 80rem;
  display: flex;
  flex-direction: column;
`;

const InputWrap = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 2rem;
`;

const InputBase = styled.input`
  width: ${(props) => props.width || '100%'};
  height: 95%;
  outline: none;
  background: #f1f1f1;
  border-radius: 32px;
  border: none;
  font-family: Pretendard;
  font-weight: ${(props) => props.weight || 'inherit'};
  line-height: ${(props) => props.lineHeight || 'inherit'};
  letter-spacing: -0.02em;
  padding-left: 20px;
`;

const TitleInput = styled(InputBase)`
  width: 60%;
  font-size: 15px;
`;

const ContentsInput = styled.div`
  width: calc(100% - 20px);
  margin-top: 14px;
  height: 52rem;
  border: 1px solid #939393;
  border-radius: 16px;
  padding: 10px;
  font-size: 20px;
  overflow: auto;
`;
export const CafeWrap = styled.div`
  width: 100%;
  height: 3rem;
  margin-top: 16px;
  position: relative;
`;
const CafeNameInput = styled.input`
  outline: none;
  background: #f1f1f1;
  border-radius: 32px;
  border: none;
  font-family: Pretendard;

  font-size: 24px;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const DragDropWrap = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 8rem;
  display: flex;
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #939393;
`;

const DragDropTitle = styled.div`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: -0.02em;
  text-align: center;
  padding-left: 2.625rem;
  color: #939393;
`;

const DragDropImages = styled.div`
  width: fit-content;

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

const Image = styled.div`
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

const ThemeSelectWrap = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #939393;
  border-radius: 16px;
`;

const ThemesWrap = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  margin-left: 10px;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px;
  z-index: 0;
`;
export const DropdownMenu = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  bottom: -5%;
  max-height: 220px;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 100;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0px 4px 12px 0px #00000040;

  max-height: 220px;
  overflow: auto;
`;

export const DropdownItem = styled.li`
  background-color: white;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export {
  BoardWrap,
  InputWrap,
  TitleInput,
  ContentsInput,
  CafeNameInput,
  DragDropWrap,
  DragDropTitle,
  DragDropImages,
  Image,
  ThemeSelectWrap,
  ThemesWrap,
};
