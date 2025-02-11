// @mui
import { useTheme } from '@mui/material/styles';
import { Typography, Stack, Container, Paper, Box } from '@mui/material';
// types
import { IBrandProps } from 'src/types/brand';
// components
import Image from 'src/components/image';
import Carousel from 'src/components/carousel';

// ----------------------------------------------------------------------

// type Props = {
//   brands: IBrandProps[];
// };
const brands=[
  {
    name:"sps",
    image:"https://tparticles.s3.ap-south-1.amazonaws.com/SPS_01_2_e0461bc03b.png?updated_at=2024-07-25T13:21:13.098Z"
  },
  {
    name:"scipex",
    image:"https://tparticles.s3.ap-south-1.amazonaws.com/scipex_logo_0d35b3f421.png?updated_at=2024-07-25T13:20:47.850Z"
  },
  {
    name:"varasiddhi",
    image:"https://tparticles.s3.ap-south-1.amazonaws.com/varasiddhi_logo_1_1_76cb1faa29.jpg?updated_at=2024-07-25T13:16:38.144Z"
  },
  {
    name:"gemini",
    image:"https://tparticles.s3.ap-south-1.amazonaws.com/transparent_gemnicompany_logo_dcffab2f8c.png?updated_at=2024-07-25T13:12:39.942Z"
  },
  {
    name:"mahidhara",
    image:"https://tparticles.s3.ap-south-1.amazonaws.com/mahidhara_logo_0fba1cb79a.png?updated_at=2024-07-25T13:11:44.617Z"
  },
  {
    name:"desert engineering",
    image:"https://tparticles.s3.ap-south-1.amazonaws.com/desert_engineering_logo_0b884af0fe.png?updated_at=2024-07-25T13:12:23.339Z"
  },
  {
    name:"mohan electronics",
    image:"https://tparticles.s3.ap-south-1.amazonaws.com/mohan_electronics_logo_0bc97db4a8.png?updated_at=2024-07-25T13:11:44.672Z"
  },
  {
    name:"vft",
    image:"https://tparticles.s3.ap-south-1.amazonaws.com/vflytravels_logo_bd519aed44.png?updated_at=2024-07-25T13:11:44.647Z"
  },
  {
    name:"simple cj",
    image:"https://tparticles.s3.ap-south-1.amazonaws.com/simplecj_logo1_1_8516dcfd6b.png?updated_at=2024-07-25T13:16:37.500Z"
  },
]

export default function OurClientsCareer() {
  const theme = useTheme();

  const carouselSettings = {
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">Our Clients</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
        Our clients' voices speak volumes. See how we've transformed businesses through their testimonials and be part of the success.
        </Typography>
      </Stack>

      <Carousel {...carouselSettings}>
        
        {brands.map((brand) => (
          <Box sx={{ px: 1.5, height:"150px",}}>
            <Paper
              variant="outlined"
              sx={{
                py: 3,
                borderRadius: 2,
                bgcolor: 'background.default',
                height:"100%",
                display:"flex",
                alignItems:"Center"
              }}
            >
              <Image
                alt={brand.name}
                src={brand.image}
                sx={{
                  width: 150,
                  height: "auto",
                  mx: 'auto',
                }}
              />
            </Paper>
          </Box>
        ))}
      
      </Carousel>
    </Container>
  );
}
