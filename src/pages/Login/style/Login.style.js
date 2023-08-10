import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)`
  width: 183px;
  height: 47px;
  background-color: transparent;
  margin-bottom: -15px;
  border: none;
  cursor: pointer;

  img {
    width: 183px;
    height: 47px;
  }
`;

export const Hr = styled.div`
  border: 0;
  width: 100%;
  align: center;
  height: 1px;
  background: #939393;
`;
