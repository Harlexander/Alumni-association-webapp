import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Montserrat:wght@400;500;700;800&family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
    </Head>
      <body style={{fontFamily: "Nunito', sans-serif"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}