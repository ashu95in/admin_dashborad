import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2b2d42", // Blue 2b2d42
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
        main: "#DC3545", // Red
        ligth:'#FF4444',
        warnning:'#FFA500'
    },
    success:{
    main:"rgba(4, 245, 4, 0.3)",
    light:'#4CAF50'
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default theme;
