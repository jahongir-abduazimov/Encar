import React from "react";
import Container from "./Container";
import Logo from "../../public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { GrAnnounce } from "react-icons/gr";
import { ImBullhorn } from "react-icons/im";
import { FaCar, FaCircleQuestion, FaComments } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#282828] py-10">
      <Container>
        <div className="flex md:flex-row flex-col gap-y-14 items-start justify-between">
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" className="md:w-[300px]" />
          </Link>
          <div className="ml-5">
            <p className="text-white font-medium text-xl">
              Каталог авто из Кореи
            </p>
            <div className="flex flex-col gap-1.5 mt-4">
              <Link href={"/"} className="text-white hover:text-primary">
                Hyundai
              </Link>
              <Link href={"/"} className="text-white hover:text-primary">
                Genesis
              </Link>
              <Link href={"/"} className="text-white hover:text-primary">
                Kia
              </Link>
              <Link href={"/"} className="text-white hover:text-primary">
                Renault
              </Link>
              <Link href={"/"} className="text-white hover:text-primary">
                Ssang Young
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 max-w-[250px] ml-5">
            <Link
              href={"/"}
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
              href={"/"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href={"/"}
              className="text-white hover:text-primary font-medium text-xl"
            >
              Каталог авто из Кореи
            </Link>
            <Link
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
            </Link>
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
                  Канал с новыми объявлениями с сайта encar
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
                  Группа для обсуждения сайта encar-russia.ru
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
