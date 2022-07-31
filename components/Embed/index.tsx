import Field from "./field";

import styles from "./styles.module.scss";

interface EmbedProps {
  title?: string | null;
  description?: string | null;
  url?: string | null;
  field?: { name: string; value: string }[];
  thumbnail?: { url: string; width: number; height: number };
  footer?: { text: string; icon_url: string };
  color?: number | string | null;
  timestamp?: string | Date;
  image?: { url: string; width: number; height: number };
}

const Embed = ({
  title,
  description,
  url,
  field,
  thumbnail,
  footer,
  color,
  timestamp,
  image,
}: EmbedProps) => {
  console.log(color);
  return (
    <main className={styles.containerembed}>
      {url?.startsWith("https://") || url?.startsWith("http://") ? (
        title && (
          <a href={url} target="blank">
            <h1 className={styles.titleurl}>{title}</h1>
          </a>
        )
      ) : (
        <h1 className={styles.title}>{title}</h1>
      )}
      {description && <p className={styles.description}>{description}</p>}
      {field &&
        field.map((f, i) => <Field key={i} name={f.name} value={f.value} />)}
    </main>
  );
};

export default Embed;
