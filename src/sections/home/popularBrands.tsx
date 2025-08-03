import React from "react";
import Container from "@/components/Container";
import KiaLogo from "../../../public/images/brands/kia.svg"
import HyundaiLogo from "../../../public/images/brands/hyundai.png";
import ToyotaLogo from "../../../public/images/brands/toyota.png";
import FordLogo from "../../../public/images/brands/ford.svg";
import BMWLogo from "../../../public/images/brands/bmw.svg";
import MercedesLogo from "../../../public/images/brands/mercedes.svg";
import AudiLogo from "../../../public/images/brands/audi.png";
import VolkswagenLogo from "../../../public/images/brands/volkswagen.svg";
import SsangyongLogo from "../../../public/images/brands/ssangyong.png";
import GenesisLogo from "../../../public/images/brands/genesis.svg";
import LexusLogo from "../../../public/images/brands/lexus.png";
import VolvoLogo from "../../../public/images/brands/volvo.svg";
import PorscheLogo from "../../../public/images/brands/porsche.svg";
import NissanLogo from "../../../public/images/brands/nissan.svg";
import RenaultLogo from "../../../public/images/brands/renault.svg";
import HondaLogo from "../../../public/images/brands/honda.png";
import Image from "next/image";
import Link from "next/link";

const PopularBrands = () => {
  const brands = [
    { name: "Kia", logo: KiaLogo },
    { name: "Hyundai", logo: HyundaiLogo },
    { name: "BMW", logo: BMWLogo },
    { name: "Mercedes", logo: MercedesLogo },
    { name: "Audi", logo: AudiLogo },
    { name: "Volkswagen", logo: VolkswagenLogo },
    { name: "Ssangyong", logo: SsangyongLogo },
    { name: "Toyota", logo: ToyotaLogo },
    { name: "Genesis", logo: GenesisLogo },
    { name: "Lexus", logo: LexusLogo },
    { name: "Volvo", logo: VolvoLogo },
    { name: "Porsche", logo: PorscheLogo },
    { name: "Nissan", logo: NissanLogo },
    { name: "Renault", logo: RenaultLogo },
    { name: "Honda", logo: HondaLogo },
    { name: "Ford", logo: FordLogo },
  ];
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-4xl font-medium mb-4">Популярные автомобили</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
          {brands.map((brand) => (
            <Link href={"/"} key={brand.name} className="min-w-30 h-30 border border-gray-300 flex-col flex items-center justify-end p-4 transition-colors hover:shadow-[0_0_10px_4px_rgba(0,0,0,0.1)]">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={100}
                height={100}
                className="h-14 w-auto mb-2"
              />
              <span className="text-black/80">{brand.name}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularBrands;
