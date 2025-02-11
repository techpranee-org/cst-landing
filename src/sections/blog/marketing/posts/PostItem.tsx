import { m } from "framer-motion";
// next
import NextLink from "next/link";
// @mui
// import { styled, alpha } from '@mui/material/styles';
import { Stack, Link } from "@mui/material";
// routes
// import { paths } from 'src/routes/paths';
// utils
// import { fDate } from 'src/utils/formatTime';
// import { bgGradient } from 'src/utils/cssStyles';
// types
// import { IBlogPostProps } from 'src/types/blog';
// components
import Image from "src/components/image";
import TextMaxLine from "src/components/text-max-line";
// import { varHover, varTranHover } from 'src/components/animate';
//
import PostTimeBlock from "../../components/PostTimeBlock";
import { Box } from "@mui/system";

// ----------------------------------------------------------------------

// const StyledOverlay = styled('div')(({ theme }) => ({
//   ...bgGradient({
//     direction: 'to top',
//     startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
//     endColor: `${theme.palette.common.black} 75%`,
//   }),
//   top: 0,
//   left: 0,
//   zIndex: 8,
//   width: '100%',
//   height: '100%',
//   position: 'absolute',
// }));

// ----------------------------------------------------------------------

// type Props = {
//   post: IBlogPostProps;
// };

export default function PostItem({ post }: any) {
  return (
    <Stack spacing={2}>
      <Stack
        component={m.div}
        sx={{ borderRadius: 2, overflow: "hidden", position: "relative" }}
      >
        <Box>
          <Image
            src={post?.attributes?.hero?.data?.attributes?.url}
            alt={post?.attributes?.title}
            ratio="1/1"
          />
        </Box>
      </Stack>

      {/* <StyledOverlay /> */}
      {/* </Stack> */}
      <Stack spacing={1}>
        <PostTimeBlock
          // duration={duration}
          createdAt={
            post?.attributes?.updatedAt || post?.attributes?.publishedAt
          }
          sx={{ color: "inherit", opacity: 0.72 }}
        />

        <Link
          component={NextLink}
          href={`/blog/${post?.attributes?.slug}`}
          sx={{ color: "#3B2B77" }}
        >
          <TextMaxLine variant="h5">{post?.attributes?.title}</TextMaxLine>
        </Link>
      </Stack>
    </Stack>
  );
}
