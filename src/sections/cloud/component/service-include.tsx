// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Scalability & Flexibility',
    description: 'Easily scale your cloud infrastructure up or down based on your business needs.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Cost Efficiency',
    description: 'Reduce IT expenses with optimized cloud solutions that eliminate the need for costly on-premise infrastructure.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Enhanced Security',
    description: 'Protect your data and applications with advanced cloud security protocols and compliance standards.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Seamless Cloud Migration',
    description: 'Effortlessly transition to the cloud with minimal disruption and maximum efficiency.',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Expert Support & Maintenance',
    description: 'Get continuous monitoring, support, and optimization for a seamless cloud experience.',
    icon: '/assets/icons/ic_report.svg',
  },
  // {
  //   title: 'Graphic Designing',
  //   description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
  //   icon: '/assets/icons/ic_file.svg',
  // },
];

// ----------------------------------------------------------------------

export default function ServicesInclude() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">Why Choose Our Cloud Services?
      </Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 4, md: 6 },
        }}
      >
        Embracing the cloud is more than just a technology shift—it’s about unlocking new possibilities for growth and efficiency. Our cloud solutions help businesses reduce IT costs, improve agility, and enhance security, ensuring they stay competitive in a rapidly evolving market.
      </Typography>

      <Box
        sx={{
          rowGap: 0,
          columnGap: 8,
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

            <Typography
              variant="h5"
              sx={{
                mt: 5,
                mb: 2,
                color: (theme) => theme.palette.mode === 'light' ? '' : theme.palette.primary.light
              }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
