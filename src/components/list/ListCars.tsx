"use client";
import { cars } from "@/service/data";
import { Cars } from "@/types/CarInterfaces";
import { parseCookies, setCookie } from "nookies";
import { InfosCar } from "./InfosCar";
export function ListCars() {
  const cookies = parseCookies();

  const list: Cars[] = cookies["@cars-list"]
    ? JSON.parse(cookies["@cars-list"])
    : cars;
  setCookie(null, "@cars-list", JSON.stringify(list), {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });

  return (
    <ul className="w-11/12 m-auto flex flex-col gap-3 items-center">
      {list.map((car: Cars) => (
        <InfosCar key={car.id} car={car} />
      ))}
    </ul>
  );
}
