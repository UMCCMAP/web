import React, { useState } from 'react';
import baseAxios from '@/apis/baseAxios';
import * as TM from './styles/SelectThemeModal.style';
import * as M from '@/styles/Modal.style';
import { ReactComponent as Book } from '@/assets/images/book.svg';
import { ReactComponent as Coffee } from '@/assets/images/coffee.svg';
import { ReactComponent as Mountain } from '@/assets/images/mountain.svg';
import { ReactComponent as Car } from '@/assets/images/car.svg';
import { ReactComponent as Photo } from '@/assets/images/photo.svg';
import { ReactComponent as Bread } from '@/assets/images/bread.svg';
import { ReactComponent as Cake } from '@/assets/images/cake.svg';
import { ReactComponent as Pasta } from '@/assets/images/pasta.svg';

function SelectThemeModal({ closeAction, getRecommendData }) {
  const [selectTheme, setSelectTheme] = useState(false);
  const [themeList, setThemeList] = useState([]);
  const [selectThemeList, setSelectThemeList] = useState([]);

  const navItems = [
    {
      id: 1,
      name: '독서',
      theme: 'book',
      image: (
        <Book fill={themeList.includes(1) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'} />
      ),
    },
    {
      id: 2,
      name: '사진',
      theme: 'photo',
      image: (
        <Photo fill={themeList.includes(2) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'} />
      ),
    },
    {
      id: 3,
      name: '음료',
      theme: 'beverage',
      image: (
        <Coffee fill={themeList.includes(3) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'} />
      ),
    },
    {
      id: 4,
      name: '베이커리',
      theme: 'bakery',
      image: (
        <Bread fill={themeList.includes(4) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'} />
      ),
    },
    {
      id: 5,
      name: '뷰',
      theme: 'view',
      image: (
        <Mountain
          fill={themeList.includes(5) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'}
        />
      ),
    },
    {
      id: 6,
      name: '디저트',
      theme: 'dessert',
      image: (
        <Cake fill={themeList.includes(6) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'} />
      ),
    },
    {
      id: 7,
      name: '주차',
      theme: 'parking',
      image: (
        <Car fill={themeList.includes(7) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'} />
      ),
    },
    {
      id: 8,
      name: '브런치',
      theme: 'brunch',
      image: (
        <Pasta fill={themeList.includes(8) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'} />
      ),
    },
  ];

  const handleCheckTheme = (id, isChecked) => {
    if (isChecked) {
      setThemeList((prev) => [...prev, id]);
    } else {
      setThemeList(themeList.filter((el) => el !== id));
    }
  };

  const getThemeCafeList = async () => {
    let theme = selectThemeList.join(',');
    try {
      const response = await baseAxios.get(
        `cafes/filter?district=영등포구&city=서울시&theme=${theme}`,
      );
      if (response.status === 200) {
        getRecommendData(response.data);
        closeAction(false);
      }
    } catch (e) {
      if (e.response.data.code) {
        alert('조건에 맞는 카페가 없습니다');
      }
    }
  };

  return (
    <M.ModalBackground>
      <TM.SelectThemeContainer>
        <TM.ThemeWrap>
          <TM.SelectThemeTitle>테마를 선택해주세요</TM.SelectThemeTitle>
          <TM.SelectThemeList>
            {navItems.map((data) =>
              selectThemeList.includes(data.theme) ? (
                <TM.ThemeBtn key={data.theme}>{data.name}</TM.ThemeBtn>
              ) : null,
            )}
          </TM.SelectThemeList>
          <TM.ThemeAddBtn onClick={() => setSelectTheme(true)}>추가하기</TM.ThemeAddBtn>
          <TM.SelectTheme className={selectTheme ? 'show' : 'hide'}>
            <TM.CloseImgWrap>
              <img
                src="src/assets/images/close.svg"
                alt="close"
                onClick={() => setSelectTheme(false)}
              />
            </TM.CloseImgWrap>
            <TM.ThemeListWrap>
              <div>
                {navItems.slice(0, 4).map((data) => (
                  <div key={data.id}>
                    <input
                      type="checkbox"
                      name={data.theme}
                      id={data.id}
                      checked={themeList.includes(data.id) ? true : false}
                      onChange={(e) => {
                        handleCheckTheme(Number(e.target.id), e.target.checked);
                      }}
                    />
                    <label
                      htmlFor={data.id}
                      style={{
                        filter: 'drop-shadow(0px 4px 4px 0px rgba(0, 0, 0, 0.0625))',
                      }}
                    >
                      {data.image}
                    </label>
                  </div>
                ))}
              </div>
              <div>
                {navItems.slice(4).map((data) => (
                  <div key={data.id}>
                    <input
                      type="checkbox"
                      name={data.theme}
                      id={data.id}
                      checked={themeList.includes(data.id) ? true : false}
                      onChange={(e) => {
                        handleCheckTheme(Number(e.target.id), e.target.checked);
                      }}
                    />
                    <label
                      htmlFor={data.id}
                      style={{
                        filter: 'drop-shadow(0px 4px 4px 0px rgba(0, 0, 0, 0.0625))',
                      }}
                    >
                      {data.image}
                    </label>
                  </div>
                ))}
              </div>
            </TM.ThemeListWrap>
            <TM.SelectBtn
              onClick={() => {
                setSelectThemeList([]);
                navItems.map((data) =>
                  themeList.includes(data.id)
                    ? setSelectThemeList((prev) => [...prev, data.theme])
                    : null,
                ),
                  setSelectTheme(false);
              }}
            >
              선택
            </TM.SelectBtn>
          </TM.SelectTheme>
        </TM.ThemeWrap>
        <TM.OtherSearchBtn onClick={getThemeCafeList}>둘러보기</TM.OtherSearchBtn>
      </TM.SelectThemeContainer>
    </M.ModalBackground>
  );
}

export default SelectThemeModal;
