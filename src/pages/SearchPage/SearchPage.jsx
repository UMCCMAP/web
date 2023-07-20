import React, { useState } from 'react';
import SearchNavbar from './components/SearchNavbar';
import styles from './SearchPage.module.css';
import DetailSearch from './components/DetailSearch';

function SearchPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDetailClick = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  const handleInputText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <SearchNavbar />
      <div className={isOpen ? `${styles.searchBar} ${styles.show}` : styles.searchBar}>
        <div>
          <input
            type="text"
            name="searchText"
            placeholder="검색"
            value={searchText}
            onChange={handleInputText}
          />
        </div>
        <hr />
        <ul>
          <li onClick={handleDetailClick}>
            <div className={styles.searchCafeImg}>
              <img src="src/assets/images/example.png" alt="카페 사진" />
            </div>
            <div className={styles.searchCafeName}>카페 이름</div>
            <div className={styles.searchCafe}>클래식한 분위기의 디저트 맛집</div>
            <div className={styles.searchCafeScore}>
              <span>리뷰 21개</span>
              <hr />
              <span>평점 4.2</span>
            </div>
          </li>
          <li>
            <div className={styles.searchCafeImg}>
              <img src="src/assets/images/example.png" alt="카페 사진" />
            </div>
            <div className={styles.searchCafeName}>카페 이름</div>
            <div className={styles.searchCafe}>클래식한 분위기의 디저트 맛집</div>
            <div className={styles.searchCafeScore}>
              <span>리뷰 21개</span>
              <hr />
              <span>평점 4.2</span>
            </div>
          </li>
        </ul>
      </div>
      <div
        className={!isDetailOpen ? styles.showSearchBar : styles.closeSearchBar}
        onClick={handleClick}
      >
        <img
          src={
            !isOpen ? 'src/assets/images/openSearchbar.svg' : 'src/assets/images/closeSearchbar.svg'
          }
          alt="show"
        />
      </div>
      <DetailSearch isOpen={isDetailOpen} closeAction={handleDetailClick} />
    </div>
  );
}

export default SearchPage;
