import { styled } from 'styled-components';
import ProFile from '../assets/icon/Profile.png';
import imgLogo from '../assets/icon/CMAP.png';
function Header({ name }) {
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
  const SearchInput = styled.input`
    outline: none;
    background: #f1f1f1;
    width: 29.25rem;
    height: 3.5rem;
    border-radius: 32px;
    border: none;
    gap: 10px;
    text-align: center;
    color: #939393;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.02em;
    text-align: center;
    margin-left: -15px;
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
  const MyProfile = styled.div`
    width: 7.875rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
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
  return (
    <HeaderWrap>
      <Logo>
        <img src={imgLogo} />
      </Logo>
      {name == '검색' ? (
        <SearchInput placeholder="통합검색" type="text" />
      ) : (
        <HeaderTitle>{name}</HeaderTitle>
      )}
      <MyProfile>
        <img src={ProFile} />
        <ProfileWord>내정보</ProfileWord>
      </MyProfile>
    </HeaderWrap>
  );
}
export default Header;
