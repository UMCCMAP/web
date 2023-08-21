import React, { useState } from 'react';
import Footer from '@/components/footer';
import Logo from '@/components/LogoHeader';
import Myprofile from './assets/Myprofile.png';
import Mycafe from './assets/Mycafe.png';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import * as S from '@/styles/Editprofilepage.style';
import * as W from '@/styles/Wapper.style';
import baseAxios from '@/apis/baseAxios';

function EditProfile() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(localStorage.getItem('nickname'));
  const [myIntro, setMyIntro] = useState();
  const [cafeIntroTitle, setCafeIntroTitle] = useState();
  const [cafeIntro, setCafeIntro] = useState();
  const [userImage, setUserImage] = useState(null);
  const [cafeImage, setCafeImage] = useState(null);
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, setImage) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setImage(file);
  };

  const handleImageChange = (e, setImage) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  // const dataToServer = () => {
  //   const formData = new FormData();
  //   formData.append('userNickname', userName);
  //   formData.append('userInfo', myIntro);
  //   formData.append('cafeTitle', cafeIntroTitle);
  //   formData.append('cafeInfo', cafeIntro);

  //   if (userImage) {
  //     formData.append('userImage', userImage);
  //   }

  //   if (cafeImage) {
  //     formData.append('cafeImage', cafeImage);
  //   }
  //   try {
  //     setData(formData);
  //     const formDataAsString = JSON.stringify([...formData.entries()]);
  //     alert(formDataAsString);
  //     // eslint-disable-next-line no-console
  //     console.log(
  //       userImage,
  //       '\n',
  //       userName,
  //       '\n',
  //       myIntro,
  //       '\n',
  //       cafeIntroTitle,
  //       '\n',
  //       cafeIntro,
  //       '\n',
  //       cafeImage,
  //     );

  //     navigate('/profile');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // 이미지 url 받아오기 -> 이미지 url
  const uploadImageToServer = async (image) => {
    const formData = new FormData();
    formData.append('multipartFile', image); // 이미지 데이터만 FormData에 추가

    try {
      const response = await baseAxios.post('s3/file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // FormData 사용 시 Content-Type 설정
        },
      });

      if (response.status === 201) {
        console.log(response.data);
        const imageUrl = response.data; // 이미지 URL을 서버 응답 데이터에서 가져옴
        console.log('Uploaded Image URL:', imageUrl);

        return imageUrl;
      } else {
        console.error('Error uploading image to server.');
      }
    } catch (error) {
      console.error('Error uploading image to server:', error);
    }
  };

  // 서버에 request 보내기 -> 프로필 수정

  const dataToServer = async (imageUrl) => {
    const userImgUrl = userImage ? await uploadImageToServer(userImage) : '';
    const cafeImgUrl = cafeImage ? await uploadImageToServer(cafeImage) : '';
    console.log(userImgUrl);
    console.log(cafeImgUrl);
    const userData = {
      userNickname: userName,
      userImg: userImgUrl[0],
      userInfo: myIntro,
      cafeTitle: cafeIntroTitle,
      cafeInfo: cafeIntro,
      cafeImg: cafeImgUrl[0],
    };
    console.log(userData);
    try {
      const response = await baseAxios.patch(`users/profile/${userName}`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      // if (response.status === 200) {
      //   const responseData = response.data;

      //   if (responseData.success) {
      //     navigate('/profile');
      //   } else {
      //     console.error('Profile update failed:', responseData.errorMessage);
      //   }
      // } else {
      //   console.error('Error updating profile:', response.statusText);
      // }
      alert('수정되었습니다.');
      navigate('/profile');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <W.Wrapper>
      <Logo />
      <S.IntroDiv id="profile" margin="90px 0px">
        <label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setUserImage)} //이미지 변경을 처리
            style={{ display: 'none' }}
          />
          <img
            src={userImage ? URL.createObjectURL(userImage) : Myprofile}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, setUserImage)}
            onClick={(e) => {
              // 이미지를 클릭하면 파일 선택 대화상자를 열기
              e.preventDefault();
              e.currentTarget.parentElement.querySelector('input[type="file"]').click();
            }}
            style={{ cursor: 'pointer', width: '232px', height: '230px' }}
            value={userImage}
            onChange={(e) => {
              setUserImage(e.target.value);
            }}
          />
        </label>
        <S.ProfileEditDiv width="540px">
          <S.NameAndButtonDiv>
            <input
              className="name"
              style={{
                border: '1px solid black',
                padding: '4px 10px',
                margin: '0px',
                outline: 'none',
              }}
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <S.ProfileBtn onClick={dataToServer}>수정 완료</S.ProfileBtn>
          </S.NameAndButtonDiv>
          <S.MyIntroText
            value={myIntro}
            onChange={(e) => {
              setMyIntro(e.target.value);
            }}
          >
            소개글
          </S.MyIntroText>
        </S.ProfileEditDiv>
      </S.IntroDiv>

      <S.IntroDiv id="cafe" height="440px" flexDirection="column" margin="-50px 0px">
        <S.ShareTxt>가장 좋아하는 카페</S.ShareTxt>
        <S.FavoriteCafe>
          <label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, setCafeImage)} //이미지 변경을 처리
              style={{ display: 'none' }}
            />
            <img
              src={cafeImage ? URL.createObjectURL(cafeImage) : Mycafe}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, setCafeImage)}
              onClick={(e) => {
                // 이미지를 클릭하면 파일 선택 대화상자를 열기
                e.preventDefault();
                e.currentTarget.parentElement.querySelector('input[type="file"]').click();
              }}
              style={{ cursor: 'pointer', width: '450px', height: '380px' }}
              value={cafeImage}
              onChange={(e) => {
                setCafeImage(e.target.value);
              }}
            />
          </label>
          <S.IntroTextDiv>
            <S.CafeIntroTitle
              placeholder="제목"
              value={cafeIntroTitle}
              onChange={(e) => {
                setCafeIntroTitle(e.target.value);
              }}
            ></S.CafeIntroTitle>
            <S.CafeIntroText
              placeholder="소개글
              "
              value={cafeIntro}
              onChange={(e) => {
                setCafeIntro(e.target.value);
              }}
            ></S.CafeIntroText>
          </S.IntroTextDiv>
        </S.FavoriteCafe>
      </S.IntroDiv>
      <S.OutBtn>회원탈퇴</S.OutBtn>
      <Footer></Footer>
    </W.Wrapper>
  );
}

export default EditProfile;
