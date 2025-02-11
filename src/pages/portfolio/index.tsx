// next
import Head from "next/head";
// layouts
import MainLayout from "src/layouts/main";
// sections
import { MarketingCaseStudiesView } from "src/sections/_marketing/view";

// ----------------------------------------------------------------------

MarketingCaseStudiesPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

// ----------------------------------------------------------------------

export default function MarketingCaseStudiesPage({ caseStudies }: any) {
  return (
    <>
     <Head>
        <link
          rel="shortcut icon"
          href="https://techpranee.com/portfolio/"
          type="image/x-icon"
        />
        <title>Professional and Responsive Web Development ServicesTechPranee: Digital Solutions Provider In Hyderabad, India
        </title>
        <meta
          name="main keyword"
          content="professional web development services"
        ></meta>
        <meta
          name="description"
          content="Get professional and responsive web development services at a low cost."
        ></meta>
        <meta
          name="keywords"
          content="professional web development services
          ecommerce web development
          cms web development
          low cost website design"
        ></meta>
          
      </Head>
      <MarketingCaseStudiesView caseStudies={caseStudies} />
    </>
  );
}

const API_URL =
  "https://content.techpranee.com/api/tp-projects?pagination%5BpageSize%5D=100&populate=%2A";
// Fetch data during build time using Static Site Generation
export async function getStaticProps() {
  try {
    const response = await fetch(API_URL);
    const { data } = await response.json();
    return {
      props: {
        caseStudies: data,
      },
    };
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return {
      props: {
        caseStudies: [], // Return an empty array or handle the error as needed
      },
    };
  }
}
