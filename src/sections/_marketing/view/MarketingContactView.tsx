//
import NewsletterMarketing from '../../newsletter/marketing';
import { MarketingLandingFreeSEO } from '../landing';
import ContactMarketing from '../../contact/marketing';
import OfficesLocation from 'src/sections/contact/offices/offices';

// ----------------------------------------------------------------------

export default function MarketingContactView() {
  return (
    <>
      <ContactMarketing />
      <OfficesLocation/>

      {/* <MarketingLandingFreeSEO /> */}

      {/* <NewsletterMarketing /> */}
    </>
  );
}
