"use client";

import { motion } from 'motion/react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 relative overflow-hidden px-4">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
      
      {/* Illustration Placeholder */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl aspect-video relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center"
      >
        <Image 
          src="https://picsum.photos/seed/city/1200/675" 
          alt="Futuristic City" 
          fill 
          className="object-cover opacity-50 mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04040B] via-transparent to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center mt-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter text-center font-space-grotesk">
          Own Your Sector
        </h1>
        <p className="max-w-2xl text-center text-gray-400 mt-6 text-lg leading-relaxed">
          The world is divided. The future is designed. Enter a digital ecosystem where art isn&apos;t just displayed—it&apos;s an environment you live inside and trade.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl px-8 py-4 font-medium hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            Start Building
          </button>
          <button className="bg-white/5 border border-white/10 text-white rounded-xl px-8 py-4 font-medium hover:bg-white/10 transition-colors">
            Explore Sectors
          </button>
        </div>
      </motion.div>
    </section>
  );
}
