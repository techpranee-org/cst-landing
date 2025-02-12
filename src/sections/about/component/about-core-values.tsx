// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Excellence',
    description: 'We strive for the highest standards of quality in everything we do.',
    icon: '/assets/icons/excellent.png',
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest level of professionalism and ethics in all our business interactions.',
    icon: '/assets/icons/integrity.png',
  },
  {
    title: 'Innovation',
    description: 'We embrace change and continuously seek new ways to improve and add value.',
    icon: '/assets/icons/innovative.png',
  },
  {
    title: 'Collaboration',
    description: 'We work as an extension of your team, ensuring that our efforts are aligned with your goals.',
    icon: '/assets/icons/collaboration.png',
  },
  {
    title: 'Customer Focus',
    description: 'Your success is our success. We are committed to providing personalized, responsive service to meet your unique needs.',
    icon: '/assets/icons/focus.png',
  },
];

// ----------------------------------------------------------------------

export default function AboutCoreValues() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 5, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ mb: { xs: 8, md: 10 } }}>
        Our Core Values
      </Typography>
      <Typography sx={{ mt: 3, mb: 5, color: "text.secondary" }}>
        Our values guide everything we do at California SoftTech. We are dedicated to delivering excellence, integrity, and value to every client we serve. These core values reflect our commitment to fostering lasting relationships and achieving mutual success:
        <br />
        <br />
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: 8,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {CORE_VALUES.map((value) => (
          <Box key={value.title}>
            <SvgColor
              src={value.icon}
              sx={{ width: 64, height: 64, mx: 'auto', color: 'primary.main' }}
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
          </Box>
        ))}
      </Box>
    </Container>
  );
}
