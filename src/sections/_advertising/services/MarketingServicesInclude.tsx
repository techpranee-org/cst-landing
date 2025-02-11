// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Google Ads',
    description: ' Advertise on Google s search and display networks to reach a wider audience.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Facebook Ads',
    description: ' Reach your target demographic through tailored advertisements on the Facebook platform.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Social Media Advertising',
    description: 'Promote your brand and products through paid campaigns on various social media platforms.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Creative Development',
    description: 'Conceptualize and produce engaging content for marketing purposes.',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Analytics and Reporting',
    description: 'Monitor and present data on campaign effectiveness for informed decision-making.',
    icon: '/assets/icons/ic_report.svg',
  },
  
];

// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">Services Include</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        Explore our online advertising services to reach the right people at the right time and achieve your business goals.
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES.map((value) => (
          <div key={value.title}>
            <SvgColor
              src={value.icon}
              color="info"
              sx={{ width: 64, height: 64, mx: 'auto', bgcolor: 'primary.main' }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
