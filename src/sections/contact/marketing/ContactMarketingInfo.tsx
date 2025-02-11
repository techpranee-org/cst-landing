// @mui
import { Typography, Stack, Link } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Iconify from 'src/components/iconify';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function ContactMarketingInfo() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <Stack spacing={3}>
      {isMdUp && (
        <Image
          alt="marketing contact"
          src="/assets/illustrations/illustration_marketing_contact.svg"
          sx={{ maxWidth: 380 }}
        />
      )}

      {/* <Stack spacing={2} direction="row" alignItems="flex-start">
        <Iconify icon="carbon:location" width={28} />

        <Stack spacing={0.5}>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography variant="h6">Visit us</Typography>

            <Link sx={{ lineHeight: 0 }}>
              <Iconify icon="carbon:launch" width={18} />
            </Link>
          </Stack>

          <Typography variant="body2">508 Bridle Avenue Newnan, GA 30263e</Typography>
        </Stack>
      </Stack> */}

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:mobile" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Call us</Typography>
          <Link
            variant="body2"
            href="tel:+14086220024"
            sx={{
              color: (theme) => theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.contrastText
            }}
          >+1-408-622-0024</Link>

        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:email" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Talk to us</Typography>
          <Link
            variant="body2"
            href="mailto:info@calisofttech.com"
            sx={{
              color: (theme) => theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.contrastText
            }}>
            info@calisofttech.com
          </Link>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:location" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Location</Typography>
          <Link
            variant="body2"
            href="https://www.google.com/maps/search/?api=1&query=1030+E+El+Camino+Real,+Suite+%23111,+Sunnyvale,+CA+94087"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: (theme) => theme.palette.mode === 'light' ? theme.palette.primary.dark : theme.palette.primary.contrastText
            }}>
            1030 E El Camino Real,
            Suite #111
            Sunnyvale, CA 94087</Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
