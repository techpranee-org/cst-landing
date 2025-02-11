// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'On-Page SEO',
    description: ' Refining website content and structure to improve search engine rankings.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Off-Page SEO',
    description: 'Building external factors like backlinks to enhance online visibility.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Local SEO',
    description: ' Tailoring strategies to make your business more discoverable for local searches.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'E-commerce SEO',
    description: 'Optimizing online stores for better search engine visibility and higher sales.',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Technical SEO',
    description: ' Fine-tuning technical aspects of your website to improve its search engine performance.',
    icon: '/assets/icons/ic_report.svg',
  },
  {
    title: 'Content Development',
    description: 'Crafting engaging, informative content to attract and engage your target audience.',
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
        Explore our offerings to boost rankings, drive traffic, and amplify your business success.
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
