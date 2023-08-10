import { styled } from 'styled-components';

export const WholeDiv = styled.div`
  width: 833px;
  height: 420px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  margin-top: 240px;
`;

export const WelcomeText = styled.div`
  width: auto;
  height: 33px;
  margin-top: 30px;
  margin-bottom: 10px;

  color: #939393;
  font-weight: 300;
  font-size: 20px;
  line-height: 33.41px;
  text-align: center;
`;
export const NicknameSet = styled.div`
  width: 568px;
  height: 70px;

  border-radius: 32px;
  border: none;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  img {
    width: 26px;
    height: 26px;
    margin-right: 10px;
  }
  input {
    width: 460px;
    height: 60px;
    border: none;
    border-radius: 32px;
    background-color: #f1f1f1;
    font-size: 20px;
    font-weight: 400;
    margin-left: 10px;
    color: #939393;
    outline: none;
  }
`;
export const CompleteBtn = styled.button`
  width: 568px;
  height: 65px;
  border-radius: 32px;
  border: none;
  background-color: #ff6868;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;
