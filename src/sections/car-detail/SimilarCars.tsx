import React from "react";
import Container from "@/components/Container";
import CarCard from "../search-auto/CarCard";

const SimilarCars = () => {
  return (
    <section className="pt-16 pb-30">
      <Container>
        <h2 className="text-[35px] font-medium mb-7">Похожие авто</h2>
        <div className="grid grid-cols-4 gap-8">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </Container>
    </section>
  );
};

export default SimilarCars;
