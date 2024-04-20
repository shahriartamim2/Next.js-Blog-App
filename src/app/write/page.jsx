"use client"
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./writePage.module.css";
import Image from "next/image";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (content, delta, source, editor) => {
    setValue(content);
  };

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />{" "}
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              {" "}
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              {" "}
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="snow"
          value={value}
          onChange={handleChange}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default Page;
