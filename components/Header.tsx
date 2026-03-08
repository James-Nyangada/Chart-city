import { motion } from 'motion/react';
import { DiscordIcon } from './icons';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center backdrop-blur-lg bg-[#04040B]/60 border-b border-white/[0.05]">
      <div className="flex items-center gap-2">
        <span className="font-space-grotesk font-bold text-xl text-white tracking-widest">
          CHART CITY
        </span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        {['The Continents', 'Economy', 'Movement', 'Market'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-gray-400 hover:text-white transition-colors">
            {item}
          </a>
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
