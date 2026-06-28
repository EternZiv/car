'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Search, Fuel, Gauge, SlidersHorizontal, X, Grid3X3, List, ChevronDown } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { vehicles, categories, searchVehicles } from '@/lib/vehicles'
import type { Vehicle } from '@/lib/vehicles'

export default function InventoryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let result = activeCategory === 'all'
      ? vehicles
      : vehicles.filter(v => v.category === activeCategory)

    if (searchQuery.trim()) {
      result = searchVehicles(searchQuery)
    }

    switch (sortBy) {
      case 'price-asc': return [...result].sort((a, b) => parseInt(a.price.replace(/[$,]/g, '')) - parseInt(b.price.replace(/[$,]/g, '')))
      case 'price-desc': return [...result].sort((a, b) => parseInt(b.price.replace(/[$,]/g, '')) - parseInt(a.price.replace(/[$,]/g, '')))
      case 'year': return [...result].sort((a, b) => b.year - a.year)
      case 'name': return [...result].sort((a, b) => a.name.localeCompare(b.name))
      default: return result
    }
  }, [activeCategory, searchQuery, sortBy])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative pt-24 pb-10 lg:pt-28 lg:pb-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 mesh-gradient pointer-events-none" aria-hidden="true" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div>
                <motion.p className="text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>Apex Motors Collection</motion.p>
                <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-primary" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  Our <span className="text-gradient">Inventory</span>
                </motion.h1>
                <motion.p className="text-muted font-body mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                  {filtered.length} vehicles available
                </motion.p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full lg:w-auto">
                <div className="relative flex-1 lg:flex-none lg:min-w-[260px]">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" aria-hidden="true" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by make, model..."
                    className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-body text-primary outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2">
                      <X className="w-4 h-4 text-muted hover:text-primary" />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none px-4 py-2.5 pr-10 bg-white border border-gray-200 rounded-full text-sm font-body text-primary outline-none focus:border-accent cursor-pointer"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="year">Year: Newest</option>
                      <option value="name">Name: A-Z</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" aria-hidden="true" />
                  </div>

                  <div className="hidden sm:flex items-center bg-white border border-gray-200 rounded-full overflow-hidden">
                    <button onClick={() => setViewMode('grid')} className={`p-2.5 transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-muted hover:text-primary'}`} aria-label="Grid view">
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                    <button onClick={() => setViewMode('list')} className={`p-2.5 transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'text-muted hover:text-primary'}`} aria-label="List view">
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white border border-gray-200 text-muted hover:border-gray-300 hover:text-primary'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-20">
                <p className="text-xl font-display font-medium text-muted mb-2">No vehicles found</p>
                <p className="text-sm text-muted/60">Try adjusting your search or filter criteria</p>
              </motion.div>
            ) : (
              <motion.div
                key={`${activeCategory}-${viewMode}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={viewMode === 'grid'
                  ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6'
                  : 'flex flex-col gap-4'
                }
              >
                {filtered.map((vehicle, index) => (
                  <VehicleCard key={vehicle.slug} vehicle={vehicle} index={index} viewMode={viewMode} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {filtered.length > 0 && (
            <motion.div className="flex justify-center mt-14" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <div className="flex items-center gap-2 text-sm text-muted font-body">
                <span>Showing</span>
                <span className="font-medium text-primary">{filtered.length}</span>
                <span>of</span>
                <span className="font-medium text-primary">{vehicles.length}</span>
                <span>vehicles</span>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

function VehicleCard({ vehicle, index, viewMode }: { vehicle: Vehicle; index: number; viewMode: 'grid' | 'list' }) {
  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.04 }}
        className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-premium hover:-translate-y-0.5 transition-all duration-500"
      >
        <Link href={`/inventory/${vehicle.slug}`} className="flex flex-col sm:flex-row">
          <div className="relative sm:w-72 h-48 sm:h-auto overflow-hidden shrink-0">
            <img src={vehicle.images[0]} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-3 left-3 px-2.5 py-1 bg-accent text-white text-[10px] font-body font-semibold rounded-full uppercase">{vehicle.badge}</div>
          </div>
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-display font-medium text-primary">{vehicle.name}</h3>
              <p className="text-sm text-muted font-body">{vehicle.trim} &middot; {vehicle.year}</p>
              <p className="text-sm text-muted/70 font-body mt-2 line-clamp-2">{vehicle.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1"><Fuel className="w-3.5 h-3.5" />{vehicle.specs.engine}</span>
                <span className="flex items-center gap-1"><Gauge className="w-3.5 h-3.5" />{vehicle.specs.hp}</span>
                <span className="text-muted/50">{vehicle.miles} mi</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl font-display font-semibold text-primary">{vehicle.price}</span>
                <span className="px-4 py-2 bg-primary text-white text-xs font-body font-medium rounded-xl hover:bg-secondary transition-colors">View Details</span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-white rounded-[20px] overflow-hidden shadow-card hover:shadow-premium-lg transition-all duration-500 hover:-translate-y-1.5"
    >
      <Link href={`/inventory/${vehicle.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={vehicle.images[0]} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-accent text-white text-[10px] font-body font-semibold rounded-full uppercase">{vehicle.badge}</div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
        <div className="p-5 md:p-6">
          <h3 className="text-base md:text-lg font-display font-medium text-primary mb-0.5">{vehicle.name}</h3>
          <p className="text-xs md:text-sm text-muted font-body mb-3">{vehicle.trim} &middot; {vehicle.year}</p>
          <div className="flex items-center gap-3 pb-3 mb-3 border-b border-gray-100">
            <span className="flex items-center gap-1 text-xs text-muted"><Fuel className="w-3.5 h-3.5" /><span className="hidden sm:inline">{vehicle.specs.engine}</span></span>
            <span className="flex items-center gap-1 text-xs text-muted"><Gauge className="w-3.5 h-3.5" />{vehicle.specs.hp}</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl md:text-2xl font-display font-semibold text-primary">{vehicle.price}</span>
              <span className="text-[10px] text-muted ml-1">MSRP</span>
            </div>
            <span className="text-xs text-muted font-body group-hover:text-accent group-hover:translate-x-0.5 transition-all">Details &rarr;</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}