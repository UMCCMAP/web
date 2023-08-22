import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileWholeDiv = styled.div`
  width: 815px;
  height: 700px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.align ? props.align : 'center')};
  margin: 15vh 200px 0 50px;
`;
export const IntroDiv = styled.div`
  width: 815px;
  height: ${(props) => (props.height ? props.height : '200px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.margin};

  img {
    // 프로필 사진
    widtht: ${(props) => (props.width ? props.width : '200px')};
    height: ${(props) => (props.height ? props.height : '200px')};
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
  margin-left: 3px;
  > p {
    font-size: 18px;
    margin-right: 10px;
  }
`;
export const UserDataDiv = styled.div`
  width: 540px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
`;
export const UsernameAndCountDiv = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
`;
export const UsernameDiv = styled.div`
  width: fit-content;
  height: 40px;
  display: inline-block;
  justify-content: left;
  align-items: center;
  white-space: nowrap;
  margin: 0;

  font-size: 30px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
`;
export const ButtonsDiv = styled.div`
  width: fit-content;
  height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 30px;
`;
export const IntroText = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #ffffff;
  border-left: ${(props) => (props.border ? props.border : '2px solid #b1b1b1')};
  position: relative;
  left: 7px;
  top: ${(props) => (props.top ? props.top : '0px')};

  font-size: 20px;
  font-weight: 400;
  line-height: 23.8px;
  letter-spacing: 0em;
  padding: 10px;
`;
export const ProfileBtn = styled(Link)`
  width: fit-content;
  height: 27px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.background};
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${(props) => (props.border ? props.border : 'none')};
  padding: 0px 7px;
  margin-right: 15px;
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  align-items: center;
  cursor: pointer;
`;
export const FavCafeDiv = styled.div`
  width: 815px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;
export const FavCafe = styled.div`
  width: fit-content;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 32px;
  font-weight: 700;
  line-height: 24.2px;
`;
export const CafeText = styled.div`
  width: 100%;
  height: 25px;
  margin: ${(props) => (props.margin ? props.margin : 'none')};
  font-size: ${(props) => (props.size ? props.size : '20px')};
  font-weight: ${(props) => (props.weight ? props.weight : '600')};
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
export const MateTitle = styled.div`
  width: 234px;
  height: 40px;
  background-color: #ff6868;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
  position: relative;
  bottom: 20px;

  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  color: #ffffff;
`;
export const MateListDiv = styled.div`
  width: 230px;
  height: 682px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ff6868;

  flex-direction: column;
  margin: 15vh 0 0 10px;
`;
export const MateList = styled.div`
  width: 230px;
  height: 662px;
  margin-top: -10px;
  padding-bottom: 10px;
  overflow: auto;

  flex-direction: column;

  overflow-y: auto;
  &::-webkit-scrollbar {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    width: 14px;
    border-radius: 7px;
    background: #ff6868;
  }
`;
export const Mate = styled.button`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: flex-start;
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
    font-size: 15px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: #000000;
    margin-left: 10px;
  }
`;
export const WriteCntText = styled.div`
  width: 250px;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 12px;
`;
export const CntBtn = styled(Link)`
  width: fit-content;
  height: fit-content;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-decoration: none;
`;
