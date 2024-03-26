"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "authenticated";
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div
        className={styles.burger}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>

        {open && (
          <div className={styles.responsiveMenu}>
            <Link href="/">Homepage</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            {status === "unauthenticated" ? (
              <Link href="/login" >
                Login
              </Link>
            ) : (
              <>
                <Link href="/write" >
                  Write
                </Link>
                <span >Logout</span>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AuthLinks;
