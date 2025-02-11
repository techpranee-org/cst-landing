// next
import Head from "next/head";
// layouts
import MainLayout from "src/layouts/main";
// sections
import { MarketingBlogView } from "src/sections/_marketing/view";

// ----------------------------------------------------------------------

MarketingBlogPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

// ----------------------------------------------------------------------

export default function MarketingBlogPage({ blog }: any) {
  // console.log(blog)
  let blogs = blog.sort(
    (a: any, b: any) =>
      new Date(
        b.attributes.updatedAt || blog?.attributes?.publishedAt
      ).getTime() -
      new Date(
        a.attributes.updatedAt || blog?.attributes?.publishedAt
      ).getTime()
  );

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://techpranee.com/blog/"
          type="image/x-icon"
        />
        <title>Digital Business Solutions for Real Estate & Small Business</title>
        <meta name="main keyword" content="digital business solutions"></meta>
        <meta
          name="description"
          content="TechPranee offers empathetic digital business solutions for real estate and small businesses, empowering them to thrive in the digital world."
        ></meta>
        <meta
          name="keywords"
          content="digital business solutions
          real estate digital marketing strategy
          digital marketing services for small business
          online marketing in india"
        ></meta>
      </Head>
      <MarketingBlogView blog={blogs} />
    </>
  );
}

const API_URL = "https://content.techpranee.com/api/tp-blogs?populate=%2A";
// Fetch data during build time using Static Site Generation
export async function getStaticProps() {
  try {
    const response = await fetch(API_URL);
    const { data } = await response.json();
    return {
      props: {
        blog: data,
      },
      // ISR configuration
      revalidate: 86400, // Re-generate page every 10 seconds when a request is made
    };
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return {
      props: {
        blog: [], // Return an empty array or handle the error as needed
      },
    };
  }
}
