import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';

// Using Inter for body text
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '700', '900'], variable: '--font-inter' });

// Using Bebas Neue for headings
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas-neue' });

export const metadata: Metadata = {
  title: 'Brutal Bricks | Brutalist Architecture in LEGO',
  description: 'Exploring and celebrating brutalist architecture through LEGO brick recreations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans`}>{children}</body>
    </html>
  );
} 