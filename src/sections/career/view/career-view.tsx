// _mock
import { _testimonials, _members, _brandsColor } from 'src/_mock';
import CareerAbout from '../component/career-about';
import CareerHero from '../component/career-hero';
import CareerOpenings from '../component/career-openings';
//

// ----------------------------------------------------------------------

export default function CareerView() {
  return (
    <>
        <CareerHero/>
        <CareerAbout/>
        <CareerOpenings/>
    </>
  );
}
