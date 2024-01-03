import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import * as Sentry from '@sentry/nextjs';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import Providers from './providers';
import './global.css';

config.autoAddCss = false;

process.on('unhandledRejection', (err) => {
  Sentry.captureException(err);
});

process.on('uncaughtException', (err) => {
  Sentry.captureException(err);
});

const setGoogleAnalyticsTags = () => ({
  __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
    `,
});

// TODO: hotjar id should be in env
const setHotjarTag = () => {
  return {
    __html: `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2333666,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `,
  };
};

export const metadata: Metadata = {
  title: '1188 | London based Creative Digital Agency.',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="relative grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <MobileMenu />
        </Providers>
        <Script id="hotjar-widget" dangerouslySetInnerHTML={setHotjarTag()} />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={setGoogleAnalyticsTags()}
        />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
