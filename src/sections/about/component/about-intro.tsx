// @mui
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
  useTheme,
} from "@mui/material";
// utils
import { fShortenNumber } from "src/utils/formatNumber";
// theme
import { ColorSchema } from "src/theme/palette";
// hooks
import useResponsive from "src/hooks/useResponsive";
// components
import Iconify from "src/components/iconify";
import CountUp from "src/components/count-up";
import ImageWithGradient from "src/components/general/image-gradient";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

type StyledIconProps = {
  color: ColorSchema;
};

const StyledIcon = styled("div", {
  shouldForwardProp: (prop) => prop !== "color",
})<StyledIconProps>(({ theme }) => ({
  width: 160,
  height: 160,
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  position: "relative",
  justifyContent: "center",
  color: theme.palette.primary.light,
  border: `dashed 2px ${alpha(theme.palette.primary.main, 0.24)}`,
  "&:before": {
    zIndex: 8,
    content: '""',
    borderRadius: "50%",
    position: "absolute",
    width: "calc(100% - 48px)",
    height: "calc(100% - 48px)",
    background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette.secondary.main} 0deg, ${theme.palette.secondary.dark} 360deg)`,
  },
  "& svg": {
    zIndex: 9,
  },
}));

// ----------------------------------------------------------------------

export default function AboutIntro() {
  const isMdUp = useResponsive("up", "md");
  const theme = useTheme();

  return (
    <Container
      sx={{
        pt: { xs: 4, md: 8 },
        pb: 5,
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        {isMdUp && (
          <Grid xs={12} md={6} lg={5}>
            <ImageWithGradient src="/assets/about/about_3.jpg" borderRadius={'12px'}/>
          </Grid>
        )}

        <Grid
          xs={12}
          md={6}
          lg={6}
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h2">We are Technology Innovators</Typography>

          <Typography sx={{ mt: 3, mb: 3, color: "text.secondary" }}>
            California SoftTech is a premier IT services provider, with operations in the United States, Canada& India. We specialize in offering tailored professional consulting services that drive operational excellence and improve organizational performance through the strategic use of technology and outsourcing solutions.
            Our expertise spans a variety of industry sectors, including Healthcare, Insurance, Manufacturing, Government & Public Sector, Financial Services, Telecommunications, and Independent Software Vendors. We take pride in delivering innovative and efficient technology solutions that help businesses streamline operations and achieve measurable results.
            <br />
            <br />
          </Typography>
          {/* <Link href="/portfolio">
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              Check Our Work
            </Button>
          </Link> */}
        </Grid>
      </Grid>
    </Container>
  );
}
