import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IntroDiv = styled.div`
  width: 815px;
  height: ${(props) => (props.height ? props.height : '200px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
  margin: ${(props) => props.margin};
`;

export const ProfileEditDiv = styled.div`
  height: 220px;
  width: ${(props) => props.width};
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;

export const NameAndButtonDiv = styled.div`
  width: 540px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileBtn = styled(Link)`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  text-decoration: none;
  color: #000000;
  cursor: pointer;
`;

export const IntroText = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: ${(props) => (props.radius ? props.radius : '0px')};
  border: 1px solid #000000;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
`;

export const ShareTxt = styled.div`
  width: 813px;
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

export const FavoriteCafe = styled.div`
  width: 813px;
  height: 386px;
  display: flex;
  justify-content: space-between;

  img {
    width: 466px;
    height: 383px;
  }
`;
