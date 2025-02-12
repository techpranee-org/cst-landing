
import {  Container, Typography, Stack, Unstable_Grid2 as Grid } from '@mui/material';


// ----------------------------------------------------------------------

const LISTS = [
  "Startup-Focused Approach",
"Creative Excellence",
"Collaborative Process",
"Holistic Solutions",
"Timely Delivery"

];

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
          <img alt="services" src="/assets/illustrations/illustration_services.svg" />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2">Resourcing & Talent</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
            In today’s competitive market, having the right talent is crucial for business success. At California SoftTech, we specialize in resourcing and talent solutions that help businesses find the best professionals across various industries. From permanent staffing to contract hiring and executive search, we provide end-to-end recruitment services tailored to your specific needs.
            </Typography>

            {/* <Stack spacing={2}>
              {LISTS.map((text) => (
                <Stack key={text} direction="row" alignItems="center">
                  <Box
                    component="span"
                    sx={{
                      mr: 2,
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                    }}
                  />
                  {text}
                </Stack>
              ))}
            </Stack> */}
          </Stack>

          {/* <Button
            component={NextLink}
            href={paths.marketing.caseStudies}
            size="large"
            color="inherit"
            variant="outlined"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            Check Our Work
          </Button> */}
        </Grid>
      </Grid>
    </Container>
  );
}
