import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="logo Lama"
            height={60}
            width={60}
            className={styles.logoImage}
          />
          <h1 className={styles.logoText}>Lama Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At quia
          assumenda quo mollitia porro ducimus eveniet quos vel dolore
          repellendus?
        </p>
        <div className={styles.icons}>
          <Link href="/">
            <Image src="/facebook.png" alt="facebook" height={36} width={36} />
          </Link>
          <Link href="/">
            <Image
              src="/instagram.png"
              alt="instagram"
              height={36}
              width={36}
            />
          </Link>
          <Link href="/">
            <Image src="/tiktok.png" alt="tiktok" height={36} width={36} />
          </Link>
          <Link href="/">
            <Image src="/youtube.png" alt="youtube" height={36} width={36} />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">ABout</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>

      </div>
    </div>
  );
};

export default Footer;
