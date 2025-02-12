// @mui
import { Box, Container, Typography, Stack } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';


// ----------------------------------------------------------------------

const BENEFITS = [
  {
    title: 'Permanent & Contract Staffing',
    description: 'Find the right candidates for short-term or long-term roles.',
    iconColor: 'primary',
  },
  {
    title: 'Executive Search & Leadership Hiring',
    description: 'Identify top executives to lead your business to success.',
    iconColor: 'success',
  },
  {
    title: 'IT & Technical Recruitment',
    description: 'Source skilled professionals for specialized tech roles.',
    iconColor: 'secondary',
  },
  {
    title: 'On-Demand Workforce Solutions',
    description: 'Access a flexible and scalable talent pool as needed.',
    iconColor: 'secondary',
  },
  {
    title: 'Diversity & Inclusion Hiring',
    description: 'Build a workforce that fosters innovation and creativity.',
    iconColor: 'success',
  },
  {
    title: 'End-to-End Recruitment Support',
    description: 'From sourcing to onboarding, we handle the entire hiring process.',
    iconColor: 'primary',
  },
];

// ----------------------------------------------------------------------

export default function ResourcingTalentCapabilities() {
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
        Our Resourcing & Talent Capabilities
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
           At California SoftTech, we provide comprehensive recruitment solutions designed to help businesses identify, attract, and retain top talent. Our expertise spans permanent staffing, contract hiring, executive search, and workforce management, ensuring that organizations have the right people in the right roles. With a data-driven approach and a global talent network, we deliver customized, scalable, and efficient hiring solutions to meet your evolving business needs.
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

          {isMdUp && <img alt="benefits" src="/assets/services/service_10.png" />}

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
           From startups to Fortune 500 companies, we help businesses attract, hire, and retain top talent, ensuring a skilled workforce that drives success.
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
        <Typography 
        variant="h5" 
        sx={{color: (theme)=> theme.palette.mode === 'light' ? '' : theme.palette.primary.light }}>{title}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}
