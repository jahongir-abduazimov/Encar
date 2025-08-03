"use client";

import React, { useState } from "react";
import Container from "./Container";
import Logo from "../../public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { FaUserLarge } from "react-icons/fa6";
import LoginModal from "./LoginModal";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="bg-primary">
      <LoginModal
        isOpen={isLoginModalOpen}
        handleClose={() => setIsLoginModalOpen(false)}
      />
      <div className="bg-[#282828]">
        <Container>
          <div className="py-1.5 flex items-center justify-between">
            <div className="flex gap-3 text-white text-sm">
              <p>Подписок создано: 255</p>
              <p>Отчетов заказано: 896</p>
            </div>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-2 cursor-pointer text-white hover:text-primary"
            >
              <FaUserLarge />
              <span className="text-sm">Личный кабинет</span>
            </button>
          </div>
        </Container>
      </div>
      <Container>
        <nav className="h-[100px] flex items-center justify-between">
          <Link href={"/"}>
            <Image src={Logo} alt="encar logo" />
          </Link>
          <div className="flex items-center gap-8 text-white text-lg">
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
    </header>
  );
};

export default Header;
