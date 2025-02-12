// @mui
import { styled, alpha } from "@mui/material/styles";
import {
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
// utils

// theme
import { ColorSchema } from "src/theme/palette";
// hooks
import useResponsive from "src/hooks/useResponsive";
// components


// ----------------------------------------------------------------------

const COLORS = ["primary", "secondary", "warning", "success"] as const;

const SUMMARY = [
  { title: "Years of experience", total: 4, icon: "carbon:increase-level" },
  { title: "Impressions", total: 1.5, icon: "carbon:trophy" },
  { title: "Projects", total: 45, icon: "carbon:data-vis-4" },
  { title: "Happy clients", total: 35, icon: "carbon:user-certification" },
];

// ----------------------------------------------------------------------

type StyledIconProps = {
  color: ColorSchema;
};

const StyledIcon = styled("div", {
  shouldForwardProp: (prop) => prop !== "color",
})<StyledIconProps>(({ color, theme }) => ({
  width: 160,
  height: 160,
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  position: "relative",
  justifyContent: "center",
  color: theme.palette[color].darker,
  border: `dashed 2px ${alpha(theme.palette[color].main, 0.24)}`,
  "&:before": {
    zIndex: 8,
    content: '""',
    borderRadius: "50%",
    position: "absolute",
    width: "calc(100% - 48px)",
    height: "calc(100% - 48px)",
    background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`,
  },
  "& svg": {
    zIndex: 9,
  },
}));

// ----------------------------------------------------------------------

export default function CareerAbout() {
  const isMdUp = useResponsive("up", "md");

  return (
    <Container
      sx={{
        pt: { xs: 3, md: 5 },
        pb: 10,
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
            <img
              alt="teams"
              src="/assets/illustrations/illustration_teams.svg"
            />
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
          <Typography variant="h4">Are you ready to join a dynamic, forward-thinking company where your skills and expertise can make a real impact? </Typography>

          <Typography sx={{ mt: 3, mb: 5, color: "text.secondary" }}>
          At California SoftTech, we’re always looking for talented professionals who are passionate about technology and innovation. Whether you’re an experienced consultant or just starting your career, we offer a collaborative environment where you can grow, develop, and achieve your career goals.
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

      {/* <Box
        sx={{
          mt: 10,
          textAlign: "center",
          display: "grid",
          gap: { xs: 5, md: 8 },
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
        }}
      >
        {SUMMARY.map((value, index) => (
          <div key={value.title}>
            <StyledIcon color={COLORS[index]}>
              <Iconify icon={value.icon} width={48} />
            </StyledIcon>

            <Typography variant="h2" sx={{ mt: 2, mb: 1 }}>
              {value.title === "Impressions" ? (
                "1.5M"
              ) : (
                <CountUp
                  start={value.total / 5}
                  end={value.total}
                  formattingFn={(newValue: number) => fShortenNumber(newValue)}
                />
              )}
              {"+"}
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              {value.title}
            </Typography>
          </div>
        ))}
      </Box> */}
    </Container>
  );
}
