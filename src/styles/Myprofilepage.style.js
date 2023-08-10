import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileWholeDiv = styled.div`
  width: 815px;
  height: 700px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 50px 0 0;
`;
export const IntroDiv = styled.div`
  width: 815px;
  height: ${(props) => (props.height ? props.height : '200px')};
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    // 프로필 사진
    widtht: ${(props) => (props.width ? props.width : '200px')};
    height: ${(props) => (props.height ? props.height : '200px')};
  }
`;
export const UserDataDiv = styled.div`
  width: 540px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonsDiv = styled.div`
  width: 540px;
  height: 45px;
  display: flex;
  justify-content: right;
  align-items: center;
`;
export const IntroText = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #ffffff;
  border-radius: 50px;
  border: 1px solid #000000;

  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
`;
export const ProfileBtn = styled(Link)`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  border: none;
  background-color: #d9d9d9;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;

  font-size: 16px;
  font-weight: 400;
  color: #000000;
  line-height: 19.36px;
  align-items: center;
  cursor: pointer;
`;
export const ShareTxt = styled.div`
  width: ${(props) => (props.width ? props.width : '813px')};
  height: 40px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  color: #000000;
`;
export const MateListDiv = styled.div`
  width: 325px;
  height: 464px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px 0 0 60px;
`;
export const MateList = styled.div`
  width: 325px;
  height: 386px;
  overflow: scroll; // 스크롤? 히든?
  border: 1px solid #d9d9d9;
  flex-direction: column;
  justify-content: top;
`;
export const Mate = styled.button`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;

  background-color: transparent;
  border: none;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #d9d9d9;
    margin: 0 5px;
  }
  div {
    max-width: 235px;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: #000000;
    margin-left: 10px;
  }
`;
export const WriteCntText = styled.div`
  width: auto;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 13px;

  font-size: 15px;
  font-weight: 400;
  line-height: 18.15px;
  align-items: center;
  color: #000000;
`;
