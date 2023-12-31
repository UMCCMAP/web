import styled from 'styled-components';

const commonTextStyles = `
  font-family: Pretendard;
  letter-spacing: -0.02em;
`;

export const ListModalWrapper = styled.div`
  width: 900px;
  height: 600px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 900px) {
    width: 100%;
  }
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;

export const ListModalCon = styled.div`
  width: 50%;
  height: 100%;
`;

export const UserCon = styled.div`
  margin: 30px 30px 0;
  height: 100px;
  display: flex;
  align-items: flex-end;
`;

export const Line = styled.div`
  width: 70%;
  border-bottom: 3px solid #ff6868;
}
`;
export const UserText = styled.div`
  ${commonTextStyles}
  font-size: 30px;
  font-weight: 700;
  text-align: right;
  width: calc(100% - 200px);
  color: #ff6868;
  @media (max-width: 900px) {
    font-size: 20px;
    width: 50%;
  }
`;

export const ThemeCon = styled.div`
  width: auto;
  height: fit-content;
  margin: 40px 30px 0;
`;

export const ThemeText = styled.div`
  width: auto;
  text-align: left;
  ${commonTextStyles}
  font-size: 20px;
  font-weight: 500;
  line-height: 48px;
`;

export const ThemeBox = styled.div`
  width: 70%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const Theme = styled.div`
  width: calc(100% / 4 - 20px);
  height: 90px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const ThemeIcons = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
`;

export const ThemeIcon = styled.div`
  width: 100%;
  height: 54px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ThemeName = styled.div`
  width: 100%;
  height: 40%;
  ${commonTextStyles}
  font-size: 11px;
  font-weight: 400;
  line-height: 29px;
  text-align: center;
  color: #939393;
`;

export const CafesWrapper = styled.div`
  margin: 40px 10px 0;
  width: 47%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Cafe = styled.div`
  width: 130px;
  height: 130px;
  margin-bottom: 20px;
  border-radius: 16px;
  background: #d9d9d9;
`;

export const CafeImg = styled.div`
  width: 100%;
  height: 80%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  ${commonTextStyles}
  font-size:11px;
  font-weight: 400;
  text-align: center;
`;

export const CafeName = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${commonTextStyles}
  font-size:13px;
  font-weight: 400;
  text-align: center;
`;

export const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
export const NoCafeWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 180px;
  ${commonTextStyles}
  font-size: 30px;
`;
