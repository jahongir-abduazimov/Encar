import React, { Suspense } from "react";
import Filters from "@/sections/search-auto/Filters";

const SearchAuto = () => {
  return (
    <Suspense fallback={<div className="text-center py-40">Загрузка...</div>}>
      <Filters />
    </Suspense>
  );
};

export default SearchAuto;
