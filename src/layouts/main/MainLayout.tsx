// next
import { useRouter } from "next/router";
// @mui
import { Box } from "@mui/material";
// config
import { HEADER } from "src/config-global";
//
import Header from "./header/Header";
import Footer from "./footer/Footer";

import Head from "next/head";

import { useEffect } from "react";

// ----------------------------------------------------------------------

// const pathsOnDark = ['/career/landing', '/travel/landing'];

// const spacingLayout = [...pathsOnDark, '/', '/e-learning/landing', '/marketing/landing'];

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  const { pathname, query } = useRouter();

  const actionPage = (arr: string[]) => arr.some((path) => pathname === path);

  useEffect(() => {
    // Define titles for different pages
    const pageTitles: any = {
      "/": "TechPranee: Web Development & Digital Marketing Services",
      "/about": "TechPranee: Digital Solutions Provider In Hyderabad, India",
      "/portfolio":
        "Professional and Responsive Web Development ServicesTechPranee: Digital Solutions Provider In Hyderabad, India",
      "/blog": "Digital Business Solutions for Real Estate & Small Business",
      "/contact": "TechPranee: Your Digital Business Partner for businesses",
      "/online-advertising":
        "Unleashing Digital Success: Premier Online Advertising Agency",
      "/digital-branding":
        "TechPranee a Professional Branding and Marketing Agency",
      "/graphic-designing":
        "Cutting-Edge Creative Design Services: Unleashing Innovation",
      "/marketing":
        "Maximizing Reach with Integrated Digital Marketing services",
      "/web-development": "Efficient Product Development Services: TechPranee",
      "/seo": "Maximize Your Online Presence with Expert SEO Marketing",
    };

    // Update the title based on the current pathname
    // console.log(query);
    // document.title =
    //   pageTitles[pathname] ||
    //   (query.slug !== undefined ? query.slug : "Default Page Title");
  }, [pathname]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
      <Head>
        {/* <title>TechPranee: Web Development & Digital Marketing Services</title> */}
        <link
          rel="icon"
          href="https://tparticles.s3.ap-south-1.amazonaws.com/techpranee_Logo_f17e79c6f3.webp"
        />
      </Head>
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
}

// ----------------------------------------------------------------------

function Spacing() {
  return (
    <Box
      sx={{
        height: { xs: HEADER.H_MOBILE, md: HEADER.H_MAIN_DESKTOP },
      }}
    />
  );
}
