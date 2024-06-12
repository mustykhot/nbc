import Document, { Html, Head, Main, NextScript } from "next/document";

import Script from "next/script";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            href="/images/favicon.png"
            type="image/png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"true"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500&display=swap"
            rel="stylesheet"
          />
          {/* new meta */}
          <meta name="og:type" content="website" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="og:url" content="https://getbumpa.com" />
          <meta name="og:card" content="summary_large_image" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@getBumpa" />
          <meta name="twitter:site" content="https://getbumpa.com" />
          <meta
            name="description"
            content="Turn your phone into a mobile store instantly. Start selling online and managing your business for free"
          />
          <meta name="og:title" content="Bumpa" />
          <meta
            name="og:description"
            content="Turn your phone into a mobile store instantly. Start selling online and managing your business for free"
          />
          <meta name="twitter:title" content="Bumpa" />
          <meta
            name="og:description"
            content="Turn your phone into a mobile store instantly. Start selling online and managing your business for free"
          />
          <meta
            name="og:image"
            content="https://ik.imagekit.io/uknntomzctt/Bumpa_black_0v3roJb2E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668328597167"
          />{" "}
          <meta
            name="twitter:image"
            content="https://ik.imagekit.io/uknntomzctt/Bumpa_black_0v3roJb2E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668328597167"
          />
          {/* <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-V4RVWTG9C9"
          ></Script>
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V4RVWTG9C9');
          `,
            }}
          /> */}
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NJXLDKC');`,
            }}
          ></Script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
