"use client";

import { motion } from 'motion/react';

export function Pricing() {
  return (
    <section className="py-24 px-4 flex flex-col items-center relative z-10" id="plans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center w-full"
      >
        <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-10">
          Choose your path
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto mt-10">
          {/* Architect Card */}
          <PricingCard 
            title="The Architect"
            price="Create the World"
            subtitle="Active creation and ownership"
            buttonText="Become an Artist &rarr;"
            row1Label="Role"
            row1Value="World Builder"
            row2Label="Canvas"
            row2Value="7 Continents"
            row3Label="Impact"
            row3Value="Directly pump sector value"
            delay={0.1}
          />
          
          {/* King Card */}
          <PricingCard 
            title="The King"
            price="Acquire & Influence"
            subtitle="Real, tangible power"
            buttonText="Become a Collector &rarr;"
            row1Label="Role"
            row1Value="Stakeholder"
            row2Label="Economy"
            row2Value="Competitive Trading"
            row3Label="Power"
            row3Value="Shape continent destiny"
            delay={0.2}
          />
        </div>
      </motion.div>
    </section>
  );
}

function PricingCard({ title, price, subtitle, buttonText, row1Label, row1Value, row2Label, row2Value, row3Label, row3Value, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-purple-500/20 transition-colors" />
      
      <div className="mb-8">
        <h3 className="text-xl font-medium text-gray-300 mb-2">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-space-grotesk font-bold text-white">{price}</span>
        </div>
        <p className="text-sm text-gray-400 mt-2">{subtitle}</p>
      </div>

      <button className="w-full bg-purple-600/20 border border-purple-500/30 text-purple-300 rounded-lg py-3 mt-2 mb-8 font-medium hover:bg-purple-600/30 transition-colors">
        {buttonText}
      </button>

      <div className="space-y-1">
        <DataRow label={row1Label} value={row1Value} />
        <DataRow label={row2Label} value={row2Value} />
        <DataRow label={row3Label} value={row3Value} hasBorder={false} />
      </div>
    </motion.div>
  );
}

function DataRow({ label, value, hasBorder = true }: { label: string, value: string, hasBorder?: boolean }) {
  return (
    <div className={`flex justify-between py-3 ${hasBorder ? 'border-b border-white/5' : ''}`}>
      <span className="text-gray-400 text-sm">{label}</span>
      <span className="text-white font-medium text-sm">{value}</span>
    </div>
  );
}
