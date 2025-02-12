// _mock
import {
  _brands,
  _members,
  _blogMarketingPosts,
  _caseStudies,
  _testimonials,
  _pricingMarketing,
} from 'src/_mock';
import LandingHero from './component/landing-hero';
import LandingAbout from './component/landing-about';
import LandingServices from './component/landing-services';
import LandingSuccessStory from './component/landing-success-story';
import LandingWhyChooseUs from './component/landing-why-choose-us';
import LandingWorkFlow from './component/landing-work-flow';
//


// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <>
      <LandingHero/>
      <LandingAbout/>
      <LandingServices/>
      <LandingSuccessStory/>
      <LandingWhyChooseUs/>
      <LandingWorkFlow/>
    </>
  );
}
