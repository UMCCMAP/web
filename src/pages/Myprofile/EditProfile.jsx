import React, { useState } from 'react';
import { styled } from 'styled-components';
import Footer from '../../components/footer';
import Logo from '../../components/LogoHeader';
import Profile from '../../assets/ProfileImg.png';
import { Link, useNavigate } from 'react-router-dom';
import './profile.css';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IntroDiv = styled.div`
  width: 815px;
  height: ${(props) => (props.height ? props.height : '200px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
  margin: ${(props) => props.margin};
`;

const ProfileEditDiv = styled.div`
  height: 220px;
  width: ${(props) => props.width};
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;

const NameAndButtonDiv = styled.div`
  width: 540px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileBtn = styled(Link)`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  text-decoration: none;
  color: #000000;
  cursor: pointer;
`;

const IntroText = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: ${(props) => (props.radius ? props.radius : '0px')};
  border: 1px solid #000000;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
`;

const ShareTxt = styled.div`
  width: 813px;
  height: 40px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
  color: #000000;
`;

const FavoriteCafe = styled.div`
  width: 813px;
  height: 386px;
  display: flex;
  justify-content: space-between;

  img {
    width: 466px;
    height: 383px;
  }
`;

function EditProfile() {
  const navigate = useNavigate();
  const EditListener = () => {
    navigate('/profile');
  };

  return (
    <Wrapper>
      <Logo />
      <IntroDiv id="profile" margin="100px 0px">
        <img src={Profile} />
        <ProfileEditDiv width="540px">
          <NameAndButtonDiv>
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
            <ProfileBtn onClick={EditListener}>수정 완료</ProfileBtn>
          </NameAndButtonDiv>
          <IntroText width="540px" height="158px"></IntroText>
        </ProfileEditDiv>
      </IntroDiv>

      <IntroDiv id="cafe" height="440px" flexDirection="column" margin="-50px 0px">
        <ShareTxt>가장 좋아하는 카페</ShareTxt>
        <FavoriteCafe>
          <img src={Profile} />
          <IntroText width="335px" height="380px"></IntroText>
        </FavoriteCafe>
      </IntroDiv>
      <Footer></Footer>
    </Wrapper>
  );
}

export default EditProfile;
