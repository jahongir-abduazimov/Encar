import React from "react";
import { Metadata } from "next";
import CarDetail from "@/sections/car-detail";
import request from "@/components/config";
import { CarDetail as CarDetailType } from "@/types";

// Russian SEO helper functions
const getRussianBodyType = (bodyType: string): string => {
  const bodyTypeMap: Record<string, string> = {
    sedan: "седан",
    hatchback: "хэтчбек",
    suv: "внедорожник",
    crossover: "кроссовер",
    wagon: "универсал",
    coupe: "купе",
    convertible: "кабриолет",
    minivan: "минивэн",
    pickup: "пикап",
    van: "фургон",
  };
  return bodyTypeMap[bodyType.toLowerCase()] || bodyType;
};

const getRussianFuelType = (fuelType: string): string => {
  const fuelTypeMap: Record<string, string> = {
    gasoline: "бензин",
    diesel: "дизель",
    hybrid: "гибрид",
    electric: "электро",
    lpg: "газ",
    cng: "метан",
  };
  return fuelTypeMap[fuelType.toLowerCase()] || fuelType;
};

const getRussianTransmission = (transmission: string): string => {
  const transmissionMap: Record<string, string> = {
    manual: "механика",
    automatic: "автомат",
    cvt: "вариатор",
    robot: "робот",
  };
  return transmissionMap[transmission.toLowerCase()] || transmission;
};

// Generate dynamic metadata for each car with Russian SEO optimization
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const res = await request.get<CarDetailType>(`/cars/car/${params.id}/`);
    const car = res.data;

    // Russian SEO optimized title
    const russianBodyType = getRussianBodyType(car.body_type.name);
    const title = `${car.name} ${car.year} - ${russianBodyType} купить в России | EnCar`;

    // Russian SEO optimized description
    const russianFuelType = getRussianFuelType(car.fuel_type.name);
    const russianTransmission = getRussianTransmission(car.transmission.name);
    const description = `${car.name} ${
      car.year
    } года выпуска, ${russianBodyType}. ${russianFuelType} двигатель, ${russianTransmission} коробка передач, пробег ${car.miliage.toLocaleString(
      "ru-RU"
    )} км. Цена: ${car.price.toLocaleString("ru-RU")} ${
      car.car_pricing?.currency || "USD"
    }. Купить ${car.name.toLowerCase()} в России.`;

    // Russian SEO keywords
    const keywords = [
      car.name,
      `${car.name} ${car.year}`,
      `${car.name} купить`,
      `${car.name} цена`,
      russianBodyType,
      russianFuelType,
      russianTransmission,
      "автомобиль",
      "машина",
      "авто",
      "купить машину",
      "продажа автомобилей",
      "б/у автомобили",
      "подержанные автомобили",
      "автосалон",
      "авторынок",
      "автомобили в России",
      "EnCar",
    ].join(", ");

    // Russian Open Graph data
    const openGraphTitle = `${car.name} ${car.year} - ${russianBodyType} | Купить автомобиль`;
    const openGraphDescription = `${car.name} ${
      car.year
    } года, ${russianBodyType}. ${russianFuelType} двигатель, ${car.miliage.toLocaleString(
      "ru-RU"
    )} км пробега. Цена ${car.price.toLocaleString("ru-RU")} ${
      car.car_pricing?.currency || "USD"
    }.`;

    return {
      title,
      description,
      keywords,
      authors: [{ name: "EnCar" }],
      creator: "EnCar",
      publisher: "EnCar",
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
      openGraph: {
        title: openGraphTitle,
        description: openGraphDescription,
        type: "website",
        url: `https://encar-test.vercel.app/cars/${params.id}`,
        siteName: "EnCar - Автомобили в России",
        locale: "ru_RU",
        images:
          car.car_medias.length > 0
            ? [
                {
                  url: car.car_medias[0].media,
                  width: 1200,
                  height: 630,
                  alt: `${car.name} ${car.year} - ${russianBodyType}`,
                  type: "image/jpeg",
                },
              ]
            : [],
      },
      twitter: {
        card: "summary_large_image",
        title: openGraphTitle,
        description: openGraphDescription,
        images: car.car_medias.length > 0 ? [car.car_medias[0].media] : [],
        creator: "@EnCar",
        site: "@EnCar",
      },
      alternates: {
        canonical: `https://encar-test.vercel.app/cars/${params.id}`,
        // languages: {
        //   'ru-RU': `https://encar-test.vercel.app/ru/cars/${params.id}`,
        // },
      },
      other: {
        "geo.region": "RU",
        "geo.placename": "Russia",
        "geo.position": "55.7558;37.6176",
        ICBM: "55.7558, 37.6176",
        "DC.title": title,
        "DC.description": description,
        "DC.subject": keywords,
        "DC.language": "ru",
        "DC.publisher": "EnCar",
        "DC.coverage": "World",
        "DC.rights": "Copyright EnCar",
      },
    };
  } catch (error) {
    return {
      title: "Автомобиль | EnCar - Купить машину в России",
      description:
        "Подробная информация об автомобиле на EnCar. Купить автомобиль в России.",
      keywords: "автомобиль, машина, купить авто, продажа автомобилей, EnCar",
      robots: {
        index: true,
        follow: true,
      },
    };
  }
}

// Generate enhanced structured data for the car with Russian optimization
function generateStructuredData(car: CarDetailType) {
  const russianBodyType = getRussianBodyType(car.body_type.name);
  const russianFuelType = getRussianFuelType(car.fuel_type.name);
  const russianTransmission = getRussianTransmission(car.transmission.name);

  return {
    "@context": "https://schema.org",
    "@type": "Car",
    name: `${car.name} ${car.year}`,
    brand: {
      "@type": "Brand",
      name: car.name.split(" ")[0], // Assuming first word is brand
    },
    model: car.name,
    vehicleModelDate: car.year,
    mileageFromOdometer: {
      "@type": "QuantitativeValue",
      value: car.miliage,
      unitCode: "KMT",
      unitText: "километров",
    },
    fuelType: russianFuelType,
    vehicleTransmission: russianTransmission,
    vehicleBodyType: russianBodyType,
    color: car.color.name,
    engineCapacity: {
      "@type": "QuantitativeValue",
      value: car.engine_capacity,
      unitCode: "LTR",
      unitText: "литров",
    },
    offers: {
      "@type": "Offer",
      price: car.price,
      priceCurrency: car.car_pricing?.currency || "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "EnCar",
        url: "https://encar-test.vercel.app",
        address: {
          "@type": "PostalAddress",
          addressCountry: "RU",
          addressLocality: "Москва",
          addressRegion: "Москва",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "Россия",
      },
    },
    image:
      car.car_medias.length > 0
        ? car.car_medias.map((media) => media.media)
        : [],
    description: `${car.name} ${
      car.year
    } года выпуска, ${russianBodyType}. ${russianFuelType} двигатель ${
      car.engine_capacity
    }л, ${russianTransmission} коробка передач. Пробег: ${car.miliage.toLocaleString(
      "ru-RU"
    )} км. Цвет: ${car.color.name}.`,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Год выпуска",
        value: car.year,
      },
      {
        "@type": "PropertyValue",
        name: "Тип кузова",
        value: russianBodyType,
      },
      {
        "@type": "PropertyValue",
        name: "Тип топлива",
        value: russianFuelType,
      },
      {
        "@type": "PropertyValue",
        name: "Коробка передач",
        value: russianTransmission,
      },
      {
        "@type": "PropertyValue",
        name: "Объем двигателя",
        value: `${car.engine_capacity} л`,
      },
      {
        "@type": "PropertyValue",
        name: "Цвет",
        value: car.color.name,
      },
    ],
  };
}

// Generate breadcrumb structured data
function generateBreadcrumbData(car: CarDetailType) {
  const russianBodyType = getRussianBodyType(car.body_type.name);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://encar-test.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: russianBodyType,
        item: `https://encar-test.vercel.app/cars?body_type=${car.body_type.name}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${car.name} ${car.year}`,
        item: `https://encar-test.vercel.app/cars/${car.id}`,
      },
    ],
  };
}

interface PageProps {
  params: {
    id: string;
  };
}

const DetailPage = async ({ params }: PageProps) => {
  let car: CarDetailType | null = null;

  try {
    const res = await request.get<CarDetailType>(`/cars/car/${params.id}/`);
    car = res.data;
  } catch (error) {
    console.error("Error fetching car data:", error);
  }

  return (
    <>
      {/* Structured Data for Car */}
      {car && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData(car)),
          }}
        />
      )}

      {/* Breadcrumb Structured Data */}
      {car && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbData(car)),
          }}
        />
      )}

      {/* Main Content */}
      <div>
        <CarDetail />
      </div>
    </>
  );
};

export default DetailPage;
