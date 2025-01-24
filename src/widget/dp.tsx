import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { LocalizationProvider, DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { th as thLocale } from "date-fns/locale"; // สำหรับภาษาไทย

const DateRangeSelector: React.FC = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<
    [Date | null, Date | null]
  >([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={thLocale}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#407BF1",
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          เลือกช่วงวันที่
        </Typography>

        {/* DateRangePicker */}
        <DateRangePicker
          
          value={selectedDateRange}
          onChange={(newValue) => setSelectedDateRange(newValue)}
          calendars={1} // แสดงเพียง 1 ปฏิทิน
          slotProps={{
            textField: {
              fullWidth: true,
              sx: {
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px", // ปรับขอบฟิลด์ให้โค้งมน
                  backgroundColor: "#f5f5f5", // สีพื้นหลังของฟิลด์ป้อนข้อมูล
                  "&:hover": {
                    backgroundColor: "#e0e0e0", // สีพื้นหลังเมื่อ hover
                  },
                  "&.Mui-focused": {
                    borderColor: "#407BF1", // สีขอบเมื่อฟิลด์ถูกโฟกัส
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: "16px", // ขนาดฟอนต์ข้อความในฟิลด์
                  color: "#333", // สีข้อความในฟิลด์
                },
                "& .MuiFormLabel-root": {
                  fontSize: "14px", // ขนาดฟอนต์ของป้ายข้อความ (Label)
                  color: "#6c757d", // สีของป้ายข้อความ
                },
              },
            },
            day: {
              sx: {
                "&.Mui-selected": {
                  backgroundColor: "#407BF1", // สีพื้นหลังวันที่ถูกเลือก
                  color: "#ffffff", // สีตัวอักษรวันที่ถูกเลือก
                },
                "&:hover": {
                  backgroundColor: "#B3D4FF", // สีพื้นหลังเมื่อ hover บนวันที่
                },
                "&.Mui-disabled": {
                  backgroundColor: "#f0f0f0", // สีพื้นหลังของวันที่ที่ไม่สามารถเลือกได้
                  color: "#b0b0b0", // สีตัวอักษรวันที่ที่ไม่สามารถเลือกได้
                },
              },
            },
            calendarHeader: {
              sx: {
                backgroundColor: "#f5f5f5", // สีพื้นหลังส่วนหัวของปฏิทิน
                padding: "8px 16px", // เพิ่ม Padding ในส่วนหัว
                borderBottom: "1px solid #ddd", // เส้นขอบล่างของส่วนหัว
                "& .MuiTypography-root": {
                  fontSize: "18px", // ขนาดฟอนต์ข้อความส่วนหัว
                  fontWeight: "bold", // ความหนาของฟอนต์ข้อความส่วนหัว
                  color: "#407BF1", // สีข้อความส่วนหัว
                },
                "& .MuiPickersArrowSwitcher-root button": {
                  color: "#407BF1", // สีของปุ่มลูกศรซ้าย/ขวา
                },
              },
            },
            toolbar: {
              sx: {
                backgroundColor: "#407BF1", // สีพื้นหลังส่วน Toolbar
                color: "#ffffff", // สีข้อความใน Toolbar
                "& .MuiTypography-root": {
                  fontSize: "20px", // ขนาดฟอนต์ใน Toolbar
                  fontWeight: "bold", // ความหนาของฟอนต์
                },
              },
            },
          }}
          sx={{
      
            "& .MuiPickersCalendarHeader-root": {
              width: "100%", // ความกว้างของส่วนหัวปฏิทิน
            },
            "& .MuiDayCalendar-root": {
              width: "320px", // ความกว้างของปฏิทินวันที่
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default DateRangeSelector;
