import React from "react";
import styles from "./styles.module.scss";

interface InputColorProps {
  setColor: (color: string) => void;
}

const InputColor = ({ setColor }: InputColorProps) => {
  return (
    <main className={styles.container}>
      <h2>Ajouter une couleur</h2>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
    </main>
  );
};

export default InputColor;
