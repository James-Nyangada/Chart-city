"use client";

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    question: "What is Chart City?",
    answer: "Chart City is a digital ecosystem where art isn't just displayed—it's an environment you live inside and trade."
  },
  {
    question: "How do the 7 Continents work?",
    answer: "The 7 Continents represent different sectors of the ecosystem. They battle for dominance, and their value is driven by the art uploaded and the engagement of the community."
  },
  {
    question: "What is the difference between an Architect and a King?",
    answer: "Architects are the creators who build the world and directly pump sector value. Kings are the stakeholders who acquire, influence, and shape the destiny of the continents."
  },
  {
    question: "How does art trading affect the charts?",
    answer: "New art uploads and trading activities directly impact the market cap of the respective sectors, creating dynamic markets that trade like a crypto exchange."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto" id="support">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 flex flex-col items-start"
        >
          <h2 className="text-4xl font-space-grotesk font-bold text-white mb-6">
            Our Most Asked Questions
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our customer support team.
          </p>
          <button className="px-6 py-3 rounded-xl bg-white/5 border border-blue-500/30 text-white hover:bg-white/10 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.15)] font-medium">
            Read Manifesto &rarr;
          </button>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-8 flex flex-col"
        >
          {FAQS.map((faq, index) => (
            <div key={index} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-center text-left text-lg text-gray-300 hover:text-white transition-colors group"
              >
                <span className="font-medium pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-gray-500 group-hover:text-white"
                >
                  <Plus className="w-6 h-6" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
