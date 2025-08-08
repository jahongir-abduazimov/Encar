"use client";

import React from "react";
import Container from "@/components/Container";
import {
  MdAccountBalanceWallet,
  MdCompareArrows,
  MdLogout,
  MdNotifications,
} from "react-icons/md";
import { FaClipboardList, FaHeart } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import Balance from "./Balance";
import Subscriptions from "./Subscriptions";
import Reports from "./Reports";
import Likes from "./Likes";
import Compares from "./Compares";
import Settings from "./Settings";
import { useRouter, useSearchParams } from "next/navigation";

const Cabinet = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  return (
    <div className="sm:pt-10 pb-20">
      <Container>
        <div className="sm:hidden flex gap-5 border-b border-gray-400 overflow-x-auto justify-between">
          <button
            onClick={() => router.push("/cabinet?section=balance")}
            className={`flex flex-col items-center py-2 ${section === "balance" || !section ? "text-primary" : "text-black"
              }`}
          >
            <MdAccountBalanceWallet size={24} />
            <span className="text-xs">Баланс</span>
          </button>
          <button
            onClick={() => router.push("/cabinet?section=subscribes")}
            className={`flex flex-col items-center py-2 ${section === "subscribes" ? "text-primary" : "text-black"
              }`}
          >
            <MdNotifications size={24} />
            <span className="text-xs">Подписки</span>
          </button>
          <button
            onClick={() => router.push("/cabinet?section=reports")}
            className={`flex flex-col items-center py-2 ${section === "reports" ? "text-primary" : "text-black"
              }`}
          >
            <FaClipboardList size={24} />
            <span className="text-xs">Отчеты</span>
          </button>
          <button
            onClick={() => router.push("/cabinet?section=favorites")}
            className={`flex flex-col items-center py-2 ${section === "favorites" ? "text-primary" : "text-black"
              }`}
          >
            <FaHeart size={24} />
            <span className="text-xs">Избранное</span>
          </button>
          <button
            onClick={() => router.push("/cabinet?section=compare")}
            className={`flex flex-col items-center py-2 ${section === "compare" ? "text-primary" : "text-black"
              }`}
          >
            <MdCompareArrows size={24} />
            <span className="text-xs">Сравнение</span>
          </button>
          <button
            onClick={() => router.push("/cabinet?section=user_settings")}
            className={`flex flex-col items-center py-2 ${section === "user_settings" ? "text-primary" : "text-black"
              }`}
          >
            <IoMdSettings size={24} />
            <span className="text-xs">Настройки</span>
          </button>
        </div>
        <div className="sm:hidden flex justify-end">
          <button
            onClick={() => {
              localStorage.removeItem("auth");
              window.location.reload();
            }}
            className="flex items-center gap-3 cursor-pointer hover:text-primary"
          >
            <span className="text-[20px] font-semibold">Выйти</span>
            <MdLogout className="text-[20px]" />
          </button>
        </div>
        <div className="flex items-start gap-10">
          <div className="hidden md:min-w-[230px] border border-black/40 sm:flex flex-col">
            <button
              onClick={() => router.push("/cabinet?section=balance")}
              className={`flex items-center gap-3 py-2 px-3 cursor-pointer border-b border-black/40 hover:text-white ${section === "balance" || !section ? "bg-primary text-white" : "hover:bg-black/40"
                }`}
            >
              <MdAccountBalanceWallet size={22} />
              <span className="hidden md:block">Баланс</span>
            </button>
            <button
              onClick={() => router.push("/cabinet?section=subscribes")}
              className={`flex items-center gap-3 py-2 px-3 cursor-pointer border-b border-black/40 hover:text-white ${section === "subscribes" ? "bg-primary text-white" : "hover:bg-black/40"
                }`}
            >
              <MdNotifications size={22} />
              <span className="hidden md:block">Подписки</span>
            </button>
            <button
              onClick={() => router.push("/cabinet?section=reports")}
              className={`flex items-center gap-3 py-2 px-3 cursor-pointer border-b border-black/40 hover:text-white ${section === "reports" ? "bg-primary text-white" : "hover:bg-black/40"
                }`}
            >
              <FaClipboardList size={20} />
              <span className="hidden md:block">Отчеты</span>
            </button>
            <button
              onClick={() => router.push("/cabinet?section=favorites")}
              className={`flex items-center gap-3 py-2 px-3 cursor-pointer border-b border-black/40 hover:text-white ${section === "favorites" ? "bg-primary text-white" : "hover:bg-black/40"
                }`}
            >
              <FaHeart size={20} />
              <span className="hidden md:block">Избранное</span>
            </button>
            <button
              onClick={() => router.push("/cabinet?section=compare")}
              className={`flex items-center gap-3 py-2 px-3 cursor-pointer border-b border-black/40 hover:text-white ${section === "compare" ? "bg-primary text-white" : "hover:bg-black/40"
                }`}
            >
              <MdCompareArrows size={22} />
              <span className="hidden md:block">Сравнение</span>
            </button>
            <button
              onClick={() => router.push("/cabinet?section=user_settings")}
              className={`flex items-center gap-3 py-2 px-3 cursor-pointer hover:text-white ${section === "user_settings" ? "bg-primary text-white" : "hover:bg-black/40"
                }`}
            >
              <IoMdSettings size={22} />
              <span className="hidden md:block">Настройки</span>
            </button>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between w-full">
              <p className="text-[30px] md:text-[40px] font-medium">Личный кабинет</p>
              <button
                onClick={() => {
                  localStorage.removeItem("auth");
                  window.location.reload();
                }}
                className="hidden sm:flex items-center gap-3 cursor-pointer hover:text-primary"
              >
                <span className="text-[20px] font-semibold">Выйти</span>
                <MdLogout className="text-[20px]" />
              </button>
            </div>
            <div>
              {section === "balance" || !section ? <Balance /> : null}
              {section === "subscribes" && <Subscriptions />}
              {section === "reports" && <Reports />}
              {section === "favorites" && <Likes />}
              {section === "compare" && <Compares />}
              {section === "user_settings" && <Settings />}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cabinet;
