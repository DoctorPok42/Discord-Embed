import React, { useState } from "react";
import styles from "./styles.module.scss";

interface InputTextProps {
  name: string;
  onChange: (args: string) => void;
}

const InputText = ({ onChange, name }: InputTextProps) => {
  const handleChange = (args: string) => {
    onChange(args);
  };
  return (
    <main className={styles.container}>
      <h2>{name} : </h2>
      <input
        type="text"
        placeholder={`Enter ${name}`}
        onChange={(e) => handleChange(e.target.value)}
      />
    </main>
  );
};

export default InputText;
