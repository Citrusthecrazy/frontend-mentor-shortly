import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import { ThemeProvider } from "styled-components";
import LinksProvider from "./providers/LinksProvider";

const theme = {
  colors: {
    dark: "#34313D",
    black: "#232127",
    darkPurple: "#3A3054",
    purple: "#4B3F6B",
    gray: "#9E9AA8",
    white: "#EFF1F7",
    cyan: "#2BD0D0",
    cyanHover: "#9AE3E3",
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <LinksProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </LinksProvider>
);
