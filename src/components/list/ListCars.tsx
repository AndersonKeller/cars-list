"use client";
import Loading from "@/app/loading";
import { brandListStore, carListStore, filterCarsStore } from "@/store/store";
import { Cars } from "@/types/CarInterfaces";
import { useEffect, useState } from "react";
import { InfosCar } from "./InfosCar";
import { Aside } from "./aside/Aside";
export function ListCars() {
  const [list, setList] = useState([] as Cars[]);
  const { cars } = carListStore();
  const { filteredCars, setFilter } = filterCarsStore();
  const { brands } = brandListStore();
  useEffect(() => {
    setFilter([]);
  }, []);
  useEffect(() => {
    if (filteredCars.length > 0) {
      setList(filteredCars);
    } else {
      setList(cars);
    }
  }, [filteredCars]);
  return list.length > 0 ? (
    <>
      <Aside />
      <ul className="w-11/12 max-w-3xl m-auto flex flex-wrap justify-center gap-3 items-start mb-20">
        <h2 className="w-full text-center text-gray-900 font-bold">
          Mostrando:{" "}
          {filteredCars.length == 0 ? (
            <span>TODOS</span>
          ) : (
            <span>{brands[list[0].brand - 1]}</span>
          )}
        </h2>
        {list.map((car: Cars) => (
          <InfosCar key={car.id} car={car} />
        ))}
      </ul>
    </>
  ) : (
    <Loading />
  );
}
