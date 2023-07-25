import { styled } from 'styled-components';
const CafeButton = styled.button`
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  cursor: pointer;
  background-color: #ff6868;
  border: none;
  font-size: 0.6vw;
  font-weight: 700;
`;
function Button() {
  return <CafeButton></CafeButton>;
}
export default Button;
