import styled from 'styled-components';

export const ThemeButton = styled.button`
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  background-color: rgba(33, 174, 33, 1);
  color: ${(props) => props.color};
  background: ${(props) => props.background}
  font-size: 13px;
  font-weight: 700;  
  text-align: center;
  padding: 3px;
  box-sizing: border-box;
  cursor: pointer;
  ...style,
`;

export const CommonButton = styled.button`
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  border-radius: 30px;
  border: none;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`;
