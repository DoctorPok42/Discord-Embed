import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Embed, InputText, Field, InputColor, Thumbnail } from "../components";
import { isValid } from "./helper";
import { Message } from "../types/message";

const Home: NextPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<Message["title"]>("");
  const [url, setUrl] = useState<Message["url"]>("");
  const [field, setField] = useState<Message["field"]>([]);
  const [thumbnail, setThumbnail] = useState<Message["thumbnail"]>({
    url: "",
  });
  const [footer, setFooter] = useState<Message["footer"]>({
    text: "",
    // icon_url: "",
  });
  const [color, setColor] = useState<Message["color"]>("");
  const [timestamp, setTimestamp] = useState<Message["timestamp"]>("");
  const [image, setImage] = useState<Message["image"]>({
    url: "",
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
        setFooter({ ...footer, text: value });
        break;
    }
  };

  return (
    <main className="container">
      <Head>
        <title>Embed Discord</title>
        <meta charSet="UTF8" />
        <meta name="theme-color" content="#ffbd58" />
        <meta name="title" content="Embed Discord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content1">
        <InputText
          name="title"
          onChange={(args) => handleChangeInputText("title", args)}
          maxLength={256}
          autoFocus={true}
        />
        <InputText
          name="url"
          onChange={(args) => handleChangeInputText("url", args)}
        />
        <InputText
          name="description"
          onChange={(args) => handleChangeInputText("description", args)}
          maxLength={4096}
        />
        <InputText
          name="footer"
          onChange={(args) => handleChangeInputText("footer", args)}
          maxLength={256}
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
                  name: "",
                  value: "",
                  id: field.length + 1,
                },
              ]);
            }}
          >
            Add Field
          </button>

          <button
            className="btn"
            onClick={() => {
              setField(field.slice(0, field.length - 1));
            }}
            disabled={field.length === 0}
            style={{
              backgroundColor:
                field.length === 0 ? "var(--gris)" : "var(--blue)",
            }}
          >
            Remove Field
          </button>
        </div>

        {field.map((f, i) => (
          <Field
            key={i}
            name={f.name}
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

      <div className="revel">
        <div className="content2">
          {isValid({
            title,
            description,
            url,
            thumbnail,
            footer,
            color,
            timestamp,
            image,
            field,
          } as Message) ? (
            <Embed
              title={title}
              description={description}
              url={url}
              field={field}
              footer={footer}
              timestamp={timestamp ? new Date() : undefined}
              color={color}
              thumbnail={thumbnail}
            />
          ) : (
            <h2>Start by entering something</h2>
          )}
        </div>

        <div className="content3">
          {isValid({
            title,
            description,
            url,
            thumbnail,
            footer,
            color,
            timestamp,
            image,
            field,
          } as Message) ? (
            <textarea
              className="code"
              onClick={(e) => {
                e.currentTarget.select();
              }}
              value={JSON.stringify(
                {
                  embeds: [
                    {
                      ...(title && { title }),
                      ...(description && { description }),
                      ...(url && { url }),
                      ...(field[0] && {
                        fields: field.map((f) => {
                          return {
                            name: f.name,
                            value: f.value,
                          };
                        }),
                      }),
                      ...(footer["text"] && footer.text && { footer }),
                      ...(timestamp && { timestamp }),
                      ...(color && { color }),
                      // ...(thumbnail["url"] && {
                      //   thumbnail: {
                      //     url: thumbnail.url,
                      //   },
                      // }),
                    },
                  ],
                },
                null,
                2
              )}
            ></textarea>
          ) : (
            <img className="imgfav" src="/favicon.ico" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
