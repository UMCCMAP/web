import styled from 'styled-components';

// 높이 100%
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (props.flexDir ? props.flexDir : 'column')};
  justify-content: center;
  align-items: center;
`;

// 높이 !100%
export const LongWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: ${(props) => (props.flexDir ? props.flexDir : 'column')};
  justify-content: center;
  align-items: center;
  position: relative;
`;
