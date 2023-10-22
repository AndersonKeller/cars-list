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
      <li className="p-4 flex w-full items-center bg-gray-800 shadow-md gap-2 rounded-lg hover:bg-black hover:shadow-2xl justify-evenly transition-all duration-500 ease-in-out border-gray-50 border max-w-[300px]">
        <div className="w-full flex flex-col items-start gap-2 ">
          <h3 className="font-bold text-base text-blue-200 bg-gray-100 px-4 rounded-md shadow-md">
            {car.nome_modelo}
          </h3>
          <p className="text-indigo-500">{brandName}</p>
          <p className="text-gray-400">{car.ano}</p>
          <p className="text-gray-400">R$ {car.valor}</p>
        </div>
        <ComplementsCar car={car} />
      </li>
    </>
  );
}
