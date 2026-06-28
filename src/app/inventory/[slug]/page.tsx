'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Fuel, Gauge, Calendar, Timer, Zap, Thermometer, Star, ChevronLeft, ChevronRight, Check, Shield, Truck, Phone, Mail, MapPin } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { vehicles, getVehicleBySlug } from '@/lib/vehicles'

export default function VehicleDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const vehicle = getVehicleBySlug(slug)

  const [currentImage, setCurrentImage] = useState(0)
  const [showContact, setShowContact] = useState(false)

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-display font-medium text-primary mb-4">Vehicle Not Found</h1>
          <p className="text-muted mb-6">The vehicle you&apos;re looking for doesn&apos;t exist or has been sold.</p>
          <Link href="/inventory" className="inline-flex px-6 py-3 bg-primary text-white rounded-full text-sm font-body font-semibold hover:bg-secondary transition-colors">Back to Inventory</Link>
        </div>
      </div>
    )
  }

  const relatedVehicles = vehicles.filter(v => v.category === vehicle.category && v.slug !== vehicle.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20 pb-4 lg:pt-28 lg:pb-6 bg-gray-50/50">
        <div className="container-custom">
          <Link href="/inventory" className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-4 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Inventory
          </Link>
        </div>

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="relative rounded-[20px] overflow-hidden bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={vehicle.images[currentImage]}
                    alt={vehicle.name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </AnimatePresence>
                {vehicle.images.length > 1 && (
                  <>
                    <button onClick={() => setCurrentImage(i => (i - 1 + vehicle.images.length) % vehicle.images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-white transition-all shadow-md" aria-label="Previous image">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button onClick={() => setCurrentImage(i => (i + 1) % vehicle.images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-white transition-all shadow-md" aria-label="Next image">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-accent text-white text-[10px] font-body font-semibold rounded-full uppercase">{vehicle.badge}</div>
                {vehicle.featured && <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-primary/90 backdrop-blur-sm text-white text-[10px] font-body font-medium rounded-full"><Star className="w-3 h-3 fill-accent text-accent" />Featured</div>}

                {vehicle.images.length > 1 && (
                  <div className="flex gap-1.5 p-2 bg-white/80 backdrop-blur-sm">
                    {vehicle.images.map((img, i) => (
                      <button key={i} onClick={() => setCurrentImage(i)} className={`relative shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${i === currentImage ? 'border-accent' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="text-accent font-body font-semibold text-[10px] uppercase tracking-[0.2em] mb-1">{vehicle.year} {vehicle.make}</p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-primary mb-1">{vehicle.name}</h1>
              <p className="text-base text-muted font-body mb-4">{vehicle.trim}</p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-display font-semibold text-primary">{vehicle.price}</span>
                <span className="text-xs text-muted line-through">MSRP {vehicle.msrp}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {[
                  { icon: Fuel, label: vehicle.specs.engine },
                  { icon: Gauge, label: vehicle.specs.hp },
                  { icon: Timer, label: vehicle.specs.zeroTo60 },
                  { icon: Zap, label: vehicle.specs.topSpeed },
                  { icon: Thermometer, label: `${vehicle.miles} mi` },
                ].map((spec) => (
                  <span key={spec.label} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[11px] font-body font-medium text-muted">
                    <spec.icon className="w-3 h-3 text-accent" />
                    {spec.label}
                  </span>
                ))}
              </div>

              <p className="text-muted font-body text-sm leading-relaxed mb-6">{vehicle.description}</p>

              <div className="flex flex-col sm:flex-row gap-2 mb-6">
                <motion.button
                  className="flex-1 px-5 py-2.5 bg-primary text-white font-body font-semibold text-sm rounded-full hover:bg-secondary transition-all"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={() => setShowContact(true)}
                >
                  Inquire About This Vehicle
                </motion.button>
                <motion.button
                  className="flex-1 px-5 py-2.5 bg-white text-primary font-body font-medium text-sm rounded-full border-2 border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                >
                  Schedule Test Drive
                </motion.button>
              </div>

              <div className="grid grid-cols-2 gap-2 p-4 bg-gray-50 rounded-xl">
                {[
                  { icon: Shield, label: 'Stock', value: vehicle.stock },
                  { icon: Truck, label: 'Delivery', value: 'Nationwide' },
                  { icon: Calendar, label: 'Year', value: vehicle.year.toString() },
                  { icon: Gauge, label: 'Mileage', value: vehicle.miles },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center"><item.icon className="w-3.5 h-3.5 text-accent" /></div>
                    <div>
                      <p className="text-[10px] text-muted uppercase tracking-wider">{item.label}</p>
                      <p className="text-xs font-medium text-primary">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-xl md:text-2xl font-display font-medium text-primary mb-4">Vehicle Highlights</h2>
              <ul className="space-y-2">
                {vehicle.highlights.map((h, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-primary font-body">{h}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="text-xl md:text-2xl font-display font-medium text-primary mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Engine', value: vehicle.specs.engine },
                  { label: 'Horsepower', value: vehicle.specs.hp },
                  { label: 'Torque', value: vehicle.specs.torque },
                  { label: '0-60 mph', value: vehicle.specs.zeroTo60 },
                  { label: 'Top Speed', value: vehicle.specs.topSpeed },
                  { label: 'Transmission', value: vehicle.specs.transmission },
                  { label: 'Drivetrain', value: vehicle.specs.drivetrain },
                  { label: 'MPG', value: vehicle.specs.mpg },
                  { label: 'Exterior', value: vehicle.color },
                  { label: 'Interior', value: vehicle.interior },
                ].map((spec) => (
                  <div key={spec.label} className="p-2.5 bg-gray-50 rounded-xl">
                    <p className="text-[10px] text-muted uppercase tracking-wider font-body">{spec.label}</p>
                    <p className="text-sm font-medium text-primary font-body">{spec.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50/50">
        <div className="container-custom">
          <h2 className="text-xl md:text-2xl font-display font-medium text-primary mb-6">Features &amp; Options</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {vehicle.features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.02 }}
                className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-gray-100"
              >
                <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="text-xs font-body text-primary">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {relatedVehicles.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-xl md:text-2xl font-display font-medium text-primary mb-6">Similar Vehicles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedVehicles.map((v, i) => (
                <motion.div key={v.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="group bg-white rounded-[20px] overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-1"
                >
                  <Link href={`/inventory/${v.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={v.images[0]} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-display font-medium text-primary">{v.name}</h3>
                      <p className="text-xs text-muted font-body mt-0.5">{v.trim} &middot; {v.year}</p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                        <span className="text-base font-display font-semibold text-primary">{v.price}</span>
                        <span className="text-xs text-muted group-hover:text-accent transition-colors">View &rarr;</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactModal vehicle={vehicle} isOpen={showContact} onClose={() => setShowContact(false)} />

      <Footer />
    </div>
  )
}

function ContactModal({ vehicle, isOpen, onClose }: { vehicle: any; isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: `I'm interested in the ${vehicle.name} (${vehicle.stock}). Please send me more information.` })

  if (!isOpen) return null

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-premium-xl" onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-display font-medium text-primary">Inquire About This Vehicle</h3>
          <button onClick={onClose} className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-muted hover:text-primary hover:bg-gray-200 transition-all"><X className="w-3.5 h-3.5" /></button>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl mb-4">
          <img src={vehicle.images[0]} alt="" className="w-14 h-10 rounded-lg object-cover" />
          <div>
            <p className="text-sm font-medium text-primary">{vehicle.name}</p>
            <p className="text-xs text-muted">{vehicle.trim} &middot; {vehicle.price}</p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-xs font-medium text-primary/70 mb-1 block">Name</label>
            <input type="text" value={form.name} onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all" placeholder="Your full name" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-primary/70 mb-1 block">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all" placeholder="your@email.com" />
            </div>
            <div>
              <label className="text-xs font-medium text-primary/70 mb-1 block">Phone</label>
              <input type="tel" value={form.phone} onChange={(e) => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all" placeholder="(555) 000-0000" />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-primary/70 mb-1 block">Message</label>
            <textarea rows={3} value={form.message} onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none" />
          </div>
          <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
            className="w-full px-5 py-3 bg-primary text-white font-body font-semibold text-sm rounded-full hover:bg-secondary transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send Inquiry
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

function X({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function Send({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}