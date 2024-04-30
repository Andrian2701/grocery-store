import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Router } from "../index";
import { theme } from "../../theme";
import { store } from "../../store";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Router />
      </Provider>
    </ThemeProvider>
  );
};
