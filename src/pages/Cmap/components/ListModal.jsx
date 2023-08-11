import * as M from '../../../styles/Modal.style';
import * as LM from './styles/ListModal.style';
function ListModal() {
  return (
    <M.ModalBackground>
      <LM.ListModalWrapper>
        <LM.ListModalCon>
          <LM.UserCon>
            <LM.Line></LM.Line>
            <LM.UserText>
              USERs
              <br />
              WANT List
            </LM.UserText>
            
          </LM.UserCon>
          <LM.ThemeCon>
            <LM.ThemeText>테마로 보기</LM.ThemeText>
            <LM.ThemeBox>
              <LM.ThemeIcons><LM.Theme><LM.ThemeIcon></LM.ThemeIcon><LM.ThemeText></LM.ThemeText></LM.Theme></LM.ThemeIcons>
              <LM.ThemeIcons></LM.ThemeIcons>
            </LM.ThemeBox>
          </LM.ThemeCon>
        </LM.ListModalCon>
      </LM.ListModalWrapper>
    </M.ModalBackground>
  );
}
export default ListModal;
