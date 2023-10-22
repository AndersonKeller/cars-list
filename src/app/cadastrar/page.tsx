"use client";
import { Input } from "@/components/input/Input";
import { carListStore } from "@/store/store";
import { Cars } from "@/types/CarInterfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterData, iCombustivel, registerSchema } from "./schema";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });
  const { cars, setCars } = carListStore();
  function onFormRegister(data: RegisterData) {
    console.log(data);
    const newCar: Cars = {
      ...data,
      modelo_id: 13,
      id: 5,
      timestamp_cadastro: 234,
      ano: parseInt(data.ano),
      num_portas: parseInt(data.num_portas),
      valor: parseInt(data.valor),
    };
    console.log(newCar);
    setCars([...cars, newCar]);
  }
  console.log(cars);
  return (
    <main className="py-6 max-w-lg m-auto">
      <form
        noValidate
        onSubmit={handleSubmit(onFormRegister)}
        className="gap-3 w-11/12 m-auto bg-gray-200 flex items-center flex-col p-4 rounded-lg"
      >
        <Input
          register={register("marca")}
          label="Marca"
          placeholder="Marca..."
          errorMsg={errors.marca && errors.marca.message}
        />
        <Input
          register={register("ano")}
          label="Ano"
          type="number"
          placeholder="ano do veículo..."
          errorMsg={errors.ano && errors.ano.message}
        />

        <select {...register("combustivel")} name="combustivel" id="">
          <option value="">Selecione</option>
          {iCombustivel.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <Input
          label="portas"
          placeholder="2"
          register={register("num_portas")}
          errorMsg={errors.num_portas && errors.num_portas.message}
          type="number"
        />
        <Input
          label="Modelo"
          placeholder="Ex: Hilux"
          register={register("nome_modelo")}
          errorMsg={errors.nome_modelo && errors.nome_modelo.message}
        />
        <Input
          label="Cor"
          placeholder="Ex: Bege"
          register={register("cor")}
          errorMsg={errors.cor && errors.cor.message}
        />
        <Input
          label="Preço"
          placeholder="EX: 50.000"
          register={register("valor")}
          errorMsg={errors.valor && errors.valor.message}
          type="number"
        />
        <button
          type="submit"
          className="bg-blue-500 text-gray-200 font-bold uppercase border-none py-2 px-4 rounded-xl"
        >
          Confirmar
        </button>
      </form>
    </main>
  );
}
