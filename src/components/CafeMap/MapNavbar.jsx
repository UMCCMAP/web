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
  const [activeNav, setActiveNav] = useState(true);
  const [checkedList, setCheckedList] = useState([]);

  const navItems = [
    {
      id: 1,
      name: 'book',
      image: <Book fill={color} />,
    },
    {
      id: 2,
      name: 'coffee',
      image: <Coffee fill={color} />,
    },
    {
      id: 3,
      name: 'mountain',
      image: <Mountain fill={color} />,
    },
    {
      id: 4,
      name: 'car',
      image: <Car fill={color} />,
    },
    {
      id: 5,
      name: 'photo',
      image: <Photo fill={color} />,
    },
    {
      id: 6,
      name: 'bread',
      image: <Bread fill={color} />,
    },
    {
      id: 7,
      name: 'cake',
      image: <Cake fill={color} />,
    },
    {
      id: 8,
      name: 'pasta',
      image: <Pasta fill={color} />,
    },
  ];

  const handleCheckItem = (id, isChecked) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, id]);
    } else {
      setCheckedList(checkedList.filter((el) => el !== id));
    }
  };

  return (
    <N.NavbarWrapper>
      <N.CmapLogo to="/home">
        <img src={logoImg} alt="cmapmark" />
        <span style={{ color: color }}>CMAP</span>
      </N.CmapLogo>
      <N.NavbarContainer>
        <>
          {content === 'search' ? (
            <N.NavItem
              onClick={() => {
                setActiveNav(true);
                setCheckedList([]);
              }}
              className={activeNav ? 'active' : 'hover'}
              color={color}
              hovercolor={hovercolor}
            >
              <Home fill={color} />
            </N.NavItem>
          ) : undefined}
          {navItems.map((data) => (
            <N.NavItem
              key={data.id}
              color={color}
              hovercolor={hovercolor}
              className={checkedList.includes(Number(data.id)) ? '' : 'hover'}
            >
              <input
                type="checkbox"
                name="check"
                id={data.id}
                checked={checkedList.includes(Number(data.id)) ? true : false}
                onChange={(e) => {
                  handleCheckItem(Number(e.target.id), e.target.checked);
                  setActiveNav(false);
                }}
              />
              <label htmlFor={data.id}>{data.image}</label>
            </N.NavItem>
          ))}
        </>
      </N.NavbarContainer>
      <N.Bento>
        <img src="src/assets/images/bento.svg" alt="bento" />
      </N.Bento>
    </N.NavbarWrapper>
  );
}

export default MapNavbar;