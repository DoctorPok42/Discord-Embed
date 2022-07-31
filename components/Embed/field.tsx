import styles from "./styles.module.scss";

interface EmbedProps {
  name: string;
  value: string;
  alone?: boolean;
}

const Field = ({ name, value, alone = false }: EmbedProps) => {
  return <main className={styles.container}>{name}</main>;
};

export default Field;
