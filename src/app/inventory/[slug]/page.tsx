import { notFound } from 'next/navigation'
import { getVehicleBySlug, vehicles } from '@/lib/vehicles'
import VehicleDetailClient from './VehicleDetailClient'

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }))
}

export default function VehicleDetailPage({ params }: { params: { slug: string } }) {
  const vehicle = getVehicleBySlug(params.slug)
  if (!vehicle) notFound()
  return <VehicleDetailClient vehicle={vehicle} />
}
