import request from "@/components/config";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Compares = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      const res = await request.get("/cars/comparison/list/");
      console.log(res);
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

  const handleDelete = async (id: number) => {
    setData((prev) => prev.filter((car: any) => car.id !== id));
    try {
      await request.get(`/cars/comparison/${id}/`);
    } catch (e) {
      console.error(e);
    }
  };
  // Helper to highlight red for lowest price, lowest mileage, newest year
  const getCellClass = (key: string, value: any) => {
    if (!data.length) return "";
    // Only consider the first two cars
    const values = data.slice(0, 2).map((car: any) => car[key]);
    if (values.length < 2) return "";
    if (key === "price" || key === "miliage") {
      // Use numeric comparison for min value
      const nums = values
        .map((v) =>
          typeof v === "string" ? parseFloat(v.replace(/\D/g, "")) : v
        )
        .filter((v) => !isNaN(v));
      if (nums.length < 2) return "";
      const min = Math.min(...nums);
      const minCount = nums.filter((v) => v === min).length;
      // Get the numeric value for this cell
      const cellNum =
        typeof value === "string"
          ? parseFloat(value.replace(/\D/g, ""))
          : value;
      if (cellNum === min && minCount >= 1) {
        return "text-primary font-semibold";
      }
    } else if (key === "year") {
      // Use numeric comparison for max value
      const nums = values
        .map((v) => (typeof v === "string" ? parseInt(v, 10) : v))
        .filter((v) => !isNaN(v));
      if (nums.length < 2) return "";
      const max = Math.max(...nums);
      const maxCount = nums.filter((v) => v === max).length;
      const cellNum = typeof value === "string" ? parseInt(value, 10) : value;
      if (cellNum === max && maxCount >= 1) {
        return "text-primary font-semibold";
      }
    }
    return "";
  };

  return (
    <div>
      <p className="text-xl mb-4">Раздел сравнения автомобилей</p>
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : data.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          Для сравнения нажмите кнопку “Сравнение”
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full  border-spacing-0 rounded-lg overflow-hidden bg-white">
            <thead className="border-b border-gray-400">
              <tr className="bg-gray-100">
                <th className="p-4 text-left">Модель</th>
                <th className="p-4 text-left">Время обновления</th>
                <th className="p-4 text-left">Стоимость (руб)</th>
                <th className="p-4 text-left">Пробег</th>
                <th className="p-4 text-left">Год выпуска</th>
                {/* <th className="p-4 text-left">Объем</th> */}
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 2).map((car: any) => (
                <tr key={car.id} className="border-b border-gray-400">
                  <td className="p-4 align-top min-w-[200px]">
                    <div className="flex flex-col items-center">
                      <div className="relative w-[170px] h-[120px] mb-2">
                        <Image
                          src={
                            car?.car_medias[0]?.media || "/images/no-image.png"
                          }
                          alt={car.name}
                          width={170}
                          height={170}
                          className="object-cover w-full h-full rounded-lg border"
                        />
                        <button
                          className="w-[25px] h-[25px] cursor-pointer flex items-center justify-center rounded-md bg-white/60 absolute top-2 left-2"
                          onClick={() => handleDelete(car.id)}
                          title="Удалить из сравнения"
                        >
                          <span className="text-xl">✖</span>
                        </button>
                        {/* <button
                          className="absolute top-2 right-2 bg-white/80 rounded-full p-1 hover:bg-gray-200 transition"
                          title="В избранное"
                        >
                          <span className="text-2xl">{car.is_favorite ? "❤" : "🤍"}</span>
                        </button> */}
                      </div>
                      <Link
                        href={`/cars/${car.id}`}
                        className="text-center text-sm font-medium mt-1"
                      >
                        {car.name}
                      </Link>
                    </div>
                  </td>
                  <td className="p-4 align-top whitespace-nowrap">
                    {car.updated_at
                      ? new Date(car.updated_at).toLocaleString("ru-RU")
                      : "-"}
                  </td>
                  <td
                    className={`p-4 align-top whitespace-nowrap ${getCellClass(
                      "price",
                      car.price
                    )}`}
                  >
                    {car.price?.toLocaleString("ru-RU")}
                  </td>
                  <td
                    className={`p-4 align-top whitespace-nowrap ${getCellClass(
                      "miliage",
                      car.miliage
                    )}`}
                  >
                    {car.miliage?.toLocaleString("ru-RU")}
                  </td>
                  <td
                    className={`p-4 align-top whitespace-nowrap ${getCellClass(
                      "year",
                      car.year
                    )}`}
                  >
                    {car.year}
                  </td>
                  {/* <td
                    className={`p-4 align-top whitespace-nowrap ${getCellClass(
                      "engine_volume",
                      car.engine_capacity
                    )}`}
                  >
                    {car.engine_capacity}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Compares;
