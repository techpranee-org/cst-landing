// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Landing Pages',
    description: 'Designed to drive conversions, these single-page sites focus on a specific call to action.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Static Website',
    description: ' With unchanging content, these websites are simple and easy to maintain.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Custom Dynamic Website',
    description: 'Tailored to your needs, these interactive sites offer personalized user experiences.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'CMS Websites',
    description: 'Empower yourself to manage content easily with these user-friendly, content-driven sites.',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'E-commerce Websites',
    description: 'Online storefronts where you can showcase and sell your products or services.',
    icon: '/assets/icons/ic_report.svg',
  },
  {
    title: 'Mobile App Development',
    description: 'We create applications that run on mobile devices, bringing your ideas to users fingertips.',
    icon: '/assets/icons/ic_file.svg',
  },
  {
    title: 'Web Analytics',
    description: 'Gain insights into your website s performance and user interactions to inform strategic decisions.',
    icon: '/assets/icons/ic_file.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
  const theme = useTheme();
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
        Ready to innovate? Our Product Development services bring your vision to life, combining cutting-edge technology with creative design.
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
              sx={{ width: 64, height: 64, mx: 'auto', bgcolor: theme.palette.mode === 'dark' ? '#FA541C' : '#FA541C', }}
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
