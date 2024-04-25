import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#050505",
    },
    secondary: {
      main: "#33b864",
    },
  },
  typography: {
    fontFamily: "Poppins, san-serif",
    h1: {
      color: "#050505",
      fontWeight: 600,
      ["@media (max-width: 576px)"]: {
        fontSize: 25,
      },
      ["@media screen and (min-width: 576px)"]: {
        fontSize: 30,
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
        },
      },
    },
  },
});
