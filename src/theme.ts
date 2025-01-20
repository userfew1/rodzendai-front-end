import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#fff",
      paper: "#fff",   
    },
    text: {
      primary: "#000000", 
      secondary: "#555555", 
    },
  },
  typography: {
    fontFamily: "Noto Sans Thai, Arial, sans-serif",
  },
});

export default theme;
