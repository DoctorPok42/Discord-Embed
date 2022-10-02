import Field from "./field";
import Image from "next/image";

import styles from "./styles.module.scss";
import { Message } from "../../types/message";

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
}: Message) => {
  return (
    <main className={styles.containerembed}>
      <span
        className={styles.color}
        style={{ backgroundColor: color as string }}
      ></span>
      {thumbnail && thumbnail.url !== "" ? (
        <div className={styles.thumbnail}>
          <Image
            className="thumbnail"
            src={thumbnail.url}
            width={100}
            height={100}
            alt="thumbnail"
          />
        </div>
      ) : null}
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
        field.map((f, i) => <Field key={i} txt={f.name} value={f.value} />)}
      {footer && (
        <div className={styles.footer}>
          {/* {footer.icon_url && (
            <Image
              className="icon"
              src={footer.icon_url}
              width={20}
              height={20}
              alt="icon"
            />
          )} */}
          <span>{footer.text}</span>
        </div>
      )}
    </main>
  );
};

export default Embed;
