
import Masonry from "@mui/lab/Masonry";
import {
  Link,
  Stack,
  Divider,
  Container,
  Typography,
  IconButton,
  Unstable_Grid2 as Grid,
} from "@mui/material";
// hooks
import useResponsive from "src/hooks/useResponsive";
// _mock
import { _socials } from "src/_mock";
// components
//
import ListDesktop from "./ListDesktop";
import ListMobile from "./ListMobile";
import { useTheme } from "@mui/material/styles";
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const companyList = [
  {
    order: '1',
    subheader: 'Company',
    items: [
      { title: 'Home', path: "/" },
      { title: 'Who We Are', path: "/about" },
      { title: 'Services', path: "#" },
      { title: 'Career', path: "/career" },
      { title: 'Contact', path: "/contact" },
    ],
  }
]

const serviceList = [
  {
    order: '2',
    subheader: 'Services',
    items: [
      { title: 'Healthcare Services', path: "/healthcare-recruitment" },
      { title: 'IT Recruitment Services', path: "/it-recruitment" },
      { title: 'Embedded Services', path: "/embedded-software" },
      { title: 'Web Development Services', path: "/web-development-service" },
      { title: 'Cloud Services', path: "/cloud" },
    ],
  }
]

const legalList = [
  {
    order: '3',
    subheader: 'Legal',
    items: [
      { title: 'Privacy Policy', path: "/privacy-policy" },
      { title: 'Terms & Conditions', path: "/terms-and-conditions" },
    ],
  }
]

export default function Footer() {
  const theme = useTheme();
  /* const isDarkMode = theme.palette.mode === "dark"; */
  const isMdUp = useResponsive("up", "md");



  const logoSrc =
    "/assets/logo/logo.png";

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

              <Stack spacing={2}>
                <Stack spacing={1}>
                  {/* <Typography variant="h6">Let’s stay in touch</Typography> */}
                  <Link href="/" >
                    <img src={logoSrc} alt="tp-logo" width={80} height={80} />
                  </Link>

                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    California SoftTech Inc is a premier IT services provider, with operations in the United States, Canada& India.We take pride in delivering innovative and efficient technology solutions that help businesses streamline operations and achieve measurable results.
                  </Typography>
                </Stack>
              </Stack>

              {/* <Stack spacing={2}>
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
              </Stack> */}
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            {isMdUp ? (
              <Masonry
                columns={3}
                spacing={2}
                defaultColumns={4}
                defaultSpacing={2}
              >
                {companyList.map((list) => (
                  <ListDesktop key={list.subheader} list={list} />
                ))}
                {serviceList.map((list) => (
                  <ListDesktop key={list.subheader} list={list} />
                ))}
                {legalList.map((list) => (
                  <ListDesktop key={list.subheader} list={list} />
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {companyList.map((list) => (
                  <ListMobile key={list.subheader} list={list} />
                ))}
                {serviceList.map((list) => (
                  <ListMobile key={list.subheader} list={list} />
                ))}
                {legalList.map((list) => (
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
        </Stack>
      </Container>
    </>
  );

  return <footer>{mainFooter}</footer>;
}
