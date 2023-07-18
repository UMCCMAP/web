import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import '../styles/main.css';
const Wrap = styled.div`
  width: 100%;
  height: 44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeaderCon = styled.div`
  width: 100%;
  height: 3rem;
`;
const CafeListCon = styled.div`
  width: 85%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserCafeTitle = styled.div`
  width: 100%;
  font-size: 3rem;
  text-align: center;
`;
const CafeSearchWrap = styled.div`
  width: 100%;
  height: 35%;
`;
const CafeInputWrap = styled.div`
  width: 90%;
  height: 20%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;
const CafeThemeWrap = styled(CafeInputWrap)`
  height: 35%;
`;
const CafeInputTitle = styled.div`
  width: 20%;
  text-align: center;
`;
const CafeInputCon = styled.input`
  width: 50%;
  justify-content: flex-end;
  display: flex;
  height: 35px;
  border-radius: 30px;
  outline: none;
  border: 1px solid #000000;
  text-align: center;
  font-size: 25px;
`;

const CafeThemeCon = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CafeThemes = styled.button`
  width: 10%;
  height: 73%;
  border-radius: 50%;
  cursor: pointer;
  background-color: #ff6868;
  border: none;
  font-size: 0.6vw;
`;
const CafeLists = styled.div`
  width: 70%;
  height: 50%;
  margin-top: 30px;
  border: 1px solid #000000;
  border-radius: 50px;
`;
function CafeList() {
  const [userName, setuserName] = useState('');
  const themes = ['커피', '빵', '인테리어', '케이크', '브런치', '디저트'];
  const inputKinds = ['시/도', '시/구/군', '동/읍/면'];
  useEffect(() => {
    setuserName('이주영');
  }, []);
  return (
    <Wrap>
      <HeaderCon></HeaderCon>
      <CafeListCon>
        <UserCafeTitle>{userName}&apos;s CafeList</UserCafeTitle>
        <CafeSearchWrap>
          {inputKinds.map((a) => (
            <CafeInputWrap key={a}>
              <CafeInputTitle>{a}</CafeInputTitle>
              <CafeInputCon></CafeInputCon>
            </CafeInputWrap>
          ))}
          <CafeThemeWrap>
            <CafeInputTitle>테마</CafeInputTitle>
            <CafeThemeCon>
              {themes.map((a) => (
                <CafeThemes key={a}>{a}</CafeThemes>
              ))}
            </CafeThemeCon>
          </CafeThemeWrap>
        </CafeSearchWrap>
        <CafeLists></CafeLists>
      </CafeListCon>
    </Wrap>
  );
}

export default CafeList;
