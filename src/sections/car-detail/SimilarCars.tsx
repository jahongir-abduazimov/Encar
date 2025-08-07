import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import CarCard from "../search-auto/CarCard";
import { useParams } from "next/navigation";
import request from "@/components/config";

const SimilarCars = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await request.get(`/cars/car/${id}/similar/`);
      setData(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="pt-10 md:pt-16 pb-30">
      <Container>
        <h2 className="text-[30px] md:text-[35px] font-medium mb-5 md:mb-7">
          Похожие авто
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map(
            (item: any, idx) =>
              item.id !== id && <CarCard key={idx} data={item} />
          )}
        </div>
      </Container>
    </section>
  );
};

export default SimilarCars;
