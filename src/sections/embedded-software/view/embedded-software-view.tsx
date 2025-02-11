// _mock
import { _blogMarketingPosts, _testimonials } from 'src/_mock';
import EmbeddedSoftwareHero from '../component/embedded-software-hero';
import EmbeddedSoftwareServices from '../component/embedded-software-service';
import ServicesInclude from '../component/service-include';
import EmbeddedServicesCapabilities from '../component/service-capabilities';



// ----------------------------------------------------------------------

export default function EmbeddedSoftwareView() {
  return (
    <>
      <EmbeddedSoftwareHero/>
      <EmbeddedSoftwareServices/>
      <ServicesInclude/>
      <EmbeddedServicesCapabilities/>
    </>
  );
}
