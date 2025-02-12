
import { Container, Typography, Stack, Unstable_Grid2 as Grid } from '@mui/material';


// ----------------------------------------------------------------------

export default function WebDevelopmentServices() {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={5}>
          <img alt="services" src="/assets/services/service_5.png" />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2">Web Development Solutions</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
            In today’s digital era, having a strong online presence is essential for business success. At California SoftTech, we specialize in custom web development that is tailored to your business needs. Our team of experienced developers builds scalable, secure, and high-performance websites and web applications that enhance user experience and drive growth.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
