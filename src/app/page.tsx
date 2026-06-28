'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Inventory from '@/components/Inventory'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white overflow-x-hidden"
      >
        <Header />
        <Hero />
        <Categories />
        <Inventory />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <CTASection />
        <Contact />
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}