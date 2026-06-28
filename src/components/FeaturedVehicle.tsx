'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Eye, Fuel, Gauge, Calendar, Star } from 'lucide-react'

export default function FeaturedVehicle() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" aria-labelledby="featured-title">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" aria-hidden="true" />
      <div className="absolute inset-0 mesh-gradient pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 id="featured-title" className="section-title">
            Featured <span className="text-gradient">Vehicle</span>
          </h2>
          <p className="section-subtitle">Hand-selected flagship model from our premium collection</p>
        </motion.div>

        <motion.div
          className="relative bg-gradient-to-br from-primary via-[#0a1a3a] to-secondary rounded-[32px] overflow-hidden min-h-[500px] lg:min-h-[550px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/20 z-10" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/8 to-transparent z-10" aria-hidden="true" />
          <motion.div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />

          <div className="relative z-20 grid md:grid-cols-2 gap-6 md:gap-8 h-full">
            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-16">
              <motion.span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full text-accent text-xs font-body font-semibold uppercase tracking-[0.1em] w-fit mb-6"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Star className="w-3 h-3 fill-accent" aria-hidden="true" />
                2024 Flagship
              </motion.span>

              <motion.h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-2"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              >Mercedes-Benz</motion.h3>
              <motion.p className="text-2xl md:text-3xl font-display text-white/60 mb-6"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }}
              >S-Class</motion.p>

              <motion.p className="text-white/50 font-body text-sm leading-relaxed max-w-sm mb-8"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              >The pinnacle of automotive luxury, combining cutting-edge technology with timeless elegance and unparalleled comfort.</motion.p>

              <motion.div className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35 }}
              >
                {[
                  { icon: Fuel, label: 'V8 Biturbo' },
                  { icon: Gauge, label: '496 HP' },
                  { icon: Calendar, label: '2024' },
                ].map((spec) => (
                  <span key={spec.label} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 text-xs font-body font-medium">
                    <spec.icon className="w-3 h-3 text-accent" aria-hidden="true" />
                    {spec.label}
                  </span>
                ))}
              </motion.div>

              <Link
                href="/inventory/mercedes-benz-s-class"
                className="group relative w-fit px-8 py-4 bg-white text-primary font-body font-semibold text-sm rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] inline-flex items-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Details
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            </div>

            <motion.div className="relative flex items-center justify-center p-6 lg:p-10"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div className="relative w-full max-w-[600px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-[28px] blur-2xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />
                <div className="relative rounded-[20px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                  <motion.img
                    src="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=800&q=80"
                    alt="Mercedes-Benz S-Class"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" aria-hidden="true" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-16 lg:mt-20">
          <motion.div className="flex items-center justify-between mb-10"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-primary">Vehicle Gallery</h3>
              <p className="text-sm text-muted font-body mt-1">Explore our premium collection</p>
            </div>
            <Link href="/inventory" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-body font-medium rounded-full hover:bg-secondary transition-all duration-300">
              <Eye className="w-4 h-4" aria-hidden="true" />
              View All
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { slug: 'mercedes-benz-s-class', name: 'Mercedes-Benz S-Class', type: 'S 580 4MATIC', year: '2024', price: '$142,500', image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&q=80', badge: 'Flagship' },
              { slug: 'bmw-7-series', name: 'BMW 7 Series', type: '760i xDrive', year: '2024', price: '$125,800', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80', badge: 'Featured' },
              { slug: 'porsche-911-turbo-s', name: 'Porsche 911', type: 'Turbo S', year: '2024', price: '$207,000', image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&q=80', badge: 'Sports' },
              { slug: 'lexus-ls-500h', name: 'Lexus LS', type: 'LS 500h', year: '2024', price: '$112,850', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80', badge: 'Hybrid' },
            ].map((vehicle, index) => (
              <Link key={vehicle.slug} href={`/inventory/${vehicle.slug}`}>
                <motion.div
                  className="group relative bg-white rounded-[20px] overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-body font-semibold text-primary uppercase tracking-wider">{vehicle.badge}</div>
                  </div>
                  <div className="p-5 md:p-6">
                    <h4 className="text-sm md:text-base font-body font-semibold text-primary">{vehicle.name}</h4>
                    <p className="text-xs text-muted font-body mt-0.5">{vehicle.type} &middot; {vehicle.year}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-lg md:text-xl font-display font-semibold text-primary">{vehicle.price}</span>
                        <span className="text-[10px] text-muted ml-1">MSRP</span>
                      </div>
                      <span className="text-xs text-muted font-body group-hover:text-accent transition-colors">Details &rarr;</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}