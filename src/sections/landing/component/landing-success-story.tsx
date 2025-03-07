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


// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
    imgUrl: "/assets/bg/bg_10.jpg",
  }),
  padding: theme.spacing(15, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(20, 0),
  },
}));



export default function LandingSuccessStory() {
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
                Success Stories That Speak for Themselves
              </Typography>

              <Typography sx={{ opacity: 0.72 }}>
                Over the years, California SoftTech has successfully partnered with a diverse portfolio of Fortune 500 clients, including leaders in telecommunications, insurance, banking, pharmaceuticals, and financial services. With thousands of consultants placed across a variety of roles, we have consistently delivered exceptional service and transformative outcomes for our clients.
              </Typography>

              <Typography sx={{ opacity: 0.72 }}>
                Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses seeking to leverage the power of technology in today’s competitive landscape.
              </Typography>
            </Stack>

          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

