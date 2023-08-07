import { styled } from 'styled-components';
const FooterWrap = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: ${(props) => props.top || 0};
`;
const FooterTitle = styled.div`
  width: 60%;
  height: 2.5rem;
  text-align: center;
`;
function Footer({ top }) {
  return (
    <FooterWrap top={top}>
      <FooterTitle>약관/개인정보처리방침/문의 보내기</FooterTitle>
    </FooterWrap>
  );
}
export default Footer;
