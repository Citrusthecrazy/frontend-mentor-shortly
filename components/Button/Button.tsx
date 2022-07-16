import React, { FC, HTMLProps } from "react";
import styles from "./Button.module.scss";
type ButtonType = {
  variant?: "primary" | "text";
};

const Button: FC<ButtonType & HTMLProps<HTMLButtonElement>> = ({
  variant = "primary",
  children,
  ...props
}) => {
  if (variant === "primary") {
    return (
      <button
        onClick={props.onClick}
        className={styles.button + " " + styles.primary}>
        {children}
      </button>
    );
  } else
    return (
      <button
        onClick={props.onClick}
        className={styles.button + " " + styles.text}>
        {children}
      </button>
    );
};

export default Button;
