"use client";
import Loading from "@/app/loading";
import { brandListStore, carListStore, filterCarsStore } from "@/store/store";
import { Cars } from "@/types/CarInterfaces";
import { useEffect, useState } from "react";
import { InfosCar } from "./InfosCar";
export function ListCars() {
  const [list, setList] = useState([] as Cars[]);
  const { cars } = carListStore();
  const { filteredCars } = filterCarsStore();
  const { brands } = brandListStore();

  useEffect(() => {
    if (filteredCars.length > 0) {
      setList(filteredCars);
    } else {
      setList(cars);
    }
  }, [filteredCars]);
  return list.length > 0 ? (
    <ul className="w-11/12 max-w-3xl m-auto flex flex-wrap justify-center gap-3 items-start mb-20">
      <h2>
        Mostrando:{" "}
        {filteredCars.length == 0 ? (
          "TODOS"
        ) : (
          <span>{brands[list[0].brand - 1]}</span>
        )}
      </h2>
      {list.map((car: Cars) => (
        <InfosCar key={car.id} car={car} />
      ))}
    </ul>
  ) : (
    <Loading />
  );
}
