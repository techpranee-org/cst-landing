// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Social Media Marketing',
    description: 'Strategically use social platforms to promote brands and engage audiences.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'SMS Marketing',
    description: 'Reach customers directly through text messages with targeted offers.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'WhatsApp Marketing',
    description: 'Engage users through personalized messaging on the popular WhatsApp platform.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'E-Mail Marketing',
    description: 'Distribute promotional messages and content to audiences via email.',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Social Media Optimization',
    description: 'Improve your social media presence to increase visibility and engagement.',
    icon: '/assets/icons/ic_report.svg',
  },
  {
    title: 'Online PR Management',
    description: 'Maintain and enhance digital reputation and public image through effective online PR strategies.',
    icon: '/assets/icons/ic_file.svg',
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
        Ready to connect with your audience on a digital scale? Explore our tailored online marketing solutions, designed to drive engagement, conversions, and growth.
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
