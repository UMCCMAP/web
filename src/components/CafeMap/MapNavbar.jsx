import React, { useState } from 'react';
import * as N from './styles/MapNavbar.style';
import { ReactComponent as Home } from '../../assets/images/home.svg';
import { ReactComponent as Book } from '../../assets/images/book.svg';
import { ReactComponent as Coffee } from '../../assets/images/coffee.svg';
import { ReactComponent as Mountain } from '../../assets/images/mountain.svg';
import { ReactComponent as Car } from '../../assets/images/car.svg';
import { ReactComponent as Photo } from '../../assets/images/photo.svg';
import { ReactComponent as Bread } from '../../assets/images/bread.svg';
import { ReactComponent as Cake } from '../../assets/images/cake.svg';
import { ReactComponent as Pasta } from '../../assets/images/pasta.svg';

function MapNavbar({ content, logoImg, color, hovercolor }) {
  const [activeNav, setActiveNav] = useState(
    content === 'recommend' ? 2 : content === 'search' ? 1 : 0,
  );
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
    <N.NavbarWrapper>
      <N.CmapLogo>
        <img src={logoImg} alt="cmapmark" />
        <span style={{ color: color }}>CMAP</span>
      </N.CmapLogo>
      <N.NavbarContainer>
        {content === 'recommend' ? (
          <>
            {navItems.slice(1).map((data) => (
              <N.NavItem
                key={data.id}
                id={data.id}
                onClick={() => setActiveNav(data.id)}
                className={activeNav === data.id ? 'active' : ''}
                color={color}
                hovercolor={hovercolor}
              >
                {data.image}
              </N.NavItem>
            ))}
          </>
        ) : content === 'search' ? (
          <>
            {navItems.map((data) => (
              <N.NavItem
                key={data.id}
                id={data.id}
                onClick={() => setActiveNav(data.id)}
                className={activeNav === data.id ? 'active' : ''}
                color={color}
                hovercolor={hovercolor}
              >
                {data.image}
              </N.NavItem>
            ))}
          </>
        ) : undefined}
      </N.NavbarContainer>
      <N.Bento>
        <img src="src/assets/images/bento.svg" alt="bento" />
      </N.Bento>
    </N.NavbarWrapper>
  );
}

export default MapNavbar;
