import { useState, useEffect, useRef } from "react";
// next
import NextLink from "next/link";
import { useRouter } from "next/router";
// @mui
import {
  Fade,
  Portal,
  Stack,
  Box,
  Link,
  Unstable_Grid2 as Grid,
} from "@mui/material";
// hooks
import useActiveLink from "src/hooks/useActiveLink";
// components
import Label from "src/components/label";
//
import { NavItemBaseProps, NavListProps } from "../types";
import { StyledMenu, StyledSubheader } from "./styles";
import { NavItem } from "./NavItem";
import { clearTimeout, setTimeout } from "timers";

// ----------------------------------------------------------------------

export default function NavList({ item }: { item: NavItemBaseProps }) {
  const { pathname } = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

  const { path, children } = item;

  const { active, isExternalLink } = useActiveLink(path, false);

  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = () => {
    if (children) {
      clearTimeout(closeTimeoutRef.current!);
      setOpenMenu(true);
    }
  };

  const handleCloseMenu = () => {
    /* setOpenMenu(false); */
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(false);
    }, 500);
  };

  return (
    <>
      <NavItem
        item={item}
        active={active}
        open={openMenu}
        isExternalLink={isExternalLink}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
      />
      {!!children && openMenu && (
        <Portal>
          <Fade in={openMenu}>
            <StyledMenu
              onMouseEnter={handleOpenMenu}
              onMouseLeave={handleCloseMenu}
            >
              <Grid container>
                <Grid xs={12}>
                  <Box
                    gap={8}
                    display="flex"
                    justifyContent="center" // Centers horizontally
                    alignItems="center"
                    gridTemplateColumns={`repeat(${Math.min(children.length, 6)}, 1fr)`}
                    sx={{
                      p: 5,
                      height: 1,
                      position: "relative",
                      bgcolor: "background.neutral",
                      width: "100%",
                    }}
                  >
                    {children.map((list) => (
                      <NavSubList
                        key={list.subheader}
                        subheader={list.subheader}
                        items={list.items}
                        isNew={list.isNew}
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </StyledMenu>
          </Fade>
        </Portal>
      )}

    </>
  );
}

// ----------------------------------------------------------------------

function NavSubList({ subheader, isNew, items }: NavListProps) {
  const { pathname } = useRouter();

  // const commonList = subheader === "Common";
  // const graphicDesigningList = subheader === "Graphic Designing";

  return (
    <Stack spacing={2}>
      <StyledSubheader>
        {subheader}
        {isNew && (
          <Label color="info" sx={{ ml: 1 }}>
            NEW
          </Label>
        )}
      </StyledSubheader>

      <Stack spacing={1.5} alignItems="flex-start">
        {items.map((item) => (
          <NavItem
            key={item.title}
            item={item}
            active={item.path === pathname}
            subItem
          />
        ))}
      </Stack>
    </Stack>
  );
}
