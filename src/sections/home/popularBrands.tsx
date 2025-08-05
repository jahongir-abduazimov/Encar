"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import request from "@/components/config";

interface Brands {
  id: string;
  name: string;
  icon: string;
}

const PopularBrands = () => {
  const [brands, setBrands] = useState([]);
  const getBrands = async () => {
    try {
      const res = await request.get("/cars/brand/list/");
      setBrands(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getBrands();
  }, []);
  return (
    <section className="py-12 md:py-20">
      <Container>
        <h2 className="text-2xl md:text-4xl font-medium mb-4">
          Популярные автомобили
        </h2>
        {brands.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {brands.map((brand: Brands) => (
              <Link
                href={`/search-auto?brand=${brand.id}`}
                key={brand.name}
                className="min-w-30 h-30 border border-gray-300 flex-col flex items-center justify-end p-4 transition-colors hover:shadow-[0_0_10px_4px_rgba(0,0,0,0.1)]"
              >
                <Image
                  src={brand.icon}
                  alt={`${brand.name} logo`}
                  width={100}
                  height={100}
                  className="h-14 w-auto mb-2"
                />
                <span className="text-black/80">{brand.name}</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            <div className="min-w-30 h-30 border bg-gray-300 border-gray-300 flex-col flex items-center justify-end p-4 transition-colors animate-pulse" />
            <div className="min-w-30 h-30 border bg-gray-300 border-gray-300 flex-col flex items-center justify-end p-4 transition-colors animate-pulse" />
            <div className="min-w-30 h-30 border bg-gray-300 border-gray-300 flex-col flex items-center justify-end p-4 transition-colors animate-pulse" />
            <div className="min-w-30 h-30 border bg-gray-300 border-gray-300 flex-col flex items-center justify-end p-4 transition-colors animate-pulse" />
            <div className="min-w-30 h-30 border bg-gray-300 border-gray-300 flex-col flex items-center justify-end p-4 transition-colors animate-pulse" />
            <div className="min-w-30 h-30 border bg-gray-300 border-gray-300 flex-col flex items-center justify-end p-4 transition-colors animate-pulse" />
            <div className="min-w-30 h-30 border bg-gray-300 border-gray-300 flex-col flex items-center justify-end p-4 transition-colors animate-pulse" />
            <div className="min-w-30 h-30 border bg-gray-300 border-gray-300 flex-col flex items-center justify-end p-4 transition-colors animate-pulse" />
          </div>
        )}
      </Container>
    </section>
  );
};

export default PopularBrands;
