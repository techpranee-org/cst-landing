// _mock
import { _blogMarketingPosts, _testimonials } from 'src/_mock';
import ResourcingTalentHero from '../component/resourcing-talent-hero';
import ResourcingTalentServices from '../component/resourcing-talent-service';
import ServicesInclude from '../component/service-include';
import ResourcingTalentCapabilities from '../component/service-capabilities';






// ----------------------------------------------------------------------

export default function ResourcingTalentView() {
  return (
    <>
      <ResourcingTalentHero />
      <ResourcingTalentServices />
      <ServicesInclude />
      <ResourcingTalentCapabilities />

    </>
  );
}
