"use client"

import React, { useEffect, useState } from "react";
import Detail from "@/sections/car-detail/Detail";
import Specifications from "@/sections/car-detail/Specifications";
import ExteriorInterior from "@/sections/car-detail/ExteriorInterior";
import Safety from "@/sections/car-detail/Safety";
import ConvenienceMultimedia from "@/sections/car-detail/ConvenienceMultimedia";
import Seats from "@/sections/car-detail/Seats";
import SimilarCars from "@/sections/car-detail/SimilarCars";
import request from "@/components/config";
import { useParams } from "next/navigation";
import { CarDetail as CarDetailType, LoadingState, ApiError, HttpErrorResponse } from "@/types";

const CarDetail = () => {
  const [data, setData] = useState<CarDetailType | null>(null);
  const [loading, setLoading] = useState<LoadingState>("idle");
  const [error, setError] = useState<ApiError | null>(null);
  const { id } = useParams();

  const getCar = async () => {
    if (!id) return;

    setLoading("loading");
    setError(null);

    try {
      const res = await request.get<CarDetailType>(`/cars/car/${id}/`);
      setData(res.data);
      setLoading("success");
    } catch (e) {
      const errorResponse = e as HttpErrorResponse;
      const apiError: ApiError = {
        message: e instanceof Error ? e.message : "Не удалось загрузить данные автомобиля",
        status: errorResponse?.response?.status || 500,
        errors: errorResponse?.response?.data?.errors
      };
      setError(apiError);
      setLoading("error");
      console.error("Error fetching car details:", e);
    }
  };

  useEffect(() => {
    getCar();
  }, [id]);

  if (loading === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (loading === "error" && error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Ошибка загрузки данных автомобиля</h2>
          <p className="text-gray-600 mb-4">{error.message}</p>
          <button
            onClick={getCar}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  if (!data && !loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-600 mb-2">Данные автомобиля не найдены</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <Detail data={data} />
      <Specifications data={data} />
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
