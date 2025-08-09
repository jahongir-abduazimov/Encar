"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "../../public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import LoginModal from "./LoginModal";
import { usePathname, useRouter } from "next/navigation";
import request from "./config";

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean | string>(false);
  const pathname = usePathname();
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const getProfile = async () => {
    try {
      await request.get("/auth/profile/");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  useEffect(() => {
    const authToken = localStorage.getItem("auth");
    setToken(authToken);
  }, []);

  if (pathname.slice(0, 15) === "/reset-password") {
    return null;
  }

  return (
    <header className="bg-primary relative z-50">
      <LoginModal
        isOpen={isLoginModalOpen}
        handleClose={() => setIsLoginModalOpen(false)}
      />

      {/* Top Bar */}
      <div className="bg-[#282828]">
        <Container>
          <div className="py-1.5 flex items-center justify-end">
            {/* <div className="flex gap-3 text-white text-xs md:text-sm">
              <p>Подписок создано: 255</p>
              <p>Отчетов заказано: 896</p>
            </div> */}
            <button
              onClick={() => {
                if (!token) {
                  setIsLoginModalOpen(true);
                } else {
                  router.push("/cabinet");
                }
              }}
              className="flex text-start items-center gap-2 cursor-pointer text-white hover:text-primary"
            >
              <FaUserLarge className="hidden md:block" />
              <span className="text-xs md:text-sm">Личный кабинет</span>
            </button>
          </div>
        </Container>
      </div>

      {/* Navigation */}
      <Container>
        <nav className="h-[70px] md:h-[100px] flex items-center justify-between">
          <Link href={"/"}>
            <Image
              className="w-[80px] md:w-[120px]"
              src={Logo}
              alt="gm-car logo"
            />
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpenMenu(true)}>
            <IoMdMenu className="text-white text-[30px]" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-white text-lg">
            <Link
              href={"/search-auto"}
              className={`${
                pathname.slice(0, 12) === "/search-auto" && "border-white"
              } border-b-2 border-transparent hover:border-white`}
            >
              Каталог авто из Кореи
            </Link>
            <Link
              href={"/poryadok-pokupki-avtomobilya"}
              className={`${
                pathname === "/poryadok-pokupki-avtomobilya" && "border-white"
              } border-b-2 border-transparent hover:border-white`}
            >
              Порядок покупки авто из Кореи
            </Link>
            <Link
              href={"/bezopasnaya-sdelka"}
              className={`${
                pathname === "/bezopasnaya-sdelka" && "border-white"
              } border-b-2 border-transparent hover:border-white`}
            >
              Безопасная сделка
            </Link>
            <Link
              href={"/chasto-zadavaemye-voprosy"}
              className={`${
                pathname === "/chasto-zadavaemye-voprosy" && "border-white"
              } border-b-2 border-transparent hover:border-white`}
            >
              ЧаВо
            </Link>
            <Link
              href={"/partneram"}
              className={`${
                pathname === "/partneram" && "border-white"
              } border-b-2 border-transparent hover:border-white`}
            >
              Партнерам
            </Link>
            <div className="relative group">
              <Link
                href={"/o-nas"}
                className={`${
                  pathname === "/o-nas" && "border-white"
                } border-b-2 border-transparent hover:border-white`}
              >
                О нас
              </Link>
              <div className="absolute -left-20 top-full w-64 bg-primary text-white rounded-b z-40 shadow-lg pb-2 pt-5 px-4 space-y-2 hidden group-hover:block">
                <Link
                  href="/forma-obratnoj-svyazi"
                  className="block leading-[110%] hover:underline mb-5"
                >
                  Форма обратной связи
                </Link>
                <Link
                  href="/contacts"
                  className="block leading-[110%] hover:underline mb-5"
                >
                  Контакты
                </Link>
                <Link
                  href="/dogovor-oferta"
                  className="block leading-[110%] hover:underline mb-5"
                >
                  Договор-оферта
                </Link>
                <Link
                  href="/privacy-policy"
                  className="block leading-[110%] hover:underline mb-5"
                >
                  Политика конфиденциальности
                </Link>
                <Link
                  href="/refund-policy"
                  className="block leading-[110%] hover:underline mb-5"
                >
                  Политика возврата
                </Link>
                <Link
                  href="/disclaimer"
                  className="block leading-[110%] hover:underline mb-5"
                >
                  Отказ от ответственности
                </Link>
                <Link
                  href="/o-nas"
                  className="block leading-[110%] hover:underline"
                >
                  О проекте
                </Link>
                {/* <Link href="/reviews" className="block leading-[110%] hover:underline">Отзывы о Encar-Russia.ru</Link> */}
              </div>
            </div>
          </div>
        </nav>
      </Container>

      {/* Mobile Full Screen Menu */}
      {isOpenMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
          {/* Header: Logo & Close Button */}
          <div className="flex justify-end items-center px-6 py-4 border-b">
            <button onClick={() => setIsOpenMenu(false)}>
              <IoMdClose className="text-[30px] text-black" />
            </button>
          </div>

          {/* Scrollable Menu */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            <Link
              href="/search-auto"
              onClick={() => setIsOpenMenu(false)}
              className={`block border px-4 py-3 text-center text-black text-sm font-medium rounded ${
                pathname.slice(0, 12) === "/search-auto" &&
                "bg-primary text-white"
              }`}
            >
              Каталог авто из Кореи
            </Link>
            <Link
              href="/poryadok-pokupki-avtomobilya"
              onClick={() => setIsOpenMenu(false)}
              className={`block border px-4 py-3 text-center text-black text-sm font-medium rounded ${
                pathname === "/poryadok-pokupki-avtomobilya" &&
                "bg-primary text-white"
              }`}
            >
              Порядок покупки авто из Кореи
            </Link>
            <Link
              href="/bezopasnaya-sdelka"
              onClick={() => setIsOpenMenu(false)}
              className={`block border px-4 py-3 text-center text-black text-sm font-medium rounded ${
                pathname === "/bezopasnaya-sdelka" && "bg-primary text-white"
              }`}
            >
              Безопасная сделка
            </Link>
            <Link
              href="/chasto-zadavaemye-voprosy"
              onClick={() => setIsOpenMenu(false)}
              className={`block border px-4 py-3 text-center text-black text-sm font-medium rounded ${
                pathname === "/chasto-zadavaemye-voprosy" &&
                "bg-primary text-white"
              }`}
            >
              ЧаВо
            </Link>
            <Link
              href="/partneram"
              onClick={() => setIsOpenMenu(false)}
              className={`block border px-4 py-3 text-center text-black text-sm font-medium rounded ${
                pathname === "/partneram" && "bg-primary text-white"
              }`}
            >
              Партнерам
            </Link>
            <div className="relative">
              <button
                onClick={() =>
                  setIsOpenMenu(isOpenMenu === "about" ? true : "about")
                }
                className="block border px-4 py-3 text-center text-black text-sm font-medium rounded w-full"
                style={{
                  background: pathname === "/o-nas" ? "#c8102e" : undefined,
                  color: pathname === "/o-nas" ? "white" : undefined,
                }}
              >
                О нас
              </button>
              {isOpenMenu === "about" && (
                <div className="flex flex-col items-center w-full rounded-b z-40 py-2 px-4 space-y-2">
                  <Link
                    href="/forma-obratnoj-svyazi"
                    onClick={() => setIsOpenMenu(false)}
                    className="block mb-2"
                  >
                    Форма обратной связи
                  </Link>
                  <Link
                    href="/contacts"
                    onClick={() => setIsOpenMenu(false)}
                    className="block mb-2"
                  >
                    Контакты
                  </Link>
                  <Link
                    href="/dogovor-oferta"
                    onClick={() => setIsOpenMenu(false)}
                    className="block mb-2"
                  >
                    Договор-оферта
                  </Link>
                  <Link
                    href="/privacy-policy"
                    onClick={() => setIsOpenMenu(false)}
                    className="block mb-2"
                  >
                    Политика конфиденциальности
                  </Link>
                  <Link
                    href="/refund-policy"
                    onClick={() => setIsOpenMenu(false)}
                    className="block mb-2"
                  >
                    Политика возврата
                  </Link>
                  <Link
                    href="/disclaimer"
                    onClick={() => setIsOpenMenu(false)}
                    className="block mb-2"
                  >
                    Отказ от ответственности
                  </Link>
                  <Link
                    href="/o-nas"
                    onClick={() => setIsOpenMenu(false)}
                    className="block mb-2"
                  >
                    О проекте
                  </Link>
                  {/* <Link href="/reviews" onClick={() => setIsOpenMenu(false)} className="block">Отзывы о Encar-Russia.ru</Link> */}
                </div>
              )}
            </div>
          </div>

          {/* Sticky Bottom: Личный кабинет */}
          <div className="shadow-[5px_0_10px_silver] sticky bottom-0 bg-white px-6 py-4">
            <button
              onClick={() => {
                if (!token) {
                  setIsLoginModalOpen(true);
                  setIsOpenMenu(false);
                } else {
                  router.push("/cabinet");
                  setIsOpenMenu(false);
                }
              }}
              className="w-full flex items-center justify-center gap-2 text-sm font-medium text-black"
            >
              <FaUserLarge />
              <span>Личный кабинет</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
