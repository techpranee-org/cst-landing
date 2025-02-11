// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
import Footer from 'src/layouts/main/footer/Footer';
// sections
import { MarketingLandingView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

MarketingLandingPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingLandingPage() {
  
  return (
    <>
    <Head>

        <link
          rel="shortcut icon"
          href="https://techpranee.com/"
          type="image/x-icon"
        />
        <title>California SoftTech: Driven by Innovation, Guided by Expertise</title>
        <meta
          name="main keyword"
          content="web development & digital marketing"
        ></meta>
        <meta
          name="description"
          content="TechPranee offers professional web development and digital marketing services to help businesses establish a strong online presence."
        ></meta>
        <meta
          name="keywords"
          content="web development & digital marketing services
          custom & responsive web development services
          web design and marketing
          web design & digital marketing agency"
        ></meta>
                    <meta name='og:title' content='TechPranee: Web Development & Digital Marketing Services'/>
<meta name='og:url' content='https://techpranee.com'/>
<meta name='og:image' content='https://tparticles.s3.ap-south-1.amazonaws.com/techpranee_logo_55cf927c01.png'/>
<meta name='og:site_name' content='Techpranee'/>
<meta name='og:description' content='TechPranee offers professional web development and digital marketing services to help businesses establish a strong online presence.'></meta>
      </Head>
      <MarketingLandingView />
    </>
  );
}
