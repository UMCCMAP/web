import { styled } from 'styled-components';
const CafeButton = styled.button`
  width: ${(props) => props.width || '70px'}; /* 너비를 props로 받아오고, 없을 경우 70px로 설정 */
  height: ${(props) => props.height || '10px'}; /* 높이를 props로 받아오고, 없을 경우 10px로 설정 */
  border-radius: 16px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};

  cursor: pointer;
  padding: 8px;
  border: none;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

function Button({ name, width, height, background, color, clickHandler }) {
  return (
    <CafeButton
      width={width}
      height={height}
      onClick={clickHandler}
      background={background}
      color={color}
    >
      {name}
    </CafeButton>
  );
}
export default Button;
