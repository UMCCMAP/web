import React, { useState } from 'react';
import styles from './SearchNavbar.module.css';

function SearchNavbar() {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.cmapLogo}>
        <img src="src/assets/images/cmapmark.svg" alt="cmapmark" />
        <span>CMAP</span>
      </div>
      <ul className={styles.navbarContainer}>
        <li
          onClick={() => setActiveNav(1)}
          className={activeNav === 1 ? `${styles.navItem} ${styles.active}` : styles.navItem}
        >
          <img src="src/assets/images/home.svg" alt="home" />
        </li>
        <li
          onClick={() => setActiveNav(2)}
          className={activeNav === 2 ? `${styles.navItem} ${styles.active}` : styles.navItem}
        >
          <img src="src/assets/images/book.svg" alt="book" />
        </li>
        <li
          onClick={() => setActiveNav(3)}
          className={activeNav === 3 ? `${styles.navItem} ${styles.active}` : styles.navItem}
        >
          <img src="src/assets/images/coffee.svg" alt="coffee" />
        </li>
        <li
          onClick={() => setActiveNav(4)}
          className={activeNav === 4 ? `${styles.navItem} ${styles.active}` : styles.navItem}
        >
          <img src="src/assets/images/mountain.svg" alt="mountain" />
        </li>
        <li
          onClick={() => setActiveNav(5)}
          className={activeNav === 5 ? `${styles.navItem} ${styles.active}` : styles.navItem}
        >
          <img src="src/assets/images/car.svg" alt="home" />
        </li>
        <li
          onClick={() => setActiveNav(6)}
          className={activeNav === 6 ? `${styles.navItem} ${styles.active}` : styles.navItem}
        >
          <img src="src/assets/images/photo.svg" alt="photo" />
        </li>
        <li
          onClick={() => setActiveNav(7)}
          className={activeNav === 7 ? `${styles.navItem} ${styles.active}` : styles.navItem}
        >
          <img src="src/assets/images/bread.svg" alt="bread" />
        </li>
        <li
          onClick={() => setActiveNav(8)}
          className={activeNav === 8 ? `${styles.navItem} ${styles.active}` : styles.navItem}
        >
          <img src="src/assets/images/cake.svg" alt="cake" />
        </li>
        <li
          onClick={() => setActiveNav(9)}
          className={activeNav === 9 ? `${styles.navItem} ${styles.active}` : styles.navItem}
        >
          <img src="src/assets/images/pasta.svg" alt="pasta" />
        </li>
      </ul>
      <div className={styles.bento}>
        <img src="src/assets/images/bento.svg" alt="bento" />
      </div>
    </div>
  );
}

export default SearchNavbar;
