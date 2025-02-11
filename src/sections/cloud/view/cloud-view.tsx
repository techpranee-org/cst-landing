// _mock
import { _blogMarketingPosts, _testimonials } from 'src/_mock';
import CloudHero from '../component/cloud-hero';
import CloudServices from '../component/cloud-service';
import ServicesInclude from '../component/service-include';
import CloudCapabilities from '../component/service-capabilities';





// ----------------------------------------------------------------------

export default function CloudView() {
  return (
    <>
      <CloudHero />
      <CloudServices />
      <ServicesInclude />
      <CloudCapabilities />
    </>
  );
}
