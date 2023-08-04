import React, { useState } from 'react';
import * as D from './styles/MapCafeDetail.style';
import ThemeBtn from '../ThemeBtn';
import CommonBtn from '../CommonBtn';
import { AiOutlineLeft } from 'react-icons/ai';
import CafeReview from './CafeReview';
import { ReactComponent as Scope } from '../../assets/images/scope.svg';
import SaveCafe from './MapReview/SaveCafe';

const fontColor = 'rgba(249, 255, 253, 1)';

function MapCafeDetail({ closeAction, getReviewIndex, getUpdateReview, color, data }) {
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [clickReviewItem, setClickReviewItem] = useState(false);

  const openDetailHandler = () => {
    closeAction();
    getReviewIndex(0);
  };

  const handleModalClick = () => {
    setSaveModalOpen(false);
  };

  // const getImgCount = () => {
  //   const numImages = data.images.length;
  //   switch (numImages) {
  //     case 5:
  //       return '2fr 1fr 1fr 1fr 1fr';
  //     case 4:
  //       return '50% 25% repeat(2,1fr)';
  //     case 3:
  //       return '50% repeat(2,1fr)';
  //     case 2:
  //       return 'repeat(2, 1fr)';
  //     case 1:
  //       return '100%';
  //     default:
  //       return '50% repeat(4,1fr)';
  //   }
  // };
  return (
    <>
      <D.DetailWrapper className={!clickReviewItem ? 'zIndex' : ''}>
        <D.DetailImgContainer>
          <AiOutlineLeft className="leftIcon" size={35} onClick={openDetailHandler} />
          {data.images.map((data, index) => (
            <div key={index}>
              <D.DetailCafeImg
                src={data}
                alt="reviewPhoto"
                isfirst={index === 0 ? '200%' : '100%'}
              />
            </div>
          ))}
        </D.DetailImgContainer>
        <D.DetailCafeName color={color}>{data.title}</D.DetailCafeName>
        <D.ThemeBtnContainer>
          <ThemeBtn name="뷰" color={fontColor} background={color} />
          <ThemeBtn name="디저트" color={fontColor} background={color} />
          <ThemeBtn name="커피" color={fontColor} background={color} />
        </D.ThemeBtnContainer>
        <D.ReviewScore>
          <Scope fill={color} />
          &nbsp;&nbsp;
          <span>{data.scope} / </span>
          &nbsp;
          <span>게시글 6 / </span>
          &nbsp;
          <span>리뷰 {data.reviews.length}</span>
        </D.ReviewScore>
        <D.SaveBtnContainer>
          <CommonBtn
            name="지도에 저장"
            width="70px"
            color={fontColor}
            background={color}
            clickEvent={() => {
              setSaveModalOpen(true);
            }}
          />
          <CommonBtn
            name="리뷰 작성"
            width="70px"
            color={fontColor}
            background={color}
            clickEvent={() => {
              getReviewIndex(1);
            }}
          />
        </D.SaveBtnContainer>
        <D.ReviewContainer>
          {data.reviews.map((data, index) => (
            <CafeReview
              key={index}
              data={data}
              closeAction={handleModalClick}
              getReviewIndex={getReviewIndex}
              setClickReviewItem={setClickReviewItem}
              getUpdateReview={getUpdateReview}
            />
          ))}
        </D.ReviewContainer>
      </D.DetailWrapper>
      {saveModalOpen && <SaveCafe color={color} closeAction={handleModalClick} />}
    </>
  );
}

export default MapCafeDetail;
