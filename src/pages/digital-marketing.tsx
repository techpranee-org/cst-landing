// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingServicesMarketingView} from "src/sections/marketing/view"

// ----------------------------------------------------------------------

MarketingServicesMarketingPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingServicesMarketingPage() {
  return (
    <>
      {/* <Head>
        <title>Services | ZONE UI</title>
      </Head> */}
<Head>
        <link
          rel="shortcut icon"
          href="https://techpranee.com/marketing/"
          type="image/x-icon"
        />
        <title>Maximizing Reach with Integrated Digital Marketing services
        </title>
        <meta
          name="description"
          content="Maximise your reach and ROI through the implementation of integrated digital marketing strategies"
        ></meta>
        <meta
          name="keywords"
          content="integrated digital marketing
          digital marketing agency for startups
          marketing in digital world
          affordable digital agency"
        ></meta>
 <meta name='og:title' content='Maximizing Reach with Integrated Digital Marketing services'/>
<meta name='og:url' content='https://techpranee.com/digital-marketing'/>
<meta name='og:image' content='https://tparticles.s3.ap-south-1.amazonaws.com/Growing_Your_Business_6bbfa0b55a.png'/>
<meta name='og:site_name' content='Techpranee'/>
<meta name='og:description' content='Maximise your reach and ROI through the implementation of integrated digital marketing strategies'></meta>
     
      </Head>
      <MarketingServicesMarketingView />
    </>
  );
}
