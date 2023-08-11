import styled from 'styled-components';

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
`;
export const ListModalCon = styled.div`
  width: 50%;
  height: 100%;
`;
export const UserCon = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  height: 100px;
  display: flex;
  align-items: flex-end;
`;
export const Line = styled.div`
  width: 250px;
  border: 3px solid #ff6868;
`;
export const UserText = styled.div`
  font-family: Inter;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: right;
  width: calc(100% - 250px);
  color: #ff6868;
`;
export const ThemeCon = styled.div`
  width: 300px;
  height: 200px;
  margin-top: 60px;
  margin-left: 30px;
`;
export const ThemeText = styled.div`
  width: 300px;
  text-align: left;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.02em;
`;
export const ThemeBox = styled.div`
  width: 100%;
  margin-top: 30px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ThemeIcons = styled.div`
  width: 100%;
  height: 65px;
`;
export const ThemeIcon = styled.div`
  width: 60px;
  height: 65px;
  justify-content: space-between;
`;
