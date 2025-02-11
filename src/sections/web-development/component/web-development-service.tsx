// next
import NextLink from 'next/link';
// @mui
import { Box, Container, Typography, Button, Stack, Unstable_Grid2 as Grid } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const LISTS = [
  "Startup-Focused Approach",
"Creative Excellence",
"Collaborative Process",
"Holistic Solutions",
"Timely Delivery"

];

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
          <Image alt="services" src="/assets/illustrations/illustration_services.svg" />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2">Web Development Solutions</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
            In today’s digital era, having a strong online presence is essential for business success. At California SoftTech, we specialize in custom web development that is tailored to your business needs. Our team of experienced developers builds scalable, secure, and high-performance websites and web applications that enhance user experience and drive growth.
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
