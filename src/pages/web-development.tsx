// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingServicesProductView} from "src/sections/_productDevelopment/view"

// ----------------------------------------------------------------------

MarketingServicesProductPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingServicesProductPage() {
  return (
    <>
      {/* <Head>
        <title>Services | ZONE UI</title>
      </Head> */}
 <Head>
        <link
          rel="shortcut icon"
          href="https://techpranee.com/web-development/"
          type="image/x-icon"
        />
        <title>Custom Web Application Development Company in Hyderabad - Techpranee</title>
        <meta
          name="main keyword"
          content="website development"
        ></meta>
        <meta
          name="description"
          content="TechPranee offers efficient product development services, delivering innovative solutions to meet your business needs."
        ></meta>
        <meta
          name="keywords"
          content="product development services
          custom web design services
          ecommerce web development
          landing page design services
          web development
          application development"
        ></meta>
          <meta name='og:title' content='Custom Web Application Development Company in Hyderabad - Techpranee'/>
<meta name='og:url' content='https://techpranee.com/web-development'/>
<meta name='og:image' content='https://tparticles.s3.ap-south-1.amazonaws.com/webdev_240e13398d.png'/>
<meta name='og:site_name' content='Techpranee'/>
<meta name='og:description' content='TechPranee offers efficient product development services, delivering innovative solutions to meet your business needs.'></meta>
      </Head>
      <MarketingServicesProductView />
    </>
  );
}
