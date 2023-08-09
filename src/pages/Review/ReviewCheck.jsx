import { styled } from 'styled-components';
import Footer from '../../components/footer';
import Logo from '../../components/LogoHeader';
import Imgs from '../../assets/ProfileImg.png';
import Next from './assets/NextIcon.png';
import Select from './assets/SearchSelect.png';
import Search from '../../assets/HomepageIcon/SearchLogo.png';

const Wrapper = styled.div`
  width: 100%;
  height: 1422px;
  position: relative;
  background-color: background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 45px;
  font-weight: 700;
  position: absolute;
  top: 70px;
`;
const SortDiv = styled.div`
  width: 720px;
  height: 60px;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 60px;
`;
const SortText = styled.div`
  width: 40px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  margin-right: 40px;
`;
const SortBtnDiv = styled.div`
  width: 100px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  border-radius: 40%;
  border: 1px solid #000000;

  div {
    width: fit-content;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-right: 10px;
  }
`;
const WritingDiv = styled.div`
  width: 720px;
  height: 740px;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  // border: 1px solid #444444;
`;
const WritingAll = styled.div`
  width: 710px;
  height: 220px;
  border: none;
  margin: auto;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: left;
  margin-top: 20px;
`;
const CafeName = styled.div`
  max-width: 400px;
  max-height: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 5px;
`;
const Wrting = styled.button`
  width: 720px;
  height: 200px;
  border-radius: 50px;
  border: 1px solid #000000;
  background-color: #ffffff;
  border: 1px solid #000000;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 210px;
    max-height: 210px;
    margin-right: -10px;

    //어떻게 받을지
  }
  h1 {
    font-size: 45px;
    font-weight: 700;
    align-items: center;
    color: #000000;
    margin-left: 50px;
  }
`;

const PageNumberListDiv = styled.div`
  width: 370px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
`;
const NextOrSearchBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const PageNumberList = styled.div`
  width: 320px;
  height: 100%;
  display: flex;
  justify-content: left;

  button {
    font-size: 32px;
    font-weight: 400;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #000000;
    margin-left: 7px;
  }
`;
const ReviewSearchDiv = styled.div`
  width: 700px;
  height: 60px;
  display: flex;
  border-radius: 50px;
  border: 1px solid #000000;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  input {
    width: 500px;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: 20px;
    margin-right: 20px;

    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
const SelectDiv = styled.div`
  // 기능구현 찾아보기
  height: 60px;
  width: 96px;
  margin-left: -27px;
  border-radius: 50px;
  border: 1px solid #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: fit-content;
    height: 19px;
    font-size: 15px; // 사이즈 바꾸기
    font-weight: 400;
    align-items: center;
    color: #000000;
    margin-left: 5px;
  }
  button {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
// const ITEMS_EACH_PAGE = 3;
// const PAGE_RANGE= 9;

// const [currentPage, setCurrentPage] = useState(1);

// const getCurrentPageCafes = () => {
//   const startIdx = (currentPage - 1) * ITEMS_EACH_PAGE;
//   const endIdx = startIdx + ITEMS_EACH_PAGE;
//   return slice(startIdx, endIdx);
// };

function ReviewCheck() {
  // <button onClick={() => setCurrentPage(1)}>1</button> 이런식으로
  const username = '닉네임';

  return (
    <Wrapper>
      <Logo></Logo>
      <Title>{username}'s 리뷰</Title>
      <SortDiv>
        <SortText>정렬</SortText>
        <SortBtnDiv>
          <div>날짜순</div>
          <img src={Select} alt="select" style={{ width: '17px', height: '17px' }} />
        </SortBtnDiv>
      </SortDiv>
      <WritingDiv>
        <WritingAll>
          <CafeName>카페 이름</CafeName>
          <Wrting>
            <h1>글 미리보기</h1>
            <img src={Imgs} alt="img" />
          </Wrting>
        </WritingAll>
        <WritingAll>
          <CafeName>카페 이름</CafeName>
          <Wrting>
            <h1>글 미리보기</h1>
            <img src={Imgs} alt="img" />
          </Wrting>
        </WritingAll>
        <WritingAll>
          <CafeName>카페 이름</CafeName>
          <Wrting>
            <h1>글 미리보기</h1>
            <img src={Imgs} alt="img" />
          </Wrting>
        </WritingAll>
      </WritingDiv>
      <PageNumberListDiv>
        <PageNumberList>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </PageNumberList>
        <NextOrSearchBtn>
          <img src={Next} alt="next" />
        </NextOrSearchBtn>
      </PageNumberListDiv>
      <ReviewSearchDiv>
        <SelectDiv>
          <div>카페이름</div>
          <button>
            <img src={Select} alt="select" />
          </button>
        </SelectDiv>
        <input type="text"></input>
        <NextOrSearchBtn>
          <img src={Search} alt="search" style={{ width: '24px', height: '24px' }} />
        </NextOrSearchBtn>
      </ReviewSearchDiv>
      <Footer></Footer>
    </Wrapper>
  );
}

export default ReviewCheck;
