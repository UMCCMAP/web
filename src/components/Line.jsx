import { styled } from 'styled-components';

const Linear = styled.div`
  width: 100%;
  height: 0.063rem;
  background: #939393;
  margin-top: ${(props) => props.top}px;
`;

function Line({ top }) {
  return <Linear top={top}></Linear>;
}
export default Line;
