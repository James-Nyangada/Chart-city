"use client";

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { TICKER_DATA, LEADERBOARD_DATA, ACTIVITY_FEED } from '@/lib/data';
import { ArrowUpRight, Sparkles, AlertTriangle } from 'lucide-react';

export function EconomyDashboard() {
  const [activeTab, setActiveTab] = useState('Market Cap');
  const [feed, setFeed] = useState(ACTIVITY_FEED);

  // Simulate real-time feed updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newEvent = {
        id: `evt-${Date.now()}`,
        type: Math.random() > 0.6 ? 'trade' : 'upload',
        region: ['Asia', 'Europe', 'North America', 'Africa', 'South America'][Math.floor(Math.random() * 5)],
        value: `◎ ${(Math.random() * 10).toFixed(1)}`,
        time: 'Just now',
        text: Math.random() > 0.6 ? 'Acquisition in ' : 'New Art Minted in '
      };
      newEvent.text += newEvent.region;
      
      setFeed(prev => [newEvent, ...prev].slice(0, 15));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-[72px] bg-[#04040B] flex flex-col gap-6 pb-12">
      
      {/* Header */}
      <div className="px-6 lg:px-8 pt-8 flex items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-outfit font-bold text-white tracking-tight">
          Macro Economy & Sector Dominance
        </h1>
        <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-jetbrains-mono text-green-400 uppercase tracking-wider">System Online</span>
        </div>
      </div>

      {/* Ticker Tape */}
      <div className="w-full overflow-hidden whitespace-nowrap bg-black/50 border-y border-white/10 py-3 flex items-center relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#04040B] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#04040B] to-transparent z-10" />
        <motion.div 
          className="flex gap-12 items-center"
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {/* Duplicate data for seamless loop */}
          {[...TICKER_DATA, ...TICKER_DATA].map((text, i) => (
            <span key={i} className="text-sm font-jetbrains-mono text-gray-400">
              {text.includes('[MINT]') && <span className="text-purple-400 mr-2">[MINT]</span>}
              {text.includes('[TRADE]') && <span className="text-blue-400 mr-2">[TRADE]</span>}
              {text.includes('[SHIFT]') && <span className="text-[#C9A84C] mr-2">[SHIFT]</span>}
              {text.replace(/\[.*?\]\s/, '')}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 lg:px-8 max-w-[1600px] mx-auto w-full">
        
        {/* LEFT: Global Leaderboard & Chart (col-span-8) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Leaderboard Section */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-2xl font-outfit font-bold text-white">Sector Rankings (24h)</h2>
              <div className="flex bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-lg p-1">
                {['Market Cap', 'Trading Vol', 'Active Architects'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === tab ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-6">
              <div className="flex justify-between items-center pb-4 border-b border-white/10 text-xs font-jetbrains-mono text-gray-500 uppercase tracking-wider">
                <span className="w-1/3">Sector</span>
                <span className="w-1/4 text-right">Market Cap</span>
                <span className="w-1/4 text-right">24h Change</span>
                <span className="w-1/6 text-right">Dominance</span>
              </div>
              
              <div className="flex flex-col">
                <AnimatePresence>
                  {LEADERBOARD_DATA.map((sector, i) => (
                    <motion.div 
                      key={sector.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 group hover:bg-white/[0.02] transition-colors rounded-lg px-2 -mx-2"
                    >
                      {/* Rank & Name */}
                      <div className="w-1/3 flex items-center gap-4">
                        <span className={`font-jetbrains-mono text-lg font-bold ${sector.rank === 1 ? 'text-[#C9A84C] drop-shadow-[0_0_8px_rgba(201,168,76,0.5)]' : 'text-slate-500'}`}>
                          #{sector.rank}
                        </span>
                        <span className="font-outfit font-bold text-white text-lg group-hover:text-purple-400 transition-colors">
                          {sector.name}
                        </span>
                      </div>
                      
                      {/* Market Cap */}
                      <div className="w-1/4 text-right">
                        <span className="font-jetbrains-mono text-white">
                          ◎ {sector.marketCap.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>

                      {/* 24h Change */}
                      <div className="w-1/4 flex items-center justify-end gap-3">
                        <Sparkline trend={sector.trend as 'up' | 'down'} />
                        <span className={`font-jetbrains-mono text-sm ${sector.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                          {sector.change24h}
                        </span>
                      </div>

                      {/* Dominance Bar */}
                      <div className="w-1/6 flex justify-end items-center gap-3">
                        <span className="font-jetbrains-mono text-gray-400 text-sm">{sector.dominance.toFixed(1)}%</span>
                        <div className="h-1.5 w-16 md:w-24 rounded-full bg-white/10 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${sector.dominance}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-full rounded-full ${sector.rank === 1 ? 'bg-[#C9A84C]' : 'bg-blue-500'}`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Comparative Macro Chart */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-outfit font-bold text-white">30-Day Macro Trend</h2>
            <div className="h-[300px] w-full bg-[#0A0A14] rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-inter text-gray-400">Total Market Capitalization</span>
                <div className="flex gap-2">
                  <span className="text-xs font-jetbrains-mono text-gray-500 bg-black/50 px-2 py-1 rounded">7D</span>
                  <span className="text-xs font-jetbrains-mono text-white bg-white/10 px-2 py-1 rounded">30D</span>
                  <span className="text-xs font-jetbrains-mono text-gray-500 bg-black/50 px-2 py-1 rounded">ALL</span>
                </div>
              </div>
              <div className="flex-grow w-full relative">
                <MockMultiLineChart />
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT: Live Activity Stream (col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-outfit font-bold text-white">Live Engine</h2>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          
          <div className="h-[800px] overflow-y-auto pr-2 custom-scrollbar relative">
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#04040B] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#04040B] to-transparent z-10 pointer-events-none" />
            
            <div className="flex flex-col pt-4 pb-8">
              <AnimatePresence initial={false}>
                {feed.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-white/[0.01] hover:bg-white/[0.04] p-4 rounded-xl border mb-3 transition-colors flex gap-4 items-start ${
                      event.type === 'shift' ? 'border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.1)]' : 'border-white/[0.02]'
                    }`}
                  >
                    {/* Icon */}
                    <div className="mt-1 flex-shrink-0">
                      {event.type === 'trade' && <ArrowUpRight className="w-5 h-5 text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]" />}
                      {event.type === 'upload' && <Sparkles className="w-5 h-5 text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" />}
                      {event.type === 'shift' && <AlertTriangle className="w-5 h-5 text-purple-400 drop-shadow-[0_0_5px_rgba(139,92,246,0.5)]" />}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow">
                      <div className="flex justify-between items-start gap-2">
                        <span className={`text-sm font-medium ${event.type === 'shift' ? 'text-purple-300' : 'text-gray-200'}`}>
                          {event.text}
                        </span>
                        <span className="text-xs font-jetbrains-mono text-gray-500 whitespace-nowrap">
                          {event.time}
                        </span>
                      </div>
                      {event.value && (
                        <span className="font-jetbrains-mono text-white text-sm mt-1">
                          {event.value}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function Sparkline({ trend }: { trend: 'up' | 'down' }) {
  const color = trend === 'up' ? '#4ade80' : '#f87171';
  const points = trend === 'up' 
    ? "0,10 5,8 10,12 15,5 20,8 25,2" 
    : "0,2 5,8 10,5 15,12 20,8 25,10";
    
  return (
    <svg width="30" height="15" viewBox="0 0 25 12" className="overflow-visible">
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

function MockMultiLineChart() {
  // SVG mock of 7 overlapping lines
  const colors = ['#C9A84C', '#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#6B7280'];
  
  return (
    <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none" className="opacity-90">
      {/* Grid */}
      <line x1="0" y1="50" x2="800" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1="0" y1="100" x2="800" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      
      {/* Lines */}
      {colors.map((color, i) => {
        // Generate random-ish path for each line
        const points = Array.from({ length: 20 }).map((_, j) => {
          const x = (j / 19) * 800;
          // Base height + some random variance + trend
          const baseY = 150 - (i * 15);
          const variance = Math.sin(j + i) * 20 + Math.cos(j * 2) * 10;
          const trend = j * (i % 2 === 0 ? -1 : 1);
          let y = baseY + variance + trend;
          // clamp
          y = Math.max(10, Math.min(190, y));
          return `${x},${y}`;
        }).join(' ');

        return (
          <polyline 
            key={color}
            points={points} 
            fill="none" 
            stroke={color} 
            strokeWidth={i === 0 ? "3" : "1.5"} // Highlight the first one (Asia)
            strokeOpacity={i === 0 ? "1" : "0.5"}
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        );
      })}
    </svg>
  );
}
