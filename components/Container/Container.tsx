import React, { FC, HTMLProps } from "react";

const Container: FC<HTMLProps<HTMLDivElement>> = ({ className, children }) => {
  return (
    <div style={{ width: "77%", margin: "auto" }} className={className}>
      {children}
    </div>
  );
};

export default Container;
