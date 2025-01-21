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
        padding: "18px",
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
          padding: "12px",
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
      backgroundColor: COLORS.background,
      width: "100%",
      height: "872px",
      borderRadius: "18px",
      padding: "18px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      flexGrow: 1,
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
      ผลการประเมินเคส
    </Typography>

    <Box
      sx={{
        backgroundColor: COLORS.success,
        color: "#FFFFFF",
        padding: "8px 16px",
        borderRadius: "8px",
        marginBottom: "16px",
      }}
    >
      สามารถเดินทางได้
    </Box>

    <Typography>งบประมาณ: กองทุนหลักประกันสุขภาพ</Typography>
    <Typography>ประเภทการรับส่ง: รถพยาบาล</Typography>
    <Typography>รูปแบบการเดินทาง: แบบต่อเดียว</Typography>
    <Typography>วันที่ให้บริการ: 12/02/2568</Typography>

    <Button
      fullWidth
      variant="contained"
      color="primary"
      sx={{ marginTop: "16px" }}
    >
      ดำเนินการ
    </Button>
  </Box>
);

// Screen 3: ผลการประเมินเคส - ไม่สามารถเดินทางได้
const EvaluationResultFailure = () => (
  <Box
    sx={{
      backgroundColor: COLORS.background,
      width: "100%",
      height: "872px",
      borderRadius: "18px",
      padding: "18px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      flexGrow: 1,
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
      ผลการประเมินเคส
    </Typography>

    <Box
      sx={{
        backgroundColor: COLORS.danger,
        color: "#FFFFFF",
        padding: "8px 16px",
        borderRadius: "8px",
        marginBottom: "16px",
      }}
    >
      ไม่สามารถเดินทางได้
    </Box>

    <Typography>เหตุผล: ผู้ป่วยยกเลิกนัดหมาย</Typography>
    <Typography>หมายเหตุ: -</Typography>

    <Button
      fullWidth
      variant="contained"
      color="primary"
      sx={{ marginTop: "16px" }}
    >
      ยกเลิกการดำเนินการ
    </Button>
  </Box>
);

// Export Components
export { ScreeningForm, EvaluationResultSuccess, EvaluationResultFailure };
{
  /* <RadioGroup row>
      <FormControlLabel
        value="ได้"
        control={<Radio color="primary" />}
        label="สามารถเดินทางได้"
      />
      <FormControlLabel
        value="ไม่ได้"
        control={<Radio color="primary" />}
        label="ไม่สามารถเดินทางได้"
      />
    </RadioGroup> */
}

{
  /* <Select fullWidth defaultValue="" sx={{ marginBottom: "16px" }}>
      <MenuItem value="">เลือกงบประมาณ</MenuItem>
      <MenuItem value="งบ1">งบ 1</MenuItem>
      <MenuItem value="งบ2">งบ 2</MenuItem>
    </Select> */
}

{
  /* <RadioGroup row>
      <FormControlLabel
        value="single"
        control={<Radio color="primary" />}
        label="แบบต่อเดียว"
      />
      <FormControlLabel
        value="multi"
        control={<Radio color="primary" />}
        label="แบบหลายต่อ"
      />
    </RadioGroup> */
}

{
  /* <TextField fullWidth label="จุดรับผู้ป่วย" sx={{ marginBottom: "16px" }} /> */
}

{
  /* <TextField
      fullWidth
      label="วันที่ให้บริการ"
      type="date"
      InputLabelProps={{ shrink: true }}
      sx={{ marginBottom: "16px" }}
    /> */
}
