"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import { RiArrowDownWideFill } from "react-icons/ri";

const Specifications = () => {
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
                Год выпуска: <span className="font-normal">2018</span>
              </p>
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Месяц выпуска: <span className="font-normal">12</span>
              </p>
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Пробег: <span className="font-normal">89 451</span>
              </p>
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Объем двигателя: <span className="font-normal">1 995</span>
              </p>
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Трансмиссия:{" "}
                <span className="font-normal">Автомат (все типы)</span>
              </p>
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Цвет: <span className="font-normal">Белый</span>
              </p>
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Топливо: <span className="font-normal">Дизель</span>
              </p>
              <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Тип кузова: <span className="font-normal">Спортивный авто</span>
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Specifications;
