import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Reference() {
  return (
    <Box ml={4}>
      <Typography variant="h6" color="white">
        Referencias
      </Typography>
      <Box sx={{ height: 2, background: "#FFCA03" }} />
      <Box my={2} ml={2}>
        <Typography variant="subtitle1" color="white">
          Cleiton de Freitas
        </Typography>
        <Typography variant="body2" color="white">
          T: +55 65 9936-0599
        </Typography>
        <Box my={2}>
          <Typography variant="subtitle1" color="white">
            Marli Salete Gonçalves
          </Typography>
          <Typography variant="body2" color="white">
            T: +55 66 9955-0535
          </Typography>
          <Typography variant="subtitle1" color="white"></Typography>
        </Box>
      </Box>
    </Box>
  );
}
