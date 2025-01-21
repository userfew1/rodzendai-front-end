import React from "react";
import { Box, Typography } from "@mui/material";

interface DetailsCardProps {
  title: string;
  details: { label: string; value: string | React.ReactNode }[];
}

const DetailsCard: React.FC<DetailsCardProps> = ({ title, details }) => {
  return (
    <Box
      sx={{
        border: "1px solid #6A9BFF",
        borderRadius: "16px",
        padding: "16px",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "18px",
          marginBottom: "8px",
        }}
      >
        {title}
      </Typography>
      {details.map((detail, idx) => (
        <Box
          key={idx}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <Typography>{detail.label}</Typography>
          <Typography>{detail.value}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default DetailsCard;
