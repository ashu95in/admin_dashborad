import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2b2d42", // Blue
      light:'#8d99ae'
    },
    secondary: {
      main: "#415a77", // Red
    },
    background: {
      default: "#edf2f4",
      dark:'#003049'
    },
    error:{
        main: "#dc004e", // Red
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default theme;
