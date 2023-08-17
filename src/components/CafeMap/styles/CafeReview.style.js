import styled from 'styled-components';

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 85%;
  padding: 15px 0 5px 5px;
  box-sizing: border-box;
  margin-top: 10px;
  border-top: 0.8px solid black;
  cursor: pointer;
`;

export const ReviewItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 5x;
  position: relative;
  > button {
    border: none;
    position: absolute;
    right: 155px;
    bottom: 0;
    width: 10px;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const ReviewContent = styled.p`
  width: 60%;
  font-size: 16px;
  line-height: 1.2;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: ${(props) => props.isexpanded};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 30px;
`;

export const ReviewImgWrap = styled.div`
  width: 30%;
  position: relative;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
  > div {
    position: absolute;
    right: 0;
    bottom: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 0px 0px 5px 0px;
    font-size: 13px;
    padding: 5px 10px;
  }
`;

export const ReviewWriter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  > img {
    padding: 3px;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: contain;
  }
`;

export const WriterName = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const WriterInfo = styled.div`
  margin-top: 3px;
  font-size: 14px;
  color: gray;
  > span::after {
    content: '•';
  }
  > span:last-child::after {
    content: '';
  }
`;
