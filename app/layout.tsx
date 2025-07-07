import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useEffect } from 'react';
import UAParser from 'ua-parser-js';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prometheus Digital Studio - Full-Stack IT Solutions',
  description: 'Transform your business with cutting-edge technology. We deliver AI/ML, DevOps, automation, and full-stack development solutions.',
  keywords: 'full-stack development, AI/ML, DevOps, automation, web development, cloud solutions, IT consulting',
  authors: [{ name: 'Prometheus Digital Studio' }],
  creator: 'Prometheus Digital Studio',
  openGraph: {
    title: 'Prometheus Digital Studio - Full-Stack IT Solutions',
    description: 'Transform your business with cutting-edge technology. We deliver AI/ML, DevOps, automation, and full-stack development solutions.',
    url: 'https://prometheus.studio',
    siteName: 'Prometheus Digital Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prometheus Digital Studio - Full-Stack IT Solutions',
    description: 'Transform your business with cutting-edge technology. We deliver AI/ML, DevOps, automation, and full-stack development solutions.',
    creator: '@prometheusdigital',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const parser = new UAParser();
    const browser = parser.getBrowser();
    const os = parser.getOS();
    const device = parser.getDevice();
    const userAgent = navigator.userAgent;
    const screen = window.screen;
    const language = navigator.language;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const referrer = document.referrer;
    const platform = navigator.platform;
    const cookiesEnabled = navigator.cookieEnabled;
    const doNotTrack = navigator.doNotTrack;

    fetch('/api/log-visitor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        browser: `${browser.name} ${browser.version}`,
        os: `${os.name} ${os.version}`,
        device: device.type || 'desktop',
        userAgent,
        screen: `${screen.width}x${screen.height}`,
        language,
        timezone,
        referrer,
        platform,
        cookiesEnabled,
        doNotTrack,
      }),
    });
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}