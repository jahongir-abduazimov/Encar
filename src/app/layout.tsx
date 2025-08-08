import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GM CAR - Купить автомобиль в России",
    template: "%s | GM CAR"
  },
  description: "GM CAR - крупнейший автомобильный маркетплейс в России. Найдите и купите автомобиль своей мечты. Подробные характеристики, цены и отзывы о тысячах автомобилей.",
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
    "GM CAR"
  ].join(", "),
  authors: [{ name: "GM CAR Team" }],
  creator: "GM CAR",
  publisher: "GM CAR",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://encar-test.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      'ru-RU': '/ru',
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://encar-test.vercel.app",
    siteName: "GM CAR - Автомобили в России",
    title: "GM CAR - Купить автомобиль в России",
    description: "GM CAR - крупнейший автомобильный маркетплейс в России. Найдите и купите автомобиль своей мечты с подробными характеристиками и ценами.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "GM CAR - Автомобильный маркетплейс в России",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GM CAR - Купить автомобиль в России",
    description: "GM CAR - крупнейший автомобильный маркетплейс в России. Найдите и купите автомобиль своей мечты.",
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
    'DC.title': 'GM CAR - Купить автомобиль в России',
    'DC.description': 'GM CAR - крупнейший автомобильный маркетплейс в России. Найдите и купите автомобиль своей мечты.',
    'DC.subject': 'автомобили, купить автомобиль, продажа автомобилей, автомобильный маркетплейс',
    'DC.language': 'ru',
    'DC.publisher': 'GM CAR',
    'DC.coverage': 'World',
    'DC.rights': 'Copyright GM CAR',
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
        <meta name="apple-mobile-web-app-title" content="GM CAR" />

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
              name: 'GM CAR',
              url: 'https://encar-test.vercel.app',
              logo: 'https://encar-test.vercel.app/images/logo.png',
              description: 'GM CAR - крупнейший автомобильный маркетплейс в России',
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
              name: 'GM CAR',
              url: 'https://encar-test.vercel.app',
              description: 'GM CAR - крупнейший автомобильный маркетплейс в России',
              inLanguage: 'ru-RU',
            })
          }}
        />
      </head>
      <body className={`${exo2.variable} antialiased`}>
        <main>
          <Header />
          {children}
          <Footer />
          {/* Scroll to Top Button */}
          <ScrollToTopButton />
        </main>
      </body>
    </html>
  );
}
