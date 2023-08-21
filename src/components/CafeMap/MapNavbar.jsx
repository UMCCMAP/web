import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import baseAxios from '@/apis/baseAxios';
import * as N from './styles/MapNavbar.style';
import { ReactComponent as Home } from '@/assets/images/home.svg';
import { ReactComponent as Book } from '@/assets/images/book.svg';
import { ReactComponent as Coffee } from '@/assets/images/coffee.svg';
import { ReactComponent as Mountain } from '@/assets/images/mountain.svg';
import { ReactComponent as Car } from '@/assets/images/car.svg';
import { ReactComponent as Photo } from '@/assets/images/photo.svg';
import { ReactComponent as Bread } from '@/assets/images/bread.svg';
import { ReactComponent as Cake } from '@/assets/images/cake.svg';
import { ReactComponent as Pasta } from '@/assets/images/pasta.svg';
import { ReactComponent as Bento } from '@/assets/images/bento.svg';
import { ReactComponent as BentoStar } from '@/assets/images/bentoStar.svg';
import { ReactComponent as BentoMap } from '@/assets/images/bentoMap.svg';
import { ReactComponent as BentoMarker } from '@/assets/images/bentoMarker.svg';

function MapNavbar({ content, logoImg, color, hovercolor, cafeItems }) {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(true);
  const [checkedList, setCheckedList] = useState([]);
  const [selectThemeList, setSelectThemeList] = useState([]);
  const [bentoMenu, setBentoMenu] = useState(false);
  const path = window.location.pathname;
  const handleBentoMenu = () => {
    setBentoMenu((bentoMenu) => !bentoMenu);
  };

  const navItems = [
    {
      id: 1,
      name: 'book',
      image: <Book fill={color} />,
    },
    {
      id: 2,
      name: 'beverage',
      image: <Coffee fill={color} />,
    },
    {
      id: 3,
      name: 'view',
      image: <Mountain fill={color} />,
    },
    {
      id: 4,
      name: 'parking',
      image: <Car fill={color} />,
    },
    {
      id: 5,
      name: 'photo',
      image: <Photo fill={color} />,
    },
    {
      id: 6,
      name: 'bakery',
      image: <Bread fill={color} />,
    },
    {
      id: 7,
      name: 'dessert',
      image: <Cake fill={color} />,
    },
    {
      id: 8,
      name: 'brunch',
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

  useEffect(() => {
    if (content === 'recommend') {
      const navItemNames = new Set(cafeItems?.cafeThemes?.map((item) => item.themeName));
      const newCheckedList = navItems
        .filter((data) => navItemNames.has(data.name))
        .map((data) => data.id);
      if (newCheckedList) {
        setCheckedList((prev) => [...prev, ...newCheckedList]);
      }
    }
  }, [cafeItems]);

  useEffect(() => {
    const newSelectThemeList = [];
    for (let i = 0; i < navItems.length; i++) {
      if (checkedList.includes(navItems[i].id)) {
        newSelectThemeList.push(navItems[i].name);
      }
    }
    setSelectThemeList(newSelectThemeList);
  }, [checkedList]);

  useEffect(() => {
    if (content === 'search') {
      getThemeCafe();
    }
  }, [selectThemeList]);

  const getThemeCafe = async () => {
    if (checkedList.length !== 0) {
      try {
        const response = await baseAxios.get(`cafes/theme-all?themeName=${selectThemeList[0]}`);
        cafeItems(response.data);
      } catch (e) {
        console.error(e);
      }
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
                cafeItems([]);
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
      <N.Bento className={bentoMenu ? 'openToggle' : ''}>
        <Bento
          fill={bentoMenu ? 'rgba(147, 147, 147, 1)' : color}
          onClick={handleBentoMenu}
          className="bento"
        />
        <N.ToggleBento className={bentoMenu ? 'show-menu' : 'hide-menu'}>
          <li onClick={() => navigate('/search')}>
            <BentoMap stroke={path === '/search' ? color : '#939393'} />
            <p style={path === '/search' ? { color: color } : { color: '#939393' }}>지도홈</p>
          </li>
          <li onClick={() => navigate('/cmap')}>
            <BentoMarker fill={path === '/cmap' ? color : '#939393'} />
            <p style={path === '/cmap' ? { color: color } : { color: '#939393' }}>CMAP</p>
          </li>
          <li onClick={() => navigate('/recommend')}>
            <BentoStar fill={path === '/recommend' ? color : '#939393'} />
            <p style={path === '/recommend' ? { color: color } : { color: '#939393' }}>랜덤 지도</p>
          </li>
        </N.ToggleBento>
      </N.Bento>
    </N.NavbarWrapper>
  );
}

export default MapNavbar;
