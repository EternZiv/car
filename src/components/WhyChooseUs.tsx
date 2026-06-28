'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, FileCheck, HeadphonesIcon, BadgeCheck, Banknote, MapPin } from 'lucide-react'

const benefits = [
  { icon: BadgeCheck, title: 'Certified Vehicles', description: 'Every vehicle undergoes a rigorous 150-point inspection and certification by factory-trained technicians.' },
  { icon: FileCheck, title: 'Verified History', description: 'Complete transparency with detailed vehicle history reports, service records, and ownership documentation.' },
  { icon: HeadphonesIcon, title: 'Premium Support', description: 'Dedicated personal concierge available 24/7 for all your ownership needs and inquiries.' },
  { icon: Banknote, title: 'Secure Financing', description: 'Exclusive lending partnerships offering competitive rates with flexible terms and rapid approval.' },
  { icon: MapPin, title: 'Nationwide Delivery', description: 'White-glove delivery service to your home or office with full insurance and real-time tracking.' },
  { icon: ShieldCheck, title: 'Extended Warranty', description: 'Comprehensive warranty coverage with optional extension plans for complete peace of mind.' },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative py-20 md:py-24 lg:py-28 bg-white overflow-hidden" aria-labelledby="why-title">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.02]" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 id="why-title" className="section-title">
            Why Choose <span className="text-gradient">Apex Motors</span>
          </h2>
          <p className="section-subtitle">Setting the standard for luxury automotive excellence</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-[1200px] mx-auto perspective-1000">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group relative p-6 lg:p-8 rounded-[20px] bg-white/80 backdrop-blur-sm border border-gray-100/80 transition-all duration-500 hover:shadow-premium hover:-translate-y-1 overflow-hidden"
              initial={{ opacity: 0, y: 30, rotateX: 3 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, boxShadow: '0 25px 50px -12px rgba(8, 19, 36, 0.15)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

              <motion.div
                className="w-11 h-11 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl flex items-center justify-center mb-4 group-hover:from-accent group-hover:to-accent/80 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500"
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.1, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 + 0.3 }}
              >
                <benefit.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-500" aria-hidden="true" />
              </motion.div>

              <h3 className="text-base md:text-lg font-display font-medium text-primary mb-2 group-hover:text-accent transition-colors duration-300">{benefit.title}</h3>
              <p className="text-muted font-body text-sm leading-relaxed">{benefit.description}</p>

              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-accent/30 transition-all duration-500" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}