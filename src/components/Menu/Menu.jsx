import Image from "next/image";
import Link from "next/link";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2>{"What's new"}</h2>
      <h1>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item} />
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Snow</span>
            <span className={styles.date}>11.02.2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
