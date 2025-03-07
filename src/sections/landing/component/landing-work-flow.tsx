// @mui
import { alpha } from '@mui/material/styles';
import { Stack, Container, Typography, Card, Box } from '@mui/material';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning'] as const;

const SERVICES = [
  {
    name: 'Consultative Partnership',
    icon: '/assets/landing/partnership.png',
    content: 'We work closely with your team to identify opportunities for improvement, and together, we define a roadmap that maximizes your investment in technology.'
  },
  {
    name: 'Agility & Responsiveness',
    icon: '/assets/landing/agile.png',
    content: 'Our flexible methodology allows us to quickly adjust to changing market conditions or evolving project requirements, ensuring that we deliver timely solutions.'
  },
  {
    name: 'End-to-End Services: ',
    icon: '/assets/landing/management.png',
    content: 'From initial strategy and design to implementation and ongoing support, California SoftTech provides a comprehensive suite of services that addresses every stage of your technology journey.'
  },
];

// ----------------------------------------------------------------------

export default function LandingWorkFlow() {
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
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Work Flow
        </Typography>

        <Typography variant="h2">Our Approach</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          At California SoftTech, we believe in a collaborative approach to consulting. We start by understanding your business objectives and technology needs, ensuring that we align our solutions with your goals. Our approach is built on the following core principles:
        </Typography>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'flex-end',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceItem key={service.name} service={service} index={index} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

type ServiceItemProps = {
  service: {
    name: string;
    icon: string;
    content: string;
  };
  index: number;
};

function ServiceItem({ service, index }: ServiceItemProps) {
  const { name, icon, content } = service;

  return (
    <Card
      sx={{
        p: 1,
        color: (theme) => theme.palette[COLORS[index]].darker,
        bgcolor: (theme) => theme.palette[COLORS[index]].light,
        boxShadow: (theme) => `-8px 12px 32px 0px ${alpha(theme.palette[COLORS[index]].main, 0.2)}`,
        ...(index === 1 && {
          mb: { md: 2.5 },
        }),
        ...(index === 2 && {
          mb: { md: 5 },
        }),
        ...(index === 3 && {
          mb: { md: 7.5 },
        }),
      }}
    >
      <SvgColor src={icon} sx={{ width: 64, height: 64, opacity: 0.48 }} />

      <Typography variant="h5" sx={{ mt: 3, textAlign: 'center' }}>
        {name}
      </Typography>

      <Typography variant="subtitle1" sx={{ my: 3, textAlign: 'center' }}>
        {content}
      </Typography>
    </Card>
  );
}
