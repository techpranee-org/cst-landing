// @mui
import { alpha, styled } from "@mui/material/styles";
import {
  Stack,
  Container,
  Typography,
  Button,
  Fab,
  Unstable_Grid2 as Grid,
} from "@mui/material";
// utils
import { bgGradient } from "src/utils/cssStyles";
// hooks
import useResponsive from "src/hooks/useResponsive";
// components
import Iconify from "src/components/iconify";
import { useTheme } from "@mui/material/styles";
import { useSettingsContext } from "src/components/settings";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: "/assets/background/overlay_1.jpg",
  }),
  overflow: "hidden",
}));

// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
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

            {/* <Stack
              spacing={3}
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "center", md: "unset" }}
              justifyContent={{ xs: "center", md: "unset" }}
              sx={{ mt: 5 }}
            >
              <Button
                variant="contained"
                color="inherit"
                size="large"
                onClick={() => {
                  const phoneNumber = "917032160008";
                  window.open(`https://wa.me/${phoneNumber}`, "_blank");
                }}
              >
                Connect
                <Iconify
                  width={24}
                  sx={{ marginLeft: "8px" }}
                  icon="mdi:whatsapp"
                />
              </Button>

              <Stack
                direction="row"
                alignItems="center"
                sx={{ typography: "h6" }}
              >
                {" "}
                <a
                  href="https://youtu.be/20QQ3p_JIbM"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Fab size="medium" sx={{ mr: 1 }}>
                    <Iconify width={24} icon="carbon:play" />
                  </Fab>
                </a>
                See Our Work
              </Stack>
            </Stack> */}
          </Grid>

          {isMdUp && (
            <Grid xs={12} md={6} lg={7}>
              <img
                alt="marketing market"
                src="/assets/illustrations/illustration_marketing_market.svg"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </StyledRoot>
  );
}
