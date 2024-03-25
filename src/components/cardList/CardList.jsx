import React from "react";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import Menu from "../Menu/Menu";
import Pagination from "../pagination/Pagination";

function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Pagination/>
      </div>
    </div>
  );
}

export default CardList

