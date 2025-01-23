import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import { COLORS } from "../assets/constants";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const isCaseDetailsPage = location.pathname.startsWith("/case/");

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const isActive = (path: string) => {
    if (path === "/new-cases" && location.pathname.startsWith("/case/")) {
      return true; // เมื่ออยู่ใน CaseDetails ก็ยังถือว่า NewCases ถูกเลือก
    }
    return location.pathname === path;
  };


  const MenuItem = ({
    path,
    label,
    iconnoselect,
    iconselect,
  }: {
    path: string;
    label: string;
    iconnoselect: string;
    iconselect: string;
  }) => (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        to={path}
        onClick={() => {
          if (isCollapsed || isCaseDetailsPage) setIsCollapsed(false);
        }}
        sx={{
          backgroundColor: isActive(path)
            ? isCollapsed || isCaseDetailsPage
              ? "transparent"
              : COLORS.font_color
            : "transparent",
          color: isActive(path) ? COLORS.primary : COLORS.font_color,
          display: "flex",
          flexDirection: isCollapsed || isCaseDetailsPage ? "column" : "row",
          alignItems: "center",
          justifyContent: isCollapsed || isCaseDetailsPage ? "center" : "flex-start",
          "&:hover": {
            backgroundColor: isActive(path)
              ? isCollapsed || isCaseDetailsPage
                ? "transparent"
                : COLORS.font_color
              : "rgba(255, 255, 255, 0.1)",
          },
        }}
      >

        <Box
          sx={{
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: isActive(path) ? COLORS.font_color : "transparent",
            transition: "background-color 0.3s ease",
          }}
        >
          <img
            src={isActive(path) ? iconselect : iconnoselect}
            alt={label}
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </Box>
        {!isCollapsed && !isCaseDetailsPage && (
          <ListItemText
            primary={label}
            sx={{ whiteSpace: "nowrap", marginLeft: "16px", fontSize: "16px" }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: isCollapsed || isCaseDetailsPage ? "80px" : "240px",
          backgroundColor: COLORS.primary,
          height: "100vh",
          transition: "width 0.3s ease",
        }}
      >
        {/* Header ของ Sidebar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: isCollapsed || isCaseDetailsPage ? "center" : "space-between",
            padding: "16px",
            backgroundColor: COLORS.primary,
            color: COLORS.font_color,
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS.font_color,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: isCollapsed || isCaseDetailsPage ? "0px" : "8px",
              }}
            >
              <img
                src="/icon_web.svg"
                alt="Icon"
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
            </Box>
            {!isCollapsed && !isCaseDetailsPage && (
              <Typography sx={{ fontSize: "16px", transition: "opacity 0.3s ease", opacity: isCollapsed ? 0 : 1 }}>รถเส้นด้าย</Typography>
            )}
          </Box>

          {/* Toggle Button */}
          {!isCollapsed && !isCaseDetailsPage && (
            <img
              src="/icons/sidebar_w.svg"
              alt="Toggle Sidebar"
              style={{
                width: "24px",
                height: "24px",
                cursor: "pointer",


              }}
              onClick={toggleSidebar}
            />
          )}
        </Box>

        {/* Menu List */}
        <List>
          <MenuItem
            path="/overview"
            label="ภาพรวมและสถิติ"
            iconnoselect="/icons/overview_w.svg"
            iconselect="/icons/overview_b.svg"
          />
          <MenuItem
            path="/new-cases"
            label="เคสรายการใหม่"
            iconnoselect="/icons/new_w.svg"
            iconselect="/icons/new_b.svg"
          />
          <MenuItem
            path="/projectcase1"
            label="เคสโครงการ 1"
            iconnoselect="/icons/case1_w.svg"
            iconselect="/icons/case1_b.svg"
          />
          <MenuItem
            path="/projectcase2"
            label="เคสโครงการ 2"
            iconnoselect="/icons/case2_w.svg"
            iconselect="/icons/case2_b.svg"
          />
          <MenuItem
            path="/yb_schedule"
            label="ตารางเดินรถเส้นด้าย"
            iconnoselect="/icons/schedule_w.svg"
            iconselect="/icons/schedule_b.svg"
          />
          <MenuItem
            path="/casereport"
            label="รายงานการปิดเคส"
            iconnoselect="/icons/list_w.svg"
            iconselect="/icons/list_b.svg"
          />
          <MenuItem
            path="/expense_report"
            label="รายงานค่าเดินทาง"
            iconnoselect="/icons/money_w.svg"
            iconselect="/icons/money_b.svg"
          />
          <MenuItem
            path="/settings"
            label="การตั้งค่า"
            iconnoselect="/icons/setting_w.svg"
            iconselect="/icons/setting_b.svg"
          />
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
