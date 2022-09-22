import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Embed, InputText, Field, InputColor, Thumbnail } from "../components";
import { isValid } from "./helper";
import { Message } from "../types/types";

const Home: NextPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [field, setField] = useState<
    { txt: string; value: string; id: number }[]
  >([]);
  const [thumbnail, setThumbnail] = useState<{
    url: string;
  }>({
    url: "",
  });
  const [footer, setFooter] = useState<{ value: string; icon_url: string }>({
    value: "",
    icon_url: "",
  });
  const [color, setColor] = useState<string>("");
  const [timestamp, setTimestamp] = useState<string | Date>("");
  const [image, setImage] = useState<{
    url: string;
    width: number;
    height: number;
  }>({
    url: "",
    width: 0,
    height: 0,
  });

  const handleChangeInputText = (args: string, value: any) => {
    switch (args) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "url":
        setUrl(value);
        break;
      case "footer":
        setFooter({ ...footer, value: value });
        break;
    }
  };

  return (
    <main className="container">
      <Head>
        <title>Home</title>
        <meta charSet="UTF8" />
        <meta name="theme-color" content="#ffbd58" />
        <meta name="title" content="Embed Discord" />
      </Head>
      <div className="content1">
        <InputText
          name="title"
          onChange={(args) => handleChangeInputText("title", args)}
        />
        <InputText
          name="url"
          onChange={(args) => handleChangeInputText("url", args)}
        />
        <InputText
          name="description"
          onChange={(args) => handleChangeInputText("description", args)}
        />
        <InputText
          name="footer"
          onChange={(args) => handleChangeInputText("footer", args)}
        />
        <InputColor setColor={setColor} />
        <Thumbnail setThumbnail={setThumbnail} />

        <div className="content_btn">
          <button
            className="btn"
            onClick={() => {
              setField([
                ...field,
                {
                  txt: "",
                  value: "",
                  id: field.length + 1,
                },
              ]);
            }}
          >
            Ajouter un champ
          </button>
          {/* suprimmer le dernier field */}
          <button
            className="btn"
            onClick={() => {
              setField(field.slice(0, field.length - 1));
            }}
          >
            Supprimer le dernier champ
          </button>
        </div>

        {field.map((f, i) => (
          <Field
            key={i}
            txt={f.txt}
            value={f.value}
            id={f.id}
            onChange={(newField) => {
              field.map((f) => {
                if (f.id === newField.id) {
                  setField([...field.slice(0, f.id - 1), newField]);
                }
                return f;
              });
            }}
          />
        ))}
      </div>

      <div className="content2">
        {isValid({
          title,
          description,
          url,
          field,
          thumbnail,
          footer,
        } as Message) ? (
          <Embed
            title={title ? title : null}
            description={description ? description : null}
            url={url ? url : null}
            field={field ? field : undefined}
            footer={footer ? footer : undefined}
            timestamp={timestamp ? new Date() : undefined}
            color={color ? color : null}
            thumbnail={thumbnail ? thumbnail : undefined}
          />
        ) : (
          <h2>Commencez par rentrer quelque chose</h2>
        )}
      </div>
    </main>
  );
};

export default Home;
