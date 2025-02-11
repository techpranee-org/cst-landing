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
    title: "Strategy and Planning",
    description: [
      "Identify advertising platforms, campaign objectives, defining target audience, setting up budget and create detailed buyer personas.",
      
    ],
  },
  {
    step: "STEP 2",
    title: "Creation and Execution",
    description: [
      "Developing compelling ad creatives, including visuals, copy, and calls-to-action and setting up the campaigns by configuring targeting options and bidding strategies.",
    ],
  },
  {
    step: "STEP 3",
    title: "Monitoring and Optimization",
    description: [
      "Monitoring & optimising the campaign's performance metrics such as clicks, impressions, conversions, and engagement based on data analysis like A/B testing to refine ad variations for better results.      ",
    ],
  },
  {
    step: "STEP 4",
    title: "Analysis and Reporting",
    description: [
      "Evaluate the success of the campaign against the defined objectives, Extract insights, refine future advertising efforts and achieve better results.",
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
          How Advertising Works
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
          From concept to campaign launch, our advertising implementation process is geared for results
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
