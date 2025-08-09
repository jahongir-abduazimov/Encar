"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "../../public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { ImBullhorn } from "react-icons/im";
import { FaCar, FaCircleQuestion, FaComments } from "react-icons/fa6";
import request from "./config";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname()
  const [brands, setBrands] = useState([]);
  const getBrands = async () => {
    try {
      const res = await request.get("/cars/brand/list/");
      setBrands(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getBrands();
  }, []);

  if (pathname.slice(0, 15) === "/reset-password") {
    return null;
  }

  return (
    <footer className="bg-[#282828] py-10">
      <Container>
        <div className="flex md:flex-row flex-col gap-y-14 items-start justify-between">
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" className="w-[130px] md:w-[150px]" />
          </Link>
          <div className="ml-5">
            <p className="text-white font-medium text-xl">
              Каталог авто из Кореи
            </p>
            <div className="flex flex-col gap-1.5 mt-4">
              {brands.slice(0, 5).map((item: any) => (
                <Link
                  key={item.id}
                  href={"/"}
                  className="text-white hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5 max-w-[250px] ml-5">
            <Link
              href={"/instrukcziya"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              Инструкция
            </Link>
            <Link
              href={"/"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              Пополнение баланса
            </Link>
            <Link
              href={"/"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              Telegram
            </Link>
            <Link
              href={"/"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              Контакты
            </Link>
            <Link
              href={"/privacy-policy"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href={"/search-auto"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              Каталог авто из Кореи
            </Link>
            {/* <Link
              href={"/"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              KIA
            </Link>
            <Link
              href={"/"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              Hyundai
            </Link>
            <Link
              href={"/"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              BMW
            </Link>
            <Link
              href={"/"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              Benz (Mercedes-Benz)
            </Link>
            <Link
              href={"/"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              Audi
            </Link>
            <Link
              href={"/"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              Volkswagen
            </Link>
            <Link
              href={"/"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              Toyota
            </Link> */}
          </div>
          <div className="max-w-[230px] ml-5">
            <p className="text-white font-medium text-xl">Социальные сети</p>
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-start gap-3">
                <div>
                  <ImBullhorn className="text-primary text-2xl" />
                </div>
                <Link
                  href={"/"}
                  className="text-white hover:text-primary hover:underline leading-[110%]"
                >
                  Канал с новыми объявлениями с сайта GM CAR
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <div>
                  <FaComments className="text-primary text-2xl" />
                </div>
                <Link
                  href={"/"}
                  className="text-white hover:text-primary hover:underline leading-[110%]"
                >
                  Группа для обсуждения сайта GM CAR
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <div>
                  <FaCar className="text-primary text-2xl" />
                </div>
                <Link
                  href={"/"}
                  className="text-white hover:text-primary hover:underline leading-[110%]"
                >
                  Группа для заказа авто из Кореи
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <div>
                  <FaCircleQuestion className="text-primary text-2xl" />
                </div>
                <Link
                  href={"/"}
                  className="text-white hover:text-primary hover:underline leading-[110%]"
                >
                  Личные вопросы
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
