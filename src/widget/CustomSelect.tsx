import { Box, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function CustomSelect() {
    const [open, setOpen] = useState(false);
  
    const handleToggle = () => {
      setOpen(!open);
    };
  
    return (
      <Select
        fullWidth
        defaultValue=""
        displayEmpty
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        IconComponent={() => (
          <Box
            component="img"
            src="/icons_page/drop_down.svg"
            alt="dropdown icon"
            onClick={handleToggle} // เพิ่มความสามารถให้คลิกได้
            sx={{
              width: "20px",
              height: "20px",
              cursor: "pointer", // แสดงเป็นปุ่มเมื่อวางเมาส์
              color: "#407BF1",
            }}
          />
        )}
        sx={{
          height: "48px",
          backgroundColor: "#F5F9FF",
          borderRadius: "8px",
          color: "#B3B3B3",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiSelect-icon": {
            top: "calc(50% - 10px)", // จัดตำแหน่งไอคอนให้ตรงกลาง
          },
          padding: "8px 16px",
          width: "408px",
        }}
      >
        <MenuItem value="" disabled>
          โปรดเลือกงบประมาณ
        </MenuItem>
        <MenuItem value="งบ1">งบ 1</MenuItem>
        <MenuItem value="งบ2">งบ 2</MenuItem>
      </Select>
    );
  }