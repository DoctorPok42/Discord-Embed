import React, { useState } from "react";
import styles from "./styles.module.scss";

interface InputColorProps {
  setColor: (color: string) => void;
}

const InputColor = ({ setColor }: InputColorProps) => {
  const [color, setColorState] = useState<string>("#000000");
  const handleChangeColor = (value: string) => {
    setColorState(value);
    setColor(value);
  };
  return (
    <main className={styles.container}>
      <h2>Add a color</h2>
      <div className={styles.box}>
        <input
          type="color"
          value={color}
          typeof="color"
          onChange={(e) => handleChangeColor(e.target.value)}
        />
        <input
          type={"text"}
          placeholder={color}
          value={color}
          maxLength={7}
          onChange={(e) => handleChangeColor(e.target.value)}
        />
      </div>
    </main>
  );
};

export default InputColor;
