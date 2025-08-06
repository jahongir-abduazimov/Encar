"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import { RiArrowDownWideFill } from "react-icons/ri";

const ExteriorInterior = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-6">
      <Container>
        <div className="flex flex-col">
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-lg flex items-center justify-between bg-gray-100 border-b border-gray-300 py-2.5 px-5 cursor-pointer"
          >
            <span>Exterior/Interior</span>
            <RiArrowDownWideFill
              className={`text-[30px] ${open && "rotate-180"}`}
            />
          </button>
          {open && (
            <div className="bg-gray-100/60 p-6 flex flex-wrap gap-5">
              {/* <p className="border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Люк
              </p> */}
              {/* <p className="border-b text-gray-400/70 md:hover:text-black border-gray-300 px-3 py-2 hover:bg-gray-100">
                Подушка безопасности (водитель/пассажир)
              </p> */}
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.side_airbag ? "" : "text-gray-400/70"
                }`}
              >
                Боковая подушка безопасности
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.curtain_airbag ? "" : "text-gray-400/70"
                }`}
              >
                Шторка безопасности
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.abs ? "" : "text-gray-400/70"
                }`}
              >
                Система антиблокировки тормозов (ABS)
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.traction_control ? "" : "text-gray-400/70"
                }`}
              >
                Система контроля тяги (TCS)
              </p>
              <p className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.esc ? "" : "text-gray-400/70"
                }`}>
                Система электронной стабилизации (ESC)
              </p>
              <p className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.tpms ? "" : "text-gray-400/70"
                }`}>
                Система контроля давления в шинах (TPMS)
              </p>
              <p className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.ldws ? "" : "text-gray-400/70"
                }`}>
                Система предупреждения о выходе из полосы (LDWS)
              </p>
              {/* <p className="border-b text-gray-400/70 md:hover:text-black border-gray-300 px-3 py-2 hover:bg-gray-100">
                Электронная система управления подвеской (ECS)
              </p> */}
              {/* <p className="border-b text-gray-400/70 md:hover:text-black border-gray-300 px-3 py-2 hover:bg-gray-100">
                Датчик парковки (передний/задний)
              </p> */}
              {/* <p className="border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Система предупреждения о перекрестном движении сзади
              </p> */}
              <p className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.rear_view_camera ? "" : "text-gray-400/70"
                }`}>
                Камера заднего вида
              </p>
              {/* <p className="border-b text-gray-400/70 md:hover:text-black border-gray-300 px-3 py-2 hover:bg-gray-100">
                Камера 360 градусов
              </p>
              <p className="border-b border-gray-300 px-3 py-2 hover:bg-gray-100">
                Система антиблокировки тормозов (ABS)
              </p> */}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ExteriorInterior;
