"use client"
import { useEffect, useRef, useState } from "react";
// next
import NextLink from "next/link";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Button } from "@mui/material";
// routes
import { paths } from "src/routes/paths";
// hooks
import useResponsive from "src/hooks/useResponsive";
// types
import { IBlogPostProps } from "src/types/blog";
// components
import Iconify from "src/components/iconify";
import Carousel, {
  CarouselArrows,
  CarouselDots,
} from "src/components/carousel";
//
import PostItem from "../posts/PostItem";

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPostProps[];
};

export default function BlogMarketingLatestPosts({ blogData }: any) {
  const theme = useTheme();
  // console.log(blogData)
  const [resData, setResData] = useState([])
 
const RecentData=async()=>{
     const response= await fetch("https://content.techpranee.com/api/tp-blogs?populate=%2A");
     const { data } = await response.json();
     setResData(data);
    //  console.log(data);

}
useEffect(()=>{

  RecentData();
},[])
  const isMdUp = useResponsive("up", "md");

  const carouselRef = useRef<Carousel | null>(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    rtl: Boolean(theme.direction === "rtl"),
    ...CarouselDots(),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  const viewAllBtn = (
    <Button
      component={NextLink}
      href={paths.marketing.posts}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );
console.log(blogData?.length);
  return (
    <Container
      sx={{
        overflow: "hidden",
        py: { xs: 8, md: 15 },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: "center", md: "space-between" }}
      >
        <Typography variant="h3">Latest Posts</Typography>

        {isMdUp && viewAllBtn}
      </Stack>

      {resData?.length <= 1 ? (
        <Box sx={{ display: "flex", justifyContent: "center", mb: "320px" }}>
          {resData?.map((post: any) => {
            return (
              <Box
                key={post.id}
                sx={{
                  height: "200px",
                  width: "30%",
                  px: 2,
                  py: { xs: 8, md: 10 },
                }}
              >
                <PostItem post={post} />
              </Box>
            );
          })}
        </Box>
      ) : (
        <Box sx={{ position: "relative" }}>
          <CarouselArrows
            onNext={handleNext}
            onPrev={handlePrev}
            leftButtonProps={{ sx: { left: { xs: 0, md: -40 } } }}
            rightButtonProps={{ sx: { right: { xs: 0, md: -40 } } }}
          >
            <Carousel ref={carouselRef} {...carouselSettings}>
              {resData?.map((post: any) => {
                return (
                  <Box
                    key={post.id}
                    sx={{
                      height: "200px",
                      width: "30%",
                      px: 2,
                      py: { xs: 8, md: 10 },
                    }}
                  >
                    <PostItem post={post} />
                  </Box>
                );
              })}
            </Carousel>
          </CarouselArrows>
        </Box>
      )}

      {!isMdUp && (
        <Stack alignItems="center" sx={{ mt: 8 }}>
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}

