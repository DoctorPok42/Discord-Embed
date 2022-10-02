import React, { useState, useEffect } from "react";
import { Message } from "../../types/message";
import styles from "./styles.module.scss";

interface FieldProps {
  name: Message["field"][0]["name"];
  value: Message["field"][0]["value"];
  id: Message["field"][0]["id"];
  onChange: (newField: { name: string; value: string; id: number }) => void;
}

const Field = ({ onChange, name, value, id }: FieldProps) => {
  const [sname, setName] = useState<string>(name);
  const [svalue, setValue] = useState<string>(value);

  useEffect(() => {
    onChange({ name: sname, value: svalue, id });
  }, [sname, svalue]);

  const handleChange = (args: string, value: string) => {
    switch (args) {
      case "name":
        setName(value);
        break;
      case "value":
        setValue(value);
        break;
    }
  };
  return (
    <main className={styles.container}>
      <div className={styles.flexbox}>
        <h2>Name</h2>
        <input
          type="text"
          maxLength={256}
          placeholder={`Entrer a Name`}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div className={styles.flexbox}>
        <h2>Value</h2>
        <input
          type="text"
          maxLength={1024}
          placeholder={`Entrer a Value`}
          onChange={(e) => handleChange("value", e.target.value)}
        />
      </div>
    </main>
  );
};

export default Field;
