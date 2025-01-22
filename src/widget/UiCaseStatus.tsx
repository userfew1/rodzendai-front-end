import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { COLORS } from "../assets/constants";
const ScreeningForm = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setSelectedValue(event.target.value);

  const renderSection = (
    icon: string,
    title: string,
    content: React.ReactNode
  ) => (
    <Box sx={{ marginBottom: "16px", width: "439px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <img src={icon} alt="icon" style={{ width: "24px", height: "24px" }} />
        <Typography sx={{ fontSize: "16px", color: "#407BF1" }}>
          {title}
        </Typography>
      </Box>
      {content}
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundColor: COLORS.primary100,
        width: "100%",
        height: "872px",
        borderRadius: "18px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "16px",
          color: "#407BF1",
          marginBottom: "16px",
          textAlign: "left",
          display: "flex",
          justifyContent: "start",
          flexDirection: "row",
        }}
      >
        คัดกรองข้อมูล
      </Typography>

      <Box
        sx={{
          width: "439px",
          height: "734px",
          backgroundColor: COLORS.backgroundwhile,
          borderRadius: "18px",
          padding: "16px 0px 0px 16px ",
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
        }}
      >
        {renderSection(
          "/icons_page/profile.svg",
          "การประเมินเคส",
          <RadioGroup
            row
            value={selectedValue}
            onChange={handleChange}
            sx={{ justifyContent: "space-between" }}
          >
            {["ได้", "ไม่ได้"].map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={
                  <Radio
                    sx={{
                      color: selectedValue === option ? "#407BF1" : "#B3B3B3",
                      "&.Mui-checked": { color: "#407BF1" },
                    }}
                  />
                }
                label={
                  <span
                    style={{
                      color: selectedValue === option ? "#407BF1" : "#B3B3B3",
                    }}
                  >
                    {option === "ได้"
                      ? "สามารถเดินทางได้"
                      : "ไม่สามารถเดินทางได้"}
                  </span>
                }
                sx={{ flex: 1, textAlign: "center" }}
              />
            ))}
          </RadioGroup>
        )}

        {renderSection(
          "/icons_page/profile.svg",
          "เบิกงบประมาณ",
          <Select
            fullWidth
            defaultValue=""
            displayEmpty
            sx={{
              height: "48px",
              backgroundColor: "#F5F9FF",
              borderRadius: "8px",
              color: "#B3B3B3",
              "& .MuiSelect-icon": { color: "#407BF1" },
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
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
        )}

        {renderSection(
          "/icons_page/profile.svg",
          "รูปแบบการเดินทาง *",
          <RadioGroup
            row
            value={selectedValue}
            onChange={handleChange}
            sx={{ justifyContent: "space-between" }}
          >
            {["ได้", "ไม่ได้"].map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={
                  <Radio
                    sx={{
                      color: selectedValue === option ? "#407BF1" : "#B3B3B3",
                      "&.Mui-checked": { color: "#407BF1" },
                    }}
                  />
                }
                label={
                  <span
                    style={{
                      color: selectedValue === option ? "#407BF1" : "#B3B3B3",
                    }}
                  >
                    {option === "ได้" ? "แบบต่อเดียว" : "แบบหลายต่อ"}
                  </span>
                }
                sx={{ flex: 1, textAlign: "center" }}
              />
            ))}
          </RadioGroup>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          {renderSection(
            "/icons_page/profile.svg",
            "ประเภทรถรับส่ง *",
            <Select
              fullWidth
              defaultValue=""
              displayEmpty
              sx={{
                height: "48px",
                backgroundColor: "#F5F9FF",
                borderRadius: "8px",
                color: "#B3B3B3",
                "& .MuiSelect-icon": { color: "#407BF1" },
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                padding: "8px 16px",
                width: "195px",
              }}
            >
              <MenuItem value="" disabled>
                โปรดเลือกงบประมาณ
              </MenuItem>
              <MenuItem value="งบ1">งบ 1</MenuItem>
              <MenuItem value="งบ2">งบ 2</MenuItem>
            </Select>
          )}
          {renderSection(
            "/icons_page/profile.svg",
            "ชื่อหน่วยบริการรับส่ง *",
            <Select
              fullWidth
              defaultValue=""
              displayEmpty
              sx={{
                height: "48px",
                backgroundColor: "#F5F9FF",
                borderRadius: "8px",
                color: "#B3B3B3",
                "& .MuiSelect-icon": { color: "#407BF1" },
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                padding: "8px 16px",
                width: "195px",
              }}
            >
              <MenuItem value="" disabled>
                โปรดเลือกงบประมาณ
              </MenuItem>
              <MenuItem value="งบ1">งบ 1</MenuItem>
              <MenuItem value="งบ2">งบ 2</MenuItem>
            </Select>
          )}
        </Box>
        {renderSection(
          "/icons_page/profile.svg",
          "จุดรับส่งผู้ป่วย (ลิงก์กูเกิลแมป) ",
          <Select
            fullWidth
            defaultValue=""
            displayEmpty
            sx={{
              height: "48px",
              backgroundColor: "#F5F9FF",
              borderRadius: "8px",
              color: "#B3B3B3",
              "& .MuiSelect-icon": { color: "#407BF1" },
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
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
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          {renderSection(
            "/icons_page/profile.svg",
            "วันที่ให้บริการ *",
            <Select
              fullWidth
              defaultValue=""
              displayEmpty
              sx={{
                height: "48px",
                backgroundColor: "#F5F9FF",
                borderRadius: "8px",
                color: "#B3B3B3",
                "& .MuiSelect-icon": { color: "#407BF1" },
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                padding: "8px 16px",
                width: "195px",
              }}
            >
              <MenuItem value="" disabled>
                โปรดเลือกงบประมาณ
              </MenuItem>
              <MenuItem value="งบ1">งบ 1</MenuItem>
              <MenuItem value="งบ2">งบ 2</MenuItem>
            </Select>
          )}
          {renderSection(
            "/icons_page/profile.svg",
            "ระยะทาง (กม.)",
            <Select
              fullWidth
              defaultValue=""
              displayEmpty
              sx={{
                height: "48px",
                backgroundColor: "#F5F9FF",
                borderRadius: "8px",
                color: "#B3B3B3",
                "& .MuiSelect-icon": { color: "#407BF1" },
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                padding: "8px 16px",
                width: "195px",
              }}
            >
              <MenuItem value="" disabled>
                โปรดเลือกงบประมาณ
              </MenuItem>
              <MenuItem value="งบ1">งบ 1</MenuItem>
              <MenuItem value="งบ2">งบ 2</MenuItem>
            </Select>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          {renderSection(
            "/icons_page/profile.svg",
            "เวลาออกจากจุดรับผู้ป่วย",
            <Select
              fullWidth
              defaultValue=""
              displayEmpty
              sx={{
                height: "48px",
                backgroundColor: "#F5F9FF",
                borderRadius: "8px",
                color: "#B3B3B3",
                "& .MuiSelect-icon": { color: "#407BF1" },
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                padding: "8px 16px",
                width: "195px",
              }}
            >
              <MenuItem value="" disabled>
                โปรดเลือกงบประมาณ
              </MenuItem>
              <MenuItem value="งบ1">งบ 1</MenuItem>
              <MenuItem value="งบ2">งบ 2</MenuItem>
            </Select>
          )}
          {renderSection(
            "/icons_page/profile.svg",
            "เวลาถึงจุดส่งผู้ป่วย",
            <Select
              fullWidth
              defaultValue=""
              displayEmpty
              sx={{
                height: "48px",
                backgroundColor: "#F5F9FF",
                borderRadius: "8px",
                color: "#B3B3B3",
                "& .MuiSelect-icon": { color: "#407BF1" },
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                padding: "8px 16px",
                width: "195px",
              }}
            >
              <MenuItem value="" disabled>
                โปรดเลือก
              </MenuItem>
              <MenuItem value="งบ1">งบ 1</MenuItem>
              <MenuItem value="งบ2">งบ 2</MenuItem>
            </Select>
          )}
        </Box>
      </Box>
      <Button sx={{ width: "439px" }} variant="contained" color="primary">
        บันทึกข้อมูล
      </Button>
    </Box>
  );
};

// Screen 2: ผลการประเมินเคส - สามารถเดินทางได้
const EvaluationResultSuccess = () => (
  <Box
    sx={{
      backgroundColor: COLORS.primary100,
      width: "100%",
      height: "100vh",
      borderRadius: "18px",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
    }}
  >
    {/* Header */}
    <Box
      sx={{
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "439px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "16px",
          color: "#407BF1",
        }}
      >
        ผลการประเมินเคส
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontWeight: "normal",
            fontSize: "14px",
            color: COLORS.gray500,
          }}
        >
          วันที่บันทึก : 16/11/2024
        </Typography>
        <Typography
          sx={{
            fontWeight: "normal",
            fontSize: "14px",
            color: COLORS.gray500,
          }}
        >
          ผู้บันทึก : สุขสันต์ วงค์สว่าง
        </Typography>
      </Box>
    </Box>

    {/* Success Box */}
    <Box
      sx={{
        width: "439px",
        height: "80px",
        backgroundColor: COLORS.success200,
        borderRadius: "18px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "24px",
          color: COLORS.font_color,
        }}
      >
        สามารถเดินทางได้
      </Typography>
    </Box>

    {/* Information List */}
    <Box
      sx={{
        width: "100%",
        maxWidth: "439px",
        backgroundColor: COLORS.primary100,
        borderRadius: "12px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {[
        { label: "เบิกงบประมาณ :", value: "กองทุนท้องถิ่น (กปท.)" },
        { label: "ประเภทรถรับส่ง :", value: "รถแท็กซี่" },
        { label: "ชื่อหน่วยบริการรับส่ง :", value: "Bolt" },
        { label: "รูปแบบการเดินทาง :", value: "แบบต่อเดียว" },
        { label: "ลิงก์กูเกิลแมป :", value: "-" },
        { label: "วันที่ให้บริการ :", value: "12/02/2568" },
        { label: "ระยะทาง (กม.)  :", value: "12 กม." },
        { label: "เวลาออกจากจุดรับผู้ป่วย :", value: "10.00 น." },
        { label: "เวลาถึงจุดส่งผู้ป่วย :", value: "13.00 น." },
      ].map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
          }}
        >
          <Typography
            sx={{
              color: COLORS.primary,
            }}
          >
            {item.label}
          </Typography>
          <Typography
            sx={{
              color: COLORS.gray,
            }}
          >
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>

    {/* Current Status */}
    <Box
      sx={{
        width: "100%",
        maxWidth: "439px",
        padding: "16px",
        borderTop: `1px solid ${COLORS.backgroundwhile}`,
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          color: COLORS.primary,
        }}
      >
        <img
          src="/icons_page/profile.svg"
          alt="icon"
          style={{ width: "24px", height: "24px" }}
        />
        สถานะการดำเนินงานปัจจุบัน
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: COLORS.primary,
          }}
        >
          ขาไป :
        </Typography>
        <Box
          sx={{
            height: "30px",
            width: "113px",
            borderRadius: "50px",
            fontSize: "16px",
            backgroundColor: COLORS.primary800,
            color: COLORS.font_color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          รอมอบหมาย
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: COLORS.primary,
          }}
        >
          ขากลับ :
        </Typography>
        <Box
          sx={{
            height: "30px",
            width: "113px",
            borderRadius: "50px",
            fontSize: "16px",
            backgroundColor: COLORS.gray700,
            color: COLORS.font_color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          ยังไม่มีข้อมูล
        </Box>
      </Box>
    </Box>

    {/* Buttons */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "12px",
        width: "100%",
        maxWidth: "439px",
      }}
    >
      <Button
        sx={{
          flex: 1,
          height: "48px",
          borderRadius: "8px",
          fontSize: "16px",
          backgroundColor: COLORS.backgroundwhile,
          color: COLORS.primary650,
          borderColor: COLORS.primary650,
        }}
        variant="outlined"
      >
        ยกเลิกการดำเนินการ
      </Button>
      <Button
        sx={{
          flex: 1,
          height: "48px",
          borderRadius: "8px", // ปรับขอบให้โค้งมนตาม UI
          fontSize: "16px",
          fontWeight: "bold",
          backgroundColor: COLORS.primary650,
        }}
        variant="contained"
        color="primary"
      >
        ดำเนินการ
      </Button>
    </Box>
  </Box>
);

// Screen 3: ผลการประเมินเคส - ไม่สามารถเดินทางได้
const EvaluationResultFailure = () => (
  <Box
    sx={{
      backgroundColor: COLORS.primary100,
      width: "100%",
      height: "100vh",
      borderRadius: "18px",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
    }}
  >
    {/* Header */}
    <Box
      sx={{
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "439px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "16px",
          color: "#407BF1",
        }}
      >
        ผลการประเมินเคส
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontWeight: "normal",
            fontSize: "14px",
            color: COLORS.gray500,
          }}
        >
          วันที่บันทึก : 16/11/2024
        </Typography>
        <Typography
          sx={{
            fontWeight: "normal",
            fontSize: "14px",
            color: COLORS.gray500,
          }}
        >
          ผู้บันทึก : สุขสันต์ วงค์สว่าง
        </Typography>
      </Box>
    </Box>

    {/* Success Box */}
    <Box
      sx={{
        width: "439px",
        height: "80px",
        backgroundColor: COLORS.danger700,
        borderRadius: "18px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "24px",
          color: COLORS.font_color,
        }}
      >
        ไม่สามารถเดินทางได้
      </Typography>
    </Box>

    {/* Information List */}
    <Box
      sx={{
        width: "100%",
        maxWidth: "439px",
        backgroundColor: COLORS.primary100,
        borderRadius: "12px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {[
        { label: "เหตุผล : ", value: "ผู้ป่วยยกเลิกนัดหมาย" },
        { label: "หมายเหตุ : ", value: "หมายเหตุ" },
      ].map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
          }}
        >
          <Typography
            sx={{
              color: COLORS.primary,
            }}
          >
            {item.label}
          </Typography>
          <Typography
            sx={{
              color: COLORS.gray,
            }}
          >
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>

    {/* Current Status */}
  </Box>
);

// Export Components
export { ScreeningForm, EvaluationResultSuccess, EvaluationResultFailure };
