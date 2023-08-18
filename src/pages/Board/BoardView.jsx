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
import token from './dummy/token';
import { ReactComponent as HeartIcon } from '../../assets/icon/reviewHeart.svg';

function BoardView() {
  const { idx } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState();
  const [comment, setComment] = useState();
  const [review, setReview] = useState({
    content: '',
  });
  const [keyWords, setKeyWords] = useState(location.state);
  const [like, setLike] = useState(0);
  console.log(location.state);
  const handleClick = () => {
    const fetchData = async () => {
      try {
        const response = await baseAxios.post(`/board/${idx}/comments`, review, {
          headers: {
            Authorization: token,
          },
        });

        console.log('Response data:', response.data?.result);
        setData(response.data?.result);

        const comment = await baseAxios.get(`/board/${idx}/comments`, {
          headers: {
            Authorization: token,
          },
        });
        console.log('Comment data:', comment.data);
        setComment(comment.data); // 수정된 부분
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  };
  const handleTextareaChange = (event) => {
    setReview((review) => ({
      ...review,
      content: event.target.value,
    }));
  };
  const fetchData = async () => {
    try {
      const response = await baseAxios.get(`/board/${idx}`, {
        headers: {
          Authorization: token,
        },
      });

      console.log('Response data:', response.data?.result);
      setData(response.data?.result);

      const comment = await baseAxios.get(`/board/${idx}/comments`, {
        headers: {
          Authorization: token,
        },
      });
      console.log('Comment data:', comment.data);
      setComment(comment.data); // 수정된 부분
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [idx]);
  return (
    <C.Wrap>
      <C.ContentsWrap height="fit-content">
        <Header />
        <B.BoardWrap>
          <B.ButtonsWrap>
            <B.ThemesWrap>
              {data?.tagList.map((a) => {
                const value = Object.values(a);
                console.log(value[0]);
                return <Button key={value[0]} width="5rem" height="2rem" name={value[0]} />;
              })}
            </B.ThemesWrap>
            <B.ModDeleteWrap>
              <Button
                width="5rem"
                height="2rem"
                name="편집하기"
                clickHandler={() => {
                  navigate(`/board/modify/${idx}`, {
                    state: {
                      data,
                      keyWords,
                    },
                  });
                }}
              />

              <Button
                width="5rem"
                height="2rem"
                name="삭제하기"
                background="#60A7E1"
                color="#fff"
                clickHandler={async () => {
                  const confirmed = window.confirm('정말로 삭제하시겠습니까?');
                  if (confirmed) {
                    try {
                      await baseAxios.delete(`/board/${idx}`, {
                        headers: {
                          Authorization: token,
                        },
                      });
                      alert('삭제되었습니다.');
                      navigate('/board');
                    } catch (error) {
                      console.error('게시물 삭제 중 오류 발생:', error);
                    }
                  }
                }}
              />
            </B.ModDeleteWrap>
          </B.ButtonsWrap>
          <B.TitleWrap>
            <B.BoardTitle>{data?.boardTitle}</B.BoardTitle>
            <B.UserInfoWrap>
              <B.Info>
                <B.Date>{data?.createdAt}</B.Date>
                <B.User>{data?.nickName}</B.User>
              </B.Info>
              <B.Icon length="20%" background={data?.profileImg}></B.Icon>
            </B.UserInfoWrap>
          </B.TitleWrap>
          <C.Line top="26"></C.Line>

          <B.CafeTitle>
            <B.CafeIcon>
              <img src={LocationImg} />
            </B.CafeIcon>
            {data?.cafeName}
          </B.CafeTitle>
          <B.BoardContentsWrap>
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{
                __html: data?.boardContent,
              }}
            />
          </B.BoardContentsWrap>
          <B.ReviewWrap>
            <B.ReviewInfo>
              <B.ReviewIconWrap>
                <HeartIcon
                  onClick={async () => {
                    try {
                      await baseAxios.post(
                        `board/${idx}/like?type=${data?.like ? 0 : 1}`,
                        {},
                        {
                          headers: {
                            Authorization: token,
                          },
                        },
                      );
                      fetchData();
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                />
                <B.ReviewNumber color="#FF6868">{data?.cntLike}</B.ReviewNumber>
              </B.ReviewIconWrap>

              <B.ReviewIconWrap>
                <img src={reviewIcon} />
                <B.ReviewNumber color="#60A7E1">{comment?.length}</B.ReviewNumber>
              </B.ReviewIconWrap>
            </B.ReviewInfo>
            <C.Line top="8"></C.Line>
            <B.ReviewContentsWrap>
              {comment?.map((a, i) => (
                <B.Review key={i}>
                  <B.InfoWrap>
                    <B.Icon length="10%" background={a.userImg}></B.Icon>
                    <B.ReviewUserInfo>
                      <B.ReviewUser>{a.nickname}</B.ReviewUser>
                      <B.ReviewDate>{a.createdAt}</B.ReviewDate>
                    </B.ReviewUserInfo>
                    <B.ReviewButtons>
                      <Button
                        width="5rem"
                        height="2rem"
                        name="수정하기"
                        background="#60A7E1"
                        color="#fff"
                      />
                      <Button
                        width="5rem"
                        height="2rem"
                        name="삭제하기"
                        background="#60A7E1"
                        color="#fff"
                        clickHandler={async () => {
                          const confirmed = window.confirm('정말로 삭제하시겠습니까?');
                          if (confirmed) {
                            try {
                              await baseAxios.delete(`/board/post-comments/${a.commentIdx}`, {
                                headers: {
                                  Authorization: token,
                                },
                              });
                              alert('삭제되었습니다.');
                              const comment = await baseAxios.get(`/board/${idx}/comments`, {
                                headers: {
                                  Authorization: token,
                                },
                              });
                              setComment(comment.data);
                            } catch (error) {
                              console.error('게시물 삭제 중 오류 발생:', error);
                            }
                          }
                        }}
                      />
                    </B.ReviewButtons>
                  </B.InfoWrap>
                  <B.ReviewContent>{a.content}</B.ReviewContent>
                </B.Review>
              ))}
            </B.ReviewContentsWrap>
            <C.Line top="40" />
            <B.ReviewWriteWrap>
              <B.WriteUser>UserName</B.WriteUser>
              <B.WriteText
                value={review.content}
                onChange={handleTextareaChange}
                placeholder="댓글을 입력하세요"
              ></B.WriteText>
              <B.WriteButton
                onClick={() => {
                  handleClick();
                }}
              >
                등록
              </B.WriteButton>
            </B.ReviewWriteWrap>
          </B.ReviewWrap>
        </B.BoardWrap>
      </C.ContentsWrap>
      <Footer top="260px" />
    </C.Wrap>
  );
}
export default BoardView;
