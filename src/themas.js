import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1200,
      xl: 1536,
    }
  },
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white:'#fff',
    },
    primary: {
      main: "#272626",
      light: '#42a5f5',
      dark:'#1565c0',
      contrastText: 'white',
    },
    secondary: {
     main: "#d7537a",
      light: '#ba68c8',
      dark:'#7b1fa2',
      contrastText: 'white',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: 'rgba(0,0,0,0.38)',
    },
    background: {
      paper: '#fff',
      default:'#fff',
    }
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
    fontSize: 16,
    h1: {
      fontSize: 72,
      fontWeight:700,
    },
    h2: {
      fontSize: 38,
    },
    h3: {
      fontSize: 32,
    },
  }
});
