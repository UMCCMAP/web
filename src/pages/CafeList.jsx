import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
const Wrap = styled.div`
  width: 100%;
  height: 53rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const HeaderCon = styled.div`
  width: 100%;
  height: 3rem;
`;
const ContentsWrap = styled.div`
width: 85%;
height: 45rem;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
}
`;
const UserCafeTitle = styled.div`
  width: 100%;
  font-size: 3rem;
  text-align: center;
  font-family: Inter;
  font-weight: 700;
  line-height: 58px;
  letter-spacing: 0em;
`;
const CafeSearchWrap = styled.div`
  width: 100%;
  height: 35%;
  margin-top: 10px;
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
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
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
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  cursor: pointer;
  background-color: #ff6868;
  border: none;
  font-size: 0.6vw;
  font-weight: 700;
`;
const CafeListsWrap = styled.div`
width: 70%;
height: 20rem;
margin-top: 30px;
border: 1px solid #000000;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
}
`;
const CafeListsCon = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: auto;
`;
const Cafe = styled.div`
  width: calc(55rem / 5);
  height: 3rem;
  text-align: center;
  border-radius: 30px;
  border: 1px solid;
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 10px;
  font-weight: 700;
  cursor: pointer;
`;
const FooterWrap = styled.div`
  width: 100%;
  height: 5rem;
  position: absolute;
  bottom: 0;
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const FooterTitle = styled.div`
  width: 60%;
  height: 2.5rem;
  text-align: center;
`;
function CafeList() {
  const [userName, setuserName] = useState('');
  const themes = ['커피', '빵', '인테리어', '케이크', '브런치', '디저트'];
  const inputKinds = ['시/도', '시/구/군', '동/읍/면'];
  const Cafes = [
    '카페1',
    '카페2',
    '카페3',
    '카페4',
    '카페5',
    '카페6',
    '카페7',
    '카페8',
    '카페9',
    '카페10',
    '카페11',
    '카페12',
  ];
  useEffect(() => {
    setuserName('이주영');
  }, []);
  return (
    <Wrap>
      <HeaderCon></HeaderCon>
      <ContentsWrap>
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
        <CafeListsWrap>
          <CafeListsCon>
            {Cafes.map((a) => (
              <Cafe key={a}>{a}</Cafe>
            ))}
          </CafeListsCon>
        </CafeListsWrap>
      </ContentsWrap>
      <FooterWrap>
        <FooterTitle>약관/개인정보처리방침/문의 보내기</FooterTitle>
      </FooterWrap>
    </Wrap>
  );
}

export default CafeList;
