"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import { RiArrowDownWideFill } from "react-icons/ri";

const Safety = ({ data }: any) => {
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
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.epb ? "" : "text-gray-400/70"
                }`}
              >
                Электронный стояночный тормоз (EPB)
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.automatic_ac ? "" : "text-gray-400/70"
                }`}
              >
                Автоматический кондиционер
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.smart_key ? "" : "text-gray-400/70"
                }`}
              >
                Умный ключ
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.wireless_door_lock ? "" : "text-gray-400/70"
                }`}
              >
                Беспроводной замок двери
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.rain_sensor ? "" : "text-gray-400/70"
                }`}
              >
                Датчик дождя
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.auto_light ? "" : "text-gray-400/70"
                }`}
              >
                Автоматический свет
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.navigation ? "" : "text-gray-400/70"
                }`}
              >
                Навигация
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.bluetooth ? "" : "text-gray-400/70"
                }`}
              >
                Bluetooth
              </p>
              <p
                className={`border-b border-gray-300 px-3 py-2 hover:bg-gray-100 ${
                  data?.usb_port ? "" : "text-gray-400/70"
                }`}
              >
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
