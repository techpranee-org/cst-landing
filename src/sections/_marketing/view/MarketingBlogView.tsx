// @mui
import { Container, Unstable_Grid2 as Grid } from "@mui/material";
// _mock
import _mock, { _blogMarketingPosts, _tags, _categories } from "src/_mock";
//
import { MarketingLandingFreeSEO } from "../landing";
import NewsletterMarketing from "../../newsletter/marketing";
import BlogSidebar from "../../blog/sidebar";
import { PostSearchMobile } from "../../blog/components";
import {
  BlogMarketingPosts,
  BlogMarketingFeaturedPosts,
} from "../../blog/marketing";
import { useRef, useState } from "react";

// ----------------------------------------------------------------------

export default function MarketingBlogView({ blog }: any) {
  // new code
  const blogContainerRef = useRef<HTMLDivElement | null>(null);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(blog);
  let totalPage = Math.ceil(filteredData.length / itemsPerPage);
  function handlePageChange(event: any, page: any) {
    // console.log("page", page)
    setCurrentPage(page);
    if (blogContainerRef.current) {
      // Get the bounding client rect of the container
      const rect = blogContainerRef.current.getBoundingClientRect();
      // Calculate the offset: 100px above the top position of the container
      const offset = rect.top - 150;
      // Scroll up by the calculated offset
      window.scrollBy({ top: offset, behavior: "smooth" });
    }
  }
  function handleSearch(event: any) {
    const value = event.target.value;
    setQuery(value);

    const filteredBlog = blog.filter((item: any) =>
      item.attributes.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filteredBlog);
  }
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // console.log(filteredData.length)
  const blogs =
    filteredData.length + 1 > itemsPerPage
      ? filteredData?.slice(startIndex, endIndex)
      : filteredData;
  // console.log(blogs.length)
  // end
  return (
    <>
      <PostSearchMobile />

      <BlogMarketingFeaturedPosts blog={blog} />

      <Container
        ref={blogContainerRef}
        sx={{
          mt: 10,
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 8 }}>
          <Grid xs={12} md={8}>
            <BlogMarketingPosts
              blogLength={filteredData.length}
              blog={blogs}
              totalPage={totalPage}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              itemsPerPage={itemsPerPage}
            />
          </Grid>

          <Grid xs={12} md={4}>
            <BlogSidebar
              // popularTags={_tags}
              // categories={_categories}
              // recentPosts={{ list:blog }}
              blog={blog}
              handleSearch={handleSearch}
              query={query}
              advertisement={{
                title: "Advertisement",
                description:
                  "Duis leo. Donec orci lectus, aliquam ut, faucibus non",
                imageUrl: _mock.image.marketing(9),
                path: "",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <MarketingLandingFreeSEO />

      <NewsletterMarketing />
    </>
  );
}
