'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-28 overflow-hidden" aria-labelledby="cta-title">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0a1a3a] to-secondary" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80')] bg-cover bg-center bg-no-repeat opacity-[0.04]" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-secondary/90" aria-hidden="true" />

      <motion.div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <motion.div className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-[10px] font-body uppercase tracking-[0.1em] mb-6"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            Begin Your Journey
          </motion.div>

          <motion.h2 id="cta-title" className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-4 tracking-tight leading-[1.1]"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Experience
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent">
              Automotive Luxury?
            </span>
          </motion.h2>

          <motion.p className="text-sm md:text-base text-white/60 font-body mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            Schedule a private consultation with our experts. Discover the exceptional world of Apex Motors.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-body font-semibold text-sm rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]"
            >
              Schedule a Visit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/inventory"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-body font-medium text-sm rounded-full border-2 border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40"
            >
              Browse Online Inventory
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}