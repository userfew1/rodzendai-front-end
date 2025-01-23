import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Paper, TextField } from "@mui/material";
import { COLORS } from "../assets/constants";
import ProfileCard from "../widget/ProfileCard";
import EndfileCard from "../widget/EndfileCard";
import {
  ScreeningForm,
  EvaluationResultSuccess,
  EvaluationResultFailure,
} from "../widget/UiCaseStatus";

const CaseDetails: React.FC = () => {
  const { id } = useParams();
  const location = useLocation(); // ใช้ดึงข้อมูลที่ส่งมาจากหน้าเดิม
  const navigate = useNavigate();
  interface InfoBoxProps {
    title: string;
    details: Detail[];
  }
  type Detail = [label: string, value: React.ReactNode];
  // รับค่าที่ถูกส่งมา เช่น status
  const { status } = location.state || { status: "ไม่ได้" };

  const statusDetails: Record<string, { color: string; message: string }> = {
    ได้: {
      color: "#99D4D2",
      message: "สามารถเดินทางได้",
    },
    ไม่ได้: {
      color: "#FF6F61",
      message: "ไม่สามารถเดินทางได้",
    },
    รอคัดกรอง: {
      color: "#6A9BFF",
      message: "กำลังรอการคัดกรอง",
    },
  };
  const handleBackClick = () => {
    navigate("/new-cases"); // เปลี่ยนเส้นทางกลับไปยังหน้า NewCases
  };
  const InfoBox: React.FC<InfoBoxProps> = ({ title, details }) => (
    <Paper
      sx={{
        padding: "16px",
        borderRadius: "8px",
        border: "1px solid #6A9BFF",
        height: "156px",
        width: "364px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: "bold", color: "#407BF1" }}>
          {title}
        </Typography>
      </Box>
      <Box>
        {details.map(([label, value], idx) => (
          <Typography
            key={idx}
            sx={{
              color: "#4F4F4F",
              display: "flex",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <Typography sx={{ color: "#407BF1", textAlign: "center" }}>
              {label}
            </Typography>
            {value}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
  const data: InfoBoxProps[] = [
    {
      title: "ข้อมูลนัดหมาย",
      details: [
        ["วันที่และเวลานัดหมาย :", "12/02/2568 (13.00 น.)"],
        ["ชื่อโรงพยาบาล :", "092 3565412"],
        [
          "แนบเอกสารใบนัด :",
          <Box sx={{ textDecoration: "underline", color: "#407BF1" }}>
            ดูข้อมูล
          </Box>,
        ],
      ],
    },
    {
      title: "ข้อมูลผู้แจ้ง / ผู้ติดต่อ",
      details: [
        ["ชื่อ - นามสกุล :", "ธิดาพร ยิ่งงาม"],
        ["ความสัมพันธ์ :", "ญาติ"],
        ["เบอร์โทรติดต่อ :", "092 3565412"],
      ],
    },
    {
      title: "ข้อมูลผู้ติดตามลำดับที่ 1",
      details: [
        ["ชื่อ - นามสกุล :", "ธิดาพร ยิ่งงาม"],
        ["ความสัมพันธ์ :", "ญาติ"],
        ["เบอร์โทรติดต่อ :", "092 3565412"],
      ],
    },
    {
      title: "ข้อมูลผู้ติดตามลำดับที่ 2",
      details: [
        ["ชื่อ - นามสกุล :", "ปิยะพัทธ์ ยิ่งงาม"],
        ["ความสัมพันธ์ :", "ญาติ"],
        ["เบอร์โทรติดต่อ :", "092 3565412"],
      ],
    },
  ];
  return (
    <Box
      sx={{
        padding: "12px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr", // แบ่งคอลัมน์ซ้ายขวา
        gap: "16px",
        backgroundColor: "#F8FAFF",
        
        minHeight: "100vh",
      }}
    >
      {/* ข้อมูลด้านซ้าย */}

      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "16px",
            
          }}
        >
          <img
            src="/drop_down.svg"
            alt="Icon"
            style={{
              width: "24px",
              height: "24px",
              marginRight: "8px",
              cursor: "pointer",
            }}
            onClick={handleBackClick}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#007BFF",
              marginRight: "auto", // ทำให้ข้อความถัดไปชิดขวา
            }}
          >
            ปียะพักร์ ยิ่งงาม
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#6C757D",
            }}
          >
            วันที่บันทึก: 16/11/2568 | ผู้บันทึก: สุขสันต์ วงศ์ล่ำ | รหัสเคส:{" "}
            {id}
          </Typography>
        </Box>

        {/* กล่องข้อมูล */}

        <ProfileCard />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(364px, 1fr))", // คอลัมน์ปรับตามขนาดหน้าจอ
            gap: "24px", // ระยะห่างระหว่างไอเทม (ทั้งแนวนอนและแนวตั้ง)
          }}
        >
          {data.map((item, idx) => (
            <Paper
              key={idx}
              sx={{
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid #6A9BFF", // เส้นขอบ
                height: "156px",
                width: "100%", // ปรับให้เต็มคอลัมน์ของ grid
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.05)", // เงาตามกำหนด
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: "bold", color: "#407BF1" }}>
                  {item.title}
                </Typography>
              </Box>
              <Box>
                {item.details.map(([label, value], idx) => (
                  <Typography
                    key={idx}
                    sx={{
                      color: "#4F4F4F",
                      display: "flex",
                      justifyContent: "space-between",
                      textAlign: "center",
                    }}
                  >
                    <Typography sx={{ color: "#407BF1", textAlign: "center" }}>
                      {label}
                    </Typography>
                    {value}
                  </Typography>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>

        <Box
          sx={{
            height: "16px",
          }}
        ></Box>
        <EndfileCard />
      </Box>
      {/* ----- */}
      <Box
        sx={{
          width: "551px",
          height: "1024px",
          backgroundColor: COLORS.background,
          boxSizing: "border-box",
          marginRight: "-32px",
          marginTop: "-35px",
          maxWidth: "1440px",
          padding: "22px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* UI ส่วนบน */}
        {status === "รอคัดกรอง" && <ScreeningForm />}
        {status === "ได้" && <EvaluationResultSuccess />}
        {status === "ไม่ได้" && <EvaluationResultFailure />}
      </Box>
    </Box>
  );
};

export default CaseDetails;
