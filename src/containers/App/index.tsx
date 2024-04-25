import { CssBaseline, ThemeProvider } from "@mui/material";
import { Router } from "../Router";
import { theme } from "../../theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};
