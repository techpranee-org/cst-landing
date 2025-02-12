import { useTheme } from "@mui/material/styles";
import Iconify from "src/components/iconify/Iconify";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";
import useOffSetTop from "src/hooks/useOffSetTop";
import useResponsive from "src/hooks/useResponsive";
import { bgBlur } from "src/utils/cssStyles";
import { HEADER } from "src/config-global";
import Logo from "src/components/logo";
import { NavMobile, NavDesktop, navConfig } from "../nav";
import HeaderShadow from "../../components/HeaderShadow";
import ModeOptions from "src/components/settings/drawer/components/ModeOptions";

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();
  const isMdUp = useResponsive("up", "md");
  const isOffset = useOffSetTop();

  return (
    <>
      <Box sx={{ position: "fixed", width: 60, height: 60, bottom: 20, right: 20, zIndex: 1000, borderRadius: 1, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", background: "#0dc042" }}
        onClick={() => {
          const phoneNumber = "+14086220024";
          window.open(`https://wa.me/${phoneNumber}`, "_blank");
        }}>
        <Iconify
          width={40}
          color={"white"}
          icon="mdi:whatsapp"
        />
      </Box>
      <AppBar color="transparent" sx={{ boxShadow: "none" }}>
        <Toolbar
          disableGutters
          sx={{
            height: {
              xs: HEADER.H_MOBILE,
              md: HEADER.H_MAIN_DESKTOP,
            },
            transition: theme.transitions.create(["height", "background-color"], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.shorter,
            }),
            ...(isOffset && {
              ...bgBlur({ color: theme.palette.background.default }),
              color: "text.primary",
              height: {
                md: HEADER.H_MAIN_DESKTOP - 16,
              },
            }),
          }}
        >
          <Container sx={{ height: 1, display: "flex", alignItems: "center" }}>
            <Box sx={{ lineHeight: 0, position: "relative" }}>
              <Logo />
            </Box>

            {isMdUp && <NavDesktop data={navConfig} />}

            <Stack
              spacing={2}
              flexGrow={1}
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Stack spacing={1} direction="row" alignItems="center">
                <ModeOptions />
              </Stack>
            </Stack>

            {!isMdUp && <NavMobile data={navConfig} />}
          </Container>
        </Toolbar>

        {isOffset && <HeaderShadow />}
      </AppBar>
    </>
  );
}
