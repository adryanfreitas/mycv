import { Box } from "@mui/material";
import React from "react";
import SideMenu from "../page/SideMenu";
import Resume from "../page/subPage/Resume";
import { CssBaseline, Paper, Grid } from "@mui/material";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Box display="Flex" justifyContent="center">
        <Box width="1000px" py={4}>
          <Paper elevation={3}>
            <Grid container>
              <Grid item xs={4} sx={{ backgroundColor: "#222126" }}>
                <SideMenu />
              </Grid>
              <Grid item xs={8}>
                <Resume />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
