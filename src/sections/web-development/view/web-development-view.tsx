// _mock
import { _blogMarketingPosts, _testimonials } from 'src/_mock';
import WebDevelopmentHero from '../component/web-development-hero';
import WebDevelopmentServices from '../component/web-development-service';
import ServicesInclude from '../component/service-include';
import WebDevelopmentCapabilities from '../component/service-capabilities';




// ----------------------------------------------------------------------

export default function WebDevelopmentView() {
  return (
    <>

    <WebDevelopmentHero/>
    <WebDevelopmentServices/>
    <ServicesInclude/>
    <WebDevelopmentCapabilities/>

    </>
  );
}
