import request from "@/components/config";
import React, { useEffect, useState } from "react";
import CarCard from "../search-auto/CarCard";

const Likes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      const res = await request.get("/cars/like/cars/");
      setData(res.data.results);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleUnlike = async (id: string) => {
    setData((prev) => prev.filter((car: any) => car.id !== id));
    try {
      await request.get(`/cars/like/${id}/`);
    } catch (e) {
      console.error("Laykni olib tashlashda xatolik:", e);
    }
  };
  return (
    <div>
      <p className="text-xl mb-4">Избранное</p>
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : data.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          У вас нет автомобилей, добавленных в избранное.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item: any) => (
            <CarCard key={item.id} data={item} onUnlike={handleUnlike} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Likes;
