import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Typography, Container, Stack, Box, Unstable_Grid2 as Grid } from '@mui/material';
// types
import { ITestimonialProps } from 'src/types/testimonial';
// components
import Carousel, { CarouselDots, CarouselArrows } from 'src/components/carousel';
//
import TestimonialItem from './TestimonialItem';
import _mock from "src/_mock"

// ----------------------------------------------------------------------

// type Props = {
//   testimonials: ITestimonialProps[];
// };
export const testimonials = [
  {
    id: 0,
    name: "Sneha",
    role: "CEO & Founder - bestmom.org",
    avatar: _mock.image.avatar(0),
    review:
    <div>
    TechPranee has created a CMS platform for{" "}
    <a
      href="https://bestmom.org/pregnancy"
      style={{ color: "#5846f9" }}
      target='_blank'
    >
      Bestmom
    </a>{" "}
    with a complete 360-degree Product-Admin panel, Database services,
    SEO services, and more. Definitely recommended service.
  </div>
  },
  {
    id: 1,
    name:"Mohan Prakash",
    role: "Ceo - Mind Spring Magnetics",
    avatar: _mock.image.avatar(1),
    review:
    <div>
    These people have improved my Market reach by making{" "}
    <a
      href="https://mindspringmagnetics.com/"
      style={{ color: "#5846f9" }}
      target='_blank'
    >
      Mind Spring{" "}
    </a>
    more accesible and connected. I have taken Web Development and
    Digital Marketing services from them
  </div>
  },
  {
    id: 2,
    name: "Bhagvan Boppa",
    role: "Co-founder - IKKONS",
    avatar: _mock.image.avatar(2),
    review:
       <div>
                We worked with preeti for website development.. I really
                appreciate preeti and his team efforts they have put to complete
                the development successfully with superb quality and the best
                look and feel... I wish all the best for his team future
                assignments...
              </div>
  },
  {
    id: 3,
    name: "Kishore",
    role:"Director - Eminence Technology Solutions LLC",
    avatar: _mock.image.avatar(3),
    review:
    <div>
    We recently got our website revamped through TechPranee. They
    have done commenable job in very shot period of time. I
    recommend TechPranee and wish them Good luck..
  </div>
  },
  {
    id: 4,
    name: "Ananth",
    role: "Ananth Dommety - President & CEO, Trans-Domain Technologies,LLC",
    avatar: _mock.image.avatar(4),
  
    review:
    <div>
    I needed a bussiness flyer at short order and contacted the team
    at TechPranee almost by accident. It was indeed serendipitous -
    I was simply floored by their top-notch professionalism and
    expertise. They reverted to me with a couple of sketches in less
    than 30 minutes of my initial interaction with them. Once I
    picked the one that was closer to my vision, they worked on it
    and gave me a near finished version in an hour. They were
    patient while I made them revise 4 times, finally producing the
    one that was a perfect match to my needs. Their pricing was very
    affordable. Thank you TechPranee, you have won loyal customer
    and even more will come!
  </div>
  },
];
export default function TestimonialMarketing() {
  
  const theme = useTheme();

  const carouselRef = useRef<Carousel | null>(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      sx: {
        mt: { xs: 8, md: 2,},
        
      },
    }),
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Box sx={{ bgcolor: 'background.neutral', overflow: 'hidden' }}>
      <Container
        sx={{
          position: 'relative',
          py: { xs: 10, md: 15 },
        }}
      >
        <Stack spacing={2} sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Testimonials
          </Typography>

          <Typography variant="h2">Who Love Our Work</Typography>
        </Stack>

        <CarouselArrows
          onNext={handleNext}
          onPrev={handlePrev}
          leftButtonProps={{ sx: { display: { xs: 'none', md: 'block' } } }}
          rightButtonProps={{ sx: { display: { xs: 'none', md: 'block' } } }}
        >
          <Grid container spacing={10} justifyContent="center">
            <Grid xs={12} md={8}>
              <Carousel ref={carouselRef} {...carouselSettings}>
                {testimonials.map((testimonial) => (
                  <TestimonialItem key={testimonial.id} testimonial={testimonial} />
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </CarouselArrows>
      </Container>
    </Box>
  );
}

