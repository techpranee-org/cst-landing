// @mui
import { Pagination, Box } from '@mui/material';
// types
import { IBlogPostProps } from 'src/types/blog';
//
import PostItem from './PostItem';
// import { useState } from 'react';

// ----------------------------------------------------------------------

// type Props = {
//   posts: IBlogPostProps[];
// };

export default function BlogMarketingPosts({ blog, totalPage, currentPage, handlePageChange, itemsPerPage, blogLength }:any) {
  
  return (
    <>
      <Box
        sx={{
          columnGap: 4,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {/* {blog?.slice(0, 10).map((post:any) => (
          <PostItem key={post.id} post={post} />
        ))} */}
        {blog?.map((post:any) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Box>

      {blogLength > itemsPerPage  && (
        <Pagination
        count={totalPage}
        color="primary"
        size="large"
        page={currentPage}
        onChange={handlePageChange}
        sx={{
          my: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
      )
      }
    </>
  );
}
