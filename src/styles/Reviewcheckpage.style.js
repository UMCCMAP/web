import { styled } from 'styled-components';

export const Title = styled.h1`
  font-size: 45px;
  font-weight: 700;
  position: absolute;
  top: 70px;
`;
export const SortDiv = styled.div`
  width: 720px;
  height: 60px;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 60px;
`;
export const SortText = styled.div`
  width: 40px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  margin-right: 40px;
`;
export const SortBtnDiv = styled.div`
  width: 100px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 40%;
  border: 1px solid #000000;

  div {
    width: fit-content;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
`;
export const WritingDiv = styled.div`
  width: 720px;
  height: 740px;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  // border: 1px solid #444444;
`;
export const WritingAll = styled.div`
  width: 710px;
  height: 220px;
  border: none;
  margin: auto;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: left;
  margin-top: 20px;
`;
export const CafeName = styled.div`
  max-width: 400px;
  max-height: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 5px;
`;
export const Wrting = styled.button`
  width: 720px;
  height: 200px;
  border-radius: 50px;
  border: 1px solid #000000;
  background-color: #ffffff;
  border: 1px solid #000000;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ReviewContent = styled.div`
  width: 400px;
  height: 70px;
  text-align: left;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 30px;
  font-weight: 600;
  color: #000000;
  margin-left: 50px;
  margin-top: 20px;
`;
export const ReviewImgDiv = styled.div`
  width: 200px;
  height: 200px;
  background-color: #f1f1f1;
  background-image: url('${(props) => props.backgroundImg}');
  background-size: cover;
  transition: transform 0.3s ease;
  margin-right: -8px;
`;

export const PageNumberListDiv = styled.div`
  width: 370px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 80px;
`;
export const NextOrSearchBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const PageNumberstDiv = styled.div`
  width: 320px;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const PageNum = styled.button`
  width: fit-content;
  font-size: 32px;
  font-weight: ${(props) => props.weight};
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #000000;
  margin-left: 7px;
`;
export const ReviewSearchDiv = styled.div`
  width: 700px;
  height: 60px;
  display: flex;
  border-radius: 50px;
  border: 1px solid #000000;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  input {
    width: 500px;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: 20px;
    margin-right: 20px;

    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const SelectDiv = styled.div`
  // 기능구현 찾아보기
  height: 60px;
  width: 96px;
  margin-left: -27px;
  border-radius: 50px;
  border: 1px solid #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: fit-content;
    height: 19px;
    font-size: 15px; // 사이즈 바꾸기
    font-weight: 400;
    align-items: center;
    color: #000000;
    margin-left: 5px;
  }
  button {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
