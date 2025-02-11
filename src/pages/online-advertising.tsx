// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingServicesAdvertiseView} from "src/sections/_advertising/view"

// ----------------------------------------------------------------------

MarketingServicesAdvertisePage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingServicesAdvertisePage() {
  return (
    <>
      {/* <Head>
        <title>Services | ZONE UI</title>
      </Head> */}
<Head>
        <link
          rel="shortcut icon"
          href="https://techpranee.com/online-advertising/"
          type="image/x-icon"
        />
        <title>Unleashing Digital Success: Premier Online Advertising Agency</title>
        <meta
          name="description"
          content="Unleash digital success with our premier online advertising agency. Drive growth and achieve results with our expert strategies."
        ></meta>
        <meta
          name="keywords"
          content="online advertising agency
          advertising agency in india
          best ad agency in hyderabad
          full service advertising agency
          advertising agency services"
        ></meta>
                     <meta name='og:title' content='Unleashing Digital Success: Premier Online Advertising Agency'/>
<meta name='og:url' content='https://techpranee.com/online-advertising'/>
<meta name='og:image' content='https://tparticles.s3.ap-south-1.amazonaws.com/3_D_Digital_Marketing_Class_ca3dc5ca7f.png'/>
<meta name='og:site_name' content='Techpranee'/>
<meta name='og:description' content='Unleash digital success with our premier online advertising agency. Drive growth and achieve results with our expert strategies.'></meta>
    
      </Head>
      <MarketingServicesAdvertiseView />
    </>
  );
}
