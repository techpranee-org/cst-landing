// @mui
import { Box, Container, Typography, Stack } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const BENEFITS = [
  {
    title: 'Custom Website Development',
    description: 'Tailored web solutions designed for your unique business needs.',
    iconColor: 'primary',
  },
  {
    title: 'Responsive & Mobile-First Design',
    description: 'Optimized for all devices and screen sizes.',
    iconColor: 'success',
  },
  {
    title: 'eCommerce Development',
    description: 'Robust, secure, and user-friendly online stores.',
    iconColor: 'secondary',
  },
  {
    title: 'Full-Stack Web Applications',
    description: 'Frontend & backend solutions with modern technologies.',
    iconColor: 'secondary',
  },
  {
    title: 'CMS Development ',
    description: 'WordPress, Drupal, and custom CMS solutions for easy content management.',
    iconColor: 'success',
  },
  {
    title: 'API Development & Integration',
    description: 'Seamless connectivity with third-party applications.',
    iconColor: 'primary',
  },
];

// ----------------------------------------------------------------------

export default function WebDevelopmentCapabilities() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 10 },
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Our Web Development Capabilities
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
            color: (theme)=> theme.palette.mode === 'light' ? theme.palette.grey[800] : theme.palette.secondary.contrastText 
          }}
        >
           At California SoftTech, we offer comprehensive web development services that cater to businesses of all sizes. Our expertise spans across front-end and back-end development, UI/UX design, API integrations, and cloud-based solutions.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            gridTemplateColumns: { md: 'repeat(3, 1fr)' },
          }}
        >
          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(0, 3).map((benefit, index) => (
              <BenefitItem key={benefit.title} benefit={benefit} index={index} reverse />
            ))}
          </Stack>

          {isMdUp && <Image alt="benefits" src="/assets/illustrations/illustration_benefits.svg" />}

          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(-3).map((benefit, index) => (
              <BenefitItem key={benefit.title} benefit={benefit} index={index} />
            ))}
          </Stack>
        </Box>

        <Typography
          sx={{
            mt: 10,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
            color: (theme)=> theme.palette.mode === 'light' ? theme.palette.grey[800] : theme.palette.secondary.contrastText 
          }}
        >
           From startups to enterprises, we deliver high-quality, future-proof web solutions that drive engagement and business success.
        </Typography>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

type BenefitItemProps = {
  index: number;
  reverse?: boolean;
  benefit: {
    title: string;
    description: string;
    iconColor: string;
  };
};

function BenefitItem({ benefit, reverse, index }: BenefitItemProps) {
  const { title, description, iconColor } = benefit;

  return (
    <Stack
      spacing={1}
      direction={{ xs: 'row', md: reverse ? 'row-reverse' : 'row' }}
      sx={{
        ...(reverse && {
          textAlign: { md: 'right' },
        }),
        ...(index === 1 && {
          pl: { md: 6 },
          ...(reverse && {
            pl: { md: 0 },
            pr: { md: 6 },
          }),
        }),
      }}
    >
      <Box
        sx={{
          m: 1,
          width: 16,
          height: 16,
          flexShrink: 0,
          borderRadius: '50%',
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          ...(iconColor === 'secondary' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
          }),
          ...(iconColor === 'success' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.success.light}, ${theme.palette.success.main})`,
          }),
        }}
      />

      <Stack spacing={1}>
        <Typography variant="h5" sx={{color: (theme)=> theme.palette.mode === 'light' ? '' : theme.palette.primary.light }}>{title}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}
