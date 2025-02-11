// @mui
import { styled, alpha } from "@mui/material/styles";
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from "@mui/lab";
import { Typography, Container } from "@mui/material";
// utils
import { bgGradient } from "src/utils/cssStyles";
// hooks
import useResponsive from "src/hooks/useResponsive";
import { PointOfSale } from "@mui/icons-material";

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    step: "STEP 1",
    title: "Planning and Design",
    description: [
      "1.Define project goals, target audience, and create a design plan.",
      "2.Develop wireframes, mockups, and UI/UX designs for the Application.",
    ],
  },
  {
    step: "STEP 2",
    title: "Development",
    description: [
      "1.Build the front-end using HTML, CSS, and JavaScript for visual elements.",
      "2.Develop the back-end, including databases and server-side logic.",
    ],
  },
  {
    step: "STEP 3",
    title: "Testing and Optimization",
    description: [
      "1.Test functionality, performance, compatibility, and security.",
      "2.Optimize for speed, responsiveness, and user experience.",
    ],
  },
  {
    step: "STEP 4",
    title: "Launch and Maintenance",
    description: [
      "1.Deploy the website to a live server for public access.",
      "2.Monitor, update, and maintain the website for ongoing performance and functionality.",
    ],
  },
];

const COLORS = ["primary", "secondary", "warning", "success"] as const;

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: "/assets/background/overlay_2.jpg",
  }),
  padding: theme.spacing(10, 0),
  color: theme.palette.common.white,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingServicesHowItWork() {
  const isMdUp = useResponsive("up", "md");

  return (
    <StyledRoot>
      <Container>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          How Product Development Works
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: "auto",
            opacity: 0.72,
            maxWidth: 480,
            textAlign: "center",
            mb: { xs: 8, md: 10 },
          }}
        >
          Collaboration is at the heart of our process. Discover how we work together to deliver solutions that exceed expectations.
        </Typography>

        <Timeline position={isMdUp ? "alternate" : "right"}>
          {TIMELINES.map((value, index) => (
            <TimelineItem
              key={value.title}
              sx={{
                "&:before": {
                  ...(!isMdUp && { display: "none" }),
                },
              }}
            >
              <TimelineSeparator>
                <TimelineDot color={COLORS[index]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <Typography
                  variant="overline"
                  sx={{ color: `${COLORS[index]}.main` }}
                >
                  {value.step}
                </Typography>

                <Typography variant="h4" sx={{ mt: 0.5, mb: 1 }}>
                  {value.title}
                </Typography>
                {value.description.map((point, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    sx={{
                      opacity: 0.72,
                      maxWidth: { md: 360 },
                      ...(index % 2 && {
                        ml: "auto",
                      }),
                    }}
                  >
                    {point}
                  </Typography>
                ))}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </StyledRoot>
  );
}
