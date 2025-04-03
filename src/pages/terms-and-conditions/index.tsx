// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
import TermsAndConditionsPage from 'src/sections/terms-and-conditions';

// sections



TermsAndConditions.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;


export default function TermsAndConditions() {

    return (
      <>
        <Head>
          <title>California SoftTech Inc: Driven by Innovation, Guided by Expertise</title>
          <meta
            name="description"
            content="California SoftTech Inc is a premier IT services provider, with operations in the United States, Canada& India. We specialize in offering tailored professional consulting services that drive operational excellence and improve organizational performance through the strategic use of technology and outsourcing solutions."
          ></meta>
        </Head>
        <TermsAndConditionsPage/>
      </>
    );
  }