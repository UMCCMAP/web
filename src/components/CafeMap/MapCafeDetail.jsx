import React, { useState } from 'react';
import * as D from './styles/MapCafeDetail.style';
import ThemeBtn from '../ThemeBtn';
import CommonBtn from '../CommonBtn';
import { AiOutlineLeft } from 'react-icons/ai';
import { MdOutlinePhotoCamera } from 'react-icons/md';
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

  const getImgCount = () => {
    const numImages = data.images.length;
    switch (numImages) {
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      default:
        return 'over';
    }
  };
  let remainer = data.images.length - 5;
  return (
    <>
      <D.DetailWrapper className={!clickReviewItem ? 'zIndex' : ''}>
        <D.DetailImgContainer className={`${getImgCount()}`}>
          <AiOutlineLeft className="leftIcon" size={35} onClick={openDetailHandler} />
          {getImgCount() === 'over' ? (
            <>
              {data.images.slice(0, 5).map((image, index) => (
                <div key={index}>
                  <D.DetailCafeImg src={image} alt="reviewPhoto" />
                  {index === 4 && (
                    <D.TextOverlay>
                      <MdOutlinePhotoCamera size="30" />
                      <p>{`${remainer}+ 더보기`}</p>
                    </D.TextOverlay>
                  )}
                </div>
              ))}
            </>
          ) : (
            <>
              {data.images.map((image, index) => (
                <div key={index}>
                  <D.DetailCafeImg src={image} alt="reviewPhoto" />
                </div>
              ))}
            </>
          )}
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
