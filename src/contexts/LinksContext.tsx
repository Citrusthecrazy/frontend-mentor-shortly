import { createContext } from "react";

export type LinksContextType = {
  links: {
    code: string;
    original_link: string;
    shortened_link: string;
  }[];
  setLinks: React.Dispatch<
    React.SetStateAction<
      {
        code: string;
        original_link: string;
        shortened_link: string;
      }[]
    >
  >;
};

export default createContext<LinksContextType | null>(null);
