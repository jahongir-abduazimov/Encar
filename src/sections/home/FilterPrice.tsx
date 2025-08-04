import React from "react";
import Container from "@/components/Container";
import EcoTypeImage from "../../../public/images/eco-type.png";
import ComfortTypeImage from "../../../public/images/comfort-type.png";
import BiznesTypeImage from "../../../public/images/biznes-type.png";
import PremiumTypeImage from "../../../public/images/premium-type.png";
import Image from "next/image";
import Link from "next/link";

const FilterPrice = () => {
  const priceTypes = [
    { name: "Эконом", image: EcoTypeImage, to: "1,5" },
    { name: "Комфорт", image: ComfortTypeImage, to: "3" },
    { name: "Бизнес", image: BiznesTypeImage, to: "6" },
    { name: "Премиум", image: PremiumTypeImage, from: "6" },
  ];
  return (
    <section className="pb-24">
      <Container>
        <h2 className="text-4xl font-medium mb-4">Поиск по цене</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {priceTypes.map((type) => (
            <Link
              href={"/"}
              key={type.name}
              className="h-[270px] border border-gray-300 flex flex-col transition-colors hover:shadow-[0_0_10px_4px_rgba(0,0,0,0.1)]"
            >
              <div className="h-[60%]">
                <Image
                  src={type.image}
                  alt={`${type.name} type`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-end h-[40%] p-4">
                <span className="text-black/80 text-[26px] uppercase">{type.name}</span>
                <span className="font-semibold text-lg text-gray-500">
                  {type.from ? `от ${type.from} млн ₽` : `до ${type.to} млн ₽`}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FilterPrice;
