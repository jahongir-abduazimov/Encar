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
    <div className="pt-10 pb-20">
      <Container>
        <div className="flex items-start gap-10">
          <div className="min-w-[230px] border border-black/40 flex flex-col">
            <button
              onClick={() => router.push("/cabinet?section=balance")}
              className={`flex items-center gap-3 py-2 px-3 cursor-pointer hover:bg-black/40 border-b border-black/40 hover:text-white ${
                section === "balance" || !section ? "bg-primary text-white" : ""
              }`}
            >
              <MdAccountBalanceWallet size={22} />
              <span>Баланс</span>
            </button>
            <button
              onClick={() => router.push("/cabinet?section=subscribes")}
              className={`flex items-center gap-3 py-2 px-3 cursor-pointer hover:bg-black/40 border-b border-black/40 hover:text-white ${
                section === "subscribes" ? "bg-primary text-white" : ""
              }`}
            >
              <MdNotifications size={22} />
              <span>Подписки</span>
            </button>
            <button
              onClick={() => router.push("/cabinet?section=reports")}
              className={`flex items-center gap-3 py-2 px-3 cursor-pointer hover:bg-black/40 border-b border-black/40 hover:text-white ${
                section === "reports" ? "bg-primary text-white" : ""
              }`}
            >
              <FaClipboardList size={20} />
              <span>Отчеты</span>
            </button>
            <button
              onClick={() => router.push("/cabinet?section=favorites")}
              className={`flex items-center gap-3 py-2 px-3 cursor-pointer hover:bg-black/40 border-b border-black/40 hover:text-white ${
                section === "favorites" ? "bg-primary text-white" : ""
              }`}
            >
              <FaHeart size={20} />
              <span>Избранное</span>
            </button>
            <button
              onClick={() => router.push("/cabinet?section=compare")}
              className={`flex items-center gap-3 py-2 px-3 cursor-pointer hover:bg-black/40 border-b border-black/40 hover:text-white ${
                section === "compare" ? "bg-primary text-white" : ""
              }`}
            >
              <MdCompareArrows size={22} />
              <span>Сравнение</span>
            </button>
            <button
              onClick={() => router.push("/cabinet?section=user_settings")}
              className={`flex items-center gap-3 py-2 px-3 cursor-pointer hover:bg-black/40 border-b border-black/40 hover:text-white ${
                section === "user_settings" ? "bg-primary text-white" : ""
              }`}
            >
              <IoMdSettings size={22} />
              <span>Настройки</span>
            </button>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between w-full">
              <p className="text-[40px] font-medium">Личный кабинет</p>
              <button className="flex items-center gap-3 cursor-pointer hover:text-primary">
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
