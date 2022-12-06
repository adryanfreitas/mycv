import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Education() {
  return (
    <Box ml={4}>
      <Typography variant="h6" color="white">
        Educação
      </Typography>
      <Box sx={{ height: 2, background: "#FFCA03" }} />
      <Box my={2} ml={2}>
        <Typography variant="subtitle1" color="white">
          Ensino Fundamental - 9° Ano
        </Typography>
        <Typography variant="body2" color="white">
          EE Alfredo Treuherz
        </Typography>
        <Typography variant="body2" color="white">
          2018-2022
        </Typography>
      </Box>
    </Box>
  );
}
