// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Tailor-Made Solutions',
    description: 'We develop websites and applications customized to your unique business needs.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'User-Centric Design',
    description: 'Our web solutions prioritize intuitive navigation and seamless user experiences.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Scalability & Performance',
    description: 'We build fast, secure, and scalable websites that grow with your business.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Latest Technologies',
    description: 'Our team leverages modern frameworks and tools for robust web development.',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'End-to-End Support',
    description: 'From planning to deployment and maintenance, we provide full-cycle web development services.',
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
      <Typography variant="h2">Why Choose Our Web Development Services?
      </Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        Building a website isn’t just about design—it’s about creating a seamless, engaging, and high-performing digital experience. Whether you need a simple website, a complex web application, or an eCommerce platform, we ensure fast, secure, and scalable solutions that help your business stand out.
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

            <Typography 
            variant="h5" 
            sx={{ 
              mt: 5, 
              mb: 2,
              color: (theme)=> theme.palette.mode === 'light' ? '' : theme.palette.primary.light 
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
