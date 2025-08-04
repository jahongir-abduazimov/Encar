"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import { RiArrowDownWideFill } from "react-icons/ri";

const Safety = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-6">
      <Container>
        <div className="flex flex-col">
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-lg flex items-center justify-between bg-gray-100 border-b border-gray-300 py-2.5 px-5 cursor-pointer"
          >
            <span>Безопасность</span>
            <RiArrowDownWideFill
              className={`text-[30px] ${open && "rotate-180"}`}
            />
          </button>
          {open && (
            <div className="bg-gray-100/60 p-6 flex flex-wrap gap-5">
              <p className="border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Проекционный дисплей (HUD)
              </p>
              <p className="border-b text-gray-400/70 md:hover:text-black border-gray-300 px-3 py-2 hover:bg-gray-100">
                Электронный стояночный тормоз (EPB)
              </p>
              <p className="border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Автоматический кондиционер
              </p>
              <p className="border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Умный ключ
              </p>
              <p className="border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Беспроводной замок двери
              </p>
              <p className="border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Датчик дождя
              </p>
              <p className="border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Автоматический свет
              </p>
              <p className="border-b text-gray-400/70 md:hover:text-black border-gray-300 px-3 py-2 hover:bg-gray-100">
                Шторка/жалюзи (для задних сидений)
              </p>
              <p className="border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Система предупреждения о выходе из полосы (LDWS)
              </p>
              <p className="border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Навигация
              </p>
              <p className="border-b text-gray-400/70 md:hover:text-black border-gray-300 px-3 py-2 hover:bg-gray-100">
                AV-монитор задних сидений
              </p>
              <p className="border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Bluetooth
              </p>
              <p className="border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                CD-плеер
              </p>
              <p className="border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                USB-порт
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Safety;
