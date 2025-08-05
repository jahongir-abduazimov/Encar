"use client";

import React, { useEffect } from "react";
import { Suspense } from "react";
import Cabinet from "@/sections/cabinet";
import { useRouter } from "next/navigation";

const CabinetPage = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth");
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [router]); // Only depend on router

  return (
    <div>
      <Suspense fallback={<div className="text-center py-40">Загрузка...</div>}>
        <Cabinet />
      </Suspense>
    </div>
  );
};

export default CabinetPage;