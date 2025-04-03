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
// components
import Iconify from 'src/components/iconify';
import Link from 'next/link';
import { alpha, styled } from "@mui/material/styles";
import { bgGradient } from 'src/utils/cssStyles';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
    imgUrl: "/assets/landing/landing_3.jpg",
  }),
  padding: theme.spacing(12, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(15, 0),
  },
}));

export default function LandingAbout() {

  return (
    <StyledRoot>
      <Container>

        <Grid
          container
        >
          <Grid
            xs={12}
            sx={{
              textAlign: 'center',
            }}
          >
            <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
              About Us
            </Typography>

            <Typography variant="h2" sx={{ my: 3 }}>
              Who We Are
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              California SoftTech Inc is a premier IT services provider, with operations in the United States, Canada& India. We specialize in offering tailored professional consulting services that drive operational excellence and improve organizational performance through the strategic use of technology and outsourcing solutions.
            </Typography>

            <Link href={'/about'}>
              <Button
                size="large"
                endIcon={<Iconify icon="carbon:chevron-right" />}
                sx={{
                  my: 5,
                  color: (theme) => theme.palette.primary.main
                }}

              >
                Lean more
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>
  );
}
