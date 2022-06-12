import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html>
      <Head>
      <script src="https://js.pusher.com/7.1/pusher.min.js"/>
      <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor'
          crossorigin='anonymous'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}