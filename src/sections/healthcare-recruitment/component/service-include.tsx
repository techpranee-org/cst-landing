// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Access to Top Talent',
    description: 'We connect you with highly qualified doctors, nurses, medical technicians, and administrative staff.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: ' Industry Expertise',
    description: 'Our recruitment team understands the unique challenges and compliance requirements of the healthcare sector.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'End-to-End Staffing Solutions',
    description: 'From temporary placements to full-time hires, we provide flexible staffing options.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Speed & Efficiency',
    description: 'We streamline the hiring process to quickly fill critical roles without compromising quality.',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Compliance & Credentialing',
    description: 'We ensure all candidates meet regulatory and certification standards.',
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
      <Typography variant="h2">Why Choose Us for Healthcare Recruitment?</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 4, md: 6 },
        }}
      >
        Finding the right talent in the healthcare industry is crucial for ensuring quality patient care and seamless operations. At California SoftTech, we specialize in connecting healthcare providers with top-tier professionals, ensuring that hospitals, clinics, and medical institutions have access to the skilled workforce they need. With our expertise in healthcare staffing, we streamline the hiring process while maintaining compliance with industry standards.
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
              color={'info'}
              sx={{ 
                width: 64, 
                height: 64, 
                mx: 'auto', 
                bgcolor: 'primary.main'
               }}
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
