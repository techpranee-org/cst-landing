// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingContactView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

MarketingContactPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingContactPage() {

  function addContactJsonLd() {
    return {
      __html: `{
        
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Techpranee Digital Agency",
          "image": "https://www.techpranee.com/_next/image/?url=https%3A%2F%2Ftparticles.s3.ap-south-1.amazonaws.com%2Ftechpranee_Logo_f17e79c6f3.webp&w=64&q=75",
          "@id": "",
          "url": "https://www.techpranee.com/",
          "telephone": "7032160008",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "H.No 3-8-137, Chandrapuri Colony, L.B.Nagar",
            "addressLocality": "Hyderabad",
            "postalCode": "500070",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.3458193,
            "longitude": 78.5547335
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "08:00",
            "closes": "21:00"
          },
          "sameAs": [
            "https://www.facebook.com/techpranee",
            "https://www.instagram.com/techpraneedigitalagency/",
            "https://www.youtube.com/channel/UCLthNPgBxRG5mF34US8pxRQ",
            "https://www.linkedin.com/company/67751822/admin/feed/posts/",
            "https://www.techpranee.com/"
          ] 
        
        
      }`
    }
  }

  
    return (
        <>
        <Head>
        <link
          rel="shortcut icon"
          href="https://techpranee.com/contact/"
          type="image/x-icon"
        />
        <title>California SoftTech: Driven by Innovation, Guided by Expertise</title>
        <meta
          name="main keyword"
          content="Digital Business Partner"
        ></meta>
        <meta
          name="description"
          content="TechPranee is your trusted digital business partner, providing expert solutions to help your business thrive in the digital age."
        ></meta>
        <meta
          name="keywords"
          content="Digital Partner
          innovative digital marketing
          full service branding agency
          Digital Business Partner"
        ></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addContactJsonLd()}
          key="contact-page-jsonld"
        />
          
      </Head>
            <MarketingContactView />
        </>
    );
}
