"use client";

import React, { useState } from "react";
import CarImage from "../../../public/images/car.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import request from "@/components/config";

dayjs.extend(utc);
dayjs.extend(timezone);

type Car = {
  data: {
    id: string;
    name: string;
    image: string;
    miliage: number;
    price: number;
    year: string;
    updated_at: string;
    comparison: boolean;
    like: boolean;
    color: {
      id: string;
      name: string;
    };
    fuel_type: {
      id: string;
      name: string;
    };
  };
  viewMode?: "grid" | "list";
};

const CarCard = ({ data, viewMode = "grid" }: Car) => {
  const [isLiked, setIsLiked] = useState(data.like);
  const [comparison, setComparison] = useState(data.comparison);
  const formatted =
    dayjs(data.updated_at).tz("Europe/Moscow").format("DD-MM-YYYY HH:mm") +
    " МСК";

  const handleLike = async (id: string) => {
    setIsLiked((prev) => !prev);
    try {
      await request.get(`/cars/like/${id}/`);
    } catch (e) {
      console.error(e);
      // setIsLiked((prev) => !prev);
    }
  };
  const handleCompare = async (id: string) => {
    setComparison((prev) => !prev);
    try {
      await request.get(`/cars/comparison/${id}/`);
    } catch (e) {
      console.error(e);
      // setComparison((prev) => !prev);
    }
  };

  if (viewMode === "list") {
    return (
      <div className="h-36 flex border gap-10 border-gray-300 rounded-xl overflow-hidden hover:border-primary transition-colors">
        <div className="min-w-[220px]">
          <Link href={`/cars/${data.id}`}>
            <Image
              className="w-full h-full object-cover"
              src={CarImage}
              width={200}
              height={200}
              alt={data.name}
            />
          </Link>
        </div>
        <div className="w-full p-4 flex flex-col justify-between">
          <div className="flex gap-5 justify-between">
            <Link
              href={`/cars/${data.id}`}
              className="text-[24px] line-clamp-1"
            >
              {data.name}
            </Link>
            <button onClick={() => handleCompare(data.id)} className={`flex items-center gap-3 font-semibold cursor-pointer mt-2 ${comparison ? "text-primary" : "text-black/50"}`}>
              <MdCompareArrows size={22} />
              <span>В сравнение</span>
            </button>
          </div>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-8">
              <div className="grid grid-cols-2 gap-x-8">
                <div className="flex items-end justify-between gap-5 w-[150px]">
                  <p className="text-sm text-gray-400 font-medium">Год:</p>
                  <p className="text-sm">{data.year}</p>
                </div>
                <div className="flex items-end justify-between gap-5 w-[150px]">
                  <p className="text-sm text-gray-400 font-medium">Топливо:</p>
                  <p className="text-sm">{data.fuel_type.name}</p>
                </div>
                <div className="flex items-end justify-between gap-5 w-[150px]">
                  <p className="text-sm text-gray-400 font-medium">Пробег:</p>
                  <p className="text-sm">{data.miliage.toLocaleString()} km</p>
                </div>
                <div className="flex items-end justify-between gap-5 w-[150px]">
                  <p className="text-sm text-gray-400 font-medium">Цвет:</p>
                  <p className="text-sm">{data.color.name}</p>
                </div>
              </div>
              <div className="w-[250px]">
                <div className="flex items-end gap-2 justify-between mb-2">
                  <p className="text-sm text-gray-400 font-medium">Цена:</p>
                  <p className="text-[30px] leading-[110%]">
                    {data.price.toLocaleString()} ₽
                  </p>
                </div>
                <Link
                  href={`/cars/${data.id}`}
                  className="h-[30px] flex items-center justify-center rounded-md w-full cursor-pointer bg-primary text-white duration-200 hover:shadow-[3px_3px_6px_silver]"
                >
                  Подробнее
                </Link>
              </div>
            </div>
            <button onClick={() => handleLike(data.id)} className={`flex items-center gap-3 font-semibold cursor-pointer mt-2 ${isLiked ? "text-primary" : "text-black/50"}`}>
              <FaHeart size={22} />
              <span>В избранное</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[525px] rounded-xl overflow-hidden border border-gray-300 hover:border-primary">
      <div className="h-[33%]">
        <Link href={`/cars/${data.id}`}>
          <Image
            className="w-full h-full object-cover"
            src={CarImage}
            width={200}
            height={200}
            alt={data.name}
          />
        </Link>
      </div>
      <div className="h-[67%] p-2 flex flex-col items-start justify-between">
        <Link
          href={`/cars/${data.id}`}
          className="text-xl font-medium leading-[110%] line-clamp-2"
        >
          {data.name}
        </Link>
        <div className="w-full">
          <div className="flex flex-col gap-1.5">
            <div className="border-b border-gray-300 flex items-end justify-between pb-1">
              <p className="text-sm text-gray-400 font-medium">Год:</p>
              <p>{data.year}</p>
            </div>
            <div className="border-b border-gray-300 flex items-end justify-between pb-1">
              <p className="text-sm text-gray-400 font-medium">Топливо:</p>
              <p>{data.fuel_type.name}</p>
            </div>
            <div className="border-b border-gray-300 flex items-end justify-between pb-1">
              <p className="text-sm text-gray-400 font-medium">Пробег:</p>
              <p>{data.miliage.toLocaleString()} km</p>
            </div>
            <div className="border-b border-gray-300 flex items-end justify-between pb-1">
              <p className="text-sm text-gray-400 font-medium">Цвет:</p>
              <p>{data.color.name}</p>
            </div>
            <div className="border-b border-gray-300 flex items-end justify-between pb-1 mt-3">
              <p className="text-sm text-gray-400 font-medium">Цена:</p>
              <p className="text-[30px] leading-[110%]">
                {data.price.toLocaleString()} ₽
              </p>
            </div>
          </div>
          <div className="mt-5 mb-2 flex gap-2">
            <button
              onClick={() => handleLike(data.id)}
              className={`min-w-[30px] h-[30px] rounded-md border border-primary flex items-center justify-center cursor-pointer duration-200 hover:shadow-[3px_3px_6px_silver] ${
                isLiked ? "bg-primary text-white" : "text-gray-400"
              }`}
            >
              <FaHeart className="text-lg" />
            </button>
            <button
              onClick={() => handleCompare(data.id)}
              className={`min-w-[30px] h-[30px] rounded-md border border-primary flex items-center justify-center cursor-pointer duration-200 hover:shadow-[3px_3px_6px_silver] ${
                comparison ? "bg-primary text-white" : "text-gray-400"
              }`}
            >
              <MdCompareArrows className="text-xl" />
            </button>
            <Link
              href={`/cars/${data.id}`}
              className="h-[30px] flex items-center justify-center rounded-md w-full cursor-pointer bg-primary text-white duration-200 hover:shadow-[3px_3px_6px_silver]"
            >
              Подробнее
            </Link>
          </div>
          <div className="w-full text-end text-xs text-gray-500">
            <p>Дата объявления</p>
            <p>{formatted}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
