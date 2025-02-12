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
    <link
      rel="icon"
      href="/favicon/favicon.ico"
    />
  </>
);

const Meta = () => (
  <>
    <meta name="theme-color" content={palette("light").primary.main} />
    <meta
      name="keywords"
      content="premier IT services provider, with operations in the United States, Canada& India."
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
