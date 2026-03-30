import { motion } from 'motion/react';
import { DiscordIcon } from './icons';
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center backdrop-blur-lg bg-[#04040B]/60 border-b border-white/[0.05]">
      <div className="flex items-center gap-2">
        <Link href="/" className="font-outfit font-bold text-xl text-white tracking-widest">
          CHART CITY
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        {[
          { label: 'The Continents', href: '/continents' },
          { label: 'Economy', href: '/economy' },
          { label: 'Market', href: '/market' }
        ].map((item) => (
          <Link key={item.label} href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <DiscordIcon className="w-5 h-5" />
        </a>
        <button className="px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/40 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] font-medium text-sm">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
