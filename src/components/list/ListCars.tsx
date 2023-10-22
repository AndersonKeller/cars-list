"use client";
import { carListStore } from "@/store/store";
import { Cars } from "@/types/CarInterfaces";
import { parseCookies } from "nookies";
import { InfosCar } from "./InfosCar";
export function ListCars() {
  const { cars } = carListStore();
  const cookies = parseCookies();

  const list = cookies["@cars-list"] ? JSON.parse(cookies["@cars-list"]) : cars;

  return (
    <ul className="w-11/12 max-w-lg m-auto flex flex-col gap-3 items-center">
      {list.map((car: Cars) => (
        <InfosCar key={car.id} car={car} />
      ))}
    </ul>
  );
}
