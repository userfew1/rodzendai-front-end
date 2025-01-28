import { Box, Paper, Typography, Divider, Button } from "@mui/material";

interface EndfileCardProps {
  pickup: {
    location: string;
    province: string;
    district: string;
    subDistrict: string;
    landmark: string;
  };
  destination: {
    location: string;
    province: string;
    district: string;
    subDistrict: string;
  };
  tripType: string; // เช่น "ขาไปและขากลับ" หรือ "ขาไปเท่านั้น"
}

const EndfileCard: React.FC<EndfileCardProps> = ({
  pickup,
  destination,
  tripType,
}) => (
  <Paper
    sx={{
      padding: "16px",
      borderRadius: "8px",
      border: "1px solid #6A9BFF",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.05)",
    }}
  >
    {/* Header */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
      <Box
        sx={{
          backgroundColor: "#FF8500",
          color: "white",
          borderRadius: "50px",
          padding: "0px 0px",
          width: "131px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textOverflow: "ellipsis", // เพิ่มสำหรับการตัดข้อความ
          overflow: "hidden", // ซ่อนข้อความส่วนเกิน
          whiteSpace: "nowrap", // ไม่ให้ข้อความขึ้นบรรทัดใหม่
        }}
        title={tripType} // Hover เพื่อดูข้อความเต็ม
      >
        {tripType || "ไม่ระบุ"} {/* ใช้ fallback หาก tripType ไม่มีค่า */}
      </Box>
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
      <LocationBox
        title="จุดรับผู้ป่วย"
        locationData={{
          location: pickup.location,
          province: pickup.province,
          district: pickup.district,
          subDistrict: pickup.subDistrict,
          landmark: pickup.landmark,
        }}
      />

      {/* จุดนำส่งผู้ป่วย */}
      <LocationBox
        title="จุดนำส่งผู้ป่วย"
        locationData={{
          location: destination.location,
          province: destination.province,
          district: destination.district,
          subDistrict: destination.subDistrict,
        }}
      />
    </Box>
  </Paper>
);

interface LocationBoxProps {
  title: string;
  locationData: {
    location: string;
    province: string;
    district: string;
    subDistrict: string;
    landmark?: string;
  };
}

const LocationBox: React.FC<LocationBoxProps> = ({ title, locationData }) => (
  <Box
    sx={{
      flex: 1,
      border: "1px solid #52C0BC",
      borderRadius: "8px",
      padding: "16px",
      backgroundColor: "#EFFAFA",
      display: "flex",
      flexDirection: "column",
      gap: "16px", // ระยะห่างระหว่างกล่อง
    }}
  >
    <Typography
      sx={{
        fontWeight: "bold",
        color: "#00A29C",
        textAlign: "center",
      }}
    >
      {title}
    </Typography>

    <Divider sx={{ borderColor: "#00A29C", width: "100%" }} />

    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {/* รายการข้อมูล */}
      <InfoRow label="สถานที่:" value={locationData.location} />
      <InfoRow label="จังหวัด:" value={locationData.province} />
      <InfoRow label="อำเภอ:" value={locationData.district} />
      <InfoRow label="แขวง:" value={locationData.subDistrict} />

      {locationData.landmark && (
        <>
          <Divider sx={{ borderColor: "#00A29C", width: "100%" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              maxWidth: "340px", // ขยายเต็มกล่อง
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center", // จัดให้อยู่กลางแนวตั้ง
                gap: "4px", // ระยะห่างระหว่างหัวข้อและข้อมูล
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#00A29C",
                  whiteSpace: "nowrap", // ไม่ให้ขึ้นบรรทัดใหม่
                }}
              >
                จุดสังเกต:
              </Typography>
              <Typography
                sx={{
                  textOverflow: "ellipsis", // แสดง ... เมื่อข้อความยาวเกิน
                  overflow: "hidden", // ซ่อนข้อความที่เกิน
                  whiteSpace: "nowrap", // ไม่ให้ข้อความขึ้นบรรทัดใหม่
                  color: "#4F4F4F",
                  fontSize: "16px",
                  maxWidth: "300px", // กำหนดความกว้างสูงสุด
                }}
                title={locationData.landmark} // Hover เพื่อแสดงข้อความเต็ม
              >
                {locationData.landmark}
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  </Box>
);

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
      color: "#4F4F4F",
    }}
  >
    <Typography sx={{ fontWeight: "bold", color: "#00A29C" }}>
      {label}
    </Typography>
    <Typography title={value}
     sx={{
      textOverflow: "ellipsis", // แสดง ... เมื่อข้อความยาวเกิน
      overflow: "hidden", // ซ่อนข้อความที่เกิน
      whiteSpace: "nowrap", // ไม่ให้ข้อความขึ้นบรรทัดใหม่
      color: "#4F4F4F",
      fontSize: "16px",
      maxWidth: "250px", // กำหนดความกว้างสูงสุด
    }}>{value}</Typography>
  </Box>
);

export default EndfileCard;
