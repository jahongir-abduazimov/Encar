"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import Select from "@/components/ui/Select";
import request from "@/components/config";
import { useRouter } from "next/navigation";

interface Option {
  id: string;
  name: string;
  models?: Option[];
  generations?: Option[];
}

interface SelectOption {
  label: string;
  value: string;
}

interface FilterForm {
  brand: string;
  model: string;
  generation: string;
  fuel_type: string;
  transmission: string;
  body_type: string;
  color: string;
  start_year: string;
  start_month: string;
  end_year: string;
  end_month: string;
  min_miliage: string;
  max_miliage: string;
  min_price: string;
  max_price: string;
}

const defaultForm: FilterForm = {
  brand: "",
  model: "",
  generation: "",
  fuel_type: "",
  transmission: "",
  body_type: "",
  color: "",
  start_year: "",
  start_month: "",
  end_year: "",
  end_month: "",
  min_miliage: "",
  max_miliage: "",
  min_price: "",
  max_price: "",
};

const Intro = () => {
  const router = useRouter();

  const [brands, setBrands] = useState<Option[]>([]);
  const [fuelType, setFuelType] = useState<Option[]>([]);
  const [transmission, setTransmission] = useState<Option[]>([]);
  const [bodyType, setBodyType] = useState<Option[]>([]);
  const [color, setColor] = useState<Option[]>([]);

  const [modelOptions, setModelOptions] = useState<Option[]>([]);
  const [generationOptions, setGenerationOptions] = useState<Option[]>([]);
  const [form, setForm] = useState<FilterForm>(defaultForm);

  const fetchOptions = async () => {
    try {
      const [brandRes, fuelRes, transRes, bodyRes, colorRes] =
        await Promise.all([
          request.get("/cars/brand/list/"),
          request.get("/cars/fuel_type/list/"),
          request.get("/cars/transmission/list/"),
          request.get("/cars/body_type/list/"),
          request.get("/cars/color/list/"),
        ]);
      setBrands(brandRes.data);
      setFuelType(fuelRes.data);
      setTransmission(transRes.data);
      setBodyType(bodyRes.data);
      setColor(colorRes.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  const selectBrand = (brandId: string) => {
    const brand = brands.find((item) => item.id === brandId);
    if (brand) {
      setModelOptions(brand.models || []);
      setGenerationOptions([]);
    } else {
      setModelOptions([]);
      setGenerationOptions([]);
    }
  };

  const selectModel = (modelId: string) => {
    const model = modelOptions.find((item) => item.id === modelId);
    setGenerationOptions(model?.generations || []);
  };

  const yearOptions: SelectOption[] = Array.from({ length: 30 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return { label: year.toString(), value: year.toString() };
  });

  const monthOptions: SelectOption[] = Array.from({ length: 12 }, (_, i) => ({
    label: `${i + 1}`,
    value: `${i + 1}`,
  }));

  const mileageOptions: SelectOption[] = Array.from({ length: 11 }, (_, i) => {
    const mileage = i * 20000;
    return {
      label: mileage.toLocaleString(),
      value: mileage.toString(),
    };
  });

  const priceOptions: SelectOption[] = Array.from({ length: 20 }, (_, i) => {
    const price = (i + 1) * 500000;
    return {
      label: price.toLocaleString(),
      value: price.toString(),
    };
  });

  const handleCleanup = () => {
    setForm(defaultForm);
    setModelOptions([]);
    setGenerationOptions([]);
  };

  const HandleSubmit = () => {
    const params = new URLSearchParams();
    Object.entries(form).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });
    return (
      <a
        className="w-full md:w-64 text-center text-lg py-1.5 bg-primary hover:bg-primary/80 text-white duration-200 rounded-xl cursor-pointer"
        href={`/search-auto?${params.toString()}`}
      >
        Показать
      </a>
    );
  };

  const toSelectOptions = (data: Option[]): SelectOption[] =>
    data.map((item) => ({ label: item.name, value: item.id }));

  return (
    <section
      id="intro"
      className="bg-[url('/images/intro-bg.jpg')] bg-cover bg-center relative border-b-[10px] border-primary"
    >
      <div className="absolute w-full h-full bg-black/60" />
      <div className="relative z-10">
        <Container>
          <div className="py-10 md:py-16">
            <h1 className="text-white text-[28px] md:text-[35px] font-medium mb-5">
              Каталог авто из Кореи
            </h1>

            {/* Brand, Model, Generation */}
            <div className="flex flex-col md:flex-row gap-2.5 mb-5">
              <Select
                options={toSelectOptions(brands)}
                placeholder="Бренд"
                searchable
                className="w-full md:w-64"
                value={form.brand}
                onChange={(e) => {
                  const value = e?.value || "";
                  setForm((prev) => ({
                    ...prev,
                    brand: value,
                    model: "",
                    generation: "",
                  }));
                  selectBrand(value);
                }}
              />
              <Select
                options={toSelectOptions(modelOptions)}
                placeholder="Модель"
                searchable
                className="w-full md:w-64"
                disabled={!form.brand}
                value={form.model}
                onChange={(e) => {
                  const value = e?.value || "";
                  setForm((prev) => ({ ...prev, model: value }));
                  selectModel(value);
                }}
              />
              <Select
                options={toSelectOptions(generationOptions)}
                placeholder="Поколение"
                searchable
                className="w-full md:w-64"
                disabled={!form.model}
                value={form.generation}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, generation: e?.value || "" }))
                }
              />
            </div>

            {/* Characteristics */}
            <div className="flex flex-col md:flex-row gap-2.5 mb-5">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-xl font-medium text-white">
                  Характеристики
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-2.5">
                  <Select
                    options={toSelectOptions(fuelType)}
                    placeholder="Тип топлива"
                    searchable
                    className="w-full md:w-64"
                    value={form.fuel_type}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        fuel_type: e?.value || "",
                      }))
                    }
                  />
                  <Select
                    options={toSelectOptions(transmission)}
                    placeholder="Трансмиссия"
                    searchable
                    className="w-full md:w-64"
                    value={form.transmission}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        transmission: e?.value || "",
                      }))
                    }
                  />
                  <Select
                    options={toSelectOptions(bodyType)}
                    placeholder="Тип кузова"
                    searchable
                    className="w-full md:w-64"
                    value={form.body_type}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        body_type: e?.value || "",
                      }))
                    }
                  />
                  <Select
                    options={toSelectOptions(color)}
                    placeholder="Цвет"
                    searchable
                    className="w-full md:w-64"
                    value={form.color}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, color: e?.value || "" }))
                    }
                  />
                </div>
              </div>

              {/* Year and Mileage */}
              <div className="flex flex-col gap-5.5">
                <div>
                  <h2 className="text-xl font-medium text-white mb-2.5">
                    Год выпуска
                  </h2>
                  <div className="grid grid-cols-2 gap-2.5">
                    <Select
                      options={yearOptions}
                      placeholder="Начальный год выпуска"
                      searchable
                      className="w-full lg:w-64"
                      value={form.start_year}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          start_year: e?.value || "",
                        }))
                      }
                    />
                    <Select
                      options={monthOptions}
                      placeholder="Начальный месяц"
                      searchable
                      className="w-full lg:w-64"
                      disabled={!form.start_year}
                      value={form.start_month}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          start_month: e?.value || "",
                        }))
                      }
                    />
                    <Select
                      options={yearOptions}
                      placeholder="Конечный год"
                      searchable
                      className="w-full lg:w-64"
                      value={form.end_year}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          end_year: e?.value || "",
                        }))
                      }
                    />
                    <Select
                      options={monthOptions}
                      placeholder="Конечный месяц"
                      searchable
                      className="w-full lg:w-64"
                      disabled={!form.end_year}
                      value={form.end_month}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          end_month: e?.value || "",
                        }))
                      }
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-medium text-white md:mb-2.5">
                    Пробег
                  </h2>
                  <div className="grid grid-cols-2 gap-2.5">
                    <Select
                      options={mileageOptions}
                      placeholder="Мин. пробег"
                      searchable
                      className="w-full lg:w-64"
                      value={form.min_miliage}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          min_miliage: e?.value || "",
                        }))
                      }
                    />
                    <Select
                      options={mileageOptions}
                      placeholder="Макс. пробег"
                      searchable
                      className="w-full lg:w-64"
                      value={form.max_miliage}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          max_miliage: e?.value || "",
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Price & Buttons */}
            <h2 className="text-xl font-medium text-white mb-2.5">Стоимость</h2>
            <div className="flex flex-col md:flex-row gap-2.5">
              <div className="flex md:flex-col gap-2.5 mb-5">
                <Select
                  options={priceOptions}
                  placeholder="Мин. стоимость"
                  searchable
                  className="w-full md:w-64"
                  value={form.min_price}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, min_price: e?.value || "" }))
                  }
                />
                <Select
                  options={priceOptions}
                  placeholder="Макс. стоимость"
                  searchable
                  className="w-full md:w-64"
                  value={form.max_price}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, max_price: e?.value || "" }))
                  }
                />
              </div>
              <div className="flex flex-row-reverse md:flex-col gap-2.5 mb-5">
                <HandleSubmit />
                <button
                  className="w-full md:w-64 text-lg py-1.5 border-2 bg-white border-primary hover:bg-white/80 text-primary duration-200 rounded-xl cursor-pointer"
                  onClick={handleCleanup}
                >
                  Очистить
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Intro;
