import styles from "./styles.module.scss";

interface EmbedProps {
  txt: string;
  value: string;
  alone?: boolean;
}

const Field = ({ txt, value, alone = false }: EmbedProps) => {
  return (
    <main className={styles.field}>
      <h2>{txt}</h2>
      <br />
      <h2>{value}</h2>
    </main>
  );
};

export default Field;
