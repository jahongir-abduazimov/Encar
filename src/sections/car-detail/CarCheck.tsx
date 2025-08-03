"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import { RiArrowDownWideFill } from "react-icons/ri";

const CarCheck = () => {
  const [open, setOpen] = useState(true);
  const [insuranceOpen, setInsuranceOpen] = useState(true);
  return (
    <div className="mb-6">
      <Container>
        <div className="flex flex-col">
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-lg flex items-center justify-between bg-gray-100 border-b border-gray-300 py-2.5 px-5 cursor-pointer"
          >
            <span>Проверка авто</span>
            <RiArrowDownWideFill
              className={`text-[30px] ${open && "rotate-180"}`}
            />
          </button>
          {open && (
            <div className="bg-gray-100/60 p-6">
              <div className="flex flex-wrap gap-5">
                <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                  Дата инспекции: <span className="font-normal">Н/Д</span>
                </p>
                <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                  Дата диагностики: <span className="font-normal">Н/Д</span>
                </p>
                <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                  VIN: <span className="font-normal">Н/Д</span>
                </p>
                <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                  Год модели: <span className="font-normal">Н/Д</span>
                </p>
                <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                  Тип мотора: <span className="font-normal">Н/Д</span>
                </p>
                <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                  Инциденты: <span className="font-normal">Н/Д</span>
                </p>
                <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                  Простой ремонт: <span className="font-normal">Н/Д</span>
                </p>
                <p className="font-semibold border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                  Тип использования:{" "}
                  <span className="font-normal">
                    Для правительства - 0, для бизнеса - 0, для займа - 0
                  </span>
                </p>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => setInsuranceOpen(!insuranceOpen)}
                  className="w-full text-lg flex items-center justify-between bg-gray-300 border-b border-gray-300 py-2.5 px-5 cursor-pointer"
                >
                  <span>Страховые случаи и инциденты</span>
                  <RiArrowDownWideFill
                    className={`text-[30px] ${insuranceOpen && "rotate-180"}`}
                  />
                </button>
                {insuranceOpen && (
                  <div className="border border-gray-300">
                    <div className="bg-gray-200 border-b border-gray-300">
                      <p className="text-center py-2 text-[35px] font-semibold">
                        Страховые случаи и инциденты
                      </p>
                    </div>
                    <div className="w-full hover:bg-gray-200">sd</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CarCheck;
