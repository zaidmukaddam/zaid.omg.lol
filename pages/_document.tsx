import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';

export default function Document(props: DocumentProps) {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="p-5 pt-0 font-sans text-[#313233] antialiased selection:bg-[#95a5ac40]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
