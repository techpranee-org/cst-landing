// @mui
import { useTheme } from "@mui/material/styles";
// import { Drawer, Divider, Typography, IconButton, Tooltip } from '@mui/material';
import { useSettingsContext } from "src/components/settings/SettingsContext"
// import ToggleButton from "src/components/settings/drawer/components/ToggleButton";
// import Scrollbar from "src/components/scrollbar/Scrollbar";
import Iconify from "src/components/iconify/Iconify";
// import { NAV } from "src/config-global"
import {
  Box,
  Link,
  Stack,
  Button,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";
// hooks
import useOffSetTop from "src/hooks/useOffSetTop";
import useResponsive from "src/hooks/useResponsive";
// utils
import { bgBlur } from "src/utils/cssStyles";
// routes
// import { paths } from "src/routes/paths";
// config
import { HEADER } from "src/config-global";
// components
import Logo from "src/components/logo";
// import Label from "src/components/label";
// import SettingsDrawer from "src/components/settings/drawer";
//
import { NavMobile, NavDesktop, navConfig } from "../nav";
// import Searchbar from "../../components/Searchbar";
import HeaderShadow from "../../components/HeaderShadow";
import { useState } from "react";
import ModeOptions from "src/components/settings/drawer/components/ModeOptions";

// ----------------------------------------------------------------------

type Props = {
  headerOnDark: boolean;
};

export default function Header() {
  const theme = useTheme();
  // State to control form visibility
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const { open, onToggle, onClose, onResetSetting, notDefault } = useSettingsContext();
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
                {/* <Searchbar /> */}

                <ModeOptions />
              </Stack>

              {/* {isMdUp && (
        <Button
          variant="contained"
          color="inherit"
          onClick={toggleForm} // Toggle the form on button click
        >
          Get Appointment
        </Button>
      )} */}
            </Stack>
            {/* {showForm && (
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  defaultValue=""
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          )} */}

            {!isMdUp && <NavMobile data={navConfig} />}
          </Container>
        </Toolbar>

        {isOffset && <HeaderShadow />}
      </AppBar>
    </>
  );
}
