import React from "react";
import Detail from "@/sections/car-detail/Detail";
import Specifications from "@/sections/car-detail/Specifications";
import CarCheck from "@/sections/car-detail/CarCheck";
import ExteriorInterior from "@/sections/car-detail/ExteriorInterior";
import Safety from "@/sections/car-detail/Safety";
import ConvenienceMultimedia from "@/sections/car-detail/ConvenienceMultimedia";
import Seats from "@/sections/car-detail/Seats";
import SimilarCars from "@/sections/car-detail/SimilarCars";

const CarDetail = () => {
  return (
    <>
      <Detail />
      <Specifications />
      {/* <CarCheck /> */}
      <ExteriorInterior />
      <Safety />
      <ConvenienceMultimedia />
      <Seats />
      <SimilarCars />
    </>
  );
};

export default CarDetail;
