import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import CharactersListPage from "./ui/pages/CharactersListPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CharactersListPage />
  </StrictMode>
);
