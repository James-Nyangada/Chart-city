"use client";

import { motion } from 'motion/react';
import { Swords, Upload, Network, BarChart, Globe } from 'lucide-react';

export function Benefits() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto" id="how-it-works">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="inline-block bg-blue-900/30 text-blue-400 text-xs px-3 py-1 rounded-full font-medium mb-6 border border-blue-500/20">
          Our Mechanics
        </div>
        <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white">
          How the World Grows
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BenefitCard 
            icon={<Swords className="w-8 h-8 text-purple-400" />}
            title="Step 1: Compete. 7 Sectors battle for dominance."
            delay={0.1}
          />
          <BenefitCard 
            icon={<Upload className="w-8 h-8 text-blue-400" />}
            title="Step 2: Upload. New art pumps sector market cap."
            delay={0.2}
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BenefitCard 
            icon={<Network className="w-8 h-8 text-purple-400" />}
            title="Step 3: Interact. Social engagement fuels the economy."
            delay={0.3}
          />
          <BenefitCard 
            icon={<BarChart className="w-8 h-8 text-blue-400" />}
            title="Dynamic Markets. Trades like a crypto exchange."
            delay={0.4}
          />
          <BenefitCard 
            icon={<Globe className="w-8 h-8 text-purple-400" />}
            title="More than a gallery. It's a Movement."
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ icon, title, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-[#0A0A14] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center relative hover:-translate-y-1 hover:border-white/20 transition-all duration-300 group overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors pointer-events-none" />
      
      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10">
        {icon}
      </div>
      
      <h3 className="text-xl font-medium text-white mb-4 relative z-10">{title}</h3>
    </motion.div>
  );
}
