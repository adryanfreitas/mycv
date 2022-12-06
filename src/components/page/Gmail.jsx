import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Gmail() {
  return (
    <Box display="flex" alignItems="center">
      <Box sx={{ width: 60, height: 20, background: "#FFCA03" }} />
      <Box width="100%" sx={{ background: "#2B2C30" }}>
        <Typography variant="body2" color="white">
          TESTE
        </Typography>
      </Box>
      <Typography variant="body2" color="white">
        teste
      </Typography>
    </Box>
  );
}
