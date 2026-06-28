'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, X as XIcon } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#inventory', label: 'Inventory' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section) || document.querySelector(`[data-section="${section}"]`)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSearch = useCallback(() => {
    setSearchOpen(prev => {
      if (!prev) {
        setTimeout(() => searchInputRef.current?.focus(), 100)
      }
      return !prev
    })
  }, [])

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
window.location.href = `/inventory?search=${encodeURIComponent(searchQuery.trim())}`
      setSearchOpen(false)
      setSearchQuery('')
    }
  }, [searchQuery])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-4">
      <motion.nav
        className={`
          flex items-center justify-between px-4 sm:px-5 lg:px-8
          transition-all duration-500 ease-out
          ${isScrolled || !isHome
            ? 'h-12 sm:h-14 lg:h-[60px] max-w-[1100px] glass-strong rounded-full shadow-premium'
            : 'h-14 sm:h-16 max-w-[1320px] bg-transparent rounded-full'
          }
          w-full
        `}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-1 z-10 shrink-0"
          aria-label="Apex Motors Home"
        >
          <motion.span
            className={`text-sm sm:text-base md:text-lg font-display font-bold tracking-tight transition-colors duration-300 ${isHome ? (isScrolled ? 'text-primary' : 'text-white') : 'text-primary'}`}
          >
            APEX
          </motion.span>
          <motion.span
            className={`text-sm sm:text-base md:text-lg font-display font-medium tracking-tight transition-colors duration-300 ${isHome ? 'text-accent' : 'text-primary'}`}
          >
            M
          </motion.span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId || (!activeSection && link.href === '#home')
            return (
              <motion.a
                key={link.href}
                href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                className={`relative px-2.5 xl:px-3 py-1.5 text-[11px] xl:text-xs font-body font-medium rounded-full transition-all duration-300 ${
                  isHome
                    ? isActive
                      ? (isScrolled ? 'text-accent' : 'text-white')
                      : (isScrolled ? 'text-gray-600 hover:text-primary' : 'text-white/70 hover:text-white')
                    : isActive ? 'text-accent' : 'text-gray-600 hover:text-primary'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                onClick={(e) => {
                  if (link.href.startsWith('/#') && isHome) {
                    e.preventDefault()
                    const el = document.getElementById(sectionId)
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    className={`absolute inset-0 rounded-full -z-10 ${isHome ? 'bg-white/10' : 'bg-gray-100'}`}
                    layoutId="nav-bg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.a>
            )
          })}
        </div>

        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <AnimatePresence mode="wait">
            {searchOpen ? (
              <motion.form
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                onSubmit={handleSearchSubmit}
                className="flex items-center"
              >
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 ${isHome && !isScrolled ? 'bg-white/10 border border-white/20' : 'bg-gray-100'}`}>
                  <Search className={`w-3.5 h-3.5 shrink-0 ${isScrolled ? 'text-muted' : 'text-white/60'}`} aria-hidden="true" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search vehicles..."
                    className={`w-[130px] lg:w-[160px] bg-transparent text-sm font-body outline-none placeholder:text-[11px] ${
                      isHome && !isScrolled ? 'text-white placeholder:text-white/50' : 'text-primary placeholder:text-gray-400'
                    }`}
                    onKeyDown={(e) => e.key === 'Escape' && toggleSearch()}
                  />
                  <button type="button" onClick={() => { setSearchOpen(false); setSearchQuery('') }} className="shrink-0">
                    <XIcon className={`w-3 h-3 ${isHome && !isScrolled ? 'text-white/50 hover:text-white' : 'text-muted hover:text-primary'}`} aria-hidden="true" />
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.button
                key="search-btn"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`p-1.5 rounded-full transition-colors ${isHome && !isScrolled ? 'text-white/70 hover:bg-white/10' : 'text-primary hover:bg-gray-100'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleSearch}
                aria-label="Search vehicles"
              >
                <Search className="w-3.5 h-3.5" aria-hidden="true" />
              </motion.button>
            )}
          </AnimatePresence>

          <Link
            href="/inventory"
            className={`hidden sm:inline-flex px-3 lg:px-4 py-1.5 lg:py-2 text-[11px] lg:text-xs font-body font-semibold rounded-full transition-all duration-300 ${
              isScrolled || !isHome
                ? 'bg-primary text-white hover:bg-secondary shadow-md hover:shadow-lg hover:-translate-y-0.5'
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
            }`}
          >
            Browse Inventory
          </Link>
        </div>

        <button
          className={`md:hidden p-1.5 rounded-full transition-colors z-10 ${
            isHome && !isScrolled ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-gray-100'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className="w-4 h-4" aria-hidden="true" />
          ) : (
            <Menu className="w-4 h-4" aria-hidden="true" />
          )}
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden absolute top-full left-3 right-3 sm:left-4 sm:right-4 mt-2 bg-white/95 backdrop-blur-2xl rounded-2xl border border-gray-100 shadow-premium-xl py-3 px-3"
            >
              <form onSubmit={(e) => { e.preventDefault(); if (searchQuery.trim()) { window.location.href = `/inventory?search=${encodeURIComponent(searchQuery.trim())}`; setIsMobileMenuOpen(false); setSearchQuery(''); } }} className="mb-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full">
                  <Search className="w-3.5 h-3.5 text-muted shrink-0" aria-hidden="true" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search vehicles..."
                    className="w-full bg-transparent text-sm text-primary font-body outline-none placeholder:text-gray-400"
                  />
                  {searchQuery && (
                    <button type="button" onClick={() => setSearchQuery('')}>
                      <XIcon className="w-3.5 h-3.5 text-muted" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </form>
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => {
                  const sectionId = link.href.replace('#', '')
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                      className="px-3 py-2.5 text-primary font-body font-medium text-sm rounded-xl hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 + index * 0.03 }}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false)
                        if (link.href.startsWith('/#') && isHome) {
                          e.preventDefault()
                          const el = document.getElementById(sectionId)
                          if (el) el.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                    >
                      {link.label}
                    </motion.a>
                  )
                })}
                <Link
                  href="/inventory"
                  className="mt-2 block w-full text-center px-3 py-2.5 bg-primary text-white font-body font-semibold text-sm rounded-xl hover:bg-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Browse Inventory
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}