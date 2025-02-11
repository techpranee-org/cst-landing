// next
import Head from "next/head";
// layouts
import MainLayout from "src/layouts/main";
// sections
import { MarketingPostView } from "src/sections/_marketing/view";

// ----------------------------------------------------------------------

MarketingPostPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

// ----------------------------------------------------------------------

export default function MarketingPostPage({ blogData }: any) {
  const url = "https://www.techpranee.com/blog";
  const slugData = blogData[0]?.attributes?.slug
  const id = `${url}/${slugData}`;
  

  function addBlogJsonLd() {
    return {
      __html: `{
        
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${id}"
        },
        "headline": "${blogData[0]?.attributes?.title}",
        "description": "${blogData[0]?.attributes?.description}",
        "image": "${blogData[0]?.attributes?.hero?.data?.attributes?.url}",  
        "author": {
          "@type": "Organization",
          "name": "Techpranee Digital Agency",
          "url": "https://www.techpranee.com/"
        },  
        "publisher": {
          "@type": "Organization",
          "name": "Techpranee Digital Agency",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.techpranee.com/_next/image/?url=https%3A%2F%2Ftparticles.s3.ap-south-1.amazonaws.com%2Ftechpranee_Logo_f17e79c6f3.webp&w=64&q=75"
          }
        },
        "datePublished": "${blogData[0]?.attributes?.createdAt}",
        "dateModified":  "${blogData[0]?.attributes?.updatedAt}"

        
      }`
    }
  }

  return (
    <>
      <Head>
        <title>{blogData[0]?.attributes?.title}</title>
        <meta name="main keyword" content="digital business solutions"></meta>
        <meta
          name="description"
          content={blogData[0]?.attributes?.description}
        ></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addBlogJsonLd()}
          key="contact-page-jsonld"
        />
      </Head>

      <MarketingPostView blogData={blogData} />
    </>
  );
}

export async function getStaticPaths() {
  try {
    const response = await fetch(
      "https://content.techpranee.com/api/tp-blogs?populate=%2A"
    );
    const projects = await response.json();

    const paths = projects.data.map((project: any) => ({
      params: { slug: project.attributes.slug },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error fetching project IDs:", error);

    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export async function getStaticProps({ params }: any) {
  const projectId = params.slug;
  const apiUrl = `https://content.techpranee.com/api/tp-blogs?filters[slug][$eq]=${projectId}&populate=%2A`;

  try {
    const response = await fetch(apiUrl);
    const blogData = await response.json();

    return {
      props: {
        blogData: blogData.data,
      },
      revalidate: 86400,
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      notFound: true,
    };
  }
}
