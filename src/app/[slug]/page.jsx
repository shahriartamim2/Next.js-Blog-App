import Menu from "@/src/components/Menu/Menu";
import Image from "next/image";
import styles from "./singlePage.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, et!
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt="image"
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <div className={styles.username}>John Snow</div>
              <div className={styles.date}>-11.02.2023</div>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="image" fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, vel totam at sed esse nam. Odio possimus magnam eaque molestias.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, vel totam at sed esse nam. Odio possimus magnam eaque molestias.</p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default page;
