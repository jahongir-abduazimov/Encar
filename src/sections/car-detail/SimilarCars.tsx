import React from "react";
import Container from "@/components/Container";
import CarCard from "../search-auto/CarCard";
import { useParams } from "next/navigation";

const SimilarCars = () => {
  const { id } = useParams();
  return (
    <section className="pt-10 md:pt-16 pb-30">
      <Container>
        <h2 className="text-[30px] md:text-[35px] font-medium mb-5 md:mb-7">Похожие авто</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard /> */}
        </div>
      </Container>
    </section>
  );
};

export default SimilarCars;
