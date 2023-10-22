"use client";
import { brandListStore, carListStore, filterCarsStore } from "@/store/store";
import { useEffect, useState } from "react";

export function Filters() {
  const { brands } = brandListStore();
  const [brandList, setBrandList] = useState([] as string[]);
  const { cars } = carListStore();
  const { setFilter } = filterCarsStore();
  function getByBrand(brand: string) {
    const findIndexBrand = brandList.findIndex(
      (item) => item.toUpperCase() == brand.toUpperCase()
    );

    const filtered = cars.filter((car) => car.brand == findIndexBrand + 1);

    setFilter(filtered);
  }
  useEffect(() => {
    setBrandList(brands);
  }, []);
  return (
    <div className="flex gap-2 items-center justify-start overflow-auto sm:flex-col sm:max-h-none">
      <button
        onClick={() => setFilter([])}
        className="focus:bg-blue-700 focus:text-gray-300 hover:bg-blue-800 hover:text-gray-300 shadow-md bg-blue-400 px-1 rounded-md"
      >
        TODOS
      </button>
      {brandList &&
        brandList.map((brand) => (
          <button
            onClick={() => getByBrand(brand)}
            key={brand}
            className="focus:bg-blue-700 focus:text-gray-300 hover:bg-blue-800 hover:text-gray-300 shadow-md bg-blue-400 px-1 rounded-md"
          >
            {brand}
          </button>
        ))}
    </div>
  );
}
