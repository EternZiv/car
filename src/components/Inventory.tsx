'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Eye, Fuel, Gauge } from 'lucide-react'
import { vehicles } from '@/lib/vehicles'

export default function Inventory() {
  return (
    <section id="inventory" className="relative py-20 md:py-24 lg:py-28 overflow-hidden" aria-labelledby="inventory-title">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" aria-hidden="true" />
      <div className="absolute inset-0 mesh-gradient pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 id="inventory-title" className="section-title">
            Featured <span className="text-gradient">Inventory</span>
          </h2>
          <p className="section-subtitle">A curated selection of the world&apos;s finest luxury automobiles</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-[1200px] mx-auto">
          {vehicles.slice(0, 6).map((vehicle, index) => (
            <Link key={vehicle.slug} href={`/inventory/${vehicle.slug}`}>
              <motion.div
                className="group relative bg-white rounded-[20px] overflow-hidden shadow-card transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -6, boxShadow: '0 25px 40px -12px rgba(8, 19, 36, 0.2)' }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.img src={vehicle.images[0]} alt={vehicle.name} className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-accent text-white text-[10px] font-body font-semibold rounded-full uppercase tracking-wider shadow-lg">{vehicle.badge}</div>
                  <motion.div
                    className="absolute top-3 right-3 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  >
                    <Eye className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden="true" />
                </div>

                <div className="p-5">
                  <h3 className="text-base md:text-lg font-display font-medium text-primary mb-0.5">{vehicle.name}</h3>
                  <p className="text-xs text-muted font-body mb-3">{vehicle.trim} &middot; {vehicle.year}</p>

                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-1.5 text-[11px] text-muted">
                      <Fuel className="w-3 h-3" aria-hidden="true" />
                      <span>{vehicle.specs.engine}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-muted">
                      <Gauge className="w-3 h-3" aria-hidden="true" />
                      <span>{vehicle.specs.hp}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-display font-semibold text-primary">{vehicle.price}</span>
                      <span className="text-[10px] text-muted ml-1">MSRP</span>
                    </div>
                    <span className="px-4 py-2 bg-primary text-white font-body font-medium text-xs rounded-[10px] transition-all duration-300 hover:bg-secondary">
                      View Details
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/inventory"
            className="inline-flex px-8 py-3 bg-primary text-white font-body font-semibold text-sm rounded-full transition-all duration-300 hover:bg-secondary hover:shadow-premium-lg"
          >
            View Full Inventory
          </Link>
        </motion.div>
      </div>
    </section>
  )
}