import React from "react";
import CarImage from "../../../public/images/car.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";

const CarCard = () => {
  return (
    <div className="h-[525px] rounded-xl overflow-hidden border border-gray-300 hover:border-primary">
      <div className="h-[33%]">
        <Link href={"/cars/car109125"}>
          <Image
            className="w-full h-full object-cover"
            src={CarImage}
            alt="bmw"
          />
        </Link>
      </div>
      <div className="h-[67%] p-2 flex flex-col items-start justify-between">
        <h3 className="text-xl font-medium leading-[110%] line-clamp-2">
          BMW 4-Series 420d M Sport Coupe
        </h3>
        <div className="w-full">
          <div className="flex flex-col gap-1.5">
            <div className="border-b border-gray-300 flex items-end justify-between pb-1">
              <p className="text-sm text-gray-500">Год:</p>
              <p>2018</p>
            </div>
            <div className="border-b border-gray-300 flex items-end justify-between pb-1">
              <p className="text-sm text-gray-500">Топливо::</p>
              <p>Дизель</p>
            </div>
            <div className="border-b border-gray-300 flex items-end justify-between pb-1">
              <p className="text-sm text-gray-500">Пробег:</p>
              <p>89 451 km</p>
            </div>
            <div className="border-b border-gray-300 flex items-end justify-between pb-1">
              <p className="text-sm text-gray-500">Цвет:</p>
              <p>Белый</p>
            </div>
            <div className="border-b border-gray-300 flex items-end justify-between pb-1 mt-3">
              <p className="text-sm text-gray-500">Цена:</p>
              <p className="text-[30px] leading-[110%]">2 341 226 ₽</p>
            </div>
          </div>
          <div className="mt-5 mb-2 flex gap-2">
            <button className="min-w-[30px] h-[30px] rounded-md border border-primary flex items-center justify-center cursor-pointer duration-200 hover:shadow-[3px_3px_6px_silver]">
              <FaHeart className="text-gray-400 text-lg" />
            </button>
            <button className="min-w-[30px] h-[30px] rounded-md border border-primary flex items-center justify-center cursor-pointer duration-200 hover:shadow-[3px_3px_6px_silver]">
              <MdCompareArrows className="text-gray-400 text-xl" />
            </button>
            <Link
              href={"/cars/car109125"}
              className="h-[30px] flex items-center justify-center rounded-md w-full cursor-pointer bg-primary text-white duration-200 hover:shadow-[3px_3px_6px_silver]"
            >
              Подробнее
            </Link>
          </div>
          <div className="w-full text-end text-xs text-gray-500">
            <p>Дата объявления</p>
            <p>28-07-2025 11:04 МСК</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
