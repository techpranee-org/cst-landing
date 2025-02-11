import * as React from "react";
// next
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from "next/document";
import { AppType } from "next/app";
// emotion
import createEmotionServer from "@emotion/server/create-instance";
// utils
import createEmotionCache from "src/utils/createEmotionCache";
// theme
import palette from "src/theme/palette";
import { primaryFont } from "src/theme/typography";
//
import { MyAppProps } from "./_app";

// ----------------------------------------------------------------------

const Favicon = () => (
  <>
    {/* <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" /> */}
    <link
      rel="icon"
      href="https://tparticles.s3.ap-south-1.amazonaws.com/techpranee_Logo_f17e79c6f3.webp"
    />
  </>
);

const Meta = () => (
  <>
    {/* PWA primary color */}
    <meta name="theme-color" content={palette("light").primary.main} />
    {/* <meta
      name="description"
      content="The ZONE is built on top of MUI, a powerful library that provides flexible, customizable, and easy-to-use components."
    />
    <meta name="keywords" content="react,material,kit,application,landing & corporate,template" />
    <meta name="author" content="ZONE UI Kit" /> */}
    {/* <meta
      name="title"
      content="Techpranee-best digital marketing services"
    ></meta>
    <meta
      name="description"
      content="best digital marketing service provider in Hyderabad, We have experience creating various website and mobile Applications"
    ></meta> */}
    <meta
      name="keywords"
      content="top digital marketing services provider in Hyderabad, top digital marketing company in Hyderabad, top digital marketing services"
    ></meta>
  </>
);

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  return (
    <Html
      lang="en"
      className={primaryFont.className}
      style={{ marginTop: "90px" }}
    >
      <Head>
        <Favicon />
        {/* @ts-ignore */}
        <script delay="/scripts/mftClarityScript.js" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0PJM215BZB"
        ></script>
        {/* @ts-ignore */}
        <script delay="/scripts/ga4.js" />
        <Meta />
        {/* Emotion */}
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body style={{ fontFamily: "Crimson" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// ----------------------------------------------------------------------

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();

  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (
        App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>
      ) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);

  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
