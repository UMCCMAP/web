import styled from 'styled-components';

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

const CafeNameInput = styled(InputBase)`
  width: calc(100% - 20px);
  height: 3rem;
  font-size: 24px;
  text-align: center;
  margin-top: 16px;
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
  width: 21.25rem;
  height: 6.25rem;
  display: flex;
  gap: 10px;
`;

const Image = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  background-color: #f1f1f1;
  border-radius: 32px;
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
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px;
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
