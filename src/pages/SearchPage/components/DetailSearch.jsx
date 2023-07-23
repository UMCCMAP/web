import React, { useState } from 'react';
import styles from './DetailSearch.module.css';
import ThemeBtn from '../../../components/ThemeBtn';
import CommonBtn from '../../../components/CommonBtn';
import { AiOutlineLeft } from 'react-icons/ai';
import CafeReview from './CafeReview';
import ReviewModal from './Modal/ReviewModal';

const color = 'rgba(249, 255, 253, 1)';
const background = 'rgba(33, 174, 33, 1)';

function DetailSearch({ isOpen, closeAction }) {
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(0);

  const openDetailHandler = () => {
    closeAction(!isOpen);
  };

  const handleModalClick = () => {
    setReviewModalOpen(!reviewModalOpen);
  };

  const handleModalIndexClick = (index) => {
    setModalItem(index);
  };

  return (
    <div className={isOpen ? `${styles.detailWrapper} ${styles.open}` : styles.detailWrapper}>
      <div className={styles.detailImgContainer}>
        <AiOutlineLeft className={styles.leftIcon} size={35} onClick={openDetailHandler} />
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <h2 className={styles.detailCafeName}>카페 이름</h2>
      <div className={styles.themeBtnContainer}>
        <ThemeBtn name="뷰" color={color} background={background} />
        <ThemeBtn name="디저트" color={color} background={background} />
        <ThemeBtn name="커피" color={color} background={background} />
      </div>
      <div className={styles.reviewScore}>
        <img src="src/assets/images/scope.svg" alt="별점" />
        &nbsp;&nbsp;
        <span>4.2 / </span>
        &nbsp;
        <span>게시글 6 / </span>
        &nbsp;
        <span>리뷰 12</span>
      </div>
      <div className={styles.saveBtnContainer}>
        <CommonBtn
          name="지도에 저장"
          width="70px"
          color={color}
          background={background}
          clickEvent={() => {
            handleModalClick();
            setModalItem(1);
          }}
        />
        <CommonBtn
          name="리뷰 작성"
          width="70px"
          color={color}
          background={background}
          clickEvent={() => {
            handleModalClick();
            setModalItem(2);
          }}
        />
      </div>
      <div className={styles.reviewContainer}>
        <CafeReview
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in vero, deleniti fugiat
          laudantium maiores corrupti, dolor ea, quae ad maxime inventore consequuntur? Eaque
          voluptatem neque, at dignissimos corrupti vitae?"
          reviewImg="src/assets/images/coffee.svg"
          userImg="src/assets/images/coffee.svg"
          userName="작성자 이름"
          writeDate="날짜"
          visitCount="방문 횟수"
          clickIndex={handleModalIndexClick}
          clickEvent={handleModalClick}
        />
        <CafeReview
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil in vero, deleniti fugiat
          laudantium maiores corrupti, dolor ea, quae ad maxime inventore consequuntur? Eaque
          voluptatem neque, at dignissimos corrupti vitae?"
          reviewImg="src/assets/images/coffee.svg"
          userImg="src/assets/images/coffee.svg"
          userName="작성자 이름"
          writeDate="날짜"
          visitCount="방문 횟수"
          clickIndex={handleModalIndexClick}
          clickEvent={handleModalClick}
        />
      </div>
      {reviewModalOpen && <ReviewModal closeAction={handleModalClick} modalIndex={modalItem} />}
    </div>
  );
}

export default DetailSearch;
