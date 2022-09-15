import React from "react";
import { createRoot } from "react-dom/client";
import { Registration } from "./components/Registration";
import "./style.css";
import { StyledWrapper } from "./StyledWrapper";
import { theme } from "./theme.js";

const App = () => {
  return (
    <StyledWrapper theme={theme}>
      <div className="container">
        <Registration />
      </div>
    </StyledWrapper>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
