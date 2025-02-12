// @mui
import { alpha, styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
// utils
import { bgGradient } from "src/utils/cssStyles";
// hooks
import useResponsive from "src/hooks/useResponsive";
// components
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: "/assets/background/overlay_1.jpg",
  }),
  overflow: "hidden",
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  const isMdUp = useResponsive("up", "md");
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';


  return (
    <StyledRoot>
      <Container
        sx={{
          py: 5,
          display: { md: "flex" },
          alignItems: { md: "center" },
          height: { md: `100vh` },
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 10 }}>
          <Grid
            xs={12}
            md={6}
            lg={4}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* sx={{ color: "secondary.main" }} */}
            <Typography variant="overline" sx={{ color: isDarkMode ? "#DFE3E8" : "#919EAB" }}>
              California SoftTech
            </Typography>

            <Typography variant="h1" sx={{ my: 3 }}>
              Innovate, Transform, Succeed – With us
            </Typography>

            <Typography sx={{ color: "text.secondary" }} component="h2" >
              Transform Your Business with Cutting-Edge IT Solutions
            </Typography>
          </Grid>

          {isMdUp && (
            <Grid xs={12} md={6} lg={7}>
              <img
                alt="marketing market"
                src="/assets/landing/landing_1.png"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </StyledRoot>
  );
}
