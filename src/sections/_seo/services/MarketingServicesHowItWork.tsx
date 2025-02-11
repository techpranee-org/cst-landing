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
    title: "Keyword Research and Analysis",
    description: [
      "1.Identify relevant keywords and phrases related to the company's products or services.",
      "2.Conduct competitor analysis to understand their keyword strategies.",
      "3.Select a mix of high-volume, low-competition, and long-tail keywords for targeting."
    ],
  },
  {
    step: "STEP 2",
    title: "On-Page Optimization",
    description: [
      "1.Optimize website content and structure based on selected keywords.",
      "2.Improve meta titles, meta descriptions, and header tags for keyword relevance.",
      "3.Enhance internal linking to improve navigation and user experience.",
      "4.Ensure mobile-friendliness and fast page load times."
    ],
  },
  {
    step: "STEP 3",
    title: "Off-Page Optimization and Link Building",
    description: [
      "1.Develop a strategy for acquiring high-quality backlinks from reputable websites.",
      "2.Create shareable and valuable content to attract natural backlinks.",
      "3.Engage in guest posting, influencer outreach, and social media promotion.",
      "4.Monitor and disavow low-quality or harmful backlinks."
    ],
  },
  {
    step: "STEP 4",
    title: "Monitoring, Analysis, and Reporting",
    description: [
      "1.Use analytics tools to track website performance, traffic, and keyword rankings.",
      "2.Analyze user behavior, bounce rates, and conversion rates to identify areas for improvement.",
      "3.Generate regular reports to showcase progress, highlight achievements, and provide insights for strategy refinement.",
      "4.Stay updated with search engine algorithm changes and adapt strategies accordingly."
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
          How SEO Works
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
          Curious about our SEO approach? Our structured implementation process covers everything from comprehensive website audits to targeted keyword strategies.
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
