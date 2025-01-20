import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Settings from "./pages/Settings";
import NewCases from "./pages/NewCases";
import Project_case1 from "./pages/Project_case1";
import Yb_schedule from "./pages/Yb_schedule";
import Casereport from "./pages/Casereport";
import Expense_report from "./pages/Expense_report";

import Project_case2 from "./pages/Project_case2";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { COLORS } from "./assets/constants";

const App: React.FC = () => {
  return (
    <Router>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            backgroundColor: COLORS.primary100,
          }}
        >
          {appbar()}

          <Box
            sx={{
              flexGrow: 1,
              overflow: "auto",
              padding: "16px",
            }}
          >
            <Routes>
              <Route path="/overview" element={<Overview />} />
              <Route path="/new-cases" element={<NewCases />} />
              <Route path="/projectcase1" element={<Project_case1 />} />
              <Route path="/projectcase2" element={<Project_case2 />} />
              <Route path="/yb_schedule" element={<Yb_schedule />} />
              <Route path="/casereport" element={<Casereport />} />
              <Route path="/expense_report" element={<Expense_report />} />
              <Route path="/settings" element={<Settings />} />

              {/* page */}
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );

  function appbar() {
    return (
      <AppBar
        position="sticky"
        sx={{
          top: 0,
          width: "100%",
          height: "70px",
          backgroundColor: COLORS.background,
          boxShadow: "-5px 4px 10px rgba(0, 0, 0, 0.2)",
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <img
                src="/icons/notification.svg"
                alt="Notification"
                style={{ width: "25px", height: "25px" }}
              />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Box sx={{ textAlign: "right" }}>
              <Typography
                sx={{ color: COLORS.textSecondary, fontSize: "16px" }}
              >
                ยินดีต้อนรับ สุขสันต์ วงศ์ล่ำ
              </Typography>
              <Typography sx={{ color: COLORS.primary, fontSize: "12px" }}>
                ผู้ดูแลระบบ
              </Typography>
            </Box>
            <IconButton>
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: COLORS.secondary,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/icon_web.svg"
                  alt="Icon"
                  style={{
                    width: "35px",
                    height: "35px",
                  }}
                />
              </Box>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
};

export default App;
