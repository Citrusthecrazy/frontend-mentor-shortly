import { createContext } from "react";

export type LinksType = {
  code: string;
  original_link: string;
  shortened_link: string;
};

export type LinksContextType = {
  links: LinksType[] | null;
  setLinks: React.Dispatch<React.SetStateAction<LinksType[] | null>>;
};

export default createContext<LinksContextType | null>(null);
