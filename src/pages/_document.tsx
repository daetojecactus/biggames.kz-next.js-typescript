import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <title>Сыграйте свадьбу и купите квартиру</title>
        <meta
          name="description"
          content="Попробуйте сыграть свою свадьбу так, что бы и вам обидно не было, и новую квартиру в BI Group купить получилось!"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
