// @mui
import { Stack, Typography } from '@mui/material';
// types
import { IBlogPostProps } from 'src/types/blog';
//
import PostItemMobile from '../components/PostItemMobile';

// ----------------------------------------------------------------------

type Props = {
  recentPosts: {
    list: IBlogPostProps[];
  };
};

export default function BlogSidebarRecentPosts({ blog }: any) {
  // const { list } = recentPosts;
  // console.log("recent",blog);

  return (
    <Stack spacing={3}>
      <Typography variant="h5">Recent Posts</Typography>

      {blog?.slice(0,5).map((post:any) => (
        <PostItemMobile key={post.id} post={post} onSiderbar />
      ))}
    </Stack>
  );
}
