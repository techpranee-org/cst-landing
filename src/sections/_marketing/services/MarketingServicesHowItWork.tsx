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

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    step: "STEP 1",
    title: "Strategy and Identity Definition",
    description: [
      "1.Defining vision, mission, and unique selling proposition (USP).",
      "2.Understanding target audience and market through research.",
      "3.Crafting brand name, tagline, and core messaging.",
    ],
  },
  {
    step: "STEP 2",
    title: "Visual Identity Development",
    description: [
      "1.Design a logo that aligns with your brand's values and personality.",
      "2.Choose a color palette, typography, and visual elements.",
      "3.Create brand guidelines for consistent usage.",
    ],
  },
  {
    step: "STEP 3",
    title: "Online Presence and Launch",
    description: [
      "1.Build a professional website that communicates your value.",
      "2.Establish social media profiles and engage with your audience.",
      "3.Launch your brand through events, press releases, and storytelling.",
    ],
  },
  {
    step: "STEP 4",
    title: "Engagement and Evolution",
    description: [
      "1.Interact with customers, gather feedback, and adjust as needed.",
      "2.Keep content creation consistent and aligned with your brand.",
      "3.Evolve your branding as your startup grows and expands.",
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
          How Branding Works
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
          From recognition to customer loyalty, effective branding shapes your business's destiny
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
