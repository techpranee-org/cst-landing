// @mui
import { Stack, StackProps, TextField, InputAdornment } from '@mui/material';
// types
import { IAuthorProps } from 'src/types/author';
import { IAdvertisementProps } from 'src/types/advertisement';
import { IBlogPostProps, IBlogCategoryProps, IBlogTagsProps } from 'src/types/blog';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Iconify from 'src/components/iconify';
//
import Advertisement from '../../advertisement';
import BlogSidebarAuthor from './BlogSidebarAuthor';
import BlogSidebarCategories from './BlogSidebarCategories';
import BlogSidebarPopularTags from './BlogSidebarPopularTags';
import BlogSidebarRecentPosts from './BlogSidebarRecentPosts';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  author?: IAuthorProps;
  popularTags?: IBlogTagsProps[];
  categories?: IBlogCategoryProps[];
  advertisement?: IAdvertisementProps;
  recentPosts?: {
    list: IBlogPostProps[];
  };
}

export default function BlogSidebar({
  author,
  categories,
  popularTags,
  recentPosts,
  advertisement,
  sx,
  blog,
  handleSearch,
  query,
  ...other
}: any) {
  const isMdUp = useResponsive('up', 'md');

  return (
    <>
      {author && isMdUp && <BlogSidebarAuthor author={author} />}

      {isMdUp && (
        <TextField
          fullWidth
          hiddenLabel
          placeholder="Search..."
          value={query} 
           onChange={handleSearch} 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}

      <Stack
        spacing={5}
        sx={{
          marginBottom:3,
          pt: { md: 5 },
          pb: { xs: 8, md: 0 },
          ...sx,
        }}
        {...other}
      >
        {categories && <BlogSidebarCategories categories={categories} />}

        {blog && <BlogSidebarRecentPosts blog={blog} />}

        {popularTags && <BlogSidebarPopularTags popularTags={popularTags} />}

        {advertisement && <Advertisement advertisement={advertisement} />}
      </Stack>
    </>
  );
}
