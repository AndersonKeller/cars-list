"use client";
import { brandListStore } from "@/store/store";
import { useEffect, useState } from "react";

export function Filters() {
  const { brands } = brandListStore();
  const [brandList, setBrandList] = useState([] as string[]);
  useEffect(() => {
    setBrandList(brands);
  }, []);
  return (
    <div className="flex gap-2 items-center justify-center flex-wrap  sm:flex-col sm:max-h-none">
      {brandList &&
        brandList.map((brand) => (
          <button key={brand} className="bg-blue-400 px-1 rounded-md">
            {brand}
          </button>
        ))}
    </div>
  );
}
