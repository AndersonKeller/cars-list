import { cars } from "@/service/data";
import { Cars } from "@/types/CarInterfaces";
import { InfosCar } from "./InfosCar";
export async function ListCars() {
  return (
    <ul className="w-11/12 m-auto flex flex-col gap-3 items-center">
      {cars.map((car: Cars) => (
        <InfosCar key={car.id} car={car} />
      ))}
    </ul>
  );
}
