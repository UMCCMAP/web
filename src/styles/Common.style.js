import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
export const ContentsWrap = styled.div`
  width: 67rem;
  height: ${(props) => props.height || '90rem'};
  display: flex;
  align-items: center;

  flex-direction: column;
`;
