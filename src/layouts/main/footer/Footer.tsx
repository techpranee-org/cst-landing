// next
import { useRouter } from "next/router";
// @mui
import { alpha, styled } from "@mui/material/styles";
import Masonry from "@mui/lab/Masonry";
import {
  Link,
  Stack,
  Button,
  Divider,
  Container,
  TextField,
  Typography,
  IconButton,
  StackProps,
  InputAdornment,
  Unstable_Grid2 as Grid,
} from "@mui/material";
// hooks
import useResponsive from "src/hooks/useResponsive";
// _mock
import { _socials } from "src/_mock";
// components
import Logo from "src/components/logo";
import Iconify from "src/components/iconify";
//
import { pageLinks, navConfig } from "../nav/config-navigation";
import ListDesktop from "./ListDesktop";
import ListMobile from "./ListMobile";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  padding: "5px 12px",
  margin: theme.spacing(1),
  color: theme.palette.common.white,
  border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
  background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
  "& .MuiButton-startIcon": {
    marginLeft: 0,
  },
}));

// ----------------------------------------------------------------------

const companyList = [
  {
    order: '1',
    subheader: 'Company',
    items: [
      { title: 'Home', path: "/" },
      { title: 'About', path: "/about" },
      { title: 'Services', path: "#" },
      { title: 'Career', path: "/career" },
      { title: 'Contact', path: "/contact" },
    ],
  }
]

export default function Footer() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const isMdUp = useResponsive("up", "md");

  const { pathname } = useRouter();


  const mobileList = navConfig.find((i) => i.title === "Pages")?.children || [];

  const desktopList = pageLinks.sort(
    (listA, listB) => Number(listA.order) - Number(listB.order)
  );

  console.log(desktopList)

  const renderLists = isMdUp ? desktopList : navConfig;

  const isHome = pathname === "/";
  // const logoSrc = isDarkMode
  // ? 'https://tparticles.s3.ap-south-1.amazonaws.com/tp_logo_white_f496d77483.webp'
  // : 'https://tparticles.s3.ap-south-1.amazonaws.com/techpranee_Logo_f17e79c6f3.webp';
  const logoSrc =
    "/assets/logo/logo.png";
  const simpleFooter = (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Logo single />

      <Typography
        variant="caption"
        component="div"
        sx={{ color: "text.secondary" }}
      >
        © 2024. All rights reserved
      </Typography>
    </Container>
  );

  const mainFooter = (
    <>
      <Divider />

      <Container
        sx={{
          overflow: "hidden",
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid container spacing={3} justifyContent={{ md: "space-between" }}>
          <Grid xs={12} md={4}>
            <Stack spacing={{ xs: 3, md: 5 }}>
              {/* <Stack alignItems="flex-start" spacing={3}>
                <Logo />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  The starting point for your next project based on easy-to-customize Material-UI ©
                  helps you build apps faster and better.
                </Typography>
              </Stack> */}

              {/* <Stack spacing={1} alignItems="flex-start">
                <Typography variant="h6">Community</Typography>
                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  Documentation
                </Link>
                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  Changelog
                </Link>
                <Link variant="body2" sx={{ color: 'text.primary' }}>
                  Contributing
                </Link>
              </Stack> */}

              <Stack spacing={2}>
                <Stack spacing={1}>
                  {/* <Typography variant="h6">Let’s stay in touch</Typography> */}
                  <Link href="/" >
                    <Image src={logoSrc} alt="tp-logo" width={60} height={60}/>
                  </Link>

                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    California SoftTech is a premier IT services provider, with operations in the United States, Canada& India.We take pride in delivering innovative and efficient technology solutions that help businesses streamline operations and achieve measurable results.
                  </Typography>
                </Stack>

                {/* <TextField
                  fullWidth
                  hiddenLabel
                  placeholder="Email address"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button variant="contained" color="inherit" size="large">
                          Subscribe
                        </Button>
                      </InputAdornment>
                    ),
                    sx: { pr: 0.5 },
                  }}
                /> */}
              </Stack>

              <Stack spacing={2}>
                <Typography
                  variant="h6"
                  sx={{ color: isDarkMode ? "#FFF" : "#035578" }}
                >
                  Social
                </Typography>
                <Stack direction="row" alignItems="center">
                  {_socials.map((social) => (
                    <IconButton
                      key={social.value}
                      color="primary"
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Iconify icon={social.icon} />
                    </IconButton>
                  ))}
                </Stack>
              </Stack>

              {/* <Stack spacing={2}>
                <Typography variant="h6">Apps</Typography>
                <AppStoreButton />
              </Stack> */}
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            {isMdUp ? (
              <Masonry
                columns={2}
                spacing={2}
                defaultColumns={4}
                defaultSpacing={2}
              >
                {companyList.map((list) => (
                  <ListDesktop key={list.subheader} list={list} />
                ))}
                {desktopList.map((list) => (
                  <ListDesktop key={list.subheader} list={list} />
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {companyList.map((list) => (
                  <ListMobile key={list.subheader} list={list} />
                ))}
                {desktopList.map((list) => (
                  <ListMobile key={list.subheader} list={list} />
                ))}
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container>
        <Stack
          spacing={2.5}
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: "center" }}
        >
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            © 2024. All rights reserved
          </Typography>

          <Stack direction="row" spacing={3} justifyContent="center">
            <Link
              href="/privacy"
              variant="caption"
              sx={{ color: "text.secondary" }}
            >
              Privacy Policy
            </Link>

            <Link
              href="/privacy"
              variant="caption"
              sx={{ color: "text.secondary" }}
            >
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );

  return <footer>{mainFooter}</footer>;
}

// ----------------------------------------------------------------------

function AppStoreButton({ ...other }: StackProps) {
  return (
    <Stack direction="row" flexWrap="wrap" {...other}>
      <StyledAppStoreButton
        startIcon={<Iconify icon="ri:apple-fill" width={28} />}
      >
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download on the
          </Typography>

          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Apple Store
          </Typography>
        </Stack>
      </StyledAppStoreButton>

      <StyledAppStoreButton
        startIcon={<Iconify icon="logos:google-play-icon" width={28} />}
      >
        <Stack alignItems="flex-start">
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Download from
          </Typography>
          <Typography variant="h6" sx={{ mt: -0.5 }}>
            Google Play
          </Typography>
        </Stack>
      </StyledAppStoreButton>
    </Stack>
  );
}
