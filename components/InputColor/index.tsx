import React, { useState } from "react";
import styles from "./styles.module.scss";

interface InputColorProps {
  value?: string | number;
  onChange: (args: string) => void;
}

const InputColor = ({ onChange, value }: InputColorProps) => {
  const handleChange = (args: string) => {
    onChange(args);
  };
  return (
    <main className={styles.container}>
      <input
        type="color"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </main>
  );
};

export default InputColor;
