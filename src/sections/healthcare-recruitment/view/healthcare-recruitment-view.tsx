// _mock
import { _blogMarketingPosts, _testimonials } from 'src/_mock';

import HealthcareRecruitmentHero from 'src/sections/healthcare-recruitment/component/healthcare-recruitment-hero';
import HealthcareRecruitmentServices from '../component/healthcare-recruitment-service';
import ServicesInclude from '../component/service-include';

// ----------------------------------------------------------------------

export default function HealthcareReqcruitmentView() {
  return (
    <>
      <HealthcareRecruitmentHero/>

      <HealthcareRecruitmentServices/>

      <ServicesInclude/>

    </>
  );
}
