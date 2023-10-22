import { brandListStore } from "@/store/store";
import { Cars } from "@/types/CarInterfaces";
import { ComplementsCar } from "./ComplementsCar";
interface InfosCarProps {
  car: Cars;
}
export function InfosCar({ car }: InfosCarProps) {
  const { brands } = brandListStore();
  console.log(brands[car.brand - 1]);
  const brandName = brands[car.brand - 1];
  return (
    <>
      <li className="py-4 flex w-full flex-col items-center bg-gray-200 shadow-md gap-2 rounded-lg">
        <h3 className="font-bold text-base text-blue-200 bg-gray-100 px-4 rounded-md shadow-md">
          {car.nome_modelo}
        </h3>
        <p>{brandName}</p>
        <p>{car.ano}</p>
        <p>R$ {car.valor.toFixed(3)}</p>
        <ComplementsCar car={car} />
      </li>
    </>
  );
}
