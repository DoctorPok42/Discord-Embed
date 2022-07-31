import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Embed, InputText, Field, InputColor } from "../components";

const Home: NextPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [field, setField] = useState<{ name: string; value: string }[]>([]);
  const [thumbnail, setThumbnail] = useState<{
    url: string;
    width: number;
    height: number;
  }>({
    url: "",
    width: 0,
    height: 0,
  });
  const [footer, setFooter] = useState<{ text: string; icon_url: string }>({
    text: "",
    icon_url: "",
  });
  const [color, setColor] = useState<number | string>("");
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

  // voir si tout les champs sont remplis
  const isValid = () => {
    if (
      title !== "" ||
      description !== "" ||
      thumbnail.url !== "" ||
      color !== "" ||
      timestamp !== ""
    ) {
      return true;
    }
    return false;
  };

  const handleChange = (args: string, value: any) => {
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
      case "color":
        setColor(value);
        break;
      case "timestamp":
        setTimestamp(value);
        break;
      default:
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
          onChange={(args) => handleChange("title", args)}
        />
        <InputText name="url" onChange={(args) => handleChange("url", args)} />
        <InputText
          name="description"
          onChange={(args) => handleChange("description", args)}
        />
        <InputColor onChange={(args) => handleChange("color", args)} />
        <div className="content_btn">
          {/* quand on appui sur le bouton ajouter un Field comosant */}
          <button
            className="btn"
            onClick={() => {
              setField([...field, { name: "", value: "" }]);
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
            name={`field n°${i}`}
            txt="Nom du champ"
            value={f.value}
            onChange={(args) => handleChange(`field${i}`, args)}
          />
        ))}
      </div>
      <div className="content2">
        {isValid() ? (
          <Embed
            title={title ? title : null}
            description={description ? description : null}
            url={url ? url : null}
            {...{ field }}
            thumbnail={{
              url: "https://discord.com/assets/logo-8b5b8f8f8f8f8f8f8f8f8f8f8f8f8f8f8.png",
              width: 128,
              height: 128,
            }}
            footer={{
              text: "text",
              icon_url:
                "https://discord.com/assets/logo-8b5b8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8.png",
            }}
            color={color ? color : null}
            timestamp="2020-01-01"
          />
        ) : (
          <h2>Commencez par rentrer quelque chose</h2>
        )}
      </div>
    </main>
  );
};

export default Home;
