"use client";

import Container from "@/components/Container";
import Select from "@/components/ui/Select";
import React, { useState } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoShareSocialSharp } from "react-icons/io5";
import Pagination from "@/components/ui/Pagination";
import CarCard from "./CarCard";

type Option = {
  label: string;
  value: string;
};

const Filters = () => {
  const [page, setPage] = useState(1);
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
  const sortOption = [
    { label: "Дата объявления ↓", value: "created_at" },
    { label: "Пробег ↑", value: "mileage_up" },
    { label: "Пробег ↓", value: "mileage_down" },
    { label: "Цена ↑", value: "date_up" },
    { label: "Цена ↓", value: "date_down" },
    { label: "Год ↑", value: "year_up" },
    { label: "Год ↓", value: "year_down" },
  ];

  const handleSelectChange = (option: Option | null) => {
    console.log("Selected option:", option);
  };
  return (
    <section className="py-10 md:py-14">
      <Container>
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-4 items-start gap-8">
          <div className="flex flex-col gap-6">
            <Select
              options={brandOptions}
              onChange={handleSelectChange}
              placeholder="Бренд"
              searchable
              className="w-full"
            />
            <div className="flex flex-col gap-2.5">
              <h2 className="text-xl font-medium text-primary">
                Характеристики
              </h2>
              <Select
                options={fuelOptions}
                placeholder="Тип топлива"
                searchable={true}
                className="w-full"
              />
              <Select
                options={transmissionOptions}
                placeholder="Трансмиссия"
                searchable={true}
                className="w-full"
              />
              <Select
                options={bodyTypeOptions}
                placeholder="Тип кузова"
                searchable={true}
                className="w-full"
              />
              <Select
                options={colorOptions}
                placeholder="Цвет"
                searchable={true}
                className="w-full"
              />
              <button className="text-lg bg-black text-white font-medium py-[5px] w-full rounded-lg cursor-pointer border-2 border-black duration-200 hover:shadow-[3px_3px_6px_silver]">
                Инструкция
              </button>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-6">
            <Select
              options={modelOptions}
              placeholder="Модель"
              searchable
              className="w-full"
            />
            <div className="flex flex-col gap-5.5">
              <div>
                <h2 className="text-xl font-medium text-primary mb-2.5">
                  Год выпуска
                </h2>
                <div className="grid grid-cols-2 gap-y-2.5 gap-x-5">
                  <Select
                    options={yearOptions}
                    placeholder="Начальный год выпуска"
                    searchable={true}
                    className="w-full"
                  />
                  <Select
                    options={monthOptions}
                    placeholder="Начальный месяц выпуска"
                    searchable={true}
                    className="w-full"
                  />
                  <Select
                    options={yearOptions}
                    placeholder="Конечный год выпуска"
                    searchable={true}
                    className="w-full"
                  />
                  <Select
                    options={monthOptions}
                    placeholder="Конечный месяц выпуска"
                    searchable={true}
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-medium text-primary mb-2.5">
                  Пробег
                </h2>
                <div className="grid grid-cols-2 gap-y-2.5 gap-x-5">
                  <Select
                    options={mileageOptions}
                    placeholder="Мин. пробег"
                    searchable={true}
                    className="w-full"
                  />
                  <Select
                    options={mileageOptions}
                    placeholder="Макс. пробег"
                    searchable={true}
                    className="w-full"
                  />
                  <Select
                    options={priceOptions}
                    placeholder="Мин. стоимость"
                    searchable={true}
                    className="w-full"
                  />
                  <Select
                    options={priceOptions}
                    placeholder="Макс. стоимость"
                    searchable={true}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-15">
            <Select
              options={generationOptions}
              placeholder="Поколение"
              searchable
              className="w-full"
            />
            <div className="flex flex-col gap-y-2.5">
              <button className="text-lg font-medium py-[5px] w-full rounded-lg cursor-pointer border-2 duration-200 hover:shadow-[3px_3px_6px_silver]">
                Очистить
              </button>
              <button className="text-lg font-medium py-[5px] w-full rounded-lg cursor-pointer border-2 border-primary text-primary duration-200 hover:shadow-[3px_3px_6px_silver]">
                Подписаться
              </button>
              <button className="text-lg bg-primary text-white font-medium py-[5px] w-full rounded-lg cursor-pointer border-2 border-primary duration-200 hover:shadow-[3px_3px_6px_silver]">
                Показать
              </button>
              <p className="text-xl text-center text-gray-500 font-medium py-[5px] w-full">
                Всего найдено: 52873
              </p>
              <button className="text-lg flex items-center gap-5 justify-center font-medium py-[5px] w-full cursor-pointer">
                <IoShareSocialSharp className="text-2xl" />
                <span>Поделиться</span>
                <HiOutlineArrowLongRight className="text-3xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex flex-col md:flex-row gap-2.5 mb-5">
            <Select
              options={brandOptions}
              placeholder="Бренд"
              searchable={true}
              className="w-full md:w-64"
              onChange={handleSelectChange}
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
              <h2 className="text-xl font-medium text-primary">
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
                <h2 className="text-xl font-medium text-primary mb-2.5">
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
                <h2 className="text-xl font-medium text-primary md:mb-2.5">
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
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-2.5 gap-y-5 mb-5">
            <button className="w-full md:w-64 text-sm py-1.5 border-2 bg-white border-primary hover:bg-white/80 text-primary duration-200 rounded-lg cursor-pointer">
              Очистить
            </button>
            <button className="w-full md:w-64 text-sm py-1.5 bg-primary hover:bg-primary/80 text-white duration-200 rounded-lg cursor-pointer">
              Показать
            </button>
            <button className="w-full md:w-64 text-sm py-1.5 border-2 border-primary text-black duration-200 rounded-lg cursor-pointer">
              Подписаться
            </button>
            <button className="w-full flex gap-2 items-center justify-center md:w-64 text-sm py-1.5 border-2 duration-200 rounded-lg cursor-pointer">
              <IoShareSocialSharp size={20} />
              <span>Поделиться</span>
              <HiOutlineArrowLongRight size={20} />
            </button>
          </div>
        </div>

        <div className="w-full my-7 flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-8 mt-15">
          <div className="w-full flex items-center gap-10">
            <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
              <p>Сортировать по:</p>
              <Select options={sortOption} value={sortOption[0]} className="w-full lg:w-64" />
            </div>
            <div className="hidden md:flex gap-4">
              <button className="cursor-pointer">
                <BsGrid3X3GapFill className="text-[40px] text-primary" />
              </button>
              <button className="cursor-pointer">
                <FaThList className="text-[40px] text-gray-500" />
              </button>
            </div>
          </div>
          <Pagination
            currentPage={page}
            totalPages={100}
            onPageChange={(page) => setPage(page)}
            className="w-full lg:max-w-[50%]"
          />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
        <Pagination
          currentPage={page}
          totalPages={20}
          onPageChange={(page) => setPage(page)}
          className="max-w-[100vw] mt-5"
        />
      </Container>
    </section>
  );
};

export default Filters;
