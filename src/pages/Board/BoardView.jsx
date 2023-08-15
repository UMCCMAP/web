import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from '../../components/Header';
import Button from '../../components/Button';
import LocationImg from '../../assets/icon/locationIcon.png';
import { useEffect, useState } from 'react';
import tempImg from '../../assets/temp/tempcafeimg2.png';
import tempImg2 from '../../assets/temp/tempcafeimg.jpg';
import reviewIcon from '../../assets/icon/reviewIcon.png';
import reviewHeart from '../../assets/icon/reviewHeart.png';
import Footer from './components/Footer';
import * as C from './styles/Common.style';
import * as B from './styles/BoardView.style';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import baseAxios from '../../apis/baseAxios';

function BoardView() {
  const { idx } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const [data] = useState(location.state.boardData.boardContent);
  console.log(data);
  useEffect(() => {
    baseAxios
      .get(`/board/${idx}`, {
        headers: {
          Authorization: 'token value',
        },
      })
      .then((response) => {
        // 서버 응답 처리 로직을 작성합니다
        console.log(response.data);
      })
      .catch((error) => {
        // 에러 처리 로직을 작성합니다
        console.error(error);
      });
  }, []);
  const [board] = useState({
    themes: ['추천해요', '한강 뷰', '조용한', '빵 맛집', '주차관리'],
    title: '성수동 카페 뷰 맛집!',
    date: '23/07.10',
    user: 'User',
    cafeName: '성수 RSG',
    content: [
      {
        content:
          '오늘 방문한 성수동에 OOO 카페입니다.\n\n막 들어간 카페 치고 뷰가 너무 좋더라구요\n석양이 딱 보이는 위치고 디저트도 너무 맛있어요!!\n\n',
        image: `${tempImg}`,
      },
      {
        content: '메뉴가 생각보다 많아요!\n암튼 전 콜드브루 성애자라서 콜드브루 겟겟',
        image: `${tempImg2}`,
      },
    ],
    heart: 3,
    review: [
      {
        user: 'USER',
        date: '23/07/12',
        content: '오..주차가 편리해서 좋은 것 같아요! 좋은 정보 감사합니다! 좋아요 누르고 가요~',
      },
      {
        user: 'Alice',
        date: '23/08/05',
        content: '맛도 좋고 분위기도 좋아요. 다음에 또 방문하고 싶습니다.',
      },
      {
        user: 'Bob',
        date: '23/08/15',
        content: '서비스가 친절하고 가격도 저렴해서 매우 만족했습니다.',
      },
      {
        user: 'Charlie',
        date: '23/09/01',
        content: '디저트가 정말 맛있어요. 특히 초콜릿 케이크가 최고입니다!',
      },
      {
        user: 'Eve',
        date: '23/09/10',
        content: '파스타가 진짜 맛있어요. 이탈리아에서 먹은 것 같은 느낌!',
      },
    ],
  });

  return (
    <C.Wrap>
      <C.ContentsWrap height="fit-content">
        <Header />
        <B.BoardWrap>
          <B.ButtonsWrap>
            <B.ThemesWrap>
              {board.themes.map((a) => {
                return <Button key={a} width="5rem" height="2rem" name={a} />;
              })}
            </B.ThemesWrap>
            <B.ModDeleteWrap>
              <Button
                width="5rem"
                height="2rem"
                name="편집하기"
                clickHandler={() => {
                  navigate(`/board/modify/${idx}`);
                }}
              />
              <Button
                width="5rem"
                height="2rem"
                name="삭제하기"
                background="#60A7E1"
                color="#fff"
              />
            </B.ModDeleteWrap>
          </B.ButtonsWrap>
          <B.TitleWrap>
            <B.BoardTitle>{board.title}</B.BoardTitle>
            <B.InfoWrap>
              <B.Info>
                <B.Date>{board.date}</B.Date>
                <B.User>{board.user}</B.User>
              </B.Info>
              <B.Icon></B.Icon>
            </B.InfoWrap>
          </B.TitleWrap>
          <C.Line top="26"></C.Line>

          <B.CafeTitle>
            <B.CafeIcon>
              <img src={LocationImg} />
            </B.CafeIcon>
            {board.cafeName}
          </B.CafeTitle>
          <B.BoardContentsWrap>
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{
                __html: data,
              }}
            />
          </B.BoardContentsWrap>
          <B.ReviewWrap>
            <B.ReviewInfo>
              <B.ReviewIconWrap>
                <img src={reviewHeart} />
                <B.ReviewNumber color="#FF6868">{board.heart}</B.ReviewNumber>
              </B.ReviewIconWrap>

              <B.ReviewIconWrap>
                <img src={reviewIcon} />
                <B.ReviewNumber color="#60A7E1">{board.review.length}</B.ReviewNumber>
              </B.ReviewIconWrap>
            </B.ReviewInfo>
            <C.Line top="8"></C.Line>
            <B.ReviewContentsWrap>
              {board.review.map((a, i) => (
                <B.Review key={i}>
                  <B.InfoWrap>
                    <B.Icon></B.Icon>
                    <B.ReviewUserInfo>
                      <B.ReviewUser>{a.user}</B.ReviewUser>
                      <B.ReviewDate>{a.date}</B.ReviewDate>
                    </B.ReviewUserInfo>
                  </B.InfoWrap>
                  <B.ReviewContent>{a.content}</B.ReviewContent>
                </B.Review>
              ))}
            </B.ReviewContentsWrap>
          </B.ReviewWrap>
        </B.BoardWrap>
      </C.ContentsWrap>
      <Footer top="260px" />
    </C.Wrap>
  );
}
export default BoardView;
