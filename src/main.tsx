import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import CharactersListPage from "./ui/pages/CharactersListPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./ui/styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CharactersListPage />
    </ThemeProvider>
  </StrictMode>
);
