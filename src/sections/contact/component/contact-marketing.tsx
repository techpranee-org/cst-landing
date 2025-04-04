// @mui
import { Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import ContactMarketingInfo from './contact-marketing-info';
import ContactForm from './contact-form';
//


// ----------------------------------------------------------------------

export default function ContactMarketing() {
  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        justifyContent="space-between"
        direction={{ xs: 'column-reverse', md: 'row' }}
      >
        <Grid xs={12} md={6} lg={5}>
          <ContactMarketingInfo />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Typography variant="h1" sx={{ mb: 5 }}>
            Ready To Get Started?
          </Typography>

          <ContactForm/>
        </Grid>
      </Grid>
    </Container>
  );
}
