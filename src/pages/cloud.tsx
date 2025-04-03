// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';

// sections
import CloudView from 'src/sections/cloud/view/cloud-view';
// ----------------------------------------------------------------------

CloudServicePage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CloudServicePage() {
  return (
    <>
      <Head>
        <title>California SoftTech Inc: Driven by Innovation, Guided by Expertise</title>
        <meta
          name="description"
          content="California SoftTech Inc is a premier IT services provider, with operations in the United States, Canada& India. We specialize in offering tailored professional consulting services that drive operational excellence and improve organizational performance through the strategic use of technology and outsourcing solutions."
        ></meta>
      </Head>
      <CloudView />
    </>
  );
}
