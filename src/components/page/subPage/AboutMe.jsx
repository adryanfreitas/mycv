import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function AboutMe() {
  return (
    <Box mt={3}>
      <Typography ml={6} variant="h6">
        Sobre mim
      </Typography>
      <Box ml={6} sx={{ height: 2, background: "black" }} />
      <Box ml={6} mt={1}>
        <Typography>
          Meu nome é Adryan da Luz Freitas, tenho 15 anos, estudo inglês a 2
          anos e pogramação a 1 ano,
        </Typography>
      </Box>
    </Box>
  );
}
