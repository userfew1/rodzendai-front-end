import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Paper,
  TextField,
  Tooltip,
} from "@mui/material";
import { COLORS } from "../assets/constants";
import ProfileCard from "../widget/ProfileCard";
import EndfileCard from "../widget/EndfileCard";
import {
  ScreeningForm,
  EvaluationResultSuccess,
  EvaluationResultFailure,
} from "../widget/UiCaseStatus";
import { getMethod } from "../config/config_key";

const CaseDetails: React.FC = () => {
  const { id } = useParams();
  const location = useLocation(); // ใช้ดึงข้อมูลที่ส่งมาจากหน้าเดิม
  const navigate = useNavigate();
  const [rowData, setRowData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      // ตรวจสอบว่ามีข้อมูลใน localStorage แล้วหรือไม่
      const cachedData = localStorage.getItem("allData");
      let allData: string[][];

      if (cachedData) {
        // ใช้ข้อมูลจาก localStorage
        allData = JSON.parse(cachedData);
        console.log("ดึงข้อมูลจาก localStorage");
      } else {
        try {
          setLoading(true);
          console.log("ดึงข้อมูลจาก API");

          // ดึงข้อมูลทั้งหมดจาก API
          const response = await getMethod("A:AC");
          allData = response;

          // เก็บข้อมูลลง localStorage
          localStorage.setItem("allData", JSON.stringify(allData));
        } catch (err) {
          console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", err);
          setError("เกิดข้อผิดพลาดในการดึงข้อมูล");
          return;
        } finally {
          setLoading(false);
        }
      }

      // ค้นหาแถวที่ตรงกับ ID ที่ส่งมา
      const matchedRow = allData.find((row) => row[1] === id);
      const getColumnKey = (index: number): string => {
        let columnKey = "";
        while (index >= 0) {
          columnKey = String.fromCharCode((index % 26) + 65) + columnKey;
          index = Math.floor(index / 26) - 1;
        }
        return columnKey;
      };
      
      if (matchedRow) {
        // แปลงข้อมูลเป็น key-value
        const mappedData: Record<string, string> = {};
        for (let i = 0; i < matchedRow.length; i++) {
          const key = getColumnKey(i); // ใช้ฟังก์ชันที่สร้าง column key
          mappedData[key] = matchedRow[i] || "ไม่ระบุ";
        }
        setRowData(mappedData);
      } else {
        setError("ไม่พบข้อมูลสำหรับ Job ID นี้");
      }
    };

    fetchData();
  }, [id]);
  interface InfoBoxProps {
    title: string;
    details: Detail[];
  }
  type Detail = [label: string, value: React.ReactNode];
  // รับค่าที่ถูกส่งมา เช่น status
  const { status } = location.state || { status: "ไม่ได้" };
  const formatTime = (time: string): string => {
    if (!time) return "ไม่ระบุ";
    const [hours, minutes] = time.split(":"); // แยกชั่วโมงและนาที
    return `${hours}.${minutes} น.`; // จัดรูปแบบเวลา
  };

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
        [
          "วันที่และเวลานัดหมาย :",
          rowData.I ? `${rowData.I} (${formatTime(rowData.J)})` : "ไม่ระบุ",
        ],

        // คอลัมน์ A
        ["ชื่อโรงพยาบาล :", rowData.K || "ไม่ระบุ"], // คอลัมน์ D
        [
          "แนบเอกสารใบนัด :",
          <Box sx={{ textDecoration: "underline", color: "#407BF1" }}>
            {rowData.AA ? "ดูข้อมูล" : "ไม่มีข้อมูล"}{" "}
            {/* สมมติว่าคอลัมน์ Z เก็บลิงก์ */}
          </Box>,
        ],
      ],
    },
    {
      title: "ข้อมูลผู้แจ้ง / ผู้ติดต่อ",
      details: [
        ["ชื่อ - นามสกุล :", rowData.U || "ไม่ระบุ"], // คอลัมน์ C
        ["ความสัมพันธ์ :", rowData.V || "ไม่ระบุ"], // คอลัมน์ E
        ["เบอร์โทรติดต่อ :", rowData.W || "ไม่ระบุ"], // คอลัมน์ F
      ],
    },
    {
      title: "ข้อมูลผู้ติดตามลำดับที่ 1",
      details: [
        ["ชื่อ - นามสกุล :", rowData.U || "ไม่ระบุ"], // คอลัมน์ G
        ["ความสัมพันธ์ :", rowData.V || "ไม่ระบุ"], // คอลัมน์ H
        ["เบอร์โทรติดต่อ :", rowData.W || "ไม่ระบุ"], // คอลัมน์ I
      ],
    },
    {
      title: "ข้อมูลผู้ติดตามลำดับที่ 2",
      details: [
        ["ชื่อ - นามสกุล :", rowData.X || "ไม่ระบุ"], // คอลัมน์ G
        ["ความสัมพันธ์ :", rowData.Y || "ไม่ระบุ"], // คอลัมน์ H
        ["เบอร์โทรติดต่อ :", rowData.Z || "ไม่ระบุ"], // คอลัมน์ I
      ],
    },
  ];

  return (
    <Box
      sx={{
        padding: "8px",
        display: "grid",
        height: "921px",
        gridTemplateColumns: "2fr 1fr", // แบ่งคอลัมน์ซ้ายขวา
        backgroundColor: "#F8FAFF", // กำหนดตำแหน่งของ container
      }}
    >
      {/* ข้อมูลด้านซ้าย */}
      <Box
        sx={{
          overflowY: "auto", // เปิดการเลื่อนแนวตั้ง
          paddingRight: "8px", // เพิ่มระยะห่างขวาเพื่อให้ scrollbar ไม่บังเนื้อหา
          height: "100%", // ตั้งความสูงเต็มพื้นที่ที่กำหนด
          paddingBottom: "16px", // ระยะห่างด้านล่าง
          "&::-webkit-scrollbar": {
            width: "10px", // กำหนดความกว้างของ scrollbar
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: COLORS.primary100, // สีพื้นหลังของ track
            borderRadius: "10px", // ขอบโค้งของ track
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: COLORS.primary100, // สีของ thumb (แถบเลื่อน)
            borderRadius: "10px", // ขอบโค้งของ thumb
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: COLORS.primary100, // สีเมื่อ hover
          },
        }}
      >
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
              sx={{
                fontWeight: "bold",
                color: "#007BFF",
                marginRight: "auto", // ทำให้ข้อความถัดไปชิดขวา
                fontSize: "24px",
              }}
            >
              {rowData.D}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#6C757D",
              }}
            >
              วันที่บันทึก : 16/11/2024 ผู้บันทึก : สุขสันต์ วงค์สว่าง เลขที่ :{" "}
              {id}
            </Typography>
          </Box>

          {/* กล่องข้อมูล */}

          <ProfileCard
            name={rowData.D}
            contact={`${rowData.E || "ไม่ระบุ"} (หลัก), ไม่ระบุ (รอง)`}
            idNumber="ไม่ระบุ"
            birthday="ไม่ระบุ"
            age={24}
            documentLink="/link-to-document"
            patientType={rowData.F}
            serviceType={rowData.C}
            travelAbility={rowData.G}
            diagnosis={rowData.H}
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(364px, 1fr))", // คอลัมน์ปรับตามขนาดหน้าจอ
              gap: "18px", // ระยะห่างระหว่างไอเทม (ทั้งแนวนอนและแนวตั้ง)
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
                      <Typography
                        sx={{
                          color: "#407BF1",
                          textAlign: "center",
                        }}
                      >
                        {label}
                      </Typography>
                      <Tooltip title={value}>
                        <Box
                          sx={{
                            maxWidth: "65%", // จำกัดความกว้างสูงสุด
                            textOverflow: "ellipsis", // แสดง ... เมื่อข้อความยาวเกิน
                            overflow: "hidden", // ซ่อนข้อความที่เกิน
                            whiteSpace: "nowrap", // ไม่ให้ข้อความขึ้นบรรทัดใหม่
                            fontSize: "16px", // ขนาดตัวอักษร
                            display: "block", // ใช้ block เพื่อควบคุมข้อความ
                          }}
                        >
                          {value}
                        </Box>
                      </Tooltip>
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
          <EndfileCard
            pickup={{
              location: rowData.L || "ไม่ระบุ",
              province: rowData.M || "ไม่ระบุ",
              district: rowData.N || "ไม่ระบุ",
              subDistrict: rowData.O || "ไม่ระบุ",
              landmark: rowData.P || "ไม่ระบุ",
            }}
            destination={{
              location: rowData.Q || "ไม่ระบุ",
              province: rowData.R || "ไม่ระบุ",
              district: rowData.S || "ไม่ระบุ",
              subDistrict: rowData.T || "ไม่ระบุ",
            }}
            tripType={rowData.AB}
          />
        </Box>
      </Box>

      {/* ----- */}
      <Box
        sx={{
          width: "551px",
          height: "921px",
          backgroundColor: COLORS.background,
          boxSizing: "border-box",
          marginRight: "-32px",
          marginTop: "-28px",
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
