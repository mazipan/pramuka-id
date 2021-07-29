import Document, { Head, Html, Main, NextScript } from 'next/document'

import { BASE_PATH, BRAND_TITLE } from '../constants'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id" className="light">
        <Head />

        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta
          name="google-site-verification"
          content="BBtZlBKBTEbm8atQF0aDRf1sxSqUMiojAB36tw0s4CU"
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-25065548-9" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'WebSite',
              id: BASE_PATH,
              name: BRAND_TITLE,
              url: BASE_PATH
            })
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', 'UA-25065548-9');`
          }}
        />

        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function() {
              window.__onThemeChange = function() {};
              function setTheme(newTheme) {
                window.__theme = newTheme;
                preferredTheme = newTheme;
                if (newTheme === 'dark') {
                  document.documentElement.classList.add('dark')
                  document.documentElement.classList.remove('light')
                } else {
                  document.documentElement.classList.remove('dark')
                  document.documentElement.classList.add('light')
                }
                window.__onThemeChange(newTheme);
              }
              var preferredTheme;
              try {
                preferredTheme = localStorage.getItem('theme');
              } catch (err) {}
              window.__setPreferredTheme = function(newTheme) {
                setTheme(newTheme);
                try {
                  localStorage.setItem('theme', newTheme);
                } catch (err) {}
              }
              var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
              darkQuery.addListener(function(e) {
                window.__setPreferredTheme(e.matches ? 'dark' : 'light')
              });
              setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
            })();
              `
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
