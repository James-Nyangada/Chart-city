"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Bookmark } from 'lucide-react';
import { ASSETS } from '@/lib/data';

const CONTINENTS = ['All', 'Africa', 'Asia', 'Europe', 'N. America', 'S. America', 'Oceania', 'Antarctica'];

export function GlobalExchange() {
  return (
    <div className="min-h-screen pt-[72px]">
      {/* Command Bar */}
      <div className="sticky top-[72px] flex flex-col md:flex-row justify-between items-center py-4 border-b border-white/10 px-8 bg-[#04040B]/80 z-40 backdrop-blur-md gap-4">
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          {CONTINENTS.map((continent, i) => (
            <Link 
              key={continent} 
              href={continent === 'All' ? '/market' : `/sector/${continent.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                i === 0 ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {continent}
            </Link>
          ))}
        </div>
        <div className="text-sm text-gray-400 flex-shrink-0">
          Sort by: <span className="text-white cursor-pointer hover:text-purple-400 transition-colors">Market Cap</span> | <span className="cursor-pointer hover:text-white transition-colors">24h Vol</span> | <span className="cursor-pointer hover:text-white transition-colors">Newly Minted</span>
        </div>
      </div>

      {/* Market Board */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 max-w-[1400px] mx-auto">
        {ASSETS.map((asset, i) => (
          <AssetCard key={asset.id} asset={asset} index={i} />
        ))}
      </div>
    </div>
  );
}

export function AssetCard({ asset, index }: { asset: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl overflow-hidden group relative flex flex-col"
    >
      {/* Hover Actions */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-purple-400 transition-colors border border-white/10">
          <Heart className="w-4 h-4" />
        </button>
        <button className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-blue-400 transition-colors border border-white/10">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>

      {/* Image Wrapper (Top 70%) */}
      <Link href={`/asset/${asset.id}`} className="relative aspect-[4/5] overflow-hidden block">
        <Image 
          src={asset.image} 
          alt={asset.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04040B] via-transparent to-transparent opacity-60" />
      </Link>

      {/* Card Data (Bottom 30%) */}
      <div className="p-5 flex justify-between items-end flex-grow bg-gradient-to-b from-transparent to-[#04040B]/80">
        <div className="flex flex-col">
          <Link href={`/asset/${asset.id}`} className="font-outfit font-bold text-lg text-white hover:text-purple-400 transition-colors line-clamp-1">
            {asset.title}
          </Link>
          <span className="text-sm text-gray-400 mt-1">{asset.artist}</span>
        </div>
        
        <div className="flex flex-col items-end">
          <span className="font-jetbrains-mono text-white font-medium">
            ◎ {asset.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-2 mt-1">
            <Sparkline trend={asset.trend} />
            <span className={`font-jetbrains-mono text-xs ${asset.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
              {asset.change24h}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Sparkline({ trend }: { trend: 'up' | 'down' }) {
  const color = trend === 'up' ? '#4ade80' : '#f87171';
  const points = trend === 'up' 
    ? "0,10 5,8 10,12 15,5 20,8 25,2" 
    : "0,2 5,8 10,5 15,12 20,8 25,10";
    
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" className="overflow-visible">
      <polyline 
        points={points} 
        fill="none" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}
