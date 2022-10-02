import { Message } from "../types/message";

export const isValid = ({
  title,
  description,
  thumbnail,
  url,
  color,
  field,
  footer,
}: Message) => {
  if (
    title !== "" ||
    description !== "" ||
    // thumbnail.url !== "" ||
    color != "" ||
    (field.length > 0 &&
      field.every((f: any) => f.txt !== "" || f.value !== "")) ||
    footer.text !== ""
  ) {
    return true;
  }
  return false;
};
