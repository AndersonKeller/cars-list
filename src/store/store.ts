import { carsData } from "@/store/data";
import { Cars, Models, brandsList } from "@/types/CarInterfaces";
import { parseCookies, setCookie } from "nookies";
import { create } from "zustand";
import { modelsList } from "./../types/CarInterfaces";

interface CarsStore {
  cars: Cars[];
  setCars: (cars: Cars[]) => void;
}
interface BrandStore {
  brands: string[];
  setBrands: (brand: string[]) => void;
}
interface ModelsStore {
  models: Models[];
  setModels: (model: Models[]) => void;
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
export const brandListStore = create<BrandStore>()((set) => ({
  brands: cookies["@brands-list"]
    ? JSON.parse(cookies["@brands-list"])
    : (brandsList as []),
  setBrands: (newBrands: string[]) =>
    set(
      () => (
        setCookie(null, "@brands-list", JSON.stringify(newBrands), {
          maxAge: 24 * 60 * 60,
          path: "/",
        }),
        { brands: newBrands }
      )
    ),
}));
export const modelsListStore = create<ModelsStore>()((set) => ({
  models: cookies["@models-list"]
    ? JSON.parse(cookies["@models-list"])
    : (modelsList as Models[]),
  setModels: (newModels: Models[]) =>
    set(
      () => (
        setCookie(null, "@modelsList-list", JSON.stringify(newModels), {
          maxAge: 24 * 60 * 60,
          path: "/",
        }),
        { models: newModels }
      )
    ),
}));
