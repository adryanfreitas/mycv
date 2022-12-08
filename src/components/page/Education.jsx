import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Education() {
  return (
    <Box mb={4} ml={4}>
      <Typography variant="h6" color="white">
        Educação
      </Typography>
      <Box mt={1} sx={{ height: 2, background: "#FFCA03" }} />
      <Box mt={2} ml={2}>
        <Typography variant="subtitle2" color="white">
          Ensino Fundamental - 9° Ano
        </Typography>
        <Typography variant="subtitle2" color="white">
          EE Alfredo Treuherz
        </Typography>
        <Typography variant="caption" color="white">
          2022-2018
        </Typography>
      </Box>
    </Box>
  );
}
