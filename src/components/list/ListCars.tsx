"use client";
import Loading from "@/app/loading";
import { carListStore } from "@/store/store";
import { Cars } from "@/types/CarInterfaces";
import { useEffect, useState } from "react";
import { InfosCar } from "./InfosCar";
export function ListCars() {
  const [list, setList] = useState([] as Cars[]);
  const { cars } = carListStore();

  useEffect(() => {
    setList(cars);
  }, []);
  return list.length > 0 ? (
    <ul className="w-11/12 max-w-3xl m-auto flex flex-wrap justify-center gap-3 items-center">
      {list.map((car: Cars) => (
        <InfosCar key={car.id} car={car} />
      ))}
    </ul>
  ) : (
    <Loading />
  );
}
