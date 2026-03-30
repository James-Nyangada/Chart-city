"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { ASSETS, SECTOR_STATS, LEADERBOARD } from '@/lib/data';
import { AssetCard } from './GlobalExchange';

export function ContinentalHub({ region }: { region: string }) {
  const formattedRegion = region.charAt(0).toUpperCase() + region.slice(1);
  const isAsia = region.toLowerCase() === 'asia';
  
  // Filter assets for this region (mock logic)
  const regionAssets = ASSETS.filter(a => a.continent.toLowerCase().includes(region.toLowerCase()) || isAsia);

  return (
    <div className="min-h-screen pt-[72px]">
      {/* Dynamic Hero */}
      <div className="h-[40vh] relative flex flex-col justify-end p-8 md:p-12 overflow-hidden border-b border-white/10">
        {/* Background Glow */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-30 -z-10 ${isAsia ? 'bg-blue-600' : 'bg-[#C9A84C]'}`} />
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto w-full"
        >
          <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white tracking-tighter">
            Neon {formattedRegion} Sector
          </h1>
          <p className="text-xl text-gray-300 mt-2 font-inter">
            {isAsia ? 'The 6G Skyline' : 'The Cradle of Wealth'}
          </p>
        </motion.div>

        {/* Sector Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-0 left-0 w-full bg-white/[0.02] backdrop-blur-xl border-t border-white/[0.05] py-4 px-8"
        >
          <div className="max-w-7xl mx-auto flex flex-wrap gap-8 md:gap-16 items-center">
            <StatItem label="Market Cap" value={`◎ ${SECTOR_STATS.marketCap}`} />
            <StatItem label="24h Volume" value={`◎ ${SECTOR_STATS.volume24h}`} />
            <StatItem label="Top Architect" value={SECTOR_STATS.topArchitect} isHandle />
          </div>
        </motion.div>
      </div>

      {/* Hub Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 max-w-7xl mx-auto mt-8">
        {/* Left: Trending Assets */}
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-outfit font-bold text-white mb-6">Trending Assets in {formattedRegion}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {regionAssets.map((asset, i) => (
              <AssetCard key={asset.id} asset={asset} index={i} />
            ))}
          </div>
        </div>

        {/* Right: Sector Leaderboard */}
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-outfit font-bold text-white mb-6">Sector Leaderboard</h2>
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-6 flex flex-col gap-4">
            {LEADERBOARD.map((user, i) => (
              <motion.div 
                key={user.rank}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-6 text-center font-jetbrains-mono text-gray-500 text-sm">
                    {user.rank}
                  </div>
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                    <Image src={user.avatar} alt={user.handle} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-medium text-sm">{user.handle}</span>
                    <span className={`text-xs ${user.role === 'Architect' ? 'text-purple-400' : 'text-[#C9A84C]'}`}>
                      {user.role}
                    </span>
                  </div>
                </div>
                <div className="font-jetbrains-mono text-white text-sm">
                  {user.influence}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatItem({ label, value, isHandle }: { label: string, value: string, isHandle?: boolean }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-gray-400 uppercase tracking-wider mb-1">{label}</span>
      <span className={`text-lg ${isHandle ? 'text-purple-400 font-medium' : 'text-white font-jetbrains-mono'}`}>
        {value}
      </span>
    </div>
  );
}
