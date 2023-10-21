"use client";
import { cars } from "@/service/data";
import { Cars } from "@/types/CarInterfaces";
import { InfosCar } from "./InfosCar";
export function ListCars() {
  const local = window.localStorage.getItem("@cars-list");
  const list: Cars[] = local ? JSON.parse(local) : cars;
  localStorage.setItem("@cars-list", JSON.stringify(list));

  return (
    <ul className="w-11/12 m-auto flex flex-col gap-3 items-center">
      {list.map((car: Cars) => (
        <InfosCar key={car.id} car={car} />
      ))}
    </ul>
  );
}
