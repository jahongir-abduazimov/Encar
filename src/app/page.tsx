import Image from "next/image";
import Container from "@/components/Container";
import Intro from "@/sections/home/intro";
import PopularBrands from "@/sections/home/popularBrands";
import FilterPrice from "@/sections/home/FilterPrice";

export default function Home() {
  return (
    <>
      <Intro />
      <PopularBrands />
      <FilterPrice />
    </>
  );
}
