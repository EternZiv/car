'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, RotateCcw, Truck, Wrench, DollarSign, HeadphonesIcon } from 'lucide-react'

const services = [
  {
    title: 'Vehicle Financing',
    description: 'Premium financing solutions tailored to your unique financial profile. Competitive rates, flexible terms, and fast approvals from top lenders.',
    icon: DollarSign,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80',
    span: 'md:col-span-2 lg:col-span-2 lg:row-span-1',
    height: 'lg:h-[260px]',
  },
  {
    title: 'Premium Support',
    description: '24/7 concierge support for every aspect of your ownership journey.',
    icon: HeadphonesIcon,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    span: 'lg:col-span-1 lg:row-span-1',
    height: 'lg:h-[260px]',
  },
  {
    title: 'Nationwide Delivery',
    description: 'White-glove delivery to your home or office anywhere in the country.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d5?w=600&q=80',
    span: 'lg:col-span-1 lg:row-span-1',
    height: 'lg:h-[260px]',
  },
  {
    title: 'Certified Pre-Owned',
    description: 'Rigorously inspected and certified vehicles with extended warranty. Each car meets our strict 150-point quality standard.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80',
    span: 'md:col-span-2 lg:col-span-2 lg:row-span-1',
    height: 'lg:h-[260px]',
  },
  {
    title: 'Trade-In Program',
    description: 'Get the best value for your current vehicle with our transparent appraisal process.',
    icon: RotateCcw,
    image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?w=600&q=80',
    span: 'lg:col-span-1 lg:row-span-1',
    height: 'lg:h-[260px]',
  },
  {
    title: 'Maintenance & Warranty',
    description: 'Comprehensive service plans and extended warranty coverage for complete peace of mind.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80',
    span: 'lg:col-span-1 lg:row-span-1',
    height: 'lg:h-[260px]',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-24 lg:py-28 bg-gray-50/50 overflow-hidden" aria-labelledby="services-title">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 id="services-title" className="section-title">
            Premium <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle">An exceptional ownership experience from acquisition through every mile</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 max-w-[1200px] mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`group relative overflow-hidden rounded-[20px] cursor-pointer ${service.span} ${service.height} bg-gradient-to-br from-primary via-[#0a1a3a] to-secondary`}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" aria-hidden="true" />
              </div>

              <motion.div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />

              <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-6">
                <motion.div className="w-9 h-9 bg-accent/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <service.icon className="w-4 h-4 text-accent" aria-hidden="true" />
                </motion.div>
                <h3 className="text-base md:text-lg font-display font-medium text-white mb-1.5">{service.title}</h3>
                <p className="text-white/60 font-body text-xs leading-relaxed line-clamp-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}