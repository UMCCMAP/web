import React, { useState } from 'react';
import Footer from '../../components/footer';
import Logo from '../../components/LogoHeader';
import Profile from '../../assets/ProfileImg.png';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import * as S from '../../styles/Editprofilepage.style';
import * as W from '../../styles/Wapper.style';

function EditProfile() {
  const navigate = useNavigate();
  const EditListener = () => {
    navigate('/profile');
  };

  return (
    <W.Wrapper>
      <Logo />
      <S.IntroDiv id="profile" margin="100px 0px">
        <img src={Profile} />
        <S.ProfileEditDiv width="540px">
          <S.NameAndButtonDiv>
            <input
              className="name"
              style={{
                border: '1px solid black',
                padding: '4px 10px',
                margin: '0px',
                outline: 'none',
                // value: name,
              }}
            />
            <S.ProfileBtn onClick={EditListener}>수정 완료</S.ProfileBtn>
          </S.NameAndButtonDiv>
          <S.IntroText width="540px" height="158px"></S.IntroText>
        </S.ProfileEditDiv>
      </S.IntroDiv>

      <S.IntroDiv id="cafe" height="440px" flexDirection="column" margin="-50px 0px">
        <S.ShareTxt>가장 좋아하는 카페</S.ShareTxt>
        <S.FavoriteCafe>
          <img src={Profile} />
          <S.IntroText width="335px" height="380px"></S.IntroText>
        </S.FavoriteCafe>
      </S.IntroDiv>
      <Footer></Footer>
    </W.Wrapper>
  );
}

export default EditProfile;
