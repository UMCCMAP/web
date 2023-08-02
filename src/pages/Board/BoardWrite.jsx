import Header from '../../components/Header';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import * as B from './styles/BoardCU.style';
import * as C from './styles/Common.style';
function BoardWrite() {
  return (
    <C.Wrap>
      <C.ContentsWrap>
        <Header name="글쓰기" />
        <B.BoardWrap>
          <C.Line top="0"></C.Line>
          <B.InputWrap>
            <B.TitleInput placeholder="제목" />
            <Button width="6rem" height="3rem" name="등록하기"></Button>
          </B.InputWrap>
          <B.ContentsInput></B.ContentsInput>
          <B.CafeNameInput placeholder="카페 이름" />
          <B.DragDropWrap>
            <B.DragDropTitle></B.DragDropTitle>
            <B.DragDropImages>
              <B.Image></B.Image>
              <B.Image></B.Image>
              <B.Image></B.Image>
            </B.DragDropImages>
          </B.DragDropWrap>
          <B.ThemeSelectWrap>
            <B.ThemesWrap>
              <Button width="80px" height="40px" name="질문해요"></Button>
              <Button width="80px" height="40px" name="추천해요"></Button>
              <Button width="80px" height="40px" name="디저트"></Button>
              <Button width="80px" height="40px" name="파스타"></Button>
              <Button width="80px" height="40px" name="드립커피"></Button>
              <Button width="80px" height="40px" name="음료"></Button>
              <Button width="80px" height="40px" name="CMAP"></Button>
            </B.ThemesWrap>
          </B.ThemeSelectWrap>
        </B.BoardWrap>
      </C.ContentsWrap>
      <Footer top="50px" />
    </C.Wrap>
  );
}
export default BoardWrite;
