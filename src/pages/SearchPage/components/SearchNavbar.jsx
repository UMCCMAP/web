import React, { useState } from 'react';
import styled from 'styled-components';

const navItems = [
  {
    id: 1,
    name: 'home',
    image: 'src/assets/images/home.svg',
  },
  {
    id: 2,
    name: 'book',
    image: 'src/assets/images/book.svg',
  },
  {
    id: 3,
    name: 'coffee',
    image: 'src/assets/images/coffee.svg',
  },
  {
    id: 4,
    name: 'mountain',
    image: 'src/assets/images/mountain.svg',
  },
  {
    id: 5,
    name: 'car',
    image: 'src/assets/images/car.svg',
  },
  {
    id: 6,
    name: 'photo',
    image: 'src/assets/images/photo.svg',
  },
  {
    id: 7,
    name: 'bread',
    image: 'src/assets/images/bread.svg',
  },
  {
    id: 8,
    name: 'cake',
    image: 'src/assets/images/cake.svg',
  },
  {
    id: 9,
    name: 'pasta',
    image: 'src/assets/images/pasta.svg',
  },
];

function SearchNavbar() {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <NavbarWrapper>
      <CmapLogo>
        <img src="src/assets/images/cmapmark.svg" alt="cmapmark" />
        <span>CMAP</span>
      </CmapLogo>
      <NavbarContainer>
        {navItems.map((data) => (
          <NavItem
            key={data.id}
            id={data.id}
            onClick={() => setActiveNav(data.id)}
            className={activeNav === data.id ? 'active' : ''}
          >
            <img src={`${data.image}`} alt={data.name} />
          </NavItem>
        ))}
      </NavbarContainer>
      <Bento>
        <img src="src/assets/images/bento.svg" alt="bento" />
      </Bento>
    </NavbarWrapper>
  );
}

export default SearchNavbar;

const NavbarWrapper = styled.div`
  background-color: #f9fffd;
  width: 120px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.35);
  z-index: 2;
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
    color: #21ae21;
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
