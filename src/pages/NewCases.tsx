import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";

const NewCases: React.FC = () => {
  const rows = [
    {
      date: "09/02/2568",
      time: "13.00 น.",
      name: "จิรวัฒน์ แสนธารา",
      phone: "092 2725242",
      destination: "โรงพยาบาลพญาไท 3",
      jobNumber: "1234567",
      status: "ไม่ได้",
    },
  ];

  return (
    <Box sx={{ padding: "16px", backgroundColor: "#F8FAFC", height: "100vh",width:"90vw" }}>
      {/* Header */}
      <Box sx={{ marginBottom: "16px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#007BFF" }}>
          เคสรายการใหม่
        </Typography>
        <Typography variant="body1" sx={{ color: "#6c757d" }}>
          ทั้งหมด 250 รายการ
        </Typography>
      </Box>

      <Tabs value={0} sx={{ marginBottom: "16px" }}>
        <Tab label="ทั้งหมด (250)" />
        <Tab label="รอคัดกรอง (50)" />
        <Tab label="สามารถเดินทางได้ (100)" />
        <Tab label="ไม่สามารถเดินทางได้ (100)" />
      </Tabs>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="ค้นหา"
          size="small"
          sx={{ width: "300px", backgroundColor: "#ffffff" }}
        />
        <Box sx={{ display: "flex", gap: "8px" }}>
          <Button variant="outlined" sx={{ color: "#007BFF", borderColor: "#007BFF" }}>
            ปรับแต่ง
          </Button>
          <Button variant="contained" color="primary">
            อัปเดตข้อมูล
          </Button>
        </Box>
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
          maxWidth: "100vw",
          overflowX: "auto",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>วันที่</TableCell>
              <TableCell>เวลา</TableCell>
              <TableCell>ชื่อ - นามสกุลผู้ป่วย</TableCell>
              <TableCell>เบอร์โทรศัพท์</TableCell>
              <TableCell>จุดส่งผู้ป่วย</TableCell>
              <TableCell>เลขที่ใบงาน</TableCell>
              <TableCell>สถานะ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.destination}</TableCell>
                <TableCell>{row.jobNumber}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FF6F61",
                      color: "#ffffff",
                      borderRadius: "16px",
                      padding: "4px 16px",
                      fontSize: "0.8rem",
                      minWidth: "80px",
                    }}
                  >
                    {row.status}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default NewCases;
