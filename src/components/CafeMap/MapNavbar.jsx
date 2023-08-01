import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Home } from '../../assets/images/home.svg';
import { ReactComponent as Book } from '../../assets/images/book.svg';
import { ReactComponent as Coffee } from '../../assets/images/coffee.svg';
import { ReactComponent as Mountain } from '../../assets/images/mountain.svg';
import { ReactComponent as Car } from '../../assets/images/car.svg';
import { ReactComponent as Photo } from '../../assets/images/photo.svg';
import { ReactComponent as Bread } from '../../assets/images/bread.svg';
import { ReactComponent as Cake } from '../../assets/images/cake.svg';
import { ReactComponent as Pasta } from '../../assets/images/pasta.svg';

function MapNavbar({ logoImg, color }) {
  const [activeNav, setActiveNav] = useState(1);
  const navItems = [
    {
      id: 1,
      name: 'home',
      image: <Home fill={color} />,
    },
    {
      id: 2,
      name: 'book',
      image: <Book fill={color} />,
    },
    {
      id: 3,
      name: 'coffee',
      image: <Coffee fill={color} />,
    },
    {
      id: 4,
      name: 'mountain',
      image: <Mountain fill={color} />,
    },
    {
      id: 5,
      name: 'car',
      image: <Car fill={color} />,
    },
    {
      id: 6,
      name: 'photo',
      image: <Photo fill={color} />,
    },
    {
      id: 7,
      name: 'bread',
      image: <Bread fill={color} />,
    },
    {
      id: 8,
      name: 'cake',
      image: <Cake fill={color} />,
    },
    {
      id: 9,
      name: 'pasta',
      image: <Pasta fill={color} />,
    },
  ];

  return (
    <NavbarWrapper>
      <CmapLogo>
        <img src={logoImg} alt="cmapmark" />
        <span style={{ color: color }}>CMAP</span>
      </CmapLogo>
      <NavbarContainer>
        {navItems.map((data) => (
          <NavItem
            key={data.id}
            id={data.id}
            onClick={() => setActiveNav(data.id)}
            className={activeNav === data.id ? 'active' : ''}
          >
            {data.image}
          </NavItem>
        ))}
      </NavbarContainer>
      <Bento>
        <img src="src/assets/images/bento.svg" alt="bento" />
      </Bento>
    </NavbarWrapper>
  );
}

export default MapNavbar;
const NavbarWrapper = styled.div`
  background-color: #f9fffd;
  width: 120px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.35);
  z-index: 3;
`;

const CmapLogo = styled.div`
  width: 100%;
  height: 15%;
  padding: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
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

const NavbarContainer = styled.ul`
  width: 100%;
  height: 73%;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
`;

const NavItem = styled.li`
  width: 100%;
  text-align: center;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > img {
    width: 40px;
    height: 30px;
  }
  &:hover {
    border-left: 8px solid rgb(154, 200, 154);
    box-sizing: border-box;
    margin-right: 8px;
  }
  &.active {
    border-left: 8px solid rgba(33, 174, 33, 1);
    box-sizing: border-box;
    margin-right: 8px;
  }
`;

const Bento = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
  box-sizing: border-box;
  > img {
    width: 38px;
    height: 38
`;
