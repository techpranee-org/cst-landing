// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Product Design',
    description: 'We bring your ideas to life by creating functional and visually appealing consumer products.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Figma Prototypes',
    description: 'Experience your digital designs firsthand with interactive prototypes, perfect for testing and refining your concepts.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'UI/UX Design',
    description: 'Our designs prioritize user-friendliness, ensuring seamless and enjoyable interactions that leave a lasting impression.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Logo Creation',
    description: 'We design logos that encapsulate your brand s essence, making it stand out in the crowded market.',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Branding & Identity Design',
    description: 'From logos to messaging, we shape a strong and consistent brand identity that resonates with your target audience.',
    icon: '/assets/icons/ic_report.svg',
  },
  // {
  //   title: 'Graphic Designing',
  //   description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
  //   icon: '/assets/icons/ic_file.svg',
  // },
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
        Branding isn't just a logo – it's a strategy that propels your business forward. Learn how our solutions contribute to your growth story.
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
