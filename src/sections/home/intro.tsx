"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import Select from "@/components/ui/Select";

type Option = {
  label: string;
  value: string;
};

const Intro = () => {
  const brandOptions = [
    { label: "Hyundai", value: "hyundai" },
    { label: "Kia", value: "kia" },
    { label: "Toyota", value: "toyota" },
    { label: "Nissan", value: "nissan" },
    { label: "Mazda", value: "mazda" },
    { label: "Mitsubishi", value: "mitsubishi" },
    { label: "Suzuki", value: "suzuki" },
  ];
  const modelOptions = [
    { label: "Elantra", value: "elantra" },
    { label: "Sonata", value: "sonata" },
    { label: "Sportage", value: "sportage" },
    { label: "Sorento", value: "sorento" },
    { label: "Camry", value: "camry" },
    { label: "Corolla", value: "corolla" },
  ];
  const generationOptions = [
    { label: "1-е поколение", value: "gen1" },
    { label: "2-е поколение", value: "gen2" },
    { label: "3-е поколение", value: "gen3" },
    { label: "4-е поколение", value: "gen4" },
    { label: "5-е поколение", value: "gen5" },
  ];
  const fuelOptions = [
    { label: "Бензин", value: "gasoline" },
    { label: "Дизель", value: "diesel" },
    { label: "Гибрид", value: "hybrid" },
    { label: "Электро", value: "electric" },
  ];
  const transmissionOptions = [
    { label: "Автомат", value: "automatic" },
    { label: "Механика", value: "manual" },
  ];
  const bodyTypeOptions = [
    { label: "Седан", value: "sedan" },
    { label: "Хэтчбек", value: "hatchback" },
    { label: "Кроссовер", value: "crossover" },
    { label: "Внедорожник", value: "suv" },
  ];
  const colorOptions = [
    { label: "Черный", value: "black" },
    { label: "Белый", value: "white" },
    { label: "Серый", value: "gray" },
    { label: "Красный", value: "red" },
    { label: "Синий", value: "blue" },
  ];
  const yearOptions = Array.from({ length: 30 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return { label: year.toString(), value: year.toString() };
  });
  const monthOptions = Array.from({ length: 12 }, (_, i) => {
    const month = new Date(0, i).toLocaleString("default", { month: "long" });
    return { label: month, value: (i + 1).toString() };
  });
  const mileageOptions = Array.from({ length: 10 }, (_, i) => {
    const mileage = (i + 1) * 10000;
    return {
      label: `${mileage.toLocaleString()} км`,
      value: mileage.toString(),
    };
  });
  const priceOptions = Array.from({ length: 10 }, (_, i) => {
    const price = (i + 1) * 1000;
    return {
      label: `${price.toLocaleString()} $`,
      value: price.toString(),
    };
  });
  const handleSelectChange = (option: Option | null) => {
    console.log("Selected option:", option);
  };
  const [lang, setLang] = useState<{ label: string; value: string } | null>(
    brandOptions[0]
  );

  return (
    <section
      id="intro"
      className="bg-[url('/images/intro-bg.jpg')] bg-cover bg-center relative border-b-[10px] border-primary"
    >
      <div className="absolute w-full h-full bg-black/60" />
      <div className="z-10 relative">
        <Container>
          <div className="py-10 md:py-16">
            <h1 className="text-white text-[28px] md:text-[35px] font-medium mb-5">
              Каталог авто из Кореи
            </h1>
            <div className="flex flex-col md:flex-row gap-2.5 mb-5">
              <Select
                options={brandOptions}
                placeholder="Бренд"
                searchable={true}
                className="w-full md:w-64"
                onChange={handleSelectChange}
                // value={lang}
              />
              <Select
                options={modelOptions}
                placeholder="Модель"
                searchable={true}
                className="w-full md:w-64"
              />
              <Select
                options={generationOptions}
                placeholder="Поколение"
                searchable={true}
                className="w-full md:w-64"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2.5 mb-5">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-xl font-medium text-white">
                  Характеристики
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-2.5">
                  <Select
                  options={fuelOptions}
                  placeholder="Тип топлива"
                  searchable={true}
                  className="w-full md:w-64"
                />
                <Select
                  options={transmissionOptions}
                  placeholder="Трансмиссия"
                  searchable={true}
                  className="w-full md:w-64"
                />
                <Select
                  options={bodyTypeOptions}
                  placeholder="Тип кузова"
                  searchable={true}
                  className="w-full md:w-64"
                />
                <Select
                  options={colorOptions}
                  placeholder="Цвет"
                  searchable={true}
                  className="w-full md:w-64"
                />
                </div>
              </div>
              <div className="flex flex-col gap-5.5">
                <div>
                  <h2 className="text-xl font-medium text-white mb-2.5">
                    Год выпуска
                  </h2>
                  <div className="grid grid-cols-2 gap-2.5">
                    <Select
                      options={yearOptions}
                      placeholder="Начальный год выпуска"
                      searchable={true}
                      className="w-full lg:w-64"
                    />
                    <Select
                      options={monthOptions}
                      placeholder="Начальный месяц выпуска"
                      searchable={true}
                      className="w-full lg:w-64"
                    />
                    <Select
                      options={yearOptions}
                      placeholder="Конечный год выпуска"
                      searchable={true}
                      className="w-full lg:w-64"
                    />
                    <Select
                      options={monthOptions}
                      placeholder="Конечный месяц выпуска"
                      searchable={true}
                      className="w-full lg:w-64"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-medium text-white md:mb-2.5">
                    Пробег
                  </h2>
                  <div className="grid grid-cols-2 gap-2.5">
                    <Select
                      options={mileageOptions}
                      placeholder="Мин. пробег"
                      searchable={true}
                      className="w-full lg:w-64"
                    />
                    <Select
                      options={mileageOptions}
                      placeholder="Макс. пробег"
                      searchable={true}
                      className="w-full lg:w-64"
                    />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-medium text-white mb-2.5">Стоимость</h2>
            <div className="flex flex-col md:flex-row gap-2.5">
              <div className="flex md:flex-col gap-2.5 mb-5">
                <Select
                  options={priceOptions}
                  placeholder="Мин. стоимость"
                  searchable={true}
                  className="w-full md:w-64"
                />
                <Select
                  options={priceOptions}
                  placeholder="Макс. стоимость"
                  searchable={true}
                  className="w-full md:w-64"
                />
              </div>
              <div className="flex flex-row-reverse md:flex-col gap-2.5 mb-5">
                <button className="w-full md:w-64 text-lg py-1.5 bg-primary hover:bg-primary/80 text-white duration-200 rounded-xl cursor-pointer">
                  Показать
                </button>
                <button className="w-full md:w-64 text-lg py-1.5 border-2 bg-white border-primary hover:bg-white/80 text-primary duration-200 rounded-xl cursor-pointer">
                  Очистить
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Intro;
