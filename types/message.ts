export type Message = {
  title: string;
  description: string;
  url: string;
  field: {
    name: string;
    value: string;
    id: number;
  }[];
  thumbnail: {
    url: string;
  };
  footer: {
    text: string;
    // icon_url: string;
  };
  color: string;
  timestamp?: string | Date;
  image?: {
    url: string;
  };
};
