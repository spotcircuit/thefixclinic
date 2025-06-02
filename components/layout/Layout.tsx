import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'The Fix Clinic - Aesthetic and Wellness Services',
  description = 'At The Fix Clinic we strive to provide aesthetic and wellness services that exceed every expectation with over 30 years of combined experience.',
  keywords = 'medical spa, facial balancing, skin care, wellness, botox, filler, aesthetics, Ashburn',
  ogImage = '/images/logo/main-logo.png',
}) => {
  const fullTitle = title.includes('The Fix Clinic') ? title : `${title} | The Fix Clinic`;
  
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/newfavicon.png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thefixclinic.com/" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://thefixclinic.com/" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;