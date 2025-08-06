import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EnCar - Купить автомобиль в России",
    template: "%s | EnCar"
  },
  description: "EnCar - крупнейший автомобильный маркетплейс в России. Найдите и купите автомобиль своей мечты. Подробные характеристики, цены и отзывы о тысячах автомобилей.",
  keywords: [
    "купить автомобиль",
    "продажа автомобилей",
    "автомобильный маркетплейс",
    "сравнение автомобилей",
    "поиск автомобилей",
    "характеристики автомобилей",
    "цены на автомобили",
    "автомобили в России",
    "б/у автомобили",
    "подержанные автомобили",
    "новые автомобили",
    "автосалон",
    "авторынок",
    "EnCar"
  ].join(", "),
  authors: [{ name: "EnCar Team" }],
  creator: "EnCar",
  publisher: "EnCar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://encar.com"),
  alternates: {
    canonical: "/",
    languages: {
      'ru-RU': '/ru',
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://encar.com",
    siteName: "EnCar - Автомобили в России",
    title: "EnCar - Купить автомобиль в России",
    description: "EnCar - крупнейший автомобильный маркетплейс в России. Найдите и купите автомобиль своей мечты с подробными характеристиками и ценами.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "EnCar - Автомобильный маркетплейс в России",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EnCar - Купить автомобиль в России",
    description: "EnCar - крупнейший автомобильный маркетплейс в России. Найдите и купите автомобиль своей мечты.",
    images: ["/images/logo.png"],
    creator: "@encar",
    site: "@encar"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    'geo.region': 'RU',
    'geo.placename': 'Russia',
    'geo.position': '55.7558;37.6176',
    'ICBM': '55.7558, 37.6176',
    'DC.title': 'EnCar - Купить автомобиль в России',
    'DC.description': 'EnCar - крупнейший автомобильный маркетплейс в России. Найдите и купите автомобиль своей мечты.',
    'DC.subject': 'автомобили, купить автомобиль, продажа автомобилей, автомобильный маркетплейс',
    'DC.language': 'ru',
    'DC.publisher': 'EnCar',
    'DC.coverage': 'World',
    'DC.rights': 'Copyright EnCar',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="EnCar" />

        {/* Russian language and region specific meta tags */}
        <meta name="language" content="ru" />
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Russia" />
        <meta name="geo.position" content="55.7558;37.6176" />
        <meta name="ICBM" content="55.7558, 37.6176" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'EnCar',
              url: 'https://encar.com',
              logo: 'https://encar.com/images/logo.png',
              description: 'EnCar - крупнейший автомобильный маркетплейс в России',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'RU',
                addressLocality: 'Москва',
                addressRegion: 'Москва'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                areaServed: 'RU',
                availableLanguage: 'Russian'
              },
              sameAs: [
                'https://twitter.com/encar',
                'https://facebook.com/encar',
                'https://instagram.com/encar'
              ]
            })
          }}
        />

        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'EnCar',
              url: 'https://encar.com',
              description: 'EnCar - крупнейший автомобильный маркетплейс в России',
              inLanguage: 'ru-RU',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://encar.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body className={`${exo2.variable} antialiased`}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
