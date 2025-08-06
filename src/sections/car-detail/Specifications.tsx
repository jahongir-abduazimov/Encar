"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import { RiArrowDownWideFill } from "react-icons/ri";
import { DetailProps } from "@/types";

const Specifications = ({ data }: DetailProps) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-6">
      <Container>
        <div className="flex flex-col">
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-lg flex items-center justify-between bg-gray-100 border-b border-gray-300 py-2.5 px-5 cursor-pointer"
          >
            <span>Технические характеристики</span>
            <RiArrowDownWideFill
              className={`text-[30px] ${open && "rotate-180"}`}
            />
          </button>
          {open && (
            <div className="bg-gray-100/60 p-6 flex flex-wrap gap-5">
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Год выпуска: <span className="font-normal">{data?.year}</span>
              </p>
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Месяц выпуска: <span className="font-normal">{data?.month}</span>
              </p>
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Пробег: <span className="font-normal">{data?.miliage}</span>
              </p>
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Объем двигателя: <span className="font-normal">{data?.engine_capacity}</span>
              </p>
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Трансмиссия:{" "}
                <span className="font-normal">{data?.transmission.name}</span>
              </p>
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Цвет: <span className="font-normal">{data?.color.name}</span>
              </p>
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Топливо: <span className="font-normal">{data?.fuel_type.name}</span>
              </p>
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Тип кузова: <span className="font-normal">{data?.body_type.name}</span>
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Specifications;
