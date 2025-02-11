// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingAboutView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

CareerPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerPage() {
  function addAboutJsonLd() {
    return {
      __html: `{
        
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Techpranee Digital Agency",
        "url": "https://www.techpranee.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.techpranee.com/contact/{search_term_string}https://www.techpranee.com/about/",
          "query-input": "required name=search_term_string"
        }
      
        
        
      }`,
    }
  }
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://techpranee.com/about/"
          type="image/x-icon"
        />
        <title>California SoftTech: Driven by Innovation, Guided by Expertise</title>
        <meta
          name="main keyword"
          content="digital solutions provider"
        ></meta>
        <meta
          name="description"
          content="TechPranee is a leading digital solutions provider based in Hyderabad, India, offering innovative and reliable services."
        ></meta>
        <meta
          name="keywords"
          content="digital solutions provider
          digital marketing services in hyderabad india
          digital agency in hyderabad
          digital marketing agency services"
        ></meta>
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addAboutJsonLd()}
          key="contact-page-jsonld"
        />

      </Head>
      <MarketingAboutView />
    </>
  );
}
