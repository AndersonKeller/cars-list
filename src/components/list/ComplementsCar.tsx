import { Cars } from "@/types/CarInterfaces";

interface ComplementsCarProps {
  car: Cars;
}
export function ComplementsCar({ car }: ComplementsCarProps) {
  return (
    <div className="flex w-full justify-evenly p-2 ">
      <span className="bg-blue-400 rounded-md p-1">{car.combustivel}</span>
      <span className="bg-blue-50 rounded-md p-1">{car.num_portas} portas</span>
      <span className="bg-gray-400 rounded-md p-1">{car.cor}</span>
    </div>
  );
}
