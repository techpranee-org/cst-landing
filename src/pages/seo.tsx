// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingServicesSeoView} from "src/sections/_seo/view"

// ----------------------------------------------------------------------

MarketingServicesSeoPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingServicesSeoPage() {
  return (
    <>
      {/* <Head>
        <title>Services | ZONE UI</title>
      </Head> */}
<Head>
        <link
          rel="shortcut icon"
          href="https://techpranee.com/seo/"
          type="image/x-icon"
        />
       <title>Maximize Your Online Presence with Expert SEO Marketing</title>
        <meta
          name="description"
          content="Enhance your digital footprint and reach your target audience with our professional SEO marketing services. Maximize your online presence today."
        ></meta>
        <meta
          name="keywords"
          content="seo website development
          search engine optimization marketing agency
          seo and digital marketing services
          best ui ux website"
        ></meta>
<meta name='og:title' content='Maximize Your Online Presence with Expert SEO Marketing'/>
<meta name='og:url' content='https://techpranee.com/seo'/>
<meta name='og:image' content='https://tparticles.s3.ap-south-1.amazonaws.com/VAS_9_Minimalist_Search_Engine_Optimization_Instagram_Post_af53aa08ae.png'/>
<meta name='og:site_name' content='Techpranee'/>
<meta name='og:description' content='Enhance your digital footprint and reach your target audience with our professional SEO marketing services. Maximize your online presence today'></meta>
 
      </Head>
      <MarketingServicesSeoView />
    </>
  );
}
