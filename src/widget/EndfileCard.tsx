import { Box, Typography, Paper, Button, Divider } from "@mui/material";
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <Typography sx={{ display: "flex", flexDirection: "row" }}>
    <Typography component="span" sx={{ color: "#00A29C", minWidth: "60px" }}>
      {label}
    </Typography>
    <Typography component="span" sx={{ color: "#4F4F4F" }}>
      {value}
    </Typography>
  </Typography>
);

const EndfileCard = () => (
  <Paper
    sx={{
      padding: "16px",
      borderRadius: "8px",
      border: "1px solid #6A9BFF",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.05)", // เงาตามกำหนด
    }}
  >
    {/* Header */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between", // กระจายเนื้อหาให้ห่างซ้ายขวา
        alignItems: "center", // จัดให้อยู่กลางในแนวแกน Y
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "16px",
          color: "#407BF1",
        }}
      >
        ข้อมูลการขอใช้รถ
      </Typography>
      <Button

        sx={{
          backgroundColor: "#FF8500",
          color: "white",
          borderRadius: "50px",
          padding: "0px 0px",
          width: "131px",
          height: "30px",
        }}
      >
        ขาไปและขากลับ
      </Button>
    </Box>

    {/* Content */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "16px",
      }}
    >
      {/* จุดรับผู้ป่วย */}
      <Box
        sx={{
          flex: 1,
          border: "1px solid #52C0BC",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: "#EFFAFA",
        }}
      >
        {/* หัวข้อ */}
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#00A29C",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          จุดรับผู้ป่วย
        </Typography>

        {/* เส้นแบ่ง */}
        <Divider
          sx={{ borderColor: "#00A29C", width: "100%", marginBottom: "8px" }}
        />

        {/* ข้อมูล */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <InfoRow
            label="สถานที่:"
            value="เลขที่ 123/1, หมู่ 1, หมู่บ้านน้ำคิ้ม, ซอย 12/1, ถนน กุดจับ"
          />
          <InfoRow label="จังหวัด:" value="อุดรธานี" />
          <InfoRow label="อำเภอ:" value="เมืองอุดรธานี" />
          <InfoRow label="แขวง:" value="เชียงพิณ" />

          <Divider
            sx={{ borderColor: "#00A29C", width: "100%", margin: "8px 0" }}
          />

          <InfoRow
            label="จุดสังเกต:"
            value="บ้านสีขาว หลังคาสีฟ้า หน้าบ้านมีสามแยก"
          />
        </Box>
      </Box>
      {/* จุดนำส่งผู้ป่วย */}
      <Box
        sx={{
          flex: 1,
          border: "1px solid #52C0BC",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: "#EFFAFA",
        }}
      >
        {/* หัวข้อ */}
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#00A29C",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          จุดนำส่งผู้ป่วย
        </Typography>

        {/* เส้นแบ่ง */}
        <Divider
          sx={{ borderColor: "#00A29C", width: "100%", marginBottom: "8px" }}
        />

        {/* ข้อมูล */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <InfoRow label="สถานที่:" value="โรงพยาบาลพญาไท 3" />
          <InfoRow label="จังหวัด:" value="อุดรธานี" />
          <InfoRow label="อำเภอ:" value="เมืองอุดรธานี" />
          <InfoRow label="แขวง:" value="เชียงพิณ" />
        </Box>
      </Box>
    </Box>
  </Paper>
);

export default EndfileCard;
