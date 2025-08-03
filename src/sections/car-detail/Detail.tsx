"use client";

import React, { useState } from "react";
import CarImage from "../../../public/images/car.jpg";
import Container from "@/components/Container";
import Image from "next/image";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import { PiRectangleFill } from "react-icons/pi";

const Detail = () => {
  const [priceVisable, setPriceVisable] = useState(false);
  return (
    <section className="py-12">
      <Container>
        <div className="flex items-start gap-5">
          <div className="w-[60%] h-auto">
            <Image className="w-full h-auto" src={CarImage} alt="bmw" />
          </div>
          <div className="w-[40%]">
            <h2 className="text-[35px] leading-[110%] mb-5">
              BMW 4-Series 420d M Sport Coupe
            </h2>
            <div className="flex items-center justify-between mb-3">
              <div>
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
            <div className="flex justify-between mt-5">
              <button
                onClick={() => setPriceVisable(!priceVisable)}
                className="font-medium py-[5px] px-10 rounded-lg cursor-pointer border-2 border-primary duration-200 hover:shadow-[3px_3px_6px_silver]"
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
