import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { COLORS } from "../assets/constants";

const menuItems = [
  { id: 1, icon: "public/img/car.svg", label: "ประเภทการเดินทางเอกชน" },
  { id: 2, icon: "public/img/ps.svg", label: "ผู้ใช้งาน" },
  { id: 3, icon: "public/img/amp.svg", label: "รถพยาบาลเส้นด้าย" },
  { id: 4, icon: "public/img/ps2.svg", label: "ผู้ขับรถพยาบาล" },
  { id: 5, icon: "public/img/gs.svg", label: "การเชื่อมต่อ google sheet" },
];

const Settings: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [keyInput, setKeyInput] = useState<string>("");
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    // ดึงข้อมูลจาก localStorage เมื่อคอมโพเนนต์ถูกโหลด
    const storedKey = localStorage.getItem("keysheets");
    if (storedKey) {
      setKeyInput(storedKey);
      setIsConnected(true);
    }
  }, []);

  const handleItemClick = (id: number) => {
    if (selectedItem === id) {
      setIsOpen(!isOpen);
    } else {
      setSelectedItem(id);
      setIsOpen(true);
    }
  };

  const handleSaveKey = () => {
    if (keyInput.trim() === "") {
      alert("กรุณากรอก ID หรือ Key ก่อนบันทึก");
      return;
    }
    localStorage.setItem("keysheets", keyInput);
    setIsConnected(true);
    alert("บันทึกข้อมูลสำเร็จ");
  };

  const handleDisconnect = () => {
    localStorage.removeItem("keysheets");
    setKeyInput("");
    setIsConnected(false);
    alert("ยกเลิกการเชื่อมต่อสำเร็จ");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            marginBottom: "16px",
            fontSize: "16px",
            fontWeight: "bold",
            color: COLORS.primary,
          }}
        >
          การตั้งค่า
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {menuItems.map((item) => (
            <Box
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              sx={{
                width: "176px",
                height: "100px",
                display: "flex",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                backgroundColor: selectedItem === item.id ? "#C9F0EF" : "white",
                transition: "background-color 0.5s ease",
                boxSizing: "border-box",
                border: `1.5px solid ${
                  selectedItem === item.id ? "#52C0BC" : "0"
                }`,
              }}
            >
              <Box
                sx={{
                  width: "75px",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:
                    selectedItem === item.id ? "white" : COLORS.secondary100,
                  transition: "background-color 0.5s ease",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{ width: "40px", height: "40px" }}
                />
              </Box>
              <Box
                sx={{
                  width: "125px",
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: selectedItem === item.id ? "white" : "black",
                  transition: "color 0.3s ease",
                  paddingLeft: "8px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: "#00A29C",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      {isOpen && (
        <Box
          sx={{
            zIndex: 10,
            width: "551px",
            height: "920px",
            backgroundColor: COLORS.background,
            padding: "22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              backgroundColor: COLORS.primary100,
              width: "100%",
              height: "872px",
              borderRadius: "18px",
              padding: "18px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              flexGrow: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: COLORS.primary,
              }}
            >
              การเชื่อมต่อ google sheet
            </Typography>
            <TextField
              sx={{
                width: "100%",
                marginTop: "16px",
                backgroundColor: "white",
                borderRadius: "8px",
                border: "none",
                boxShadow: "none",
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              }}
              placeholder="กรอก ID หรือ Key"
              variant="outlined"
              onChange={(e) => setKeyInput(e.target.value)}
              value={keyInput}
              InputProps={{
                disableUnderline: true,
              }}
            />

            <Button
              onClick={isConnected ? handleDisconnect : handleSaveKey}
              sx={{
                height: "48px",
                backgroundColor: isConnected
                  ? COLORS.primary650
                  : COLORS.primary650,
                marginTop: "auto",
              }}
            >
              <Typography sx={{ fontSize: "16px", color: "white" }}>
                {isConnected ? "ยกเลิกการเชื่อมต่อ" : "บันทึก"}
              </Typography>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Settings;
