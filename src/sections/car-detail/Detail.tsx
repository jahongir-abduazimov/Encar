"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import { PiRectangleFill } from "react-icons/pi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { DetailProps } from "@/types";
import NoImage from "../../../public/images/no-image.png"

dayjs.extend(utc);
dayjs.extend(timezone);


const Detail = ({ data }: DetailProps) => {
  const [priceVisable, setPriceVisable] = useState(false);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [liked, setLiked] = useState(false);
  const [compared, setCompared] = useState(false);
  const [shareBoxVisible, setShareBoxVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const shareBtnRef = useRef<HTMLButtonElement>(null);
  const shareBoxRef = useRef<HTMLDivElement>(null);
  const formatted =
    dayjs(data?.updated_at).tz("Europe/Moscow").format("DD-MM-YYYY HH:mm") +
    " МСК";

  // Get current page URL for sharing
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const carName = data?.name || '';

  // Close share box on outside click
  useEffect(() => {
    if (!shareBoxVisible) return;
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        shareBoxRef.current &&
        !shareBoxRef.current.contains(target) &&
        shareBtnRef.current &&
        !shareBtnRef.current.contains(target)
      ) {
        setShareBoxVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [shareBoxVisible]);

  const handleLike = () => {
    setLiked((prev) => !prev);
    // TODO: Add API call or logic for liking here
  };

  const handleCompare = () => {
    setCompared((prev) => !prev);
    // TODO: Add API call or logic for comparing here
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (data?.car_medias?.length) {
      setMainImage(data.car_medias[0].media); // bu yerda image field nomi sizda qanday bo‘lsa shunga qarab sozlang
    }
  }, [data]);

  return (
    <section className="py-10 md:py-12">
      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-5">
          <div className="w-full lg:w-[60%] h-auto">
            <div className="mb-3">
              {mainImage ? (
                <Image
                  className="w-full h-auto"
                  src={mainImage}
                  alt="main-car"
                  width={800}
                  height={600}
                />
              ) : (
                <Image
                  className="w-full h-auto"
                  src={NoImage}
                  alt="default-car"
                />
              )}
            </div>
            {data?.car_medias.length ? (
              <div className="relative">
                {/* Scrollable thumbnails */}
                <div
                  ref={scrollRef}
                  className="flex overflow-x-auto scroll-none gap-2 px-9 scrollbar-hide"
                >
                  {data?.car_medias?.map((media, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setMainImage(media.media)}
                      className="cursor-pointer outline-none max-w-[100px] min-w-[100px] h-[100px] border p-1.5 border-gray-300"
                    >
                      <Image
                        className="w-full h-full object-cover"
                        src={media.media}
                        alt={`thumbnail-${idx}`}
                        width={100}
                        height={100}
                      />
                    </button>
                  ))}
                </div>

                {/* Left Arrow */}
                <button
                  onClick={scrollLeft}
                  className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 h-full px-1"
                >
                  <BsChevronLeft size={24} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={scrollRight}
                  className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100 h-full px-1"
                >
                  <BsChevronRight size={24} />
                </button>
              </div>
            ) : null}
          </div>
          <div className="w-full lg:w-[40%]">
            <h2 className="text-3xl md:text-[35px] leading-[110%] mb-5">
              {data?.name}
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mb-3">
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-xs text-gray-400">
                  Дата объявления: <br /> {formatted}
                </p>
                {/* <p className="text-xs text-gray-400">
                  Дата проверки цены: 02-08-2025 14:19 МСК
                </p>
                <p className="text-xs text-gray-400">Просмотров авто: 608</p> */}
              </div>
              <div className="flex gap-4 relative">
                <button
                  ref={shareBtnRef}
                  className="w-[45px] h-[45px] rounded-md border hover:border-primary cursor-pointer text-2xl flex items-center justify-center"
                  title="Поделиться"
                  onClick={() => setShareBoxVisible((v) => !v)}
                >
                  <IoShareSocialSharp />
                </button>
                {/* Share Box */}
                {shareBoxVisible && (
                  <div
                    ref={shareBoxRef}
                    className="absolute top-12 left-0 z-20 bg-white border rounded-lg shadow-lg p-3 flex flex-col gap-2 min-w-[180px] animate-fade-in"
                  >
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(carName + ' ' + pageUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded transition"
                    >
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(carName)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded transition"
                    >
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" alt="Telegram" className="w-5 h-5" />
                      <span>Telegram</span>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded transition"
                    >
                      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
                      <span>Facebook</span>
                    </a>
                  </div>
                )}
                <button
                  className={`w-[45px] h-[45px] rounded-md border cursor-pointer text-2xl flex items-center justify-center transition-colors duration-200 ${liked ? 'border-primary bg-primary/10 text-primary' : 'hover:border-primary'}`}
                  title={liked ? "Убрать из избранного" : "Добавить в избранное"}
                  onClick={handleLike}
                >
                  <FaRegHeart />
                </button>
                <button
                  className={`w-[45px] h-[45px] rounded-md border cursor-pointer text-2xl flex items-center justify-center transition-colors duration-200 ${compared ? 'border-primary bg-primary/10 text-primary' : 'hover:border-primary'}`}
                  title={compared ? "Убрать из сравнения" : "Добавить в сравнение"}
                  onClick={handleCompare}
                >
                  <MdCompareArrows />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="border-b border-gray-200 flex items-end justify-between pb-1">
                <p className="text-xl font-medium text-gray-400">Год:</p>
                <p className="text-xl font-medium">{data?.year}</p>
              </div>
              <div className="border-b border-gray-200 flex items-end justify-between pb-1">
                <p className="text-xl font-medium text-gray-400">Топливо::</p>
                <p className="text-xl font-medium">{data?.fuel_type.name}</p>
              </div>
              <div className="border-b border-gray-200 flex items-end justify-between pb-1">
                <p className="text-xl font-medium text-gray-400">Пробег:</p>
                <p className="text-xl font-medium">{data?.miliage} km</p>
              </div>
              <div className="border-b border-gray-200 flex items-end justify-between pb-1">
                <p className="text-xl font-medium text-gray-400">Цвет:</p>
                <p className="text-xl font-medium">{data?.color.name}</p>
              </div>
            </div>
            <div className="flex flex-col-reverse gap-3 items-center sm:flex-row justify-between mt-5">
              <button
                onClick={() => setPriceVisable(!priceVisable)}
                className="w-full sm:w-auto font-medium py-2 px-10 rounded-lg cursor-pointer border-2 border-primary duration-200 hover:shadow-[3px_3px_6px_silver]"
              >
                Показать расчет цены
              </button>
              <p className="text-[30px] font-medium">
                {data?.price.toLocaleString()} ₽
              </p>
            </div>
            {priceVisable && (
              <div className="mt-3 bg-gray-50 border-2 rounded-lg border-gray-300 p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <PiRectangleFill
                    size={12}
                    className="text-primary rotate-90"
                  />
                  <p>Итоговая цена 2 341 226 ₽ состоит из:</p>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <PiRectangleFill
                    size={12}
                    className="text-primary rotate-90 mt-1.5"
                  />
                  <p>
                    Услуги агента: <br />{" "}
                    <span className="font-semibold underline">100 000 ₽</span>
                  </p>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <PiRectangleFill
                    size={12}
                    className="text-primary rotate-90 mt-1.5"
                  />
                  <p>
                    Стоимость авто + расходы в Корее: <br />{" "}
                    <span className="font-semibold underline">1 236 107 ₽</span>
                  </p>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <PiRectangleFill
                    size={12}
                    className="text-primary rotate-90 mt-1.5"
                  />
                  <p>
                    Таможенные платежи: <br />{" "}
                    <span className="font-semibold underline">889 919 ₽</span>
                  </p>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <PiRectangleFill
                    size={12}
                    className="text-primary rotate-90 mt-1.5"
                  />
                  <p>
                    Утильсбор: <br />{" "}
                    <span className="font-semibold underline">5 200 ₽</span>
                  </p>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <PiRectangleFill
                    size={12}
                    className="text-primary rotate-90 mt-1.5"
                  />
                  <p>
                    СтоиТаможенный брокер: <br />{" "}
                    <span className="font-semibold underline">110 000 ₽</span>
                  </p>
                </div>
                <div className="flex items-start gap-2 ml-5">
                  <PiRectangleFill
                    size={12}
                    className="text-primary rotate-90 mt-1.5"
                  />
                  <p>
                    Автовоз: <br />{" "}
                    <span className="font-semibold underline">0 ₽</span>
                  </p>
                </div>
                <p className="text-xs leading-[110%] mt-2">
                  * цена может незначительно отличаться в связи с техническими
                  особенностями, например, при задержке обновления курсов валют
                  от ЦБ или в связи с округлением чисел.
                </p>
              </div>
            )}
            <button className="mt-4 text-lg bg-primary text-white font-medium py-[5px] w-full rounded-lg cursor-pointer border-2 border-primary duration-200 hover:shadow-[3px_3px_6px_silver]">
              Задать вопрос по Авто
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Detail;
