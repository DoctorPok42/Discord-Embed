import React, { useState } from "react";
import styles from "./styles.module.scss";

interface FieldProps {
  name: string | number;
  txt: string;
  value: string;
  onChange: (args: string) => void;
}

const Field = ({ onChange, name }: FieldProps) => {
  const handleChange = (args: string) => {
    onChange(args);
  };
  return (
    <main className={styles.container}>
      <h2>{name} : </h2>
      <input
        type="text"
        maxLength={256}
        placeholder={`Entrer un texte`}
        onChange={(e) => handleChange(e.target.value)}
      />
      <input
        type="text"
        maxLength={1024}
        placeholder={`Entrer une value (optionnel)`}
        onChange={(e) => handleChange(e.target.value)}
      />
    </main>
  );
};

export default Field;
