
import { Container, Typography, Stack, Unstable_Grid2 as Grid } from '@mui/material';


// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function HealthcareRecruitmentServices() {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={5}>
          <img alt="services" src="/assets/services/service_1.png" width={400} height={500}/>
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2">Healthcare Recruitment Solutions</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
            At California SoftTech, we specialize in Healthcare Recruitment, helping medical institutions and healthcare providers find top-tier talent to meet their growing demands. Our expertise in healthcare staffing ensures that organizations can access highly skilled professionals who deliver exceptional patient care and operational excellence.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
