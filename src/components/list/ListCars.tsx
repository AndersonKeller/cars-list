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
  return (
    <ul className="w-11/12 max-w-lg m-auto flex flex-col gap-3 items-center">
      {list.length > 0 ? (
        list.map((car: Cars) => <InfosCar key={car.id} car={car} />)
      ) : (
        <Loading />
      )}
    </ul>
  );
}
