import React, { useState } from "react";
import LinksContext, { LinksType } from "../contexts/LinksContext";

const LinksProvider = ({ children }: { children: React.ReactNode }) => {
  const [links, setLinks] = useState<LinksType[] | null>(null);

  return (
    <LinksContext.Provider value={{ links, setLinks }}>
      {children}
    </LinksContext.Provider>
  );
};

export default LinksProvider;
