"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import Container from "@/components/Container";
import Select from "@/components/ui/Select";
import request from "@/components/config";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { IoShareSocialSharp } from "react-icons/io5";
import Pagination from "@/components/ui/Pagination";
import CarCard from "./CarCard";
import { useSearchParams } from "next/navigation";

// Types
interface Car {
  id: string;
  name: string;
  image: string;
  miliage: number;
  price: number;
  year: string;
  updated_at: string;
  comparison: boolean;
  like: boolean;
  color: {
    id: string;
    name: string;
  };
  fuel_type: {
    id: string;
    name: string;
  };
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

interface FilterItem {
  id: string;
  name: string;
}

interface Brand extends FilterItem {
  models?: Model[];
}

interface Model extends FilterItem {
  generations?: Generation[];
}

type Generation = FilterItem;

interface FilterData {
  brands: Brand[];
  fuelType: FilterItem[];
  transmission: FilterItem[];
  bodyType: FilterItem[];
  color: FilterItem[];
}

interface SelectOption {
  label: string;
  value: string;
}

// Constants
const PAGE_SIZE = 24;
const INITIAL_FORM: FilterForm = {
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

const SORT_OPTIONS: SelectOption[] = [
  { label: "Дата объявления ↓", value: "created_at" },
  { label: "Пробег ↑", value: "max_miliage" },
  { label: "Пробег ↓", value: "min_miliage" },
  { label: "Цена ↑", value: "max_price" },
  { label: "Цена ↓", value: "min_price" },
  { label: "Год ↑", value: "max_year" },
  { label: "Год ↓", value: "min_year" },
];

const Filters = () => {
  const searchParams = useSearchParams();

  // State
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [filterData, setFilterData] = useState<FilterData>({
    brands: [],
    fuelType: [],
    transmission: [],
    bodyType: [],
    color: [],
  });
  const [modelOptions, setModelOptions] = useState<Model[]>([]);
  const [generationOptions, setGenerationOptions] = useState<Generation[]>([]);
  const [sortBy, setSortBy] = useState("updated_at");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [form, setForm] = useState<FilterForm>(INITIAL_FORM);

  // Memoized values
  const yearOptions = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => {
        const year = new Date().getFullYear() - i;
        return { label: year.toString(), value: year.toString() };
      }),
    []
  );

  const monthOptions = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        label: `${i + 1}`,
        value: (i + 1).toString(),
      })),
    []
  );

  const mileageOptions = useMemo(
    () =>
      Array.from({ length: 11 }, (_, i) => {
        const mileage = i * 20000;
        return {
          label: mileage.toLocaleString(),
          value: mileage.toString(),
        };
      }),
    []
  );

  const priceOptions = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => {
        const price = (i + 1) * 500000;
        return {
          label: price.toLocaleString(),
          value: price.toString(),
        };
      }),
    []
  );

  // API functions
  const fetchFilterData = useCallback(async () => {
    try {
      const [brandsRes, fuelTypeRes, transmissionRes, bodyTypeRes, colorRes] =
        await Promise.all([
          request.get("/cars/brand/list/"),
          request.get("/cars/fuel_type/list/"),
          request.get("/cars/transmission/list/"),
          request.get("/cars/body_type/list/"),
          request.get("/cars/color/list/"),
        ]);

      setFilterData({
        brands: brandsRes.data,
        fuelType: fuelTypeRes.data,
        transmission: transmissionRes.data,
        bodyType: bodyTypeRes.data,
        color: colorRes.data,
      });
    } catch (error) {
      console.error("Error fetching filter data:", error);
    }
  }, []);

  const getCars = useCallback(
    async (filters: FilterForm = form, pageNum: number = page) => {
      try {
        setLoading(true);

        const params = new URLSearchParams();
        params.set("page", pageNum.toString());
        params.set("page_size", PAGE_SIZE.toString());
        params.set("ordering", sortBy);

        Object.entries(filters).forEach(([key, value]) => {
          if (value && value !== "") {
            params.set(key, value.toString());
          }
        });

        const res = await request.get(`/cars/car/list/?${params.toString()}`);
        setCars(res.data.results || []);
        setTotalCount(res.data.total || 0);
        setTotalPages(res.data.total_pages);
      } catch (error) {
        console.error("Error fetching cars:", error);
        setCars([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    },
    [form, page, sortBy]
  );

  // Event handlers
  const selectBrand = useCallback(
    (brandId: string) => {
      const brand = filterData.brands.find(
        (item: Brand) => item.id === brandId
      );

      if (!brand) {
        setModelOptions([]);
        setGenerationOptions([]);
        return;
      }

      setModelOptions(brand.models || []);
      setGenerationOptions([]);
    },
    [filterData.brands]
  );

  const selectModel = useCallback(
    (modelId: string) => {
      const model = modelOptions.find((item: Model) => item.id === modelId);

      if (!model) {
        setGenerationOptions([]);
        return;
      }

      setGenerationOptions(model.generations || []);
    },
    [modelOptions]
  );

  const handleFormChange = useCallback(
    (field: keyof FilterForm, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleBrandChange = useCallback(
    (e: SelectOption | null) => {
      if (!e) {
        setForm((prev) => ({ ...prev, brand: "", model: "", generation: "" }));
        setModelOptions([]);
        setGenerationOptions([]);
        return;
      }

      setForm((prev) => ({
        ...prev,
        brand: e.value,
        model: "",
        generation: "",
      }));
      selectBrand(e.value);
    },
    [selectBrand]
  );

  const handleModelChange = useCallback(
    (e: SelectOption | null) => {
      setForm((prev) => ({ ...prev, model: e?.value || "" }));
      if (e?.value) {
        selectModel(e.value);
      }
    },
    [selectModel]
  );

  const handleGenerationChange = useCallback((e: SelectOption | null) => {
    setForm((prev) => ({ ...prev, generation: e?.value || "" }));
  }, []);

  // const handleSubmit = useCallback(() => {
  //   const params = new URLSearchParams();
  //   Object.entries(form).forEach(([key, value]) => {
  //     if (value) {
  //       params.set(key, value);
  //     }
  //   });

  //   const newUrl = `/search-auto?${params.toString()}`;
  //   window.history.pushState({}, "", newUrl);
  //   setPage(1);
  // }, [form]);

  const handleCleanup = useCallback(() => {
    setForm(INITIAL_FORM);
    setModelOptions([]);
    setGenerationOptions([]);
    setPage(1);
    window.history.pushState({}, "", "/search-auto");
  }, []);

  // Effects
  useEffect(() => {
    fetchFilterData();
  }, [fetchFilterData]);

  useEffect(() => {
    if (searchParams && filterData.brands.length > 0) {
      const newForm = {
        brand: searchParams.get("brand") || "",
        model: searchParams.get("model") || "",
        generation: searchParams.get("generation") || "",
        fuel_type: searchParams.get("fuel_type") || "",
        transmission: searchParams.get("transmission") || "",
        body_type: searchParams.get("body_type") || "",
        color: searchParams.get("color") || "",
        start_year: searchParams.get("start_year") || "",
        start_month: searchParams.get("start_month") || "",
        end_year: searchParams.get("end_year") || "",
        end_month: searchParams.get("end_month") || "",
        min_miliage: searchParams.get("min_miliage") || "",
        max_miliage: searchParams.get("max_miliage") || "",
        min_price: searchParams.get("min_price") || "",
        max_price: searchParams.get("max_price") || "",
      };
      setForm(newForm);

      if (newForm.brand) {
        selectBrand(newForm.brand);
      }
    }
  }, [searchParams, filterData.brands, selectBrand]);

  useEffect(() => {
    getCars();
  }, [getCars]);

  useEffect(() => {
    if (form.brand && filterData.brands.length > 0) {
      selectBrand(form.brand);
    }
  }, [form.brand, filterData.brands, selectBrand]);

  useEffect(() => {
    if (form.model && modelOptions.length > 0) {
      selectModel(form.model);
    }
  }, [form.model, modelOptions, selectModel]);

  // Render functions
  const renderSelect = useCallback(
    (
      options: FilterItem[],
      placeholder: string,
      value: string,
      onChange: (e: SelectOption | null) => void,
      disabled = false,
      className = "w-full"
    ) => (
      <Select
        options={options.map((item: FilterItem) => ({
          label: item.name,
          value: item.id,
        }))}
        placeholder={placeholder}
        searchable={true}
        className={className}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    ),
    []
  );

  const renderYearMonthSection = useCallback(
    (
      title: string,
      startYear: string,
      startMonth: string,
      endYear: string,
      endMonth: string
    ) => (
      <div>
        <h2 className="text-xl font-medium text-primary mb-2.5">{title}</h2>
        <div className="grid grid-cols-2 gap-y-2.5 gap-x-5">
          <Select
            options={yearOptions}
            placeholder="Начальный год выпуска"
            searchable={true}
            className="w-full"
            value={startYear}
            onChange={(e: SelectOption | null) =>
              handleFormChange("start_year", e?.value || "")
            }
          />
          <Select
            options={monthOptions}
            placeholder="Начальный месяц выпуска"
            searchable={true}
            disabled={!startYear}
            className="w-full"
            value={startMonth}
            onChange={(e: SelectOption | null) =>
              handleFormChange("start_month", e?.value || "")
            }
          />
          <Select
            options={yearOptions}
            placeholder="Конечный год выпуска"
            searchable={true}
            className="w-full"
            value={endYear}
            onChange={(e: SelectOption | null) =>
              handleFormChange("end_year", e?.value || "")
            }
          />
          <Select
            options={monthOptions}
            placeholder="Конечный месяц выпуска"
            searchable={true}
            disabled={!endYear}
            className="w-full"
            value={endMonth}
            onChange={(e: SelectOption | null) =>
              handleFormChange("end_month", e?.value || "")
            }
          />
        </div>
      </div>
    ),
    [yearOptions, monthOptions, handleFormChange]
  );

  const renderMileagePriceSection = useCallback(
    (title: string) => (
      <div>
        <h2 className="text-xl font-medium text-primary mb-2.5">{title}</h2>
        <div className="grid grid-cols-2 gap-y-2.5 gap-x-5">
          <Select
            options={mileageOptions}
            placeholder="Мин. пробег"
            searchable={true}
            className="w-full"
            value={form.min_miliage}
            onChange={(e: SelectOption | null) =>
              handleFormChange("min_miliage", e?.value || "")
            }
          />
          <Select
            options={mileageOptions}
            placeholder="Макс. пробег"
            searchable={true}
            className="w-full"
            value={form.max_miliage}
            onChange={(e: SelectOption | null) =>
              handleFormChange("max_miliage", e?.value || "")
            }
          />
          <Select
            options={priceOptions}
            placeholder="Мин. стоимость"
            searchable={true}
            className="w-full"
            value={form.min_price}
            onChange={(e: SelectOption | null) =>
              handleFormChange("min_price", e?.value || "")
            }
          />
          <Select
            options={priceOptions}
            placeholder="Макс. стоимость"
            searchable={true}
            className="w-full"
            value={form.max_price}
            onChange={(e: SelectOption | null) =>
              handleFormChange("max_price", e?.value || "")
            }
          />
        </div>
      </div>
    ),
    [
      mileageOptions,
      priceOptions,
      form.min_miliage,
      form.max_miliage,
      form.min_price,
      form.max_price,
      handleFormChange,
    ]
  );

  return (
    <section className="py-10 md:py-14">
      <Container>
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-4 items-start gap-8">
          <div className="flex flex-col gap-6">
            <Select
              options={filterData.brands.map((brand: Brand) => ({
                label: brand.name,
                value: brand.id,
              }))}
              placeholder="Бренд"
              searchable={true}
              className="w-full"
              value={form.brand}
              onChange={handleBrandChange}
            />
            <div className="flex flex-col gap-2.5">
              <h2 className="text-xl font-medium text-primary">
                Характеристики
              </h2>
              {renderSelect(
                filterData.fuelType,
                "Тип топлива",
                form.fuel_type,
                (e: SelectOption | null) =>
                  handleFormChange("fuel_type", e?.value || "")
              )}
              {renderSelect(
                filterData.transmission,
                "Трансмиссия",
                form.transmission,
                (e: SelectOption | null) =>
                  handleFormChange("transmission", e?.value || "")
              )}
              {renderSelect(
                filterData.bodyType,
                "Тип кузова",
                form.body_type,
                (e: SelectOption | null) =>
                  handleFormChange("body_type", e?.value || "")
              )}
              {renderSelect(
                filterData.color,
                "Цвет",
                form.color,
                (e: SelectOption | null) =>
                  handleFormChange("color", e?.value || "")
              )}
              <button className="text-lg bg-black text-white font-medium py-[5px] w-full rounded-lg cursor-pointer border-2 border-black duration-200 hover:shadow-[3px_3px_6px_silver]">
                Инструкция
              </button>
            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-6">
            <Select
              options={modelOptions.map((model: Model) => ({
                label: model.name,
                value: model.id,
              }))}
              placeholder="Модель"
              searchable={true}
              className="w-full"
              disabled={!form.brand}
              value={form.model}
              onChange={handleModelChange}
            />
            <div className="flex flex-col gap-5.5">
              {renderYearMonthSection(
                "Год выпуска",
                form.start_year,
                form.start_month,
                form.end_year,
                form.end_month
              )}
              {renderMileagePriceSection("Пробег")}
            </div>
          </div>

          <div className="flex flex-col gap-15">
            <Select
              options={generationOptions.map((generation: Generation) => ({
                label: generation.name,
                value: generation.id,
              }))}
              placeholder="Поколение"
              searchable={true}
              disabled={!form.model}
              className="w-full"
              value={form.generation}
              onChange={handleGenerationChange}
            />
            <div className="flex flex-col gap-y-2.5">
              <button
                className="text-lg font-medium py-[5px] w-full rounded-lg cursor-pointer border-2 duration-200 hover:shadow-[3px_3px_6px_silver]"
                onClick={handleCleanup}
              >
                Очистить
              </button>
              {/* <button className="text-lg font-medium py-[5px] w-full rounded-lg cursor-pointer border-2 border-primary text-primary duration-200 hover:shadow-[3px_3px_6px_silver]">
                Подписаться
              </button>
              <button
                className="text-lg bg-primary text-white font-medium py-[5px] w-full rounded-lg cursor-pointer border-2 border-primary duration-200 hover:shadow-[3px_3px_6px_silver]"
                onClick={handleSubmit}
              >
                Показать
              </button> */}
              <p className="text-xl text-center text-gray-500 font-medium py-[5px] w-full">
                Всего найдено: {totalCount.toLocaleString()}
              </p>
              <button className="text-lg flex items-center gap-5 justify-center font-medium py-[5px] w-full cursor-pointer">
                <IoShareSocialSharp className="text-2xl" />
                <span>Поделиться</span>
                <HiOutlineArrowLongRight className="text-3xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex flex-col md:flex-row gap-2.5 mb-5">
            <Select
              options={filterData.brands.map((brand: Brand) => ({
                label: brand.name,
                value: brand.id,
              }))}
              placeholder="Бренд"
              searchable={true}
              className="w-full md:w-64"
              value={form.brand}
              onChange={handleBrandChange}
            />
            <Select
              options={modelOptions.map((model: Model) => ({
                label: model.name,
                value: model.id,
              }))}
              placeholder="Модель"
              searchable={true}
              className="w-full md:w-64"
              disabled={!form.brand}
              value={form.model}
              onChange={handleModelChange}
            />
            <Select
              options={generationOptions.map((generation: Generation) => ({
                label: generation.name,
                value: generation.id,
              }))}
              placeholder="Поколение"
              searchable={true}
              disabled={!form.model}
              className="w-full md:w-64"
              value={form.generation}
              onChange={handleGenerationChange}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-2.5 mb-5">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-xl font-medium text-primary">
                Характеристики
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2.5">
                {renderSelect(
                  filterData.fuelType,
                  "Тип топлива",
                  form.fuel_type,
                  (e: SelectOption | null) =>
                    handleFormChange("fuel_type", e?.value || ""),
                  false,
                  "w-full md:w-64"
                )}
                {renderSelect(
                  filterData.transmission,
                  "Трансмиссия",
                  form.transmission,
                  (e: SelectOption | null) =>
                    handleFormChange("transmission", e?.value || ""),
                  false,
                  "w-full md:w-64"
                )}
                {renderSelect(
                  filterData.bodyType,
                  "Тип кузова",
                  form.body_type,
                  (e: SelectOption | null) =>
                    handleFormChange("body_type", e?.value || ""),
                  false,
                  "w-full md:w-64"
                )}
                {renderSelect(
                  filterData.color,
                  "Цвет",
                  form.color,
                  (e: SelectOption | null) =>
                    handleFormChange("color", e?.value || ""),
                  false,
                  "w-full md:w-64"
                )}
              </div>
            </div>
            <div className="flex flex-col gap-5.5">
              {renderYearMonthSection(
                "Год выпуска",
                form.start_year,
                form.start_month,
                form.end_year,
                form.end_month
              )}
              {renderMileagePriceSection("Пробег")}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-2.5 gap-y-5 mb-5">
            <button
              className="w-full md:w-64 text-sm py-1.5 border-2 bg-white border-primary hover:bg-white/80 text-primary duration-200 rounded-lg cursor-pointer"
              onClick={handleCleanup}
            >
              Очистить
            </button>
            {/* <button
              className="w-full md:w-64 text-sm py-1.5 bg-primary hover:bg-primary/80 text-white duration-200 rounded-lg cursor-pointer"
              onClick={handleSubmit}
            >
              Показать
            </button>
            <button className="w-full md:w-64 text-sm py-1.5 border-2 border-primary text-black duration-200 rounded-lg cursor-pointer">
              Подписаться
            </button> */}
            <button className="w-full flex gap-2 items-center justify-center md:w-64 text-sm py-1.5 border-2 duration-200 rounded-lg cursor-pointer">
              <IoShareSocialSharp size={20} />
              <span>Поделиться</span>
              <HiOutlineArrowLongRight size={20} />
            </button>
          </div>
        </div>

        <div className="w-full my-7 flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-8 mt-15">
          <div className="w-full flex items-center gap-10">
            <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
              <p>Сортировать по:</p>
              <Select
                options={SORT_OPTIONS}
                value={
                  SORT_OPTIONS.find((option) => option.value === sortBy) ||
                  SORT_OPTIONS[0]
                }
                className="w-full lg:w-64"
                onChange={(e: SelectOption | null) => setSortBy(e?.value || "")}
              />
            </div>
            <div className="hidden md:flex gap-4">
              <button
                className={`cursor-pointer ${viewMode === "grid" ? "text-primary" : "text-gray-500"
                  }`}
                onClick={() => setViewMode("grid")}
              >
                <BsGrid3X3GapFill className="text-[40px]" />
              </button>
              <button
                className={`cursor-pointer ${viewMode === "list" ? "text-primary" : "text-gray-500"
                  }`}
                onClick={() => setViewMode("list")}
              >
                <FaThList className="text-[40px]" />
              </button>
            </div>
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
            className="w-full lg:max-w-[50%]"
          />
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Car grid/list */}
        {!loading && (
          <div
            className={`grid gap-8 ${viewMode === "grid"
                ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-1"
              }`}
          >
            {cars.map((car: Car) => (
              <CarCard key={car.id} data={car} viewMode={viewMode} />
            ))}
          </div>
        )}

        {/* No results */}
        {!loading && cars.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-medium text-gray-500 mb-4">
              По вашему запросу ничего не найдено
            </h3>
            <p className="text-gray-400">
              Попробуйте изменить параметры поиска
            </p>
          </div>
        )}

        {/* Bottom pagination */}
        {!loading && cars.length > 0 && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
            className="max-w-[100vw] mt-5"
          />
        )}
      </Container>
    </section>
  );
};

export default Filters;
