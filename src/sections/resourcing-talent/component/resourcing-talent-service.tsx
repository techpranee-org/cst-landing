
import {  Container, Typography, Stack, Unstable_Grid2 as Grid } from '@mui/material';


// ----------------------------------------------------------------------

export default function ResourcingTalentServices() {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={5}>
          <img alt="services" src="/assets/services/service_9.png" />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2">Resourcing & Talent</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
            In today’s competitive market, having the right talent is crucial for business success. At California SoftTech, we specialize in resourcing and talent solutions that help businesses find the best professionals across various industries. From permanent staffing to contract hiring and executive search, we provide end-to-end recruitment services tailored to your specific needs.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
