import { MetadataRoute } from 'next'
import request from '@/components/config'
import { CarListItem } from '@/types'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://encar-test.vercel.app'

  // Static pages with Russian SEO optimization
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/search-auto`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cabinet`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    // Russian-specific pages
    {
      url: `${baseUrl}/ru`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ru/search-auto`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  // Dynamic car pages with enhanced metadata
  let carPages: MetadataRoute.Sitemap = []

  try {
    // Fetch all cars for sitemap generation
    const response = await request.get<{ data: CarListItem[] }>('/cars/')
    const cars = response.data.data || response.data

    carPages = cars.map((car: CarListItem) => ({
      url: `${baseUrl}/cars/${car.id}`,
      lastModified: new Date(car.updated_at),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

    // Also add Russian version URLs for cars
    const russianCarPages = cars.map((car: CarListItem) => ({
      url: `${baseUrl}/ru/cars/${car.id}`,
      lastModified: new Date(car.updated_at),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

    carPages = [...carPages, ...russianCarPages]
  } catch (error) {
    console.error('Error fetching cars for sitemap:', error)
  }

  return [...staticPages, ...carPages]
} 