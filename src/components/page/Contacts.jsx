import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Link, useTheme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Stack } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Contacts() {
  const theme = useTheme();

  return (
    <Box>
      <Box my={3}>
        <Box display="flex" alignItems="center">
          <Box
            sx={{ width: theme.spacing(4), height: 20, background: "#FFCA03" }}
          />
          <Box width="100%" sx={{ background: "#2B2C30" }}>
            <Typography ml={2} variant="subtitle2" color="white">
              Email
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography fontWeight="" ml={5.5} variant="caption" color="white">
            adryan.luz.freitas@gmail.com
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box
          sx={{ width: theme.spacing(4), height: 20, background: "#FFCA03" }}
        />
        <Box width="100%" sx={{ background: "#2B2C30" }}>
          <Typography ml={2} variant="subtitle2" color="white">
            Phone
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography fontWeight="" ml={5.5} variant="caption" color="white">
          +55 65996198736
        </Typography>
      </Box>
      <Box mt={3}>
        <Box>
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                width: theme.spacing(4),
                height: 20,
                background: "#FFCA03",
              }}
            />
            <Box width="100%" sx={{ background: "#2B2C30" }}>
              <Typography ml={2} variant="subtitle2" color="white">
                Address
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography ml={5.5} variant="caption" color="white">
              Avenida dos Primeiros, Vila Nova Fronteira
            </Typography>
          </Box>
          <Box>
            <Typography ml={5.5} variant="caption" color="white">
              CEP 78563-000 Tabaporã - MT
            </Typography>
          </Box>
        </Box>

        {/* <Typography ml={2} variant="caption" color="white">
        </Typography> */}
        <Box my={3} display="flex" alignItems="center" justifyContent="center">
          <Stack direction="row" spacing={2}>
            <Link
              target="_blank"
              href="https://www.instagram.com/_adryan6/?next=%2F"
              underline="none"
            >
              <InstagramIcon sx={{ color: "white" }} />
            </Link>
            <Link
              target="_blank"
              href="https://twitter.com/AdryanFreitas_"
              underline="none"
            >
              <TwitterIcon sx={{ color: "white" }} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/adryan-da-luz-freitas-37325b232/"
              underline="none"
            >
              <LinkedInIcon sx={{ color: "white" }} />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/adryanfreitas"
              underline="none"
            >
              <GitHubIcon sx={{ color: "white" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
