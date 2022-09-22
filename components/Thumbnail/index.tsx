import React, { useState } from "react";
import styles from "./styles.module.scss";

interface ThumbnailProps {
  setThumbnail: (thumbnail: { url: string }) => void;
}

const Thumbnail = ({ setThumbnail }: ThumbnailProps) => {
  return (
    <main className={styles.container}>
      <h2>Ajouter un Thumbnail</h2>
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
              const img = new Image();
              img.src = reader.result as string;
              img.onload = () => {
                setThumbnail({
                  url: img.src,
                });
              };
            };
          }
        }}
      />
    </main>
  );
};

export default Thumbnail;
