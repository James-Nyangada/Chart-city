"use client";

import { motion } from 'motion/react';

export function DashboardPreview() {
  return (
    <section className="py-24 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white">
          Enter the Market
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-6xl mx-auto aspect-[21/9] bg-[#0A0A14] border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(139,92,246,0.15)] relative overflow-hidden flex items-center justify-center group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
        
        {/* Placeholder for actual dashboard image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-mono text-sm opacity-50">
          Trading Dashboard UI Mockup goes here
        </div>
        
        {/* Decorative elements to make it look like a dashboard container */}
        <div className="absolute top-0 left-0 w-full h-12 border-b border-white/5 flex items-center px-6 gap-2 bg-white/[0.02]">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
      </motion.div>
    </section>
  );
}
