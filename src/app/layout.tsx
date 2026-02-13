import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';

const jost = Jost({ subsets: ['latin'], variable: '--font-jost' });

export const metadata: Metadata = {
  title: 'US Logistics Ltd. – Dispatching & Trucking Solutions',
  description: 'Dispatching, load procurement, and trucking support. We make trucking simple, stress-free, and profitable.',
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 5 },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jost.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
