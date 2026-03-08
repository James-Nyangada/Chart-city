"use client";

import { motion } from 'motion/react';
import { Mail, Send, MessageSquare } from 'lucide-react';

export function Community() {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0A0A14] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:-translate-y-1 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mt-16" />
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Subscribe to our newsletter</h3>
          <p className="text-xs text-gray-400 mb-6">Get the latest news and updates.</p>
          
          <div className="flex w-full mt-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-black/50 border border-white/10 rounded-l-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-purple-500/50"
            />
            <button className="bg-purple-600/20 border border-purple-500/30 text-purple-300 rounded-r-lg px-4 py-2 text-sm font-medium hover:bg-purple-600/40 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Telegram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-[#0A0A14] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:-translate-y-1 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mt-16" />
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-blue-400">
            <Send className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Follow the Sector updates</h3>
          <p className="text-xs text-gray-400 mb-6">Get insights from other users about the Chart City evaluation.</p>
          
          <button className="w-full mt-auto bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-lg py-2 text-sm font-medium hover:bg-blue-600/30 transition-colors">
            Join Telegram &rarr;
          </button>
        </motion.div>

        {/* Discord */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#0A0A14] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:-translate-y-1 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mt-16" />
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-indigo-400">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Join the Architects & Kings</h3>
          <p className="text-xs text-gray-400 mb-6">Get insights from other users about the Chart City evaluation.</p>
          
          <button className="w-full mt-auto bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 rounded-lg py-2 text-sm font-medium hover:bg-indigo-600/30 transition-colors">
            Join Discord &rarr;
          </button>
        </motion.div>
      </div>
    </section>
  );
}
