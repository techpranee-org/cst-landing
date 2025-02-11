// @mui
import { alpha } from '@mui/material/styles';
import { Box, Typography, Container, Stack } from '@mui/material';
// components
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const CATEGORIES = [
  { label: 'Node Js', icon: '/assets/images/techUse/nodejs.png', path: '#' },
  {
    label: 'React JS',
    icon: '/assets/images/techUse/reactjs.png',
    path: '#',
  },
  { label: 'React Native', icon: '/assets/images/techUse/native.png', path: '#' },
  {
    label: 'MongoDB',
    icon: '/assets/images/techUse/mongodb-logo.png',
    path: '#',
  },
  { label: 'MySql', icon: '/assets/images/techUse/mysqllogo.jpg', path: '#' },
  { label: 'ExpressJs', icon: '/assets/images/techUse/express-js-logo.png', path: '#' },
  { label: 'Aws S3', icon: '/assets/images/techUse/aws-s3.jpg', path: '#' },
  { label: 'Flutter', icon: '/assets/images/techUse/flutter.png', path: '#' },
  { label: 'Next Js', icon: '/assets/images/techUse/nextjs.png', path: '#' },
  { label: 'Digital Ocean', icon: '/assets/images/techUse/digitalocean.png', path: '#' },
  { label: 'Strapi', icon: '/assets/images/techUse/strapi.png', path: '#' },
  { label: 'Google Cloud Platform', icon: '/assets/images/techUse/googlecloud.png', path: '#' },
];

// ----------------------------------------------------------------------

export default function EcommerceLandingCategories() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 8,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        Technologies we use 
      </Typography>

      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(4, 1fr)',
          md: 'repeat(6, 1fr)',
        }}
      >
        {CATEGORIES.map((category) => (
          <Stack
            key={category.label}
            alignItems="center"
            justifyContent="center"
            sx={{
              px: 1,
              py: 3,
              borderRadius: 2,
              cursor: 'pointer',
              border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
              '&:hover': {
                boxShadow: (theme) => `0 0 0 2px ${theme.palette.text.primary}`,
              },
            }}
          >
            <Box sx={{ mb: 2, p: 1.5, bgcolor: 'background.neutral', borderRadius: '50%' }}>
              <Image src={category.icon} sx={{ width: 70, height: "auto" }} />
            </Box>

            <TextMaxLine variant="subtitle2" line={1}>
              {category.label}
            </TextMaxLine>
          </Stack>
        ))}
      </Box>
    </Container>
  );
}
