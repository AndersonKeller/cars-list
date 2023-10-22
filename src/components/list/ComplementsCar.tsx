import { Cars } from "@/types/CarInterfaces";

interface ComplementsCarProps {
  car: Cars;
}
export function ComplementsCar({ car }: ComplementsCarProps) {
  return (
    <div className="flex text-[12px] flex-col items-end gap-2 justify-start w-max">
      <span className="bg-blue-400 rounded-md p-1 text-gray-200">
        {car.combustivel}
      </span>
      <span className="bg-blue-50 rounded-md p-1 text-gray-100 w-max">
        {car.num_portas} portas
      </span>
      <span className="bg-gray-500 rounded-md p-1 uppercase text-gray-100">
        {car.cor}
      </span>
    </div>
  );
}
