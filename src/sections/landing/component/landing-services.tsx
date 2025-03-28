
// @mui
import {
  Stack,
  Container,
  Typography,
  Card,
  Box,
} from "@mui/material";

import SvgColor from "src/components/svg-color";
import TextMaxLine from "src/components/text-max-line";
import Carousel, { CarouselArrows } from "src/components/carousel";
import { useRef } from "react";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------


const SERVICES = [
  {
    name: "Business Intelligence",
    icon: "/assets/icons/bi.png",
    content: "Transform data into actionable insights for better decision-making.",
  },
  {
    name: "Infrastructure Management & Security",
    icon: "/assets/icons/infra.png",
    content: "Ensure robust, secure, and scalable IT environments.",
  },
  {
    name: "Quality Assurance & Testing Services",
    icon: "/assets/icons/quality.png",
    content: "Guarantee the highest standards of software quality and performance.",
  },
  {
    name: "Enterprise Application Management",
    icon: "/assets/icons/enterprise.png",
    content: "Streamline and enhance enterprise-level application workflows.",
  },
  {
    name: "Custom Application Development & Management",
    icon: "/assets/icons/custom.png",
    content: "Deliver benspoke solutions tailored to unique business needs",
  },
  
];

// ----------------------------------------------------------------------

export default function LandingServices() {
  const theme = useTheme();
  const carouselRef = useRef<Carousel | null>(null);
  const carouselSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: Boolean(theme.direction === "rtl"),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 480,
          mb: { xs: 8, md: 5 },
          mx: { xs: "auto", md: "unset" },
          textAlign: { xs: "center", md: "unset" },
        }}
      >
        <Typography variant="overline" sx={{ color: "text.disabled" }}>
          Our Services
        </Typography>

        <Typography variant="h2">We Provide</Typography>

        <Typography sx={{ color: "text.secondary" }}>
        comprehensive technology initiatives and ongoing support across several key areas:
        </Typography>
      </Stack>

      <Box>
        <Carousel ref={carouselRef} {...carouselSettings}>
          {SERVICES.map((service, index) => (
            // sx={{ margin: '5px 0px 5px 0px' }}
             <Box key={service.name} >
             <ServiceItem service={service} index={index} />
           </Box>
          ))}
        </Carousel>
        <CarouselArrows
          spacing={2}
          justifyContent="center"
          marginTop={5}
          onNext={handleNext}
          onPrev={handlePrev}
          sx={{ width: 1 }}
        />
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

type ServiceItemProps = {
  service: {
    name: string;
    content: string;
    icon: string;
  };
  index: number;
};

function ServiceItem({ service, index }: ServiceItemProps) {
  const { name, icon, content } = service;
  

  return (
    <Card
      sx={{
        height: 350,
        textAlign: "center",       
        marginLeft: "6px",
        bgcolor: (theme)=> theme.palette.mode === 'light' ? '' : theme.palette.secondary.darker
      }}
    >
      <SvgColor
        src={icon}
        sx={{
          width: 88,
          height: 88,
          mx: "auto",
          mt: 3,
          color: (theme) => theme.palette.primary.main,
        }}
      />

      <Stack spacing={1} sx={{ my: 5, mx: 2 }}>
        <TextMaxLine 
        variant="h6" 
        sx={{ 
          color: (theme)=> theme.palette.mode === 'light' ? theme.palette.primary.dark :  theme.palette.primary.light
          }}>{name}</TextMaxLine>
        {/* <TextMaxLine variant="body2" sx={{ color: "text.secondary" }}>
          {content}
        </TextMaxLine> */}
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {content}
        </Typography>
      </Stack>
    </Card>
  );
}
