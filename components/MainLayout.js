import Head from 'next/head';

import Header from './HeaderSection';
import Footer from './FooterSection';
import { BASE_PATH } from '../constants';
import { useEffect } from 'react';

const title = 'Buku Saku Pramuka Digital';
const desc =
  'Buku saku pramuka digital dalam bentuk web, ✅ GRATIS, ✅ tanpa iklan, ❌ tidak perlu install Aplikasi lagi';
const url = BASE_PATH;
const metaImg = BASE_PATH + '/assets/5930.jpg';

function Layout(props) {
  const [appTheme, setAppTheme] = React.useState('light');

  useEffect(() => {
    const userTheme = window.localStorage.getItem('app-theme') || 'light';

    if (userTheme !== appTheme) {
      setAppTheme(userTheme);
    }
  });

  const toggleTheme = () => {
    if (appTheme === 'light') {
      setAppTheme('dark');
      window.localStorage.setItem('app-theme', 'dark');
    } else {
      setAppTheme('light');
      window.localStorage.setItem('app-theme', 'light');
    }
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="theme-color" content="#7B341E" />
        <title key="title">{title}</title>
        <meta key="description" name="description" content={desc} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={metaImg} />
        <meta name="twitter:site" content="@Maz_Ipan" />
        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={desc}
        />

        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:description" property="og:description" content={desc} />
        <meta key="og:url" property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metaImg} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${url}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${url}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${url}/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${url}/site.webmanifest`} />
        <meta
          content="u8olGi9rN_mzUhMWIqakLvCi-pQMluERfdUK_6bC4x4"
          name="google-site-verification"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-25065548-9"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
						gtag('config', 'UA-25065548-9');
        `,
          }}
        />
      </Head>
      <div className={`flex flex-col min-h-screen text-primary ${appTheme === 'dark' ? 'theme-dark' : null}`}>
        <Header />
        <main className="flex-1 w-full max-w-4xl p-4 mx-auto">
          {props.children}
        </main>
        <Footer />
        {/* Theme toggle */}
        <button
          id='theme-toggle'
          className='fixed bg-card rounded-full shadow-lg p-2 focus:outline-none overflow-hidden'
          style={{ right: '1.5rem', bottom: '15%' }}
          onClick={() => {
            toggleTheme()
          }}
        >
          <div id="light" className={appTheme === 'light' ? 'hidden' : null } style={{ width: '2rem', height: '2rem' }}>
            <svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'><title>Sunny</title><path fill='none' stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94'/><circle cx='256' cy='256' r='80' fill='none' stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32'/></svg>
          </div>
          <div id="moon" className={appTheme === 'dark' ? 'hidden' : null } style={{ width: '2rem', height: '2rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Moon</title><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
          </div>
        </button>
      </div>
    </>
  );
}

export default Layout;
