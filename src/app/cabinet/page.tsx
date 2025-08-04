import React from "react";
import { Suspense } from "react";
import Cabinet from "@/sections/cabinet";

const CabinetPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Cabinet />
      </Suspense>
    </div>
  );
};

export default CabinetPage;
