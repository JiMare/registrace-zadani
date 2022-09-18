import { Alert } from "@mui/material";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Registration } from "./components/Registration";
import "./styles/style.css";
import { StyledWrapper } from "./styles/StyledWrapper";
import { theme } from "./styles/theme.js";
import styled from "styled-components";

const App = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const onRegistration = () => {
    setSuccessMessage("You have been successfully registered.");
  };
  return (
    <StyledWrapper theme={theme}>
      <div className="container">
        {successMessage && (
          <StyledAlert severity="success">{successMessage}</StyledAlert>
        )}
        <Registration onRegistration={onRegistration} />
      </div>
    </StyledWrapper>
  );
};

createRoot(document.querySelector("#app")).render(<App />);

const StyledAlert = styled(Alert)`
  margin-bottom: 1rem;
`;
