import styled from 'styled-components';

export const UserBarWrapper = styled.div`
  width: 120px;
  height: 350px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const UserMenu = styled.div`
  width: 113px;
  height: 38px;
  margin-top: 10px;
  margin-right: 8px;
  border-radius: 50px;
  border: 1px solid #000000;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const UserMenuArrow = styled.div`
  width: 15px;
  height: 15px;
  background: url(../../../assets/icon/arrow.png);
`;
export const UserName = styled.div`
  width: auto;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: -0.02em;
  text-align: center;
`;
export const IconBox = styled.div`
  width: 87px;
  height: 170px;
  margin-top: 50px;
  border: 1px solid #000000;
  background-color: #ffffff;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
export const WantButton = styled.button`
  width: 79px;
  height: 23px;
  margin-top: ${(props) => props.margin}px;
  border-radius: 50px;
  border: 1px solid #000000;
  font-family: Lexend;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  margin-right: 8px;
  cursor: pointer;
`;
export const LogoIcon = styled.div`
  width: 42px;
  height: 54px;
  margin-top: 18px;
`;
