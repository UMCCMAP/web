import Header from '../../components/Header';
import { styled } from 'styled-components';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
function BoardWrite() {
  const Wrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    align-items: center;
  `;
  const ContentsWrap = styled.div`
    width: 67rem;
    height: 90rem;
    display: flex;
    align-items: center;

    flex-direction: column;
  `;
  const BoardWrap = styled.div`
    width: 100%;
    height: 80rem;
    display: flex;
    flex-direction: column;
  `;
  const Line = styled.div`
    width: 100%;
    height: 0.063rem;
    background: #939393;
  `;
  const InputWrap = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 2rem;
  `;
  const TitleInput = styled.input`
    width: 60%;
    height: 95%;
    outline: none;
    background: #f1f1f1;
    border-radius: 32px;
    border: none;
    color: #939393;
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.02em;
    padding-left: 20px;
  `;
  const ContentsInput = styled.textarea`
    width: calc(100%-20px);
    margin-top: 14px;
    height: 52rem;
    border: 1px solid #939393;
    border-radius: 16px;
    padding: 10px;
    font-size: 20px;
    overflow: auto;
  `;
  const CafeNameInput = styled.input`
    width: calc(100%-20px);
    height: 3rem;
    outline: none;
    background: #f1f1f1;
    border-radius: 32px;
    border: none;
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: -0.02em;
    text-align: center;
    margin-top: 16px;
    padding-left: 20px;
  `;
  const DragDropWrap = styled.div`
    margin-top: 16px;
    width: 100%;
    height: 8rem;
    display: flex;
    border-radius: 16px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #939393;
  `;

  const DragDropTitle = styled.div`
    font-family: Pretendard;
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: -0.02em;
    text-align: center;
    padding-left: 2.625rem;
    color: #939393;
  `;
  const DragDropImages = styled.div`
    width: 21.25rem;
    height: 6.25rem;
    display: flex;
    gap: 10px;
  `;
  const Image = styled.div`
    width: 6.25rem;
    height: 6.25rem;
    background-color: #f1f1f1;
    border-radius: 32px;
  `;
  const ThemeSelectWrap = styled.div`
    width: 100%;
    height: 3.188rem;
    margin-top: 14px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #939393;
    border-radius: 16px;
  `;
  const ThemesWrap = styled.div`
    width: fit-content;
    height: 2rem;
    display: flex;
    margin-left: 10px;
    gap: 10px;
    align-items: center;
  `;
  return (
    <Wrap>
      <ContentsWrap>
        <Header name="글쓰기" />
        <BoardWrap>
          <Line></Line>
          <InputWrap>
            <TitleInput placeholder="제목" />
            <Button width="6rem" height="3rem" name="등록하기"></Button>
          </InputWrap>
          <ContentsInput></ContentsInput>
          <CafeNameInput placeholder="카페 이름" />
          <DragDropWrap>
            <DragDropTitle>Drag&Drop</DragDropTitle>
            <DragDropImages>
              <Image></Image>
              <Image></Image>
              <Image></Image>
            </DragDropImages>
          </DragDropWrap>
          <ThemeSelectWrap>
            <ThemesWrap>
              <Button width="80px" height="40px" name="질문해요"></Button>
              <Button width="80px" height="40px" name="추천해요"></Button>
              <Button width="80px" height="40px" name="디저트"></Button>
              <Button width="80px" height="40px" name="파스타"></Button>
              <Button width="80px" height="40px" name="드립커피"></Button>
              <Button width="80px" height="40px" name="음료"></Button>
              <Button width="80px" height="40px" name="CMAP"></Button>
            </ThemesWrap>
          </ThemeSelectWrap>
        </BoardWrap>
      </ContentsWrap>
      <Footer />
    </Wrap>
  );
}
export default BoardWrite;
