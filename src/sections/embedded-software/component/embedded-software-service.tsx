
import { Container, Typography, Stack, Unstable_Grid2 as Grid } from '@mui/material';



// ----------------------------------------------------------------------

export default function EmbeddedSoftwareServices() {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={5}>
          <img alt="services" src="/assets/services/service_3.png" />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2">Embedded Software Solutions</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
            At California SoftTech, we specialize in Embedded Software Development, delivering high-performance, scalable, and secure solutions for diverse industries. Our expertise in real-time systems, firmware development, and embedded applications ensures seamless integration with hardware, enabling businesses to build intelligent, efficient, and future-ready products.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
