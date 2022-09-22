import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface FieldProps {
  txt: string;
  value: string;
  id: number
  onChange: (newField: { txt: string; value: string; id: number }) => void;
}

const Field = ({ onChange, txt, value, id }: FieldProps) => {
  const [stxt, setTxt] = useState<string>(txt);
  const [svalue, setValue] = useState<string>(value);

  useEffect(() => {
    onChange({ txt: stxt, value: svalue, id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stxt, svalue]);

  const handleChange = (args: string, value: string) => {
    switch (args) {
      case "txt":
        setTxt(value);
        break;
      case "value":
        setValue(value);
        break;
    }
  };
  return (
    <main className={styles.container}>
      <div className={styles.flexbox}>
        <h2>Text</h2>
        <input
          type="text"
          maxLength={256}
          placeholder={`Entrer un texte`}
          onChange={(e) => handleChange("txt", e.target.value)}
        />
      </div>
      <div className={styles.flexbox}>
        <h2>Value</h2>
        <input
          type="text"
          maxLength={1024}
          placeholder={`Entrer une value (optionnel)`}
          onChange={(e) => handleChange("value", e.target.value)}
        />
      </div>
    </main>
  );
};

export default Field;
