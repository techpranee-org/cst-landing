
import {
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import ImageWithGradient from "src/components/general/image-gradient";
// utils
// hooks
import useResponsive from "src/hooks/useResponsive";
// components



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
            <ImageWithGradient src="/assets/career/career_1.jpg" borderRadius={'12px'} height={'500px'}/>
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
        </Grid>
      </Grid>
    </Container>
  );
}
