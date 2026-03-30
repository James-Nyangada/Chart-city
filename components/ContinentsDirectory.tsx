"use client";

import { motion } from 'motion/react';
import { CONTINENTS_DATA } from '@/lib/data';
import { DiscordIcon } from './icons';

export function ContinentsDirectory() {
  return (
    <div className="min-h-screen pt-[72px] bg-[#04040B]">
      {/* PAGE HEADER (Hero Section) */}
      <div className="max-w-7xl mx-auto pt-32 pb-16 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-purple-900/30 text-purple-400 text-xs px-4 py-1.5 rounded-full inline-block mb-6 font-jetbrains-mono tracking-widest uppercase border border-purple-500/20"
        >
          The Global Ecosystem
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-outfit font-bold text-white mb-6 tracking-tight"
        >
          Choose Your Domain.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-inter leading-relaxed"
        >
          Every continent serves a vital, specialized role in the Chart City machine. Find your tribe, connect with your Prime Minister, and join the movement.
        </motion.p>
      </div>

      {/* THE CONTINENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-8 pb-32">
        {CONTINENTS_DATA.map((continent, index) => {
          // Center the 7th item on large and medium screens
          const isLastItem = index === CONTINENTS_DATA.length - 1;
          const gridClasses = isLastItem ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : "";

          return (
            <motion.div
              key={continent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-[#0A0A14] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] flex flex-col ${gridClasses}`}
            >
              {/* Top Section (Identity) */}
              <div className="absolute top-8 right-8 bg-blue-900/40 text-blue-400 font-jetbrains-mono text-xs px-3 py-1 rounded-md border border-blue-500/20">
                {continent.role}
              </div>
              
              <h2 className="text-3xl font-outfit font-bold text-white tracking-wide pr-24">
                {continent.name}
              </h2>
              
              {/* Middle Section (Description) */}
              <div className="mt-2 flex-grow">
                <p className="text-sm text-gray-400 font-inter leading-relaxed">
                  {continent.focus}
                </p>
                <p className="text-xs text-gray-500 italic mt-2">
                  {continent.professions}
                </p>
              </div>

              {/* Data Grid (Governance & Culture) */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 mt-6 py-6 border-y border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-gray-500 font-jetbrains-mono tracking-wider uppercase">Prime Minister</span>
                  <span className="text-white font-inter text-sm font-medium">{continent.pm}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-gray-500 font-jetbrains-mono tracking-wider uppercase">Cabinet</span>
                  <span className="text-white font-inter text-sm font-medium">{continent.cabinet}</span>
                </div>
                <div className="flex flex-col gap-1 col-span-2 mt-2">
                  <span className="text-[10px] text-gray-500 font-jetbrains-mono tracking-wider uppercase">Sector Game</span>
                  <span className="text-white font-inter text-sm font-medium">{continent.game}</span>
                </div>
              </div>

              {/* Action Section (Bottom) */}
              <a 
                href={continent.discordLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full mt-6 bg-white/[0.03] border border-white/10 text-white rounded-xl py-3 flex justify-center items-center gap-2 hover:bg-purple-600/20 hover:text-purple-300 hover:border-purple-500/30 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] font-medium"
              >
                <span>Join Discord</span>
                <span className="text-gray-500 group-hover:text-purple-400 transition-colors">-&gt;</span>
                <DiscordIcon className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
