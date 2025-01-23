import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  Tabs,
  Tab,
  Pagination,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { COLORS } from "../assets/constants";
import { useNavigate } from "react-router-dom";

const NewCases: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();
  const rows = [
    {
      id: 1,
      date: "09/02/2568",
      time: "13.00 น.",
      name: "จิรวัฒน์ แสนธารา",
      phone: "092 2725242",
      destination: "โรงพยาบาลพญาไท 3",
      jobNumber: "1234561",
      status: "ได้",
    },
    {
      id: 2,
      date: "10/02/2568",
      time: "14.00 น.",
      name: "สมชาย ใจดี",
      phone: "081 1234567",
      destination: "โรงพยาบาลกรุงเทพ",
      jobNumber: "1234562",
      status: "ได้",
    },
    {
      id: 3,
      date: "11/02/2568",
      time: "15.00 น.",
      name: "สมหญิง สุขสบาย",
      phone: "089 9876543",
      destination: "โรงพยาบาลวิภาวดี",
      jobNumber: "1234563",
      status: "ได้",
    },
    {
      id: 4,
      date: "12/02/2568",
      time: "16.00 น.",
      name: "สายัณห์ เจริญสุข",
      phone: "085 6543210",
      destination: "โรงพยาบาลรามคำแหง",
      jobNumber: "1234564",
      status: "ไม่ได้",
    },
    {
      id: 5,
      date: "13/02/2568",
      time: "17.00 น.",
      name: "ณัฐพงษ์ พิพัฒน์",
      phone: "084 3217890",
      destination: "โรงพยาบาลพญาไท 2",
      jobNumber: "1234565",
      status: "ไม่ได้",
    },
    {
      id: 6,
      date: "14/02/2568",
      time: "18.00 น.",
      name: "วิไลวรรณ สุวรรณ",
      phone: "087 6549870",
      destination: "โรงพยาบาลสมิติเวช",
      jobNumber: "1234566",
      status: "ไม่ได้",
    },
    {
      id: 7,
      date: "15/02/2568",
      time: "19.00 น.",
      name: "ปรเมศวร์ นฤมิตร",
      phone: "082 4561230",
      destination: "โรงพยาบาลลาดพร้าว",
      jobNumber: "1234567",
      status: "รอคัดกรอง",
    },
    {
      id: 8,
      date: "16/02/2568",
      time: "20.00 น.",
      name: "มัทนา รุ่งโรจน์",
      phone: "081 1237894",
      destination: "โรงพยาบาลยันฮี",
      jobNumber: "1234568",
      status: "รอคัดกรอง",
    },
    {
      id: 9,
      date: "17/02/2568",
      time: "21.00 น.",
      name: "ธนา วัฒนธรรม",
      phone: "080 9873210",
      destination: "โรงพยาบาลเปาโล",
      jobNumber: "1234569",
      status: "รอคัดกรอง",
    },
  ];

  const filteredRows =
    tabIndex === 0
      ? rows
      : rows.filter((row) =>
        tabIndex === 1
          ? row.status === "รอคัดกรอง"
          : tabIndex === 2
            ? row.status === "ได้"
            : row.status === "ไม่ได้"
      );

  const statusColors: Record<string, string> = {
    ได้: "#99D4D2",
    ไม่ได้: "#FFA493",
    รอคัดกรอง: "#6A9BFF",
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };
  const handleRowClick = (id: number, status: string) => {
    navigate(`/case/${id}`, { state: { status } }); // ส่ง `status` ไปใน `state`
  };
  return (
    <Box
      sx={{
        padding: "16px",
        minHeight: "100vh",
        marginBottom: "100px",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        {/* Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "24px",
              color: "#407BF1",
            }}
          >
            เคสรายการใหม่
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#407BF1",
            }}
          >
            ทั้งหมด 250 รายการ
          </Typography>
        </Box>

        {/* Actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Search Box */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#ffffff",
              borderRadius: "24px", // ทำให้เป็นวงกลมตาม UI
              padding: "0 16px",
              border: "1px solid #407BF1", // สีขอบตาม UI
              width: "408px", // ความกว้างของกล่องค้นหา
              height: "48px",
              boxSizing: "border-box", // ทำให้ padding ไม่กระทบขนาด
            }}
          >
            <img
              src="/search.svg"
              alt="Menu Icon"
              style={{
                width: "24px",
                height: "24px",
              }}
            />
            <TextField
              variant="standard" // ไม่มีเส้นขอบด้านใน
              placeholder="ค้นหา"
              InputProps={{ disableUnderline: true }} // ลบเส้นขีดใต้
              sx={{
                flex: 1,
                fontSize: "16px",
                color: "#B3B3B3",
                marginLeft: "10px",
              }}
            />
          </Box>

          {/* Icons */}
          <img
            src="/menu.svg"
            alt="Menu Icon"
            style={{
              width: "48px",
              height: "48px",
            }}
          />
          <img
            src="/up.svg"
            alt="Upload Icon"
            style={{
              width: "48px",
              height: "48px",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          justifyItems: "center",
          marginBottom: "16px",
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          sx={{
            ".MuiTabs-indicator": {
              backgroundColor: "#00A89D",
            },
            ".MuiTab-root": {
              fontWeight: "normal",
              color: "#6c757d",
            },
            ".Mui-selected": {
              fontWeight: "bold", // ตัวหนาเมื่อถูกเลือก
              color: "#00A89D", // สีเขียวเมื่อถูกเลือก
            },
          }}
        >
          <Tab label="ทั้งหมด (250)" />
          <Tab label="รอคัดกรอง (50)" />
          <Tab label="สามารถเดินทางได้ (100)" />
          <Tab label="ไม่สามารถเดินทางได้ (100)" />
        </Tabs>

        {/* Update Button */}
        <Button
          sx={{
            color: COLORS.font_color,
            backgroundColor: "#F68671",
            marginLeft: "auto", // ชิดขวา
            width: "113px",
            height: "38px",
          }}
        >
          อัปเดตข้อมูล
        </Button>
      </Box>

      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "16px",
          backgroundColor: "#99D4D2",
          height: "46px",
          borderRadius: "8px",
          fontWeight: "400",
          color: "#fff",
          fontSize: "16px",
          padding: "0px 12px 0px 0px",
        }}
      >
        <Box sx={{ textAlign: "center" }}>วันที่นัดหมาย</Box>
        <Box sx={{ textAlign: "center" }}>เวลานัดหมาย</Box>
        <Box sx={{ textAlign: "center" }}>ชื่อ - นามสกุลผู้ป่วย</Box>
        <Box sx={{ textAlign: "center" }}>เบอร์โทรศัพท์</Box>
        <Box sx={{ textAlign: "center" }}>จุดนำส่งผู้ป่วย</Box>
        <Box sx={{ textAlign: "center" }}>เลขที่ใบงาน</Box>
        <Box sx={{ textAlign: "center" }}>สถานะ</Box>
      </Box>
      {filteredRows.map((row) => (
        <Paper
          key={row.id}
          onClick={() => handleRowClick(row.id, row.status)}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "20px",
            padding: "0px 0px 0px 24px",
            height: "78px",
            marginTop: "16px",
            borderRadius: "16px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            alignItems: "center",
            backgroundColor: "#fff",
            cursor: "pointer", // เปลี่ยนเคอร์เซอร์เป็นมือเมื่อ hover
            "&:hover": {
              boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)", // เพิ่มเงาเมื่อ hover
              backgroundColor: "#f1f1f1", // เปลี่ยนสีพื้นหลังเมื่อ hover
            },
          }}
        >
          <Box>{row.date}</Box>
          <Box>{row.time}</Box>
          <Box>{row.name}</Box>
          <Box>{row.phone}</Box>
          <Box>{row.destination}</Box>
          <Box>{row.jobNumber}</Box>
          <Box
            sx={{
              backgroundColor: statusColors[row.status],
              color: "#fff",
              textAlign: "center",

              height: "30px",
              width: "104px",
              fontSize: "16px",
              borderRadius: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {row.status}
          </Box>
        </Paper>
      ))}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "16px",
          borderRadius: "100px",
        }}
      >
        <Pagination
          count={5}
          shape="rounded"
          siblingCount={1}
          boundaryCount={1}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#007BFF", // สีตัวเลขปกติ

              borderRadius: "100px",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "#B3D4FF", // สีพื้นหลังของเลขที่ถูกเลือก
              color: "#ffffff", // สีตัวอักษรของเลขที่ถูกเลือก
              borderRadius: "100px",
            },
            "& .MuiPaginationItem-ellipsis": {
              color: "#007BFF", // สีจุด ...
              borderRadius: "100px",
            },
            "& .MuiPaginationItem-previousNext": {
              color: "#FFA500", // สีลูกศร
              borderRadius: "100px",
            },
            "& .MuiPaginationItem-previousNext.Mui-disabled": {
              color: "#B0B0B0", // สีลูกศรที่ถูก disabled
            },
          }}
        />
      </Box>
      
    </Box>
  );
};

export default NewCases;
