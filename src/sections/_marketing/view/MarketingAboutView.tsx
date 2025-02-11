// _mock
import { _testimonials, _members, _brandsColor } from 'src/_mock';
//
import { TeamMarketingAbout } from '../../team/marketing';
import NewsletterMarketing from '../../newsletter/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import { OurClientsMarketingAbout } from '../../our-clients/marketing';
import { MarketingLandingFaqs, MarketingLandingFreeSEO } from '../landing';

import {
  MarketingAbout,
  MarketingAboutStory,
  MarketingAboutOurVision,
  MarketingAboutCoreValues,
} from '../about';
import OurClientsCareer from 'src/sections/our-clients/career/OurClientsCareer';
import MarketingAboutHero from './marketing-about-hero';

// ----------------------------------------------------------------------

export default function MarketingAboutView() {
  return (
    <>
      <MarketingAboutHero/>
      <MarketingAbout />

      {/* <MarketingAboutOurVision /> */}

      <MarketingAboutCoreValues />

      <MarketingAboutStory />

      {/* <TeamMarketingAbout members={_members} /> */}

      {/* <OurClientsMarketingAbout brands={_brandsColor} /> */}
      {/* <OurClientsCareer /> */}

      {/* <TestimonialMarketing/> */}

      {/* <MarketingLandingFaqs /> */}

      {/* <MarketingLandingFreeSEO /> */}

      {/* <NewsletterMarketing /> */}
    </>
  );
}
