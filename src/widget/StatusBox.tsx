import React from "react";
import { Box, Typography } from "@mui/material";

interface StatusBoxProps {
  status: string;
  id: string | number;
  message: string;
  backgroundColor: string;
  iconSrc: string;
}

const StatusBox: React.FC<StatusBoxProps> = ({
  status,
  id,
  message,
  backgroundColor,
  iconSrc,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor,
        padding: "16px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img
          src={iconSrc}
          alt={`${status}-icon`}
          style={{ width: "24px", height: "24px" }}
        />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          {message}
        </Typography>
      </Box>
      <Typography>Case ID: {id}</Typography>
    </Box>
  );
};

export default StatusBox;
