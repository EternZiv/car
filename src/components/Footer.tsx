'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react'

const footerLinks = {
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About Us' },
    { href: '/inventory', label: 'Inventory' },
    { href: '/#services', label: 'Services' },
    { href: '/#contact', label: 'Contact' },
  ],
  inventory: [
    { href: '/inventory', label: 'Sedans' },
    { href: '/inventory', label: 'SUVs' },
    { href: '/inventory', label: 'Sports Cars' },
    { href: '/inventory', label: 'Electric' },
    { href: '/inventory', label: 'Convertibles' },
  ],
  contact: [
    { label: '425 Park Avenue, New York' },
    { label: '+1 (212) 555-0199' },
    { label: 'concierge@apexmotors.com' },
    { label: 'Mon-Sat: 9AM-8PM' },
    { label: 'Sun: 10AM-6PM' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-primary text-white" role="contentinfo">
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-[#050a14] pointer-events-none" aria-hidden="true" />

      <motion.div className="relative z-10 py-16 lg:py-20 border-b border-white/5"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      >
        <div className="container-custom text-center">
          <motion.h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-medium text-white mb-4"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            Ready to Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Dream Car</span>?
          </motion.h3>
          <motion.p className="text-white/50 font-body text-sm max-w-md mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let us help you discover the perfect luxury vehicle for your lifestyle.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/inventory"
              className="inline-block px-6 py-3 bg-white text-primary font-body font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <div className="container-custom relative z-10 pt-12 pb-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-10 border-b border-white/5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Link href="/" className="inline-flex items-center gap-1.5 mb-4">
              <span className="text-lg font-display font-bold text-white">APEX</span>
              <span className="text-lg font-display font-medium text-accent">M</span>
            </Link>
            <p className="text-white/40 font-body text-sm leading-relaxed max-w-xs">
              Defining the standard in luxury automotive excellence. Curating the world&apos;s finest vehicles for discerning clientele.
            </p>
            <div className="flex items-center gap-2 mt-4">
              {socialLinks.map((social) => (
                <motion.a key={social.label} href={social.href}
                  className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center text-white/40 hover:bg-accent hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h4 className="text-[10px] font-body font-semibold text-white/50 uppercase tracking-[0.2em] mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 font-body text-sm hover:text-accent transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h4 className="text-[10px] font-body font-semibold text-white/50 uppercase tracking-[0.2em] mb-4">Inventory</h4>
            <ul className="space-y-2">
              {footerLinks.inventory.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 font-body text-sm hover:text-accent transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h4 className="text-[10px] font-body font-semibold text-white/50 uppercase tracking-[0.2em] mb-4">Contact</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((item) => (
                <li key={item.label}>
                  <span className="text-white/40 font-body text-sm">{item.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-white/30 font-body text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Apex Motors. All rights reserved. | Luxury Automotive Dealership
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/30 font-body text-xs hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 font-body text-xs hover:text-accent transition-colors">Terms of Service</a>
            <motion.button
              className="w-8 h-8 bg-white/5 rounded-xl flex items-center justify-center text-white/40 hover:bg-accent hover:text-white transition-all duration-300"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}