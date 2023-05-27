import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MHKFVKJ');`,
            }}
          ></script>
          <script
            async
            src="https://www.googleoptimize.com/optimize.js?id=OPT-PFSWT58"
          ></script>
          <link
            rel="preload"
            href="/fonts/Avenir Lt Std/AvenirLTStd-Roman.woff"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/Avenir Lt Std/AvenirLTStd-Light.woff"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/Avenir Lt Std/AvenirLTStd-Book.woff"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/Avenir Lt Std/AvenirLTStd-Medium.woff"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/Avenir LT Std/AvenirLTStd-Heavy.woff"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/Avenir Lt Std/AvenirLTStd-Black.woff"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body style={{width: "100%", maxWidth: "100%", padding: "0", margin: "0"}}>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MHKFVKJ"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>`,
            }}
          ></noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
