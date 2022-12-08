import React from "react";
import image from "../Image/adryan.png";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";

export function MyImage() {
  return (
    <Box my={4} display="flex" alignItems="center" justifyContent="center">
      <Avatar alt="adryan" src={image} sx={{ width: 200, height: 200 }} />
    </Box>
  );
}
