import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 32px;
`;

export const CloseReviewModal = styled.button`
  position: absolute;
  font-size: 20px;
  right: 20px;
  top: 25px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1;
`;
