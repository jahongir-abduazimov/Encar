"use client";

import React, { useRef, useState } from "react";
import CarImage from "../../../public/images/car.jpg";
import Container from "@/components/Container";
import Image from "next/image";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import { PiRectangleFill } from "react-icons/pi";
import CarImage2 from "../../../public/images/car-2.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Detail = () => {
  const [priceVisable, setPriceVisable] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };
  return (
    <section className="py-10 md:py-12">
      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-5">
          <div className="w-full lg:w-[60%] h-auto">
            <div className="mb-3">
              <Image className="w-full h-auto" src={CarImage} alt="bmw" />
            </div>
            <div className="relative">
              {/* Scrollable thumbnails */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto scroll-none gap-2 px-9 scrollbar-hide"
              >
                {[...Array(10)].map((_, idx) => (
                  <button
                    key={idx}
                    className="cursor-pointer outline-none max-w-[100px] min-w-[100px] h-[100px] border p-1.5 border-gray-300"
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src={CarImage2}
                      alt="bmw"
                    />
                  </button>
                ))}
              </div>

              {/* Left Arrow */}
              <button
                onClick={scrollLeft}
                className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 h-full px-1"
              >
                <BsChevronLeft size={24} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={scrollRight}
                className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 h-full px-1"
              >
                <BsChevronRight size={24} />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[40%]">
            <h2 className="text-3xl md:text-[35px] leading-[110%] mb-5">
              BMW 4-Series 420d M Sport Coupe
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mb-3">
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-xs text-gray-400">Дата объявления: МСК</p>
                <p className="text-xs text-gray-400">
                  Дата проверки цены: 02-08-2025 14:19 МСК
                </p>
                <p className="text-xs text-gray-400">Просмотров авто: 608</p>
              </div>
              <div className="flex gap-4">
                <button className="w-[45px] h-[45px] rounded-md border hover:border-primary cursor-pointer text-2xl flex items-center justify-center">
                  <IoShareSocialSharp />
                </button>
                <button className="w-[45px] h-[45px] rounded-md border hover:border-primary cursor-pointer text-2xl flex items-center justify-center">
                  <FaRegHeart />
                </button>
                <button className="w-[45px] h-[45px] rounded-md border hover:border-primary cursor-pointer text-2xl flex items-center justify-center">
                  <MdCompareArrows />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="border-b border-gray-200 flex items-end justify-between pb-1">
                <p className="text-xl font-medium text-gray-400">Год:</p>
                <p className="text-xl font-medium">2018</p>
              </div>
              <div className="border-b border-gray-200 flex items-end justify-between pb-1">
                <p className="text-xl font-medium text-gray-400">Топливо::</p>
                <p className="text-xl font-medium">Дизель</p>
              </div>
              <div className="border-b border-gray-200 flex items-end justify-between pb-1">
                <p className="text-xl font-medium text-gray-400">Пробег:</p>
                <p className="text-xl font-medium">89 451 km</p>
              </div>
              <div className="border-b border-gray-200 flex items-end justify-between pb-1">
                <p className="text-xl font-medium text-gray-400">Цвет:</p>
                <p className="text-xl font-medium">Белый</p>
              </div>
            </div>
            <div className="flex flex-col-reverse gap-3 items-center sm:flex-row justify-between mt-5">
              <button
                onClick={() => setPriceVisable(!priceVisable)}
                className="w-full sm:w-auto font-medium py-2 px-10 rounded-lg cursor-pointer border-2 border-primary duration-200 hover:shadow-[3px_3px_6px_silver]"
              >
                Показать расчет цены
              </button>
              <p className="text-[30px] font-medium">2 341 226 ₽</p>
            </div>
            {priceVisable && (
              <div className="mt-3 bg-gray-50 border-2 rounded-lg border-gray-300 p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <PiRectangleFill
                    size={12}
                    className="text-primary rotate-90"
                  />
                  <p>Итоговая цена 2 341 226 ₽ состоит из:</p>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <PiRectangleFill
                    size={12}
                    className="text-primary rotate-90 mt-1.5"
                  />
                  <p>
                    Услуги агента: <br />{" "}
                    <span className="font-semibold underline">100 000 ₽</span>
                  </p>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <PiRectangleFill
                    size={12}
                    className="text-primary rotate-90 mt-1.5"
                  />
                  <p>
                    Стоимость авто + расходы в Корее: <br />{" "}
                    <span className="font-semibold underline">1 236 107 ₽</span>
                  </p>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <PiRectangleFill
                    size={12}
                    className="text-primary rotate-90 mt-1.5"
                  />
                  <p>
                    Таможенные платежи: <br />{" "}
                    <span className="font-semibold underline">889 919 ₽</span>
                  </p>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <PiRectangleFill
                    size={12}
                    className="text-primary rotate-90 mt-1.5"
                  />
                  <p>
                    Утильсбор: <br />{" "}
                    <span className="font-semibold underline">5 200 ₽</span>
                  </p>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <PiRectangleFill
                    size={12}
                    className="text-primary rotate-90 mt-1.5"
                  />
                  <p>
                    СтоиТаможенный брокер: <br />{" "}
                    <span className="font-semibold underline">110 000 ₽</span>
                  </p>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <PiRectangleFill
                    size={12}
                    className="text-primary rotate-90 mt-1.5"
                  />
                  <p>
                    Автовоз: <br />{" "}
                    <span className="font-semibold underline">0 ₽</span>
                  </p>
                </div>
                <p className="text-xs leading-[110%] mt-2">
                  * цена может незначительно отличаться в связи с техническими
                  особенностями, например, при задержке обновления курсов валют
                  от ЦБ или в связи с округлением чисел.
                </p>
              </div>
            )}
            <button className="mt-4 text-lg bg-primary text-white font-medium py-[5px] w-full rounded-lg cursor-pointer border-2 border-primary duration-200 hover:shadow-[3px_3px_6px_silver]">
              Задать вопрос по Авто
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Detail;
