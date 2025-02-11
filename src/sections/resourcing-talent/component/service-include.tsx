// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Industry-Specific Expertise',
    description: 'We specialize in sourcing top talent across various industries, ensuring the perfect fit for your needs.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Access to a Global Talent Pool ',
    description: 'Our extensive network connects you with skilled professionals from around the world.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Fast & Efficient Hiring Process',
    description: 'We streamline recruitment with data-driven strategies to reduce hiring time and costs.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Flexible Workforce Solutions',
    description: 'From permanent hires to contract staffing, we offer tailored solutions for every business need.',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'End-to-End Recruitment Support',
    description: 'We manage the entire hiring cycle, from talent sourcing to onboarding, ensuring a seamless experience.',
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
      <Typography variant="h2">Why Choose Our Resourcing & Talent Services?
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
        Embracing the cloud is more than just a technology shift—it’s about unlocking new possibilities for growth and efficiency. Our cloud solutions help businesses reduce IT costs, improve agility, and enhance security, ensuring they stay competitive in a rapidly evolving market.
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
