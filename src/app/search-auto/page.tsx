import React, { Suspense } from "react";
import { Metadata } from "next";
import Filters from "@/sections/search-auto/Filters";

export const metadata: Metadata = {
  title: "Поиск автомобилей | GM CAR - Купить машину по всему миру",
  description: "Поиск и фильтрация автомобилей по всему миру. Найдите автомобиль по марке, модели, году выпуска, цене и другим параметрам. Тысячи предложений от проверенных продавцов.",
  keywords: [
    "поиск автомобилей",
    "фильтр автомобилей",
    "купить машину",
    "автомобили по параметрам",
    "выбор автомобиля",
    "автомобильный поиск",
    "автомобили по всему миру",
    "б/у автомобили",
    "новые автомобили",
    "автосалон",
    "авторынок",
    "GM CAR"
  ].join(", "),
  openGraph: {
    title: "Поиск автомобилей | GM CAR",
    description: "Поиск и фильтрация автомобилей по всему миру. Найдите автомобиль своей мечты по различным параметрам.",
    type: "website",
    url: "https://gm-car.vercel.app/search-auto",
    siteName: "GM CAR - Автомобили по всему миру",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Поиск автомобилей | GM CAR",
    description: "Поиск и фильтрация автомобилей по всему миру. Найдите автомобиль своей мечты.",
  },
  alternates: {
    canonical: "https://gm-car.vercel.app/search-auto",
    languages: {
      'ru-RU': '/ru/search-auto',
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

const SearchAuto = () => {
  return (
    <Suspense fallback={<div className="text-center py-40">Загрузка...</div>}>
      <Filters />
    </Suspense>
  );
};

export default SearchAuto;
