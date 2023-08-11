import React, { useState } from 'react';
import * as TM from './styles/SelectThemeModal.style';
import * as M from '../../../styles/Modal.style';
import { ReactComponent as Book } from '../../../assets/images/book.svg';
import { ReactComponent as Coffee } from '../../../assets/images/coffee.svg';
import { ReactComponent as Mountain } from '../../../assets/images/mountain.svg';
import { ReactComponent as Car } from '../../../assets/images/car.svg';
import { ReactComponent as Photo } from '../../../assets/images/photo.svg';
import { ReactComponent as Bread } from '../../../assets/images/bread.svg';
import { ReactComponent as Cake } from '../../../assets/images/cake.svg';
import { ReactComponent as Pasta } from '../../../assets/images/pasta.svg';

function SelectThemeModal({ closeAction }) {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectTheme, setSelectTheme] = useState(false);
  const [themeList, setThemeList] = useState([]);
  const [selectThemeList, setSelectThemeList] = useState([]);

  const navItems = [
    {
      id: 1,
      name: '공부',
      image: (
        <Book fill={themeList.includes(1) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'} />
      ),
    },
    {
      id: 2,
      name: '포토존',
      image: (
        <Photo fill={themeList.includes(2) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'} />
      ),
    },
    {
      id: 3,
      name: '커피',
      image: (
        <Coffee fill={themeList.includes(3) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'} />
      ),
    },
    {
      id: 4,
      name: '베이커리',
      image: (
        <Bread fill={themeList.includes(4) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'} />
      ),
    },
    {
      id: 5,
      name: '뷰',
      image: (
        <Mountain
          fill={themeList.includes(5) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'}
        />
      ),
    },
    {
      id: 6,
      name: '디저트',
      image: (
        <Cake fill={themeList.includes(6) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'} />
      ),
    },
    {
      id: 7,
      name: '드라이브',
      image: (
        <Car fill={themeList.includes(7) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'} />
      ),
    },
    {
      id: 8,
      name: '파스타',
      image: (
        <Pasta fill={themeList.includes(8) ? 'rgba(96, 167, 225, 1)' : 'rgba(147, 147, 147, 1)'} />
      ),
    },
  ];

  const closeReviewModal = () => {
    closeAction(false);
  };

  const handleInputLocation = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleCheckTheme = (id, isChecked) => {
    if (isChecked) {
      setThemeList((prev) => [...prev, id]);
    } else {
      setThemeList(themeList.filter((el) => el !== id));
    }
  };

  return (
    <M.ModalBackground>
      <TM.SelectThemeContainer>
        <TM.LocationWrap>
          <TM.SelectThemeTitle>위치를 설정해주세요</TM.SelectThemeTitle>
          <TM.LocationSearch
            type="text"
            name="searchLocation"
            placeholder="검색"
            value={searchLocation}
            onChange={handleInputLocation}
          ></TM.LocationSearch>
        </TM.LocationWrap>
        <TM.ThemeWrap>
          <TM.SelectThemeTitle>테마를 선택해주세요</TM.SelectThemeTitle>
          <TM.SelectThemeList>
            {navItems.map((data) =>
              selectThemeList.includes(data.id) ? (
                <TM.ThemeBtn key={data.id}>{data.name}</TM.ThemeBtn>
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
                      name="check"
                      id={data.id}
                      checked={themeList.includes(Number(data.id)) ? true : false}
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
                      name="check"
                      id={data.id}
                      checked={themeList.includes(Number(data.id)) ? true : false}
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
                setSelectThemeList(themeList);
                setSelectTheme(false);
              }}
            >
              선택
            </TM.SelectBtn>
          </TM.SelectTheme>
        </TM.ThemeWrap>
        <TM.OtherSearchBtn onClick={closeReviewModal}>둘러보기</TM.OtherSearchBtn>
      </TM.SelectThemeContainer>
    </M.ModalBackground>
  );
}

export default SelectThemeModal;
