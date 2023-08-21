import { styled } from 'styled-components';
import ProFile from '@/assets/icon/ProFile.png';
import imgLogo from '@/assets/icon/CMAP.png';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowBottom } from '@/assets/icon/arrowBottom.svg';
import React, { useState } from 'react';

const HeaderWrap = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  width: auto;
  height: 5rem;
  display: flex;
  align-items: center;
`;

const SearchWrap = styled.div`
  outline: none;
  background: #f1f1f1;
  width: 29.25rem;
  height: 3.5rem;
  border-radius: 32px;
  border: none;
  text-align: center;
  color: #939393;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-left: -15px;
  position: relative;
`;
const SearchFilter = styled.div`
  width: 20%;
  height: 3.5rem;
  border-radius: 32px;
  border: 1px solid #000000;
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 10;
  color: black;
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  background: #f1f1f1;
`;
const SearchInput = styled.input`
  outline: none;
  background: #f1f1f1;
  width: 100%;
  border-radius: 32px;
  height: 3.5rem;
  border: none;
  gap: 10px;
  text-align: center;
  color: #939393;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;
const HeaderTitle = styled.div`
  //styleName: Header 1;
  font-family: Pretendard;
  font-size: 34px;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #ff6868;
`;
const MyProfile = styled(Link)`
  width: 7.875rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
`;
const ProfileWord = styled.div`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #939393;
`;
const DropdownMenu = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  bottom: -10%;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 100;
  text-align: center;
`;

const DropdownItem = styled.li`
  background-color: white;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;
function Header({ name, value, set }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const options = ['제목', '작성자', '카페'];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setIsDropdownOpen(false);
    set((prevSearch) => ({
      ...prevSearch,
      searchType: option,
    }));
  };
  // keyword를 변경하는 함수
  const handleKeywordChange = (e) => {
    set((prevSearch) => ({
      ...prevSearch,
      keyword: e.target.value,
    }));
  };

  return (
    <HeaderWrap>
      <Link to="/home">
        <Logo>
          <img src={imgLogo} />
        </Logo>
      </Link>
      {name == '검색' ? (
        <SearchWrap>
          <SearchFilter onClick={toggleDropdown}>
            {value.searchType}
            <ArrowBottom />
            <DropdownMenu>
              {isDropdownOpen && (
                <DropdownList>
                  {options.map((option, index) => (
                    <DropdownItem key={index} onClick={() => handleOptionSelect(option)}>
                      {option}
                    </DropdownItem>
                  ))}
                </DropdownList>
              )}
            </DropdownMenu>
          </SearchFilter>
          <SearchInput
            value={value.keyword}
            onChange={handleKeywordChange}
            placeholder="통합검색"
            type="text"
          />
        </SearchWrap>
      ) : (
        <HeaderTitle>{name}</HeaderTitle>
      )}

      <MyProfile to="/profile">
        <img src={ProFile} />
        <ProfileWord>내정보</ProfileWord>
      </MyProfile>
    </HeaderWrap>
  );
}
export default Header;
