import React, { useState } from "react";
import LinksContext from "../contexts/LinksContext";

const LinksProvider = ({ children }: { children: React.ReactNode }) => {
  const [links, setLinks] = useState<string[] | null>(null);

  return (
    <LinksContext.Provider value={{ links, setLinks }}>
      {children}
    </LinksContext.Provider>
  );
};

export default LinksProvider;
