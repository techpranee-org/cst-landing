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
import { borderRadius } from "@mui/system";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: "/assets/background/overlay_1.jpg",
  }),
  overflow: "hidden",
}));

const ImageWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  width: "100%",
  height: "100%",
  borderRadius: theme.shape.borderRadius * 2,

  "& img": {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "inherit",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${theme.palette.common.black} 90%)`,
    zIndex: 1,
    borderRadius: "inherit",
  },
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
        <Grid container columnSpacing={{ xs: 0, md: 10 }} alignItems={'center'}>
          <Grid
            xs={12}
            md={6}
            lg={4}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* sx={{ color: "secondary.main" }} */}
            <Typography variant="overline" fontSize={25} sx={{ color: isDarkMode ? "#DFE3E8" : "#919EAB" }}>
              California SoftTech Inc
            </Typography>

            <Typography variant="h1" sx={{ my: 3 }}>
              A Source For Your IT Solutions
            </Typography>

            <Typography sx={{ color: "text.secondary" }} component="h2" >
              Transform Your Business with Cutting-Edge IT Solutions
            </Typography>
          </Grid>

          {isMdUp && (
            <Grid xs={12} md={6} lg={8}>
              <ImageWrapper>
                <img
                  alt="marketing market"
                  src="/assets/landing/landing.jpg"
                />
              </ImageWrapper>
            </Grid>
          )}
        </Grid>
      </Container>
    </StyledRoot>
  );
}
