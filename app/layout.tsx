import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VisitorLogger from '@/components/VisitorLogger';

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
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <VisitorLogger />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}