// @mui
import { alpha, styled } from "@mui/material/styles";
import {
  Stack,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
  
} from "@mui/material";

// utils
import { bgGradient } from "src/utils/cssStyles";
// components

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
    imgUrl: "/assets/bg/bg_8.jpg",
  }),
  padding: theme.spacing(15, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(20, 0),
  },
}));



export default function CloudHero() {
  return (
    <StyledRoot>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                mb: 5,
                mx: "auto",
                maxWidth: 480,
                textAlign: "center",
                color: "common.white",
              }}
            >
              <Typography variant="h1">
                <span style={{ fontSize: "20px" }}>
                Transform Your Business with Scalable & Secure Cloud Solutions
                </span>
                <br />
                Cloud Service
              </Typography>

              <Typography sx={{ opacity: 0.72 }}>
              Accelerate Innovation with Cloud Computing
              </Typography>
            </Stack>

          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

