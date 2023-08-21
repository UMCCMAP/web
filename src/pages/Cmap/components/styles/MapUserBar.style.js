import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const UserBarWrapper = styled.div`
  width: 120px;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserMenu = styled.div`
  width: 113px;
  height: fit-content;
  margin-top: 10px;
  border-radius: 16px;
  border: 1px solid #000000;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 8px;
  position: absolute;
  flex-direction: column;
  z-index: 100;
  transition: 0.5s;
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
export const UserNameWrap = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
export const IconWrapper = styled.div`
  width: 87px;
  height: 170px;
  margin-top: 90px;
  background: #ffffff;

  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 44px;
  margin-right: -10px;
`;
export const IconCon = styled.div`
  width: 74px;
  height: 150px;
  border-radius: 44px;
  box-shadow: 0px 4px 12px 0px #00000040 inset;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-${(props) => props.flex};
  transition: flex 0.3s ease-in-out, top 0.3s ease-in-out;
  animation: ${fadeInOut} 0.3s ease-in-out;
`;
export const IconBox = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 100%;
  box-shadow: 0px ${(props) => props.shadow}1px 1px 0px #00000040;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoIcon = styled.div`
  width: 32px;
  height: 42px;
`;
export const IconText = styled.div`
  position: absolute;
  ${(props) => props.position}: 19px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #f45151;
`;
export const WantButton = styled.div`
  width: 75px;
  height: 75px;
  margin-top: ${(props) => props.margin}px;
  border-radius: 24px;
  background: #ff6868;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  margin-right: -10px;
  z-index: 2;
`;
export const DropdownMenu = styled.div`
  width: 100%;
  max-height: 250px;
  margin: 5px 0 11px 0;
  overflow: auto;
  z-index: 100;
`;

export const DropdownList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 100;
  text-align: center;
`;

export const DropdownItem = styled.li`
  background-color: white;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;
export const Line = styled.div`
  width: 90%;
  height: 0.063rem;
  background: #939393;
  margin-top: ${(props) => props.top}px;
`;
