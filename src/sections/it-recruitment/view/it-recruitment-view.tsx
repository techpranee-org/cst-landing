// _mock
import { _blogMarketingPosts, _testimonials } from 'src/_mock';
import ITRecruitmentHero from '../component/it-recruitment-hero';
import ITRecruitmentServices from '../component/it-recruitment-service';
import ServicesInclude from '../component/service-include';


// ----------------------------------------------------------------------

export default function ITReqcruitmentView() {
  return (
    <>
      <ITRecruitmentHero/>
      <ITRecruitmentServices/>
      <ServicesInclude/>

    </>
  );
}
