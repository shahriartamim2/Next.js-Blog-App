import Image from "next/image";
import Link from "next/link";
import styles from "./menu.module.css";
import MenuPost from "../menuPost/MenuPost";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's new"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false} />
      <MenuCategories/>
      <h2 className={styles.subtitle}>{"Chosen by Editors"}</h2>
      <h1 className={styles.title}>Editor Pick</h1>
      <MenuPost withImage={true} />
    </div>
  );
};

export default Menu;
