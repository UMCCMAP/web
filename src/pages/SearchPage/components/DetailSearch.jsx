import React from 'react';
import styles from './DetailSearch.module.css';
import ThemeBtn from '../../../components/ThemeBtn';
import CommonBtn from '../../../components/CommonBtn';
import { AiOutlineLeft } from 'react-icons/ai';

const color = 'rgba(249, 255, 253, 1)';
const background = 'rgba(33, 174, 33, 1)';

// eslint-disable-next-line react/prop-types
function DetailSearch({ isOpen, closeAction }) {
  const openDetailHandler = () => {
    closeAction(!isOpen);
  };
  return (
    <div className={isOpen ? `${styles.detailWrapper} ${styles.open}` : styles.detailWrapper}>
      <div className={styles.detailImgContainer}>
        <AiOutlineLeft className={styles.leftIcon} size={35} onClick={openDetailHandler} />
        이미지
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
        <CommonBtn name="지도에 저장" width={70} color={color} background={background} />
        <CommonBtn name="리뷰 저장" width={70} color={color} background={background} />
      </div>
      <div className={styles.reviewContainer}>리뷰 목록</div>
    </div>
  );
}

export default DetailSearch;
