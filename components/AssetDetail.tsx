"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import { ASSETS, TRADE_HISTORY } from '@/lib/data';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function AssetDetail({ id }: { id: string }) {
  const asset = ASSETS.find(a => a.id === id) || ASSETS[0];
  const [activeTab, setActiveTab] = useState<'Acquire' | 'Bid'>('Acquire');
  const [amount, setAmount] = useState('1.00');

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 max-w-7xl mx-auto">
        
        {/* LEFT COLUMN: The Exhibit */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="sticky top-28 aspect-[4/5] rounded-3xl border border-white/10 p-2 bg-[#0A0A14] shadow-[0_0_50px_rgba(139,92,246,0.1)] overflow-hidden"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image 
                src={asset.image} 
                alt={asset.title} 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <div className="flex flex-col gap-2 mt-4">
            <Accordion title="Provenance" defaultOpen>
              <p className="text-sm text-gray-400 leading-relaxed">
                Minted on Block #1492834. Originally acquired by @WhaleKing, transferred to @NeonDreamer on 2026-01-15.
              </p>
            </Accordion>
            <Accordion title="Artist Bio">
              <p className="text-sm text-gray-400 leading-relaxed">
                {asset.artist} is a pioneer in digital architecture, focusing on the intersection of brutalism and neon-noir aesthetics within the {asset.continent} sector.
              </p>
            </Accordion>
            <Accordion title="Sector Impact">
              <p className="text-sm text-gray-400 leading-relaxed">
                This asset contributes 0.45% to the total market cap of {asset.continent}, generating daily yield for its current holder.
              </p>
            </Accordion>
          </div>
        </div>

        {/* RIGHT COLUMN: The Terminal */}
        <div className="lg:col-span-7 flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-outfit font-bold text-white tracking-tight mb-4">
              {asset.title}
            </h1>
            <div className="flex gap-3 mb-8">
              <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-medium border border-blue-500/20">
                {asset.continent}
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs font-medium border border-purple-500/20">
                {asset.category}
              </span>
            </div>

            {/* Price Ticker */}
            <div className="flex items-end gap-4 mb-6">
              <span className="text-5xl font-jetbrains-mono text-white font-bold">
                ◎ {asset.price.toFixed(2)}
              </span>
              <span className={`text-lg font-jetbrains-mono mb-1 ${asset.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                {asset.change24h} (24h)
              </span>
            </div>

            {/* The Chart Module */}
            <div className="h-[300px] w-full bg-[#0A0A14] rounded-2xl border border-white/10 mt-2 relative overflow-hidden flex items-center justify-center p-4">
              <MockCandlestickChart />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="text-xs font-jetbrains-mono text-gray-500 bg-black/50 px-2 py-1 rounded">1H</span>
                <span className="text-xs font-jetbrains-mono text-white bg-white/10 px-2 py-1 rounded">1D</span>
                <span className="text-xs font-jetbrains-mono text-gray-500 bg-black/50 px-2 py-1 rounded">1W</span>
              </div>
            </div>

            {/* The Execution Module */}
            <div className="bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl mt-6 border border-white/[0.05]">
              <div className="flex gap-4 mb-6 border-b border-white/10 pb-4">
                <button 
                  onClick={() => setActiveTab('Acquire')}
                  className={`text-lg font-outfit font-medium transition-colors ${activeTab === 'Acquire' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  Acquire
                </button>
                <button 
                  onClick={() => setActiveTab('Bid')}
                  className={`text-lg font-outfit font-medium transition-colors ${activeTab === 'Bid' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  Bid
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>Amount</span>
                  <span>Balance: ◎ 12.50</span>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-jetbrains-mono text-xl">◎</span>
                  <input 
                    type="text" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full font-jetbrains-mono bg-black/50 text-right text-2xl p-4 rounded-xl border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 w-full py-4 rounded-xl font-bold text-lg mt-4 shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all text-white">
                  Execute Trade
                </button>
              </div>
            </div>

            {/* Trade History (The Tape) */}
            <div className="mt-8">
              <h3 className="text-lg font-outfit font-medium text-white mb-4">Recent Trades</h3>
              <div className="bg-[#0A0A14] rounded-xl border border-white/10 overflow-hidden">
                <div className="grid grid-cols-4 gap-4 p-4 border-b border-white/5 text-xs text-gray-500 font-medium uppercase tracking-wider">
                  <span>Time</span>
                  <span className="text-right">Price</span>
                  <span className="text-right">Amount</span>
                  <span className="text-right">Wallet</span>
                </div>
                <div className="max-h-[200px] overflow-y-auto scrollbar-hide">
                  {TRADE_HISTORY.map((trade) => (
                    <div key={trade.id} className="grid grid-cols-4 gap-4 p-4 border-b border-white/5 text-sm font-jetbrains-mono hover:bg-white/[0.02] transition-colors">
                      <span className="text-gray-400">{trade.time}</span>
                      <span className={`text-right ${trade.type === 'buy' ? 'text-green-400' : 'text-red-400'}`}>
                        {trade.price}
                      </span>
                      <span className="text-right text-white">{trade.amount}</span>
                      <span className="text-right text-purple-400">{trade.wallet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Accordion({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-outfit font-medium text-white">{title}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 border-t border-white/5 mt-2">
          {children}
        </div>
      )}
    </div>
  );
}

function MockCandlestickChart() {
  // A simple SVG mock of an upward trending candlestick chart
  return (
    <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none" className="opacity-80">
      {/* Grid lines */}
      <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      
      {/* Candlesticks */}
      <g transform="translate(20, 0)">
        {/* Red */}
        <line x1="10" y1="160" x2="10" y2="120" stroke="#f87171" strokeWidth="2" />
        <rect x="5" y="130" width="10" height="20" fill="#f87171" />
        
        {/* Green */}
        <line x1="50" y1="140" x2="50" y2="90" stroke="#4ade80" strokeWidth="2" />
        <rect x="45" y="100" width="10" height="30" fill="#4ade80" />
        
        {/* Green */}
        <line x1="90" y1="110" x2="90" y2="60" stroke="#4ade80" strokeWidth="2" />
        <rect x="85" y="70" width="10" height="30" fill="#4ade80" />
        
        {/* Red */}
        <line x1="130" y1="90" x2="130" y2="50" stroke="#f87171" strokeWidth="2" />
        <rect x="125" y="60" width="10" height="20" fill="#f87171" />
        
        {/* Green */}
        <line x1="170" y1="80" x2="170" y2="30" stroke="#4ade80" strokeWidth="2" />
        <rect x="165" y="40" width="10" height="30" fill="#4ade80" />
        
        {/* Green */}
        <line x1="210" y1="50" x2="210" y2="10" stroke="#4ade80" strokeWidth="2" />
        <rect x="205" y="20" width="10" height="20" fill="#4ade80" />
        
        {/* Red */}
        <line x1="250" y1="40" x2="250" y2="10" stroke="#f87171" strokeWidth="2" />
        <rect x="245" y="20" width="10" height="15" fill="#f87171" />
        
        {/* Green */}
        <line x1="290" y1="30" x2="290" y2="5" stroke="#4ade80" strokeWidth="2" />
        <rect x="285" y="10" width="10" height="15" fill="#4ade80" />
        
        {/* Green */}
        <line x1="330" y1="20" x2="330" y2="2" stroke="#4ade80" strokeWidth="2" />
        <rect x="325" y="5" width="10" height="10" fill="#4ade80" />
        
        {/* Green */}
        <line x1="370" y1="15" x2="370" y2="0" stroke="#4ade80" strokeWidth="2" />
        <rect x="365" y="2" width="10" height="10" fill="#4ade80" />
        
        {/* Red */}
        <line x1="410" y1="25" x2="410" y2="5" stroke="#f87171" strokeWidth="2" />
        <rect x="405" y="10" width="10" height="10" fill="#f87171" />
        
        {/* Green */}
        <line x1="450" y1="20" x2="450" y2="0" stroke="#4ade80" strokeWidth="2" />
        <rect x="445" y="5" width="10" height="10" fill="#4ade80" />
      </g>
    </svg>
  );
}
