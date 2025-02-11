// @mui
import { Typography, Stack, Avatar, StackProps,Button } from '@mui/material';
// types
import { ITestimonialProps } from 'src/types/testimonial';
import { useState } from 'react';
import React from 'react';
// ----------------------------------------------------------------------

interface Props extends StackProps {
  testimonial: ITestimonialProps;
}

export default function TestimonialItem({ testimonial, ...other }: any) {
  const { name, role, avatar, review } = testimonial;
  const [showFullReview, setShowFullReview] = useState(false);

  const toggleShowMore = () => {
    setShowFullReview(!showFullReview);
  };

   // Extract text content from the JSX elements
   const reviewText = typeof review === 'string' ? review : review.props.children;

   // Slice the review text
   const trimmedReview = reviewText.slice(0, 270); // Display the first 250 characters


     // Determine if the review is truncated
  const isTruncated = reviewText.length > 270;


  // const textArray = React.Children.toArray(review.props.children);

  // const renderedText = textArray.slice(0, showMore ? textArray.length : 3)
  // console.log(renderedText)

  return (
    <Stack
      spacing={{
        xs: 5,
        md: 10,
      }}
      direction={{
        xs: 'column',
        md: 'row',
      }}
      {...other}
    >
       <Typography
        sx={{
          fontSize: { md: 20 },
          lineHeight: 1.75,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {showFullReview ? review : trimmedReview}
        {isTruncated && (
           <Button
           onClick={toggleShowMore}
          //  variant="outlined"
          //  color="inherit"
          //  size="large"
          style={{fontSize:"20px"}}
           
         >
           {showFullReview ? 'Read Less' : 'Read More'}
         </Button>
        // <button  style={{backgroundColor:"transparent",border:"none",fontSize:"25px"}}>
        
        // </button>
      )}
      </Typography>
   

      <Stack sx={{ flexShrink: 0, textAlign: 'center', }}>
        <Avatar alt={name} src={avatar} sx={{ width: 96, height: 96, mx: 'auto', }} />

        <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5 }}>
          {name}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {role}
        </Typography>
      </Stack>
    </Stack>
  );
}
