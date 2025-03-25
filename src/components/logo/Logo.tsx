import { memo } from "react";
// next
import NextLink from "next/link";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, BoxProps, Link } from "@mui/material";

// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  single?: boolean;
}

function Logo({ single = false, sx }: LogoProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark"; // Check if dark mode is enabled
  // const logoSrc = isDarkMode
  //   ? "https://tparticles.s3.ap-south-1.amazonaws.com/tp_logo_white_f496d77483.webp"
  //   : "https://tparticles.s3.ap-south-1.amazonaws.com/techpranee_Logo_f17e79c6f3.webp";

  const logoSrc =
    "/assets/logo/logo.png";

  const PRIMARY_MAIN = theme.palette.primary.main;

  // const singleLogo = (

  //   <Image src={logoSrc} alt="tp-logo" width={65} height={65}/>
  // );

  // const fullLogo = (

  //   <Image src={logoSrc} alt="tp-logo" width={65} height={65}/>
  // );

  return (
    <Link
      component={NextLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 64 : 75,
          lineHeight: 0,
          cursor: "pointer",
          display: "inline-flex",
          ...sx,
        }}
      >
        <img src={logoSrc} alt="tp-logo" width={60} height={60} />
        {/* {single ? singleLogo : fullLogo} */}
      </Box>
    </Link>
  );
}

export default memo(Logo);
