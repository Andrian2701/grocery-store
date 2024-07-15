import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Router } from "../index";
import { theme } from "../../theme";
import { store } from "../../store";
import { Notification } from "../../components";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Provider store={store}>
          <Notification />
          <CssBaseline />
          <Router />
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
