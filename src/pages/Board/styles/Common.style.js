import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
export const ContentsWrap = styled.div`
  width: 70rem;
  height: ${(props) => props.height || '90rem'};
  display: flex;
  align-items: center;

  flex-direction: column;
  @media (max-width: 70rem) {
    width: 100%;
  }
`;
export const Line = styled.div`
  width: 100%;
  height: 0.063rem;
  background: #939393;
  margin-top: ${(props) => props.top}px;
`;
