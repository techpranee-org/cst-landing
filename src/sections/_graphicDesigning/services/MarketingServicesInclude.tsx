// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Infographics & Illustration',
    description: 'Convey complex information visually through graphics and artwork.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Digital Posters & Banners',
    description: 'Create eye-catching online ads and announcements with impactful visuals.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Catalogs & Digital Menu',
    description: 'Showcase products or services digitally for easy browsing and selection.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Presentations & Decks',
    description: 'Design visually engaging slides to enhance presentations and informative talks.',
    icon: '/assets/icons/ic_checklist.svg',
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
        Elevate your business's visual communication with our expertise
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
