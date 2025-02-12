import {
    Stack,
    Container,
    Typography,
    Card,
    Box,
    IconButton,
} from "@mui/material";

import SvgColor from "src/components/svg-color";
import TextMaxLine from "src/components/text-max-line";
import Carousel, { CarouselArrows } from "src/components/carousel";
import { useRef } from "react";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

const SERVICES = [
    {
        name: "Expertise Across Industries",
        icon: "/assets/icons/expert.png",
        content: "We understand the unique needs and challenges of various industries, from healthcare to financial services. This enables us to tailor solutions that are both effective and industry-specific.",
    },
    {
        name: "Innovative Solutions",
        icon: "/assets/icons/innovative.png",
        content: "We are committed to continuous innovation, ensuring that our clients stay ahead of the curve by integrating the latest technological trends and best practices.",
    },
    {
        name: "Scalability and Flexibility",
        icon: "/assets/icons/scalable.png",
        content: "Whether your needs are short-term or long-term, we offer scalable solutions that can grow with your business, adapting to evolving requirements over time.",
    },
    {
        name: "Proven Track Record",
        icon: "/assets/icons/proven.png",
        content: "With a history of delivering thousands of successful projects for Fortune 500 clients, we have a proven track record of driving results and exceeding expectations.",
    },
    {
        name: "Global Reach with Expertise",
        icon: "/assets/icons/global.png",
        content: "With operations across the U.S. and Canada, we bring a unique combination of local market knowledge and global capabilities.",
    },

];

// ----------------------------------------------------------------------

export default function LandingWhyChooseUs() {
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
                    Proven IT Expertise
                </Typography>

                <Typography variant="h2">Why Choose California SoftTech?</Typography>

                <Typography sx={{ color: "text.secondary" }}>
                    At California SoftTech, we don’t just provide services—we partner with our clients to ensure long-term success. Our team of highly skilled professionals combines deep industry expertise with the latest technological advancements to solve your business challenges. Here’s why organizations choose us:
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
                textAlign: "center",
                marginLeft: "6px",
                height: 450,
                bgcolor: (theme) => theme.palette.mode === 'light' ? '' : theme.palette.secondary.darker
            }}
        >
            <SvgColor
                src={icon}
                sx={{
                    width: 88,
                    height: 88,
                    mx: "auto",
                    mt: 5,
                    color: (theme) => theme.palette.primary.main,

                }}
            />

            <Stack spacing={1} sx={{ my: 5 }}>
                <TextMaxLine
                    variant="h6"
                    sx={{
                        color: (theme) => theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.light
                    }}>
                    {name}
                </TextMaxLine>
                <Typography variant="body2" sx={{ color: "text.secondary", p: 2 }}>{content}</Typography>
            </Stack>
        </Card>
    );
}
