import Image from "next/image";
import { Metadata } from "next";
import Container from "@/components/Container";
import Intro from "@/sections/home/intro";
import PopularBrands from "@/sections/home/popularBrands";
import FilterPrice from "@/sections/home/FilterPrice";

export const metadata: Metadata = {
  title: "GM CAR - Купить автомобиль по всему миру | Автомобильный маркетплейс",
  description: "GM CAR - крупнейший автомобильный маркетплейс по всему миру. Найдите и купите автомобиль своей мечты. Тысячи предложений от проверенных продавцов с подробными характеристиками и ценами.",
  keywords: [
    "купить автомобиль",
    "автомобильный маркетплейс",
    "продажа автомобилей",
    "автомобили по всему миру",
    "б/у автомобили",
    "новые автомобили",
    "автосалон",
    "авторынок",
    "популярные марки автомобилей",
    "автомобили по цене",
    "GM CAR"
  ].join(", "),
  openGraph: {
    title: "GM CAR - Купить автомобиль по всему миру",
    description: "GM CAR - крупнейший автомобильный маркетплейс по всему миру. Найдите и купите автомобиль своей мечты.",
    type: "website",
    url: "https://gm-car.vercel.app",
    siteName: "GM CAR - Автомобили по всему миру",
    locale: "ru_RU",
    images: [
      {
        url: "/images/intro-bg.avif",
        width: 1200,
        height: 630,
        alt: "GM CAR - Автомобильный маркетплейс по всему миру",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GM CAR - Купить автомобиль по всему миру",
    description: "GM CAR - крупнейший автомобильный маркетплейс по всему миру. Найдите и купите автомобиль своей мечты.",
    images: ["/images/intro-bg.avif"],
  },
  alternates: {
    canonical: "https://gm-car.vercel.app",
    languages: {
      'ru-RU': '/ru',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <Intro />
      <PopularBrands />
      <FilterPrice />
    </>
  );
}
