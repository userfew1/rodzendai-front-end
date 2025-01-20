import { Box } from "@mui/material";
import React from "react";

const Usersetting: React.FC = () => {
  return (
    <Box
      sx={{
        width: "300px", // ขนาดกว้าง
        height: "100%", // ขนาดสูงเต็ม
        backgroundColor: "yellow", // สีพื้นหลังเหลือง
        borderRadius: "12px", // มุมมน
        border: "4px solid #FF5733", // กรอบสีแดงส้ม
        boxSizing: "border-box", // ป้องกันขอบทำให้ขนาดเปลี่ยน
      }}
    />
  );
};

export default Usersetting;
