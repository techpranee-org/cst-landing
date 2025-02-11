// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Custom Embedded Solutions',
    description: 'Tailored software to meet the unique demands of your hardware.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Real-Time & High-Performance Systems',
    description: 'Reliable and optimized solutions for mission-critical applications.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Seamless Hardware-Software Integration',
    description: 'Ensuring smooth communication between embedded systems and external devices.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Secure & Scalable Architecture',
    description: 'Designed for efficiency, security, and future scalability.',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Industry-Specific Expertise',
    description: 'Serving automotive, healthcare, consumer electronics, industrial automation, IoT, and more.',
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
      <Typography variant="h2">Why Choose Our Embedded Software Services?
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
        Developing reliable and high-performance embedded software requires deep technical expertise and a thorough understanding of hardware-software integration. At California SoftTech, we bring years of experience in designing, developing, and optimizing embedded solutions that power smart devices and mission-critical applications. Our team ensures seamless performance, scalability, and security, helping businesses stay ahead in an increasingly connected world.
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
