import { useState } from "react";
// @mui
import {
  Stack,
  Avatar,
  Divider,
  Popover,
  Checkbox,
  MenuItem,
  Container,
  Typography,
  IconButton,
  Unstable_Grid2 as Grid,
} from "@mui/material";
// routes
import { paths } from "src/routes/paths";
// utils
import { fDate } from "src/utils/formatTime";
// _mock
import { _blogMarketingPosts, _socials } from "src/_mock";
// components
import Image from "src/components/image";
import Iconify from "src/components/iconify";
import Markdown from "src/components/markdown";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";
//
import NewsletterMarketing from "../../newsletter/marketing";
import { MarketingLandingFreeSEO } from "../landing";
import { BlogMarketingLatestPosts } from "../../blog/marketing";
import { PostTags, PostAuthor, PostSocialsShare } from "../../blog/components";

// ----------------------------------------------------------------------

export default function MarketingPostView({ blogData }: any) {
  const [open, setOpen] = useState<HTMLElement | null>(null);
  //  console.log(blogData)
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  // const handleChangeFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setFavorite(event.target.checked);
  // };

  return (
    <>
      <Container>
        <Grid container spacing={3} justifyContent={{ md: "center" }}>
          <Grid xs={12} md={10}>
            <Image
              alt="hero"
              src={blogData[0]?.attributes?.hero?.data?.attributes?.url}
              // style={{ width: "90%", height: "auto", margin: "auto" }}
            />
            <CustomBreadcrumbs
              sx={{ my: 3 }}
              links={[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: blogData[0]?.attributes?.title },
              ]}
            />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container>
        <Grid container spacing={3} justifyContent={{ md: "center" }}>
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                textAlign: "center",
                pt: { xs: 5, md: 10 },
                pb: 5,
              }}
            >
              {/* <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                {duration}
              </Typography> */}

              <Typography variant="h1" component="h1">
                {blogData[0]?.attributes?.title}
              </Typography>
              <Typography variant="h5">
                {blogData[0]?.attributes?.description}
              </Typography>
            </Stack>

            <Divider />
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={1.5}
              sx={{ py: 3 }}
            >
              {/* <Avatar src={author.picture} sx={{ width: 48, height: 48 }} /> */}

              <Stack spacing={0.5} flexGrow={1}>
                {/* <Typography variant="subtitle2">{author.name}</Typography> */}
                {/* <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {fDate(createdAt, 'dd/MM/yyyy p')}
                </Typography> */}
              </Stack>

              <Stack direction="row" alignItems="center">
                {/* <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
                  <Iconify icon="carbon:share" />
                </IconButton> */}

                {/* <Checkbox
                  color="error"
                  checked={favorite}
                  onChange={handleChangeFavorite}
                  icon={<Iconify icon="carbon:favorite" />}
                  checkedIcon={<Iconify icon="carbon:favorite-filled" />}
                /> */}
              </Stack>
            </Stack>

            {/* <Divider sx={{ mb: 6 }} /> */}

            <Markdown data={blogData[0]} firstLetter />

            {/* {tags.length && <PostTags tags={tags} />} */}

            <PostSocialsShare />

            <Divider sx={{ mt: 8 }} />
            {/* 
            <PostAuthor author={author} /> */}
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <BlogMarketingLatestPosts blogData={blogData} />

      <MarketingLandingFreeSEO />

      <NewsletterMarketing />

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={{
          sx: { width: 220, p: 1 },
        }}
      >
        {_socials.map((social) => (
          <MenuItem
            key={social.value}
            onClick={handleClose}
            sx={{ typography: "body2" }}
          >
            <Iconify
              icon={social.icon}
              width={24}
              sx={{ mr: 1, color: social.color }}
            />
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
