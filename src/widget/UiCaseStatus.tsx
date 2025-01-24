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
  InputAdornment,
} from "@mui/material";
import { COLORS } from "../assets/constants";
import DatePicker from "react-datepicker";
import { MiddlewareReturn } from "@floating-ui/core";
import { MiddlewareState } from "@floating-ui/dom";
const ScreeningForm = () => {
  const [selectedValueCases, setSelectedValueCases] = useState("");
  const [selectedValueTravel, setSelectedValueTravel] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPhase, setselectedPhase] = useState("");
  const [TimeStartpoint, setTimeStartpoint] = useState("");
  const [TimeEndpoint, setTimeEndpoint] = useState("");

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // ลบตัวอักษรที่ไม่ใช่ตัวเลข
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + "/" + value.slice(5);
    if (value.length > 10) value = value.slice(0, 10); // จำกัดความยาวที่ 10 ตัวอักษร
    setSelectedDate(value);
  };
  const handleChangeCases = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setSelectedValueCases(event.target.value);

  const handleChangeTravel = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setSelectedValueTravel(event.target.value);

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
          marginLeft: "16px",
          display: "flex",
          alignItems: "center", // ไอคอนจัดกลางในบรรทัด
          gap: "8px", // เพิ่มช่องว่างระหว่างไอคอนกับข้อความ
          alignSelf: "flex-start", // ทำให้ Typography ชิดซ้าย
        }}
      >
        <img
          src="/icons_page/profile.svg"
          alt="icon"
          style={{ width: "24px", height: "24px" }}
        />
        คัดกรองข้อมูล
      </Typography>

      <Box
        sx={{
          width: "439px",
          height: "734px",
          backgroundColor: COLORS.background,
          borderRadius: "18px",
          padding: "16px 0px 0px 16px",
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          gap: "10px", // เพิ่มระยะห่างระหว่างแต่ละรายการ
        }}
      >
        {renderSection(
          "/icons_page/sheet.svg",
          "การประเมินเคส",
          <RadioGroup
            row
            value={selectedValueCases}
            onChange={handleChangeCases}
            sx={{ justifyContent: "space-between" }}
          >
            {["ได้", "ไม่ได้"].map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={
                  <Radio
                    sx={{
                      color:
                        selectedValueCases === option ? "#407BF1" : "#B3B3B3",
                      "&.Mui-checked": { color: "#407BF1" },
                    }}
                  />
                }
                label={
                  <span
                    style={{
                      color:
                        selectedValueCases === option ? "#407BF1" : "#B3B3B3",
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
          "/icons_page/money.svg",
          "เบิกงบประมาณ",
          <CustomSelect />
        )}

        {renderSection(
          "/icons_page/ambulance.svg",
          "รูปแบบการเดินทาง *",
          <RadioGroup
            row
            value={selectedValueTravel}
            onChange={handleChangeTravel}
            sx={{ justifyContent: "space-between" }}
          >
            {["ได้", "ไม่ได้"].map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={
                  <Radio
                    sx={{
                      color:
                        selectedValueTravel === option ? "#407BF1" : "#B3B3B3",
                      "&.Mui-checked": { color: "#407BF1" },
                    }}
                  />
                }
                label={
                  <span
                    style={{
                      color:
                        selectedValueTravel === option ? "#407BF1" : "#B3B3B3",
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
            "/icons_page/category.svg",
            "ประเภทรถรับส่ง *",
            <Select
              fullWidth
              defaultValue=""
              displayEmpty
              IconComponent={() => (
                <Box
                  component="img"
                  src="/icons_page/drop_down.svg" // ใช้ URL สำหรับไฟล์ SVG
                  alt="dropdown icon"
                  sx={{
                    width: "20px",
                    height: "20px",
                    color: "#407BF1",
                  }}
                />
              )}
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
                ประเภทรถรับส่ง
              </MenuItem>
              <MenuItem value="งบ1">งบ 1</MenuItem>
              <MenuItem value="งบ2">งบ 2</MenuItem>
            </Select>
          )}
          {renderSection(
            "/icons_page/company.svg",
            "ชื่อหน่วยบริการรับส่ง *",

            <Select
              fullWidth
              defaultValue=""
              displayEmpty
              IconComponent={() => (
                <Box
                  component="img"
                  src="/icons_page/drop_down.svg" // ใช้ URL สำหรับไฟล์ SVG
                  alt="dropdown icon"
                  sx={{
                    width: "20px",
                    height: "20px",
                    color: "#407BF1",
                  }}
                />
              )}
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
                ชื่อหน่วยบริการ
              </MenuItem>
              <MenuItem value="งบ1">งบ 1</MenuItem>
              <MenuItem value="งบ2">งบ 2</MenuItem>
            </Select>
          )}
        </Box>
        {renderSection(
          "/icons_page/location.svg",
          "จุดรับส่งผู้ป่วย (ลิงก์กูเกิลแมป) ",
          <TextField
            fullWidth
            placeholder="ลิงก์กูเกิลแมป"
            sx={{
              height: "48px",
              backgroundColor: "#F5F9FF",
              borderRadius: "8px",
              color: "#B3B3B3",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiInputBase-root": {
                padding: "8px 16px",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#F5F9FF",
              },
              width: "408px",
            }}
          />
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          {renderSection(
            "/icons_page/calendar.svg",
            "วันที่ให้บริการ *",
            <TextField
              fullWidth
              placeholder="MM/DD/YYYY"
              value={selectedDate}
              onChange={handleDateInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Box
                      component="img"
                      src="/icons_page/calendar_b.svg"
                      alt="calendar icon"
                      sx={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                height: "48px",
                backgroundColor: "#F5F9FF",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  padding: "8px 16px",
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "#F5F9FF",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputBase-input": {
                  color: "#B3B3B3",
                },
                width: "195px",
              }}
            />
          )}

          {renderSection(
            "/icons_page/km.svg",
            "ระยะทาง (กม.)",
            <TextField
              fullWidth
              placeholder="ระยะทาง (กม.)" // ข้อความแนะนำการกรอก
              value={selectedPhase ? selectedPhase : ""} // แสดงวันที่ที่เลือกไว้
              onChange={(e) => setselectedPhase(e.target.value)} // อัปเดตวันที่เมื่อกรอก
              InputProps={{
                endAdornment: <InputAdornment position="end"></InputAdornment>,
              }}
              sx={{
                height: "48px",
                backgroundColor: "#F5F9FF",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  padding: "8px 16px",
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "#F5F9FF",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputBase-input": {
                  color: "#B3B3B3",
                },
                width: "195px",
              }}
            />
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
            "/icons_page/time.svg",
            "เวลาออกจากจุดรับผู้ป่วย",
            <TextField
              fullWidth
              placeholder="เวลา"
              value={TimeStartpoint ? TimeStartpoint : ""} // แสดงวันที่ที่เลือกไว้
              onChange={(e) => setTimeStartpoint(e.target.value)} // อัปเดตวันที่เมื่อกรอก
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Box
                      component="img"
                      src="/icons_page/time_b.svg"
                      alt="calendar icon"
                      sx={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                height: "48px",
                backgroundColor: "#F5F9FF",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  padding: "8px 16px",
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "#F5F9FF",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputBase-input": {
                  color: "#B3B3B3",
                },
                width: "195px",
              }}
            />
          )}
          {renderSection(
            "/icons_page/time.svg",
            "เวลาถึงจุดส่งผู้ป่วย",
            <TextField
              fullWidth
              placeholder="เวลา"
              value={TimeEndpoint ? TimeEndpoint : ""} // แสดงวันที่ที่เลือกไว้
              onChange={(e) => setTimeEndpoint(e.target.value)} // อัปเดตวันที่เมื่อกรอก
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Box
                      component="img"
                      src="/icons_page/time_b.svg"
                      alt="calendar icon"
                      sx={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                height: "48px",
                backgroundColor: "#F5F9FF",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  padding: "8px 16px",
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "#F5F9FF",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputBase-input": {
                  color: "#B3B3B3",
                },
                width: "195px",
              }}
            />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          width: "439px",
          height: "48px",
          marginTop: "24px",
          display: "flex",
          backgroundColor: COLORS.primary650,
          borderRadius: "8px",
          justifyContent: "center",
          alignItems: "center",
          color:COLORS.font_color
        }}
      >
        บันทึกข้อมูล
      </Box>
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <img
          src="/icons_page/evaluation_b.svg"
          alt="icon"
          style={{ width: "24px", height: "24px" }}
        />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            color: "#407BF1",
          }}
        >
          ผลการประเมินเคส
        </Typography>
      </Box>
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
        borderTop: `1px solid ${COLORS.background}`,
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
          display: "flex",
          justifyContent: "start",
        }}
      >
        <img
          src="/icons_page/status.svg"
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
        marginTop: "auto",
      }}
    >
      <Button
        sx={{
          flex: 1,
          height: "48px",
          borderRadius: "8px",
          fontSize: "16px",
          backgroundColor: COLORS.background,
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
        <img
          src="/icons_page/evaluation_b.svg"
          alt="icon"
          style={{ width: "24px", height: "24px" }}
        />
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
