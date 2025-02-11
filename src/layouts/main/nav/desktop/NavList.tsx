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
import Image from "src/components/image";
import Label from "src/components/label";
//
import { NavItemBaseProps, NavListProps } from "../types";
import { StyledMenu, StyledSubheader } from "./styles";
import { NavItem } from "./NavItem";
import item from "src/sections/_marketing/case-study/item";
import { clearTimeout, setTimeout } from "timers";

// ----------------------------------------------------------------------

export default function NavList({ item }: { item: NavItemBaseProps }) {
  const { pathname } = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

  const { path, children } = item;

  const { active, isExternalLink } = useActiveLink(path, false);
  // const mainList = children
  //   ? children.filter((list) => list.subheader !== "Graphic Designing")
  //   : [];

  // const commonList = children
  //   ? children.find((list) => list.subheader === "Graphic Designing")
  //   : null;
  // const graphicDesigningList = children
  //   ? children.find((list) => list.subheader === "Graphic Designing")
  //   : null;

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

     {/*  {!!children && openMenu && (
        <Portal>
          <Fade in={openMenu}>
            <StyledMenu
              onMouseEnter={handleOpenMenu}
              onMouseLeave={handleCloseMenu}
            >
              <Grid container>
                <Grid xs={12}>
                  <Box
                    gap={5}
                    display="grid"
                    gridTemplateColumns="repeat(6, 1fr)"
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
                        cover={list.cover}
                        items={list.items}
                        isNew={list.isNew}
                      />
                    ))}
                  </Box>
                </Grid>

                {graphicDesigningList && (
                  <Grid xs={3}>
                    <Box sx={{ bgcolor: "background.default", p: 5 }}>
                      <NavSubList
                        subheader={graphicDesigningList.subheader}
                        items={graphicDesigningList.items}
                      />
                    </Box>
                  </Grid>
                )}
              </Grid>
            </StyledMenu>
          </Fade>
        </Portal>
      )} */}
      {!!children && openMenu && (
  <Portal>
    <Fade in={openMenu}>
      <StyledMenu
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
        sx={{
          left: '20%',
          width: "auto",
          maxWidth: "80vw", // Prevents it from being too wide
          bgcolor: "background.neutral",
          boxShadow: 3,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Box
          gap={5}
          display="grid"
          gridTemplateColumns={`repeat(${children.length}, minmax(150px, 1fr))`}
          sx={{
            p: 3,
            maxWidth: `${children.length * 200}px`, // Adjust width dynamically
            minWidth: "300px",
            width: "auto",
          }}
        >
          {children.map((list) => (
            <NavSubList
              key={list.subheader}
              subheader={list.subheader}
              cover={list.cover}
              items={list.items}
              isNew={list.isNew}
            />
          ))}
        </Box>
      </StyledMenu>
    </Fade>
  </Portal>
)}

    </>
  );
}

// ----------------------------------------------------------------------

function NavSubList({ subheader, isNew, cover, items }: NavListProps) {
  const { pathname } = useRouter();
  console.log(items, subheader, "items");

  const coverPath = items.length ? items[0].path : "";

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

      <Link component={NextLink} href={coverPath}>
        <Image
          disabledEffect
          alt={cover}
          src={
            cover ||
            "https://tparticles.s3.ap-south-1.amazonaws.com/9_1586a27ff5.jpg"
          }
          ratio="16/9"
          sx={{
            borderRadius: 1,
            cursor: "pointer",
            boxShadow: (theme) => theme.customShadows.z8,
            transition: (theme) => theme.transitions.create("all"),
            "&:hover": {
              opacity: 0.8,
              boxShadow: (theme) => theme.customShadows.z24,
            },
          }}
        />
      </Link>

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
