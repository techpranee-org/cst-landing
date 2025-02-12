
import { Container, Typography, Stack, Unstable_Grid2 as Grid } from '@mui/material';

// ----------------------------------------------------------------------

export default function CloudServices() {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={5}>
          <img alt="services" src="/assets/services/service_7.png" />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2">Cloud Service</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
            In today’s fast-paced digital landscape, businesses need flexible, secure, and scalable cloud solutions to stay ahead. At California SoftTech, we provide end-to-end cloud services, enabling organizations to leverage the full potential of cloud computing. Whether you need cloud migration, infrastructure management, or custom cloud applications, our expert team ensures seamless integration, enhanced performance, and cost efficiency.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
