import styled from 'styled-components';

export const SelectThemeContainer = styled.div`
  width: 384px;
  height: 514px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LocationWrap = styled.div`
  width: 100%;
`;

export const SelectThemeTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  font-family: Pretendard;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 20px;
`;

export const LocationSearch = styled.input`
  width: 100%;
  border-radius: 32px;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  font-size: 20px;
  font-weight: 400;
  color: rgba(147, 147, 147, 1);
  text-align: center;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
  &:focus {
    outline: 2px solid rgba(96, 167, 225, 1);
  }
`;

export const ThemeWrap = styled.div`
  width: 100%;
`;

export const ThemeBtn = styled.button`
  width: 100%;
  border-radius: 32px;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  font-size: 20px;
  font-weight: 700;
  font-family: Pretendard;
  color: rgba(96, 167, 225, 1);
  text-align: center;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
  cursor: pointer;
  margin-bottom: 25px;
`;

export const ThemeAddBtn = styled.button`
  width: 100%;
  border-radius: 32px;
  background-color: transparent;
  border: 2px solid rgba(241, 241, 241, 1);
  font-size: 16px;
  font-weight: 400;
  font-family: Pretendard;
  color: rgba(241, 241, 241, 1);
  text-align: center;
  padding: 8px 20px 8px 20px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const OtherSearchBtn = styled.button`
  width: 100%;
  border-radius: 32px;
  background-color: rgba(96, 167, 225, 1);
  border: none;
  font-size: 24px;
  font-weight: 700;
  font-family: Pretendard;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
  cursor: pointer;
`;
