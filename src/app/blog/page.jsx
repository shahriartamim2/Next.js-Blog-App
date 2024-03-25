import React from 'react'
import styles from "./blogPage.module.css"
import Menu from '@/src/components/Menu/Menu';
import CardList from '@/src/components/cardList/CardList';

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  );
}

export default page
