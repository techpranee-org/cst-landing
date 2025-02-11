// next

import Head from "next/head";
// layouts
import { useEffect, useState } from 'react';
import axios from 'axios';
import MainLayout from "src/layouts/main";
// sections
import { MarketingCaseStudyView } from "src/sections/_marketing/view";

// ----------------------------------------------------------------------

MarketingCaseStudyPage.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

// ----------------------------------------------------------------------

export default function MarketingCaseStudyPage({ projectData }: any) {

  // console.log("projectData ",projectData)
  return (
    <>

      <Head>
        <meta
          name="description"
          content={projectData?.attributes?.description}
        ></meta>
        <title>{projectData?.attributes?.title}</title>
      </Head>


      <MarketingCaseStudyView projectData={projectData} />
    </>
  );
}

export async function getStaticPaths() {
  try {
    const response = await fetch(
      "https://content.techpranee.com/api/tp-projects?populate=%2A"
    );
    const projects = await response.json();

    const paths = projects.data.map((project: any) => ({
      params: { slug: project.id.toString() },
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
  const { slug } = params;
const projectSlug = params.slug
// console.log(projectSlug)

  // const apiUrl = `https://content.techpranee.com/api/tp-projects/51?populate=%2A`;
  const apiUrl = `https://content.techpranee.com/api/tp-projects?filters[slug][$eq]=${projectSlug}&populate=%2A`;
  // console.log(apiUrl)


  try {
    const response = await fetch(apiUrl);
    const projectData = await response.json();
    // console.log(projectData)

    return {
      props: {
        projectData: projectData.data,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      notFound: true,
    };
  }
}
