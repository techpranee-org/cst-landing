import { m } from "framer-motion";
// next
import NextLink from "next/link";
// @mui
import { styled, alpha } from "@mui/material/styles";
import { Link, Stack, Avatar } from "@mui/material";
// routes
import { paths } from "src/routes/paths";
// utils
import { fDate } from "src/utils/formatTime";
import { bgGradient } from "src/utils/cssStyles";
// types
import { IBlogPostProps } from "src/types/blog";
// components
import Image from "src/components/image";
import { varHover, varTranHover } from "src/components/animate";
//
import PostTimeBlock from "../../components/PostTimeBlock";

// ----------------------------------------------------------------------

const StyledOverlay = styled("div")(({ theme }) => ({
  ...bgGradient({
    direction: "to top",
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: "100%",
  height: "100%",
  position: "absolute",
}));

// ----------------------------------------------------------------------

// type Props = {
//   post: IBlogPostProps;
// };

export default function PostItem({ post }: any) {
  return (
    <Stack
      component={m.div}
      whileHover="hover"
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        boxShadow: (theme) => theme.customShadows.z12,
      }}
    >
      <m.div variants={varHover(1.25)} transition={varTranHover()}>
        <Image
          src={post?.attributes?.hero?.data?.attributes?.url}
          alt={post?.attributes?.title}
          ratio="3/4"
        />
      </m.div>

      <Stack
        justifyContent="space-between"
        sx={{
          p: 5,
          width: 1,
          height: 1,
          zIndex: 9,
          position: "absolute",
          color: "common.white",
        }}
      >
        <Stack spacing={2}>
          <PostTimeBlock
            createdAt={post?.attributes?.createdAt}
            // duration={duration}
            sx={{ color: "inherit", opacity: 0.72 }}
          />

          <Link
            component={NextLink}
            href={`/blog/${post?.attributes?.slug}`}
            variant="h4"
            color="inherit"
            underline="none"
          >
            {post?.attributes?.title}
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" sx={{ typography: "body2" }}>
          {/* <Avatar src={author.picture} sx={{ mr: 1 }} />
          {author.name} */}
        </Stack>
      </Stack>

      <StyledOverlay />
    </Stack>
  );
}
