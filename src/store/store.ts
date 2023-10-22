import { carsData } from "@/service/data";
import { Cars } from "@/types/CarInterfaces";
import { parseCookies, setCookie } from "nookies";
import { create } from "zustand";

interface CarsStore {
  cars: Cars[];
  setCars: (cars: Cars[]) => void;
}
const cookies = parseCookies();
export const carListStore = create<CarsStore>()((set) => ({
  cars: cookies["@cars-list"]
    ? JSON.parse(cookies["@cars-list"])
    : (carsData as Cars[]),
  setCars: (newCars: Cars[]) =>
    set(
      () => (
        setCookie(null, "@cars-list", JSON.stringify(newCars), {
          maxAge: 24 * 60 * 60,
          path: "/",
        }),
        { cars: newCars }
      )
    ),
}));
