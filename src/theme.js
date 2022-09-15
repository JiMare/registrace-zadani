import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#4A90E2",
      light: "#D1ECF1",
      dark: "#2C5688",
      disabled: "#80AEE3",
    },
  },
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: "24px",
      color: "#000000",
    },
  },
});
