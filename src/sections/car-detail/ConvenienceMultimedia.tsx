"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import { RiArrowDownWideFill } from "react-icons/ri";

const ConvenienceMultimedia = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-6">
      <Container>
        <div className="flex flex-col">
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-lg flex items-center justify-between bg-gray-100 border-b border-gray-300 py-2.5 px-5 cursor-pointer"
          >
            <span>Удобство / Мультимедиа</span>
            <RiArrowDownWideFill
              className={`text-[30px] ${open && "rotate-180"}`}
            />
          </button>
          {open && (
            <div className="bg-gray-100/60 p-6 flex flex-wrap gap-5">
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.cruise_control ? "" : "text-gray-400/70"
                }`}
              >
                Круиз-контроль (обычный/адаптивный)
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.leather_seats ? "" : "text-gray-400/70"
                }`}
              >
                Кожаные сиденья
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.seat_electric_adjustment_front ? "" : "text-gray-400/70"
                }`}
              >
                Электрорегулировка сидений (водитель/пассажир)
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.seat_electric_adjustment_rear ? "" : "text-gray-400/70"
                }`}
              >
                Электрорегулировка сидений (задний ряд)
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.seat_heating_front_rear ? "" : "text-gray-400/70"
                }`}
              >
                Подогрев сидений (передних/задних)
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.seat_memory_front ? "" : "text-gray-400/70"
                }`}
              >
                Память сидений (водитель/пассажир)
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.seat_ventilation_front ? "" : "text-gray-400/70"
                }`}
              >
                Вентилируемые сиденья (водитель/пассажир)
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.seat_ventilation_rear ? "" : "text-gray-400/70"
                }`}
              >
                Вентилируемые сиденья (задний ряд)
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.massage_seats ? "" : "text-gray-400/70"
                }`}
              >
                Массажные сиденья
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.abs_system ? "" : "text-gray-400/70"
                }`}
              >
                Система антиблокировки тормозов (ABS)
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.rear_av_monitor ? "" : "text-gray-400/70"
                }`}
              >
                AV-монитор задних сидений
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.cd_player ? "" : "text-gray-400/70"
                }`}
              >
                CD-плеер
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.usb_port ? "" : "text-gray-400/70"
                }`}
              >
                USB-порт
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.aux_port ? "" : "text-gray-400/70"
                }`}
              >
                AUX-порт
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ConvenienceMultimedia;
