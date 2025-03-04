import React from 'react';
import Link from 'next/link';

type FooterProps = {
  currentPage?: 'home' | 'balfron-tower' | 'toast-rack';
  imageCredits?: {
    name: string;
    credit: React.ReactNode;
  }[];
};

export default function Footer({ currentPage = 'home', imageCredits = [] }: FooterProps) {
  return (
    <footer className="py-12 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t border-white/20 pt-8">
          <div className="md:col-span-4">
            <p className="text-2xl font-bold tracking-tight font-bebas">BRUTAL BRICKS</p>
            {currentPage !== 'home' && (
              <Link href="/" className="text-white/70 hover:text-white mt-2 inline-block">
                Return to home
              </Link>
            )}
            <p className="text-sm mt-4">© {new Date().getFullYear()}</p>
          </div>
          <div className="md:col-span-4 md:border-l md:border-r border-white/20 md:px-4">
            <p className="text-lg font-bold mb-4">STUDIES</p>
            <ul className="space-y-2">
              <li className={currentPage === 'balfron-tower' ? 'text-white font-medium' : ''}>
                {currentPage === 'balfron-tower' ? (
                  'Balfron Tower'
                ) : (
                  <Link href="/studies/balfron-tower" className="text-white/70 hover:text-white transition-colors">
                    Balfron Tower
                  </Link>
                )}
              </li>
              <li className={currentPage === 'toast-rack' ? 'text-white font-medium' : ''}>
                {currentPage === 'toast-rack' ? (
                  'Toast Rack'
                ) : (
                  <Link href="/studies/toast-rack" className="text-white/70 hover:text-white transition-colors">
                    Toast Rack
                  </Link>
                )}
              </li>
              <li className="text-white/50">
                Shakespeare Tower (Coming Soon)
              </li>
            </ul>
          </div>
          <div className="md:col-span-4 text-right">
            <p className="text-sm tracking-wide">CELEBRATING BRUTALIST ARCHITECTURE THROUGH LEGO</p>
          </div>
        </div>
        {imageCredits.length > 0 && (
          <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/50">
            <p>Image Credits:</p>
            {imageCredits.map((credit, index) => (
              <p key={index} className="mt-1">
                {credit.name}: {credit.credit}
              </p>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
} 