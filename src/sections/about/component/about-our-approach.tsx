// @mui
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from '@mui/lab';
import { Box, Stack, Typography, Container } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    // year: '2021',
    title: 'Consultative Partnership',
    description:
      'We work closely with your team to identify opportunities for improvement, and together, we define a roadmap that maximizes your investment in technology.',
  },
  {
    // year: '2020',
    title: 'Agility & Responsiveness',
    description:
      'Our flexible methodology allows us to quickly adjust to changing market conditions or evolving project requirements, ensuring that we deliver timely solutions.',
  },
  {
    // year: '2019',
    title: 'End-to-End Services',
    description:
      'From initial strategy and design to implementation and ongoing support, California SoftTech Inc provides a comprehensive suite of services that addresses every stage of your technology journey.',
  },

];

const COLORS = ['primary', 'warning', 'success'] as const;

// ----------------------------------------------------------------------

export default function AboutOurApproach() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            mx: 'auto',
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h2">Our approach</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
          At California SoftTech Inc, we believe in a collaborative approach to consulting. We start by understanding your business objectives and technology needs, ensuring that we align our solutions with your goals. Our approach is built on the following core principles: </Typography>
        </Stack>

        <Timeline position={isMdUp ? 'alternate' : 'right'}>
          {TIMELINES.map((value, index) => (
            <TimelineItem
              key={value.title}
              sx={{
                '&:before': {
                  ...(!isMdUp && { display: 'none' }),
                },
              }}
            >
              <TimelineSeparator>
                <TimelineDot color={COLORS[index]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>

                <Typography 
                variant="h6" 
                sx={{ 
                  mt: 0.5, 
                  mb: 1,
                  color: (theme)=> theme.palette.mode === 'light' ? '' : theme.palette.primary.light 
                  }}>
                  {value.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    maxWidth: { md: 360 },
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
