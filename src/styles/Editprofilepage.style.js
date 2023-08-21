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
  background-color: #60a7e1;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
`;
export const IntroTextDiv = styled.div`
  width: 335px;
  height: 386px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CafeIntroTitle = styled.input`
  width: 335px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-bottom: transparent;
  outline: none;
  text-align: left;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  padding-top: 5px;
  padding-left: 5px;
`;
export const CafeIntroText = styled.textarea`
  width: 335px;
  height: 336px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-top: transparent;
  outline: none;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.1px;
  letter-spacing: 0em;
  padding-top: 5px;
  padding-left: 5px;
`;
export const MyIntroText = styled.textarea`
  width: 540px;
  height: 158px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 0px;
  border: 1px solid #000000;

  outline: none;
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
`;

export const ShareTxt = styled.div`
  width: 820px;
  height: 40px;
  background-color: #60a7e1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  color: #ffffff;
`;

export const FavoriteCafe = styled.div`
  width: 813px;
  height: 386px;
  display: flex;
  justify-content: space-between;

  img {
    width: 465px;
    height: 386px;
  }
`;
export const OutBtn = styled.button`
  width: 145px;
  height: 40px;
  border: 2px solid #60a7e1;
  border-radius: 16px;
  background-color: #ffffff;
  margin-top: 70px;
  cursor: pointer;

  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: #60a7e1;
`;
