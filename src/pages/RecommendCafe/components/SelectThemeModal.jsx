import React, { useState } from 'react';
import * as TM from './styles/SelectThemeModal.style';
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
          <TM.ThemeBtn>베이커리</TM.ThemeBtn>
          <TM.ThemeBtn>뷰</TM.ThemeBtn>
          <TM.ThemeAddBtn>추가하기</TM.ThemeAddBtn>
        </TM.ThemeWrap>
        <TM.OtherSearchBtn onClick={closeReviewModal}>둘러보기</TM.OtherSearchBtn>
      </TM.SelectThemeContainer>
    </M.ModalBackground>
  );
}

export default SelectThemeModal;
