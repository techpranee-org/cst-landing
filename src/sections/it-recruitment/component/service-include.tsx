// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: ' End-to-End Hiring Solutions',
    description: 'From contract staffing to full-time placements, we provide flexible hiring options.',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Industry-Specific IT Talent',
    description: 'We source professionals experienced in healthcare, finance, telecommunications, retail, and more.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Speed & Efficiency',
    description: 'Our streamlined recruitment process ensures quick hiring without compromising on quality.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Skilled & Certified IT Professionals',
    description: 'We connect you with developers, engineers, analysts, and tech leaders with proven expertise.',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Customized Talent Acquisition',
    description: 'We tailor our recruitment strategy to match your company’s culture, goals, and technology stack.',
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
      <Typography variant="h2">Why Choose Us for IT Recruitment?</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 4, md: 6 },
        }}
      >
        Finding the right IT talent can be challenging, but with our proven recruitment strategies, we ensure you get the best-fit professionals for your business needs. Whether you need software developers, cybersecurity experts, cloud engineers, or IT consultants, we have a vast network of pre-vetted candidates ready to join your team.
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
