import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Router } from "../index";
import { theme } from "../../theme";
import { store } from "../../store";
import { Notification } from "../../components";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Notification />
        <CssBaseline />
        <Router />
      </Provider>
    </ThemeProvider>
  );
};
