import React, { useState } from "react";
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

  const handleItemClick = (id: number) => {
    if (selectedItem === id) {
      setIsOpen(!isOpen);
    } else {
      setSelectedItem(id);
      setIsOpen(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      {/* เมนูทางซ้าย */}
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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100%",
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
            </Box>
          ))}
        </Box>
      </Box>
      {isOpen && (
        <Box
          sx={{
            zIndex: 10,
            width: "551px", // ขนาดของ Box
            height: "920px", // ความสูงของ Box
            backgroundColor: COLORS.background, // สีพื้นหลัง
            boxSizing: "border-box",
            marginRight: "-32px", // ระยะห่างขวา
            marginTop: "-35px", // ระยะห่างจากบน
            maxWidth: "1440px", // ขนาดสูงสุด
            padding: "22px", // Padding รอบ Box
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // ให้ปุ่มอยู่ล่างสุด
          }}
        >
          <Box
            sx={{
              backgroundColor: COLORS.primary100, // สีพื้นหลังของ Box ภายใน
              width: "100%", // ใช้ความกว้าง 100% จาก Box ด้านนอก
              height: "872px", // ความสูงของ Box ภายใน
              borderRadius: "18px", // มุมมน
              padding: "18px", // Padding ภายใน Box
              display: "flex",
              flexDirection: "column",
              gap: "20px", // ระยะห่างระหว่างแต่ละไอเท็ม
              flexGrow: 1, // ให้พื้นที่ส่วนนี้ขยายไปเต็มที่
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src="/links.svg"
                alt="Icon"
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: COLORS.primary, // สีข้อความเป็นสีขาว
                }}
              >
                การเชื่อมต่อ google sheet
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src="/id.svg"
                alt="Icon"
                style={{
                  width: "24px",
                  height: "24px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "16px",
                  color: COLORS.primary, // สีข้อความเป็นสีขาว
                }}
              >
                ID หรือ Key ของ google sheet
              </Typography>
            </Box>

            <TextField
              sx={{
                width: "100%",
                marginTop: "16px",
                backgroundColor: "white",
                borderRadius: "8px",
                paddingLeft: "8px",
                border: "none",
                boxShadow: "none",
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              }}
              placeholder="กรอก ID หรือ Key"
              variant="outlined"
              InputProps={{
                disableUnderline: true,
              }}
            />

            {/* ปุ่มอยู่ที่ล่างสุด */}
            <Button
              sx={{
                height: "48px",
                backgroundColor: COLORS.primary650,
                marginTop: "auto", // ให้ปุ่มอยู่ที่ล่างสุด
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "white", // สีข้อความเป็นสีขาว
                }}
              >
                เชื่อมต่อ
              </Typography>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Settings;
