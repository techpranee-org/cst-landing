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
    title: "Requirement Gathering and Conceptualization",
    description: [
      "Understanding the company's branding, goals, target audience, requirements and preferences",
      
    ],
  },
  {
    step: "STEP 2",
    title: "Design Development",
    description: [
      "Developing comprehensive designs incorporating colors, typography, and visual elements as per brand's identity and message.",
    ],
  },
  {
    step: "STEP 3",
    title: "Client Collaboration and Iteration",
    description: [
      "Collaborate closely with the client to make necessary revisions and adjustments to meet their vision and expectations.",
    ],
  },
  {
    step: "STEP 4",
    title: "Finalization and Delivery",
    description: [
      "Prepare the final version with all required assets and formats suitable for various platforms, both digital and print.",
      
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
          How Graphic Designing Works
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
          From idea to creation, our graphic designing process ensures your vision comes to life
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
