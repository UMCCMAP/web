import React, { useState } from 'react';
import styles from './SearchNavbar.module.css';

const navItems = [
  {
    id: 1,
    name: 'home',
    image: 'src/assets/images/home.svg',
  },
  {
    id: 2,
    name: 'book',
    image: 'src/assets/images/book.svg',
  },
  {
    id: 3,
    name: 'coffee',
    image: 'src/assets/images/coffee.svg',
  },
  {
    id: 4,
    name: 'mountain',
    image: 'src/assets/images/mountain.svg',
  },
  {
    id: 5,
    name: 'car',
    image: 'src/assets/images/car.svg',
  },
  {
    id: 6,
    name: 'photo',
    image: 'src/assets/images/photo.svg',
  },
  {
    id: 7,
    name: 'bread',
    image: 'src/assets/images/bread.svg',
  },
  {
    id: 8,
    name: 'cake',
    image: 'src/assets/images/cake.svg',
  },
  {
    id: 9,
    name: 'pasta',
    image: 'src/assets/images/pasta.svg',
  },
];

function SearchNavbar() {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.cmapLogo}>
        <img src="src/assets/images/cmapmark.svg" alt="cmapmark" />
        <span>CMAP</span>
      </div>
      <ul className={styles.navbarContainer}>
        {navItems.map((data) => (
          <li
            key={data.id}
            id={data.id}
            onClick={() => setActiveNav(data.id)}
            className={
              activeNav === data.id ? `${styles.navItem} ${styles.active}` : styles.navItem
            }
          >
            <img src={`${data.image}`} alt={data.name} />
          </li>
        ))}
      </ul>
      <div className={styles.bento}>
        <img src="src/assets/images/bento.svg" alt="bento" />
      </div>
    </div>
  );
}

export default SearchNavbar;
