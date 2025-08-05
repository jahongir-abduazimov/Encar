"use client"

import React, { useEffect, useState } from "react";
import Detail from "@/sections/car-detail/Detail";
import Specifications from "@/sections/car-detail/Specifications";
import CarCheck from "@/sections/car-detail/CarCheck";
import ExteriorInterior from "@/sections/car-detail/ExteriorInterior";
import Safety from "@/sections/car-detail/Safety";
import ConvenienceMultimedia from "@/sections/car-detail/ConvenienceMultimedia";
import Seats from "@/sections/car-detail/Seats";
import SimilarCars from "@/sections/car-detail/SimilarCars";
import request from "@/components/config";
import { useParams } from "next/navigation";

const CarDetail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams()
  const getCar = async () => {
    try {
      const res = await request.get(`/cars/car/${id}/`);
      setData(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCar();
  }, [id]);
  return (
    <>
      <Detail data={data} />
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
