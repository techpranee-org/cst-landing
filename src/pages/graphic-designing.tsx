// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingServicesGraphicView} from "src/sections/_graphicDesigning/view"

// ----------------------------------------------------------------------

MarketingServicesGraphicPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingServicesGraphicPage() {
  return (
    <>
      {/* <Head>
        <title>Services | ZONE UI</title>
      </Head> */}
<Head>
        <link
          rel="shortcut icon"
          href="https://techpranee.com/graphic-designing/"
          type="image/x-icon"
        />
        <title>Cutting-Edge Creative Design Services: Unleashing Innovation
        </title>
        <meta
          name="main keyword"
          content="creative design services"
        ></meta>
        <meta
          name="description"
          content="Unleash digital success with our premier online advertising agency. Drive growth and achieve results with our expert strategies."
        ></meta>
        <meta
          name="keywords"
          content="creative design services
          graphic design services in india
          creative graphic design ideas
          creative graphics logo
          best service logo"
        ></meta>
<meta name='og:title' content='Cutting-Edge Creative Design Services: Unleashing Innovation'/>
<meta name='og:url' content='https://techpranee.com/graphic-desiging'/>
<meta name='og:image' content='https://tparticles.s3.ap-south-1.amazonaws.com/open_recruitment_ui_ux_designer_instagram_post_96fbd28d62.png'/>
<meta name='og:site_name' content='Techpranee'/>
<meta name='og:description' content='Unleash digital success with our premier online advertising agency. Drive growth and achieve results with our expert strategies.'></meta>
      </Head>
      <MarketingServicesGraphicView />
    </>
  );
}
