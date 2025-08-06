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
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter()
  const [token, setToken] = useState<string | null>(null);
  const getProfile = async () => {
    try {
      await request.get("/auth/profile/")
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getProfile()
  }, [])
  useEffect(() => {
    const authToken = localStorage.getItem("auth");
    setToken(authToken);
  }, []);

  return (
    <header className="bg-primary relative z-50">
      <LoginModal
        isOpen={isLoginModalOpen}
        handleClose={() => setIsLoginModalOpen(false)}
      />

      {/* Top Bar */}
      <div className="bg-[#282828]">
        <Container>
          <div className="py-1.5 flex flex-row-reverse md:flex-row items-center justify-between">
            <div className="flex gap-3 text-white text-xs md:text-sm">
              <p>Подписок создано: 255</p>
              <p>Отчетов заказано: 896</p>
            </div>
            <button
              onClick={() => {
                if (!token) {
                  setIsLoginModalOpen(true)
                } else {
                  router.push("/cabinet")
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
              className="w-[130px] md:w-[170px]"
              src={Logo}
              alt="encar logo"
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
              href={"/"}
              className="border-b-2 border-transparent hover:border-white"
            >
              Порядок покупки авто из Кореи
            </Link>
            <Link
              href={"/"}
              className="border-b-2 border-transparent hover:border-white"
            >
              Безопасная сделка
            </Link>
            <Link
              href={"/"}
              className="border-b-2 border-transparent hover:border-white"
            >
              ЧаВо
            </Link>
            <Link
              href={"/"}
              className="border-b-2 border-transparent hover:border-white"
            >
              Партнерам
            </Link>
            <Link
              href={"/"}
              className="border-b-2 border-transparent hover:border-white"
            >
              О нас
            </Link>
          </div>
        </nav>
      </Container>

      {/* Mobile Full Screen Menu */}
      {isOpenMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
          {/* Header: Logo & Close Button */}
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <Image src={Logo} alt="encar logo" className="w-[130px]" />
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
              href="/"
              onClick={() => setIsOpenMenu(false)}
              className="block border px-4 py-3 text-center text-black text-sm font-medium rounded"
            >
              Порядок покупки авто из Кореи
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpenMenu(false)}
              className="block border px-4 py-3 text-center text-black text-sm font-medium rounded"
            >
              Безопасная сделка
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpenMenu(false)}
              className="block border px-4 py-3 text-center text-black text-sm font-medium rounded"
            >
              ЧаВо
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpenMenu(false)}
              className="block border px-4 py-3 text-center text-black text-sm font-medium rounded"
            >
              Партнерам
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpenMenu(false)}
              className="block border px-4 py-3 text-center text-black text-sm font-medium rounded"
            >
              О нас
            </Link>
          </div>

          {/* Sticky Bottom: Личный кабинет */}
          <div className="shadow-[5px_0_10px_silver] sticky bottom-0 bg-white px-6 py-4">
            <button
              onClick={() => {
                if (!token) {
                  setIsLoginModalOpen(true)
                  setIsOpenMenu(false);
                } else {
                  router.push("/cabinet")
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
