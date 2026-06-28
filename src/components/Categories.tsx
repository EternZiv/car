'use client'

import { motion } from 'framer-motion'
import { Car, Truck, Zap, Gauge, Crown, Wind } from 'lucide-react'

const categories = [
  { icon: Car, label: 'Sedan', desc: 'Executive saloons', href: '/inventory?category=sedan' },
  { icon: Truck, label: 'SUV', desc: 'Premium utility', href: '/inventory?category=suv' },
  { icon: Zap, label: 'Electric', desc: 'Zero emission', href: '/inventory?category=electric' },
  { icon: Gauge, label: 'Sports', desc: 'High performance', href: '/inventory?category=sports' },
  { icon: Crown, label: 'Luxury', desc: 'Flagship models', href: '/inventory?category=luxury' },
  { icon: Wind, label: 'Convertible', desc: 'Open top', href: '/inventory?category=convertible' },
]

export default function Categories() {
  return (
    <section className="relative py-20 md:py-24 lg:py-28 bg-white overflow-hidden" aria-labelledby="categories-title">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.03]" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 id="categories-title" className="section-title">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          <p className="section-subtitle">Explore our curated collection across every luxury segment</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <motion.a
              key={category.label}
              href={category.href}
              className="group relative flex flex-col items-center justify-center p-6 h-[140px] md:h-[155px] bg-white border border-gray-100 rounded-[16px] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-premium hover:border-accent/30 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 rounded-[16px] bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

              <motion.div
                className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl text-primary group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent/80 group-hover:text-white group-hover:shadow-lg transition-all duration-500"
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                <category.icon className="w-6 h-6 stroke-[1.5]" aria-hidden="true" />
              </motion.div>
              <motion.span className="mt-3 text-sm md:text-base font-body font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                {category.label}
              </motion.span>
              <motion.span className="mt-0.5 text-[10px] text-gray-400 font-body group-hover:text-accent/60 transition-colors duration-300">
                {category.desc}
              </motion.span>

              <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-accent/30 transition-all duration-500" aria-hidden="true" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}