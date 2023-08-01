import React, { useState } from 'react';
import styled from 'styled-components';
import * as M from '../../../styles/Modal.style';

function SelectThemeModal({ closeAction }) {
  const [searchLocation, setSearchLocation] = useState('');

  const closeReviewModal = () => {
    closeAction(false);
  };

  const handleInputLocation = (e) => {
    setSearchLocation(e.target.value);
  };

  return (
    <M.ModalBackground>
      <SelectThemeContainer>
        <LocationWrap>
          <SelectThemeTitle>위치를 설정해주세요</SelectThemeTitle>
          <LocationSearch
            type="text"
            name="searchLocation"
            placeholder="검색"
            value={searchLocation}
            onChange={handleInputLocation}
          ></LocationSearch>
        </LocationWrap>
        <ThemeWrap>
          <SelectThemeTitle>테마를 선택해주세요</SelectThemeTitle>
          <ThemeBtn>베이커리</ThemeBtn>
          <ThemeBtn>뷰</ThemeBtn>
          <ThemeAddBtn>추가하기</ThemeAddBtn>
        </ThemeWrap>
        <OtherSearchBtn onClick={closeReviewModal}>둘러보기</OtherSearchBtn>
      </SelectThemeContainer>
    </M.ModalBackground>
  );
}

export default SelectThemeModal;

const SelectThemeContainer = styled.div`
  width: 384px;
  height: 514px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const LocationWrap = styled.div`
  width: 100%;
`;

const SelectThemeTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  font-family: Pretendard;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 20px;
`;

const LocationSearch = styled.input`
  width: 100%;
  border-radius: 32px;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  font-size: 20px;
  font-weight: 400;
  color: rgba(147, 147, 147, 1);
  text-align: center;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
  &:focus {
    outline: 2px solid rgba(96, 167, 225, 1);
  }
`;

const ThemeWrap = styled.div`
  width: 100%;
`;

const ThemeBtn = styled.button`
  width: 100%;
  border-radius: 32px;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  font-size: 20px;
  font-weight: 700;
  font-family: Pretendard;
  color: rgba(96, 167, 225, 1);
  text-align: center;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
  cursor: pointer;
  margin-bottom: 25px;
`;
const ThemeAddBtn = styled.button`
  width: 100%;
  border-radius: 32px;
  background-color: transparent;
  border: 2px solid rgba(241, 241, 241, 1);
  font-size: 16px;
  font-weight: 400;
  font-family: Pretendard;
  color: rgba(241, 241, 241, 1);
  text-align: center;
  padding: 8px 20px 8px 20px;
  box-sizing: border-box;
  cursor: pointer;
`;
const OtherSearchBtn = styled.button`
  width: 100%;
  border-radius: 32px;
  background-color: rgba(96, 167, 225, 1);
  border: none;
  font-size: 24px;
  font-weight: 700;
  font-family: Pretendard;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
  cursor: pointer;
`;
