import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Title() {
  return (
    <Box>
      <Box mt={6} sx={{ height: 170, background: "#FFCA03" }}>
        <Box display="flex">
          <Typography ml={6} variant="h3" color="black" fontWeight="bold">
            ADRYAN
          </Typography>
          <Typography ml={1} variant="h3">
            DA LUZ FREITAS
          </Typography>
        </Box>
        <Typography ml={12} variant="h4" color="black">
          Estudante e Desenvolvedor
        </Typography>
      </Box>
    </Box>
  );
}
