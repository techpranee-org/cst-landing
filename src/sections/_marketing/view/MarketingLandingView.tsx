// _mock
import {
  _brands,
  _members,
  _blogMarketingPosts,
  _caseStudies,
  _testimonials,
  _pricingMarketing,
} from 'src/_mock';
//
import PricingMarketing from '../../pricing/marketing';
import TeamMarketing from '../../team/marketing';
import NewsletterMarketing from '../../newsletter/marketing';
import { BlogMarketingLatestPosts } from '../../blog/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import OurClientsMarketing from '../../our-clients/marketing';
import {
  MarketingLandingFaqs,
  MarketingLandingHero,
  MarketingLandingAbout,
  MarketingLandingFreeSEO,
  MarketingLandingProcess,
  MarketingLandingServices,
  MarketingLandingCaseStudies,
} from '../landing';
import { MarketingServicesHero } from 'src/sections/marketing/services';
import MarketingPostView from './MarketingPostView';
import MarketingCaseStudiesView from './MarketingCaseStudiesView';
import MarketingServicesView from './MarketingServicesView';
import MarketingLandingWhyChooseUs from '../landing/MarketingLandingWhyChooseUs';

// ----------------------------------------------------------------------

export default function MarketingLandingPage() {
  return (
    <>
      <MarketingLandingHero />

      {/* <OurClientsMarketing brands={_brands} /> */}

      <MarketingLandingAbout />
      {/* <MarketingLandingFreeSEO /> */}
      <MarketingLandingServices />
      <MarketingServicesHero/>
      <MarketingLandingWhyChooseUs/>

      <MarketingLandingProcess />

      {/* <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)} /> */}

      {/* <TeamMarketing members={_members} /> */}

      {/* <PricingMarketing plans={_pricingMarketing} /> */}

      {/* <MarketingLandingFaqs /> */}

      {/* <TestimonialMarketing testimonials={_testimonials} /> */}

      {/* <BlogMarketingLatestPosts posts={_blogMarketingPosts.slice(0, 4)} /> */}

      {/* <TestimonialMarketing/> */}

      {/* <NewsletterMarketing /> */}
    </>
  );
}
