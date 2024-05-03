import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#33b864",
    },
    secondary: {
      main: "#050505",
      light: "#808588",
    },
    error: {
      main: "#d32f2f",
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
    h4: {
      color: "#050505",
      fontWeight: 500,
      fontSize: 15,
    },
    subtitle1: {
      color: "#808588",
      fontSize: 15,
      textDecoration: "none",
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
          backgroundColor: "#f9fafb",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          height: 45,
          width: 325,
          backgroundColor: "#33b864",
          color: "#ffffff",
          textTransform: "none",
          fontSize: 15,
          fontWeight: 600,
          borderRadius: "0.5rem",
          "&:hover": {
            backgroundColor: "#2eab5c",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: 12.5,
          borderRadius: 5,
          height: 47,
          width: "100%",
          color: "#050505",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#808588",
            borderWidth: 1,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#808588",
          },
          "& input::placeholder": {
            fontSize: 12.5,
            color: "#808588",
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          color: "#050505",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#050505",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiMenuItem: {
      defaultProps: {
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          minHeight: "20.25px",
          boxShadow: "none",
          padding: 0,
          color: "#050505",
          transitionDuration: "0.2s",
          fontSize: 15,
          "&:hover": {
            color: "#33b864",
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});
