import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // ไฟล์ CSS ทั่วไป
import App from "./App.tsx";

// เพิ่มการ import MUI Theme
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme"; // Theme ที่คุณสร้างไว้

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
