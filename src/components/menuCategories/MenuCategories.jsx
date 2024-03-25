import React from 'react'
import styles from "./menuCategories.module.css"
import Link from 'next/link'

const MenuCategories = () => {
  return (
    <div>
      <h2 className={styles.subtitle}>{"Discover by Topic"}</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          Style
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.fashion}`}>
          Fashion
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.food}`}>
          Food
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.travel}`}>
          Travel
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.culture}`}>
          Culture
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.coding}`}>
          Coding
        </Link>
      </div>
    </div>
  );
}

export default MenuCategories
