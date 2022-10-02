import React, { useState } from "react";
import styles from "./styles.module.scss";

interface InputTextProps {
  name: string;
  onChange: (args: string) => void;
  maxLength?: number;
  autoFocus?: boolean;
}

const InputText = ({
  onChange,
  name,
  maxLength,
  autoFocus = false,
}: InputTextProps) => {
  const [value, setValue] = useState<string>("");
  const handleChange = (args: string) => {
    setValue(args);
    onChange(args);
  };
  return (
    <main className={styles.container}>
      <h2>
        {name} :{" "}
        {maxLength && (
          <span>
            {value.length} / {maxLength}
          </span>
        )}
      </h2>
      <input
        type="text"
        placeholder={`Enter ${name}`}
        onChange={(e) => handleChange(e.target.value)}
        className={name === "description" ? styles.description : ""}
        maxLength={maxLength}
        autoFocus={autoFocus}
      />
    </main>
  );
};

export default InputText;
