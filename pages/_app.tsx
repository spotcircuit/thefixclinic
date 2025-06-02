import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  // For smooth scrolling to anchors
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target && target.tagName === 'A' && target.href.includes('#')) {
        const hash = target.getAttribute('href');
        if (hash && hash.startsWith('#')) {
          e.preventDefault();
          const element = document.getElementById(hash.substring(1));
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 100, // Account for header
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <Head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/montserrat-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/cormorant-garamond-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;