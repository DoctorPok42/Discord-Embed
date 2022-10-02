import React, { useState } from "react";
import styles from "./styles.module.scss";

interface ThumbnailProps {
  setThumbnail: (thumbnail: { url: string }) => void;
}

const Thumbnail = ({ setThumbnail }: ThumbnailProps) => {
  return (
    <main className={styles.container}>
      <h2>Add thumbnail</h2>
      <div className={styles.box}>
        <input
          className="thumbnail"
          type={"file"}
          accept={"image/*"}
          onChange={(e) => {
            if (e.target.files) {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                setThumbnail({ url: reader.result as string });
              };
            }
          }}
        />
      </div>
    </main>
  );
};

export default Thumbnail;
