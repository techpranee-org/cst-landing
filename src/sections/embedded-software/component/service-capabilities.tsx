// @mui
import { Box, Container, Typography, Stack } from '@mui/material';
import ImageWithGradient from 'src/components/general/image-gradient';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components

// ----------------------------------------------------------------------

const BENEFITS = [
  {
    title: 'Firmware Development',
    description: 'Optimized firmware for microcontrollers and embedded systems.',
    iconColor: 'primary',
  },
  {
    title: 'Real-Time Operating Systems (RTOS) ',
    description: 'Implementation for time-sensitive applications.',
    iconColor: 'success',
  },
  {
    title: 'Device Driver Development',
    description: 'Custom drivers for seamless hardware communication.',
    iconColor: 'secondary',
  },
  {
    title: 'IoT & Edge Computing Solutions',
    description: 'Smart, connected devices with advanced computing capabilities.',
    iconColor: 'secondary',
  },
  {
    title: 'Embedded AI & Machine Learning',
    description: 'Enabling intelligent decision-making in embedded systems.',
    iconColor: 'success',
  },
  {
    title: 'System Optimization & Performance Tuning ',
    description: 'Enhancing speed, power efficiency, and reliability.',
    iconColor: 'primary',
  },
];

// ----------------------------------------------------------------------

export default function EmbeddedServicesCapabilities() {
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
          Our Embedded Software Capabilities
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
            color: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[800] : theme.palette.secondary.contrastText
          }}
        >
          At California SoftTech, we bring years of experience in designing, developing, and optimizing embedded solutions that power smart devices and mission-critical applications.
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

          {isMdUp && <ImageWithGradient src='/assets/images/img_6.jpg' borderRadius={'15px'}/>}

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
            color: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[800] : theme.palette.secondary.contrastText
          }}
        >
          From concept to deployment, California SoftTech ensures your embedded systems are designed to deliver maximum efficiency, reliability, and performance.
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
        <Typography variant="h5" sx={{ color: (theme) => theme.palette.mode === 'light' ? '' : theme.palette.primary.light }}>{title}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}
