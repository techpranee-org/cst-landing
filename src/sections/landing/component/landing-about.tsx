// @mui
import {
  Stack,
  Container,
  Typography,
  Button,
  Divider,
  Box,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';
// components
import Iconify from 'src/components/iconify';
import Link from 'next/link';

// ----------------------------------------------------------------------

const ROWS = [
  {
    label: 'projects',
    total: 1000,
    content: 'Empowering businesses with innovative and tailored technology solutions.',
  },
  {
    label: 'Happy clients',
    total: 900,
    content: 'Building long-term partnerships through excellence and trust.',
  },
  {
    label: 'Awards',
    total: 100,
    content: 'A testament to our commitment to quality and innovation.',
  },
];

// ----------------------------------------------------------------------

export default function LandingAbout() {


  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >

      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            About Us
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            Who We Are
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            California SoftTech is a premier IT services provider, with operations in the United States, Canada& India. We specialize in offering tailored professional consulting services that drive operational excellence and improve organizational performance through the strategic use of technology and outsourcing solutions.
          </Typography>

          <Link href={'/about'}>
            <Button
              size="large"
              endIcon={<Iconify icon="carbon:chevron-right" />}
              sx={{ 
                my: 5,
                color: (theme)=> theme.palette.primary.main
               }}

            >
              Lean more
            </Button>
          </Link>
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  <Stack direction="row">
                    <Typography variant="h2">{fShortenNumber(row.total)}</Typography>
                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                      +
                    </Box>
                  </Stack>

                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    {row.label}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {row.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
