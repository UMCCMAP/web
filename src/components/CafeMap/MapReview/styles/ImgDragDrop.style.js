import { styled } from 'styled-components';

export const DragDropContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const DropzoneWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DragDropWord = styled.div`
  display: flex;
  align-items: center;
  > img {
    margin-right: 10px;
  }
  > p {
    margin-top: 3px;
    font-size: 16px;
    font-family: 'Pretendard';
    color: #939393;
    text-align: center;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  padding: 7px;
  box-sizing: border-box;
  > div {
    flex: 0 0 auto;
    width: 70px;
    height: 70px;
    border-radius: 16px;
    overflow: hidden;
    margin-right: 20px;
  }
  &::-webkit-scrollbar {
    height: 3px;
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

export const AddImgBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    widht: 80%;
    height: 80%;
    object-fit: cover;
    margin: ;
  }
`;

export const ImgItem = styled.div`
  position: relative;
  &:last-child {
    margin-right: 0px;
  }
  > img {
    widht: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DeleteImg = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
`;
