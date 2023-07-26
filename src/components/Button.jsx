import { styled } from 'styled-components';
const CafeButton = styled.button`
  width: ${(props) => props.width || '70px'}; /* 너비를 props로 받아오고, 없을 경우 70px로 설정 */
  height: ${(props) => props.height || '10px'}; /* 높이를 props로 받아오고, 없을 경우 10px로 설정 */

  border-radius: 16px;
  background: #ff6868;
  cursor: pointer;
  background: #ff6868;
  padding: 8px;
  border: none;
  color: white;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Button({ name, width, height }) {
  return (
    <CafeButton width={width} height={height}>
      {name}
    </CafeButton>
  );
}
export default Button;
