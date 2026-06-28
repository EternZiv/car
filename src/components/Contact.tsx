'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="relative py-20 md:py-24 lg:py-28 bg-gray-50/50 overflow-hidden" aria-labelledby="contact-title">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 id="contact-title" className="section-title">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">Begin your journey with Apex Motors</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="label">Full Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} className="input-field" placeholder="Your full name" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="label">Email Address</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="your@email.com" required />
                </div>
                <div>
                  <label htmlFor="phone" className="label">Phone Number</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="input-field" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="label">Message</label>
                <textarea id="message" rows={4} value={formData.message} onChange={handleChange} className="input-field resize-none" placeholder="Tell us about your preferences or ask a question..." required />
              </div>
              <motion.button type="submit"
                className="group relative w-full px-6 py-3 bg-primary text-white font-body font-semibold text-sm rounded-full overflow-hidden transition-all duration-300 hover:bg-secondary hover:shadow-premium-lg flex items-center justify-between"
                whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
              >
                <span>Send Inquiry</span>
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                  <Send className="w-4 h-4" aria-hidden="true" />
                </motion.span>
              </motion.button>
            </form>
          </motion.div>

          <motion.div className="flex flex-col justify-between gap-6"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-medium text-primary mb-4">Visit Our Showroom</h3>
              <p className="text-muted font-body leading-relaxed text-sm">Experience our curated collection in person. Our luxury showroom is designed to provide an unparalleled browsing experience.</p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Address', value: '425 Park Avenue, New York, NY 10022' },
                { icon: Phone, label: 'Phone', value: '+1 (212) 555-0199' },
                { icon: Mail, label: 'Email', value: 'concierge@apexmotors.com' },
                { icon: Clock, label: 'Hours', value: 'Mon-Sat: 9AM-8PM  |  Sun: 10AM-6PM' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 group">
                  <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <item.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted font-body uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm font-body font-medium text-primary">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative rounded-[20px] overflow-hidden h-[200px] bg-gradient-to-br from-primary to-secondary">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-white/30 mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm text-white/50 font-body">425 Park Avenue, New York</p>
                  <p className="text-xs text-white/30 font-body mt-1">Premium map integration</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}