import styled from 'styled-components';

export const AddBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin-top: 28px;
  margin-bottom: 30px;
`;

export const AddBtn = styled.button`
  width: 152px;
  height: 152px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  border: 1px solid ${(props) => props.color};
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
  font-family: Pretendard;
  text-align: center;
  > h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  > p {
    width: 110px;
    font-size: 12px;
    font-weight: 400;
  }
  &:active {
    box-shadow: inset -0.3rem -0.1rem 1.4rem #fbfbfb, inset 0.3rem 0.4rem 0.8rem #bec5d0;
    cursor: pointer;
  }
  &.clicked {
    background-color: ${(props) => props.color};
    cursor: pointer;
  }
`;

export const SaveBtn = styled.button`
  width: 116px;
  heigth: 29px;
  border-radius: 32px;
  padding: 7px;
  background-color: ${(props) => props.color};
  font-family: Pretendard;
  text-align: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  border: none;
  cursor: pointer;
`;
