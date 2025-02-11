// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
import WebDevelopmentView from 'src/sections/web-development/view/web-development-view';
// sections

// ----------------------------------------------------------------------

WebDevelopmentServicePage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function WebDevelopmentServicePage() {
  return (
    <>
      {/* <Head>
        <title>Services | ZONE UI</title>
      </Head> */}
         <Head>
        <link
          rel="shortcut icon"
          href="https://techpranee.com/digital-branding/"
          type="image/x-icon"
        />
        <title>TechPranee a Professional Branding and Marketing Agency
        </title>
        <meta
          name="description"
          content=" TechPranee is a top-notch branding and marketing agency, delivering professional solutions to elevate your business."
        ></meta>
        <meta
          name="keywords"
          content="branding and marketing agency
          brand development services
          digital branding services
          branding solutions for small business"
        ></meta>
           <meta name='og:title' content='TechPranee a Professional Branding and Marketing Agency'/>
<meta name='og:url' content='https://techpranee.com/digital-branding'/>
<meta name='og:image' content='https://tparticles.s3.ap-south-1.amazonaws.com/How_to_Grow_your_Business_using_content_marketing_d814399fd6.png'/>
<meta name='og:site_name' content='Techpranee'/>
<meta name='og:description' content='TechPranee is a top-notch branding and marketing agency, delivering professional solutions to elevate your business.'></meta>
     
      </Head>
      <WebDevelopmentView/>
    </>
  );
}
