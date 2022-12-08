import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Reference() {
  return (
    <Box mb={4} ml={4}>
      <Typography variant="h6" color="white">
        Referências
      </Typography>
      <Box mt={1} sx={{ height: 2, background: "#FFCA03" }} />
      <Box mt={2} ml={2}>
        <Typography variant="subtitle1" color="white">
          Cleiton de Freitas
        </Typography>
        <Typography variant="caption" color="white">
          T: +55 65 9936-0599
        </Typography>
        <Box mt={2}>
          <Typography variant="subtitle1" color="white">
            Marli Salete Gonçalves
          </Typography>
          <Typography variant="caption" color="white">
            T: +55 66 9955-0535
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
