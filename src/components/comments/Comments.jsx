import Image from "next/image";
import Link from "next/link";
import styles from "./comments.module.css";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment"
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="image"
              height={50}
              width={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <div className={styles.username}>John Snow</div>
              <div className={styles.date}>-11.02.2023</div>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo
            mollitia debitis dolor nisi soluta officia beatae necessitatibus
            commodi. Corporis.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="image"
              height={50}
              width={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <div className={styles.username}>John Snow</div>
              <div className={styles.date}>-11.02.2023</div>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo
            mollitia debitis dolor nisi soluta officia beatae necessitatibus
            commodi. Corporis.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="image"
              height={50}
              width={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <div className={styles.username}>John Snow</div>
              <div className={styles.date}>-11.02.2023</div>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo
            mollitia debitis dolor nisi soluta officia beatae necessitatibus
            commodi. Corporis.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="image"
              height={50}
              width={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <div className={styles.username}>John Snow</div>
              <div className={styles.date}>-11.02.2023</div>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo
            mollitia debitis dolor nisi soluta officia beatae necessitatibus
            commodi. Corporis.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt="image"
              height={50}
              width={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <div className={styles.username}>John Snow</div>
              <div className={styles.date}>-11.02.2023</div>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo
            mollitia debitis dolor nisi soluta officia beatae necessitatibus
            commodi. Corporis.lorem20
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
