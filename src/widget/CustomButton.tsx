import React from "react";
import { Button, Typography } from "@mui/material";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  color?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  color = "#007BFF",
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: color,
        color: "#fff",
        height: "48px",
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: `${color}CC`, // Slightly darker on hover
        },
      }}
    >
      <Typography>{label}</Typography>
    </Button>
  );
};

export default CustomButton;
