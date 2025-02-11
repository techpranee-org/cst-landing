// @mui
import { Typography, Container, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Michigan',
    description: '5600 West Maple Rd,Suite C307, West Bloomfield, MI 48322',
    icon: '/assets/icons/ic_banking_currency.svg',
  },
  {
    title: 'California',
    description: '1030 E El Camino Real,Suite #111, Sunnyvale, CA 94087',
    icon: '/assets/icons/ic_banking_currency.svg',
  },
  {
    title: 'Canada',
    description: '2520 orchestrate drive, Oshawa, ON, L1L 0R3',
    icon: '/assets/icons/ic_banking_currency.svg',
  },
  // {
  //   title: 'Graphic Designing',
  //   description: 'Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ',
  //   icon: '/assets/icons/ic_file.svg',
  // },
];

// ----------------------------------------------------------------------

export default function OfficesLocation() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 5 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">Our Offices
      </Typography>


      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          mt: 10,
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
