import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/cabinet/',
          '/api/',
          '/admin/',
          '/_next/',
          '/static/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/cabinet/',
          '/api/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: [
          '/cabinet/',
          '/api/',
          '/admin/',
        ],
      },
    ],
    sitemap: 'https://gm-car.vercel.app/sitemap.xml',
    host: 'https://gm-car.vercel.app',
  }
} 