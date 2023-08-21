import Cmap from '@/assets/CMAP.png';
import Icon from '@/assets/LoginIcon/placeholder.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as L from './style/Login.style';
import * as S from '@/styles/Registerpage.style';
import * as W from '@/styles/Wapper.style';
import baseAxios from '@/apis/baseAxios';

function RegisterPage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  const handleInputNickname = (e) => {
    const inputNickname = e.target.value;
    setNickname(inputNickname);
  };

  const postNickname = async () => {
    await baseAxios
      .post(
        'users/nickname',
        {
          nickname: nickname,
        },
        {
          'Content-Type': 'application/json',
        },
      )
      .then(function (res) {
        if (res.data === 'redirect:/main') {
          navigate('/home');
        } else {
          alert(res.data);
        }
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  return (
    <W.Wrapper>
      <L.WholeDiv>
        <L.Logo to="/">
          <img src={Cmap} alt="Logo" />
        </L.Logo>
        <S.WelcomeText>CMAP 서비스를 이용하며 사용할 닉네임을 입력해주세요.</S.WelcomeText>
        <L.Hr></L.Hr>
        <S.NicknameSet>
          <img src={Icon} alt="Icon" />
          <input type="text" placeholder="닉네임" value={nickname} onChange={handleInputNickname} />
        </S.NicknameSet>
        <S.CompleteBtn onClick={() => postNickname()}>완료</S.CompleteBtn>
      </L.WholeDiv>
    </W.Wrapper>
  );
}

export default RegisterPage;
