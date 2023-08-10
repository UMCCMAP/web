import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.div`
  background-color: #f9fffd;
  width: 120px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.35);
  z-index: 3;
`;

export const CmapLogo = styled(Link)`
  width: 100%;
  height: 15%;
  padding: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-decoration: none;
  > img {
    width: 41px;
    height: 54px;
  }
  > span {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin-top: 13px;
  }
`;

export const NavbarContainer = styled.ul`
  width: 100%;
  height: 75%;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
`;

export const NavItem = styled.li`
  width: 100%;
  text-align: center;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > label {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  > input {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    overflow: hidden;
    &:checked + label {
      border-left: 5px solid ${(props) => props.color};
      box-sizing: border-box;
      margin-right: 5px;
    }
  }
  &.active {
    border-left: 10px solid ${(props) => props.color};
    box-sizing: border-box;
    margin-right: 10px;
  }
  &.hover {
    &:hover {
      border-left: 10px solid ${(props) => props.hovercolor};
      box-sizing: border-box;
      margin-right: 10px;
    }
  }
`;

export const Bento = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
  box-sizing: border-box;
  .bento {
    cursor: pointer;
  }
  &.openToggle {
    background-color: rgba(249, 255, 253, 1);
    width: 360px;
    height: 108px;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: opacity visibility 0.3s;
    display: flex;
    justify-content: space-between;
    padding: 35px 40px;
    align-items: start;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
    border-radius: 27px;
    box-sizing: border-box;
    z-index: 100;
  }
`;

export const ToggleBento = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 180px;
  > li {
    cursor: pointer;
    > p {
      font-size: 10px;
      color: ${(props) => props.color};
      text-align: center;
      font-family: 'Pretendard';
      margin-top: 4px;
    }
  }
  &.show-menu {
    visibility: visible;
    opacity: 1;
  }
  &.hide-menu {
    visibility: hidden;
    opacity: 0;
  }
`;
