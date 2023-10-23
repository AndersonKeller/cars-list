"use client";
import { Input } from "@/components/input/Input";
import { Modal } from "@/components/modal/Modal";
import { brandListStore, carListStore, modelsListStore } from "@/store/store";
import { Cars } from "@/types/CarInterfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RegisterData, iCombustivel, registerSchema } from "./schema";

export default function RegisterPage() {
  const [openModal, setOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      num_portas: 2,
    },
    mode: "onBlur",
  });
  const { cars, setCars } = carListStore();
  const { brands, setBrands } = brandListStore();
  const { models, setModels } = modelsListStore();
  async function onFormRegister(data: RegisterData) {
    const timestamp = new Date().getTime();

    const findBrand = brands.find((brand) => brand == data.marca.toUpperCase());
    const findModel = models.find(
      (model) => model.model == data.nome_modelo.toUpperCase()
    );
    if (!findModel) {
      setModels([
        ...models,
        {
          model: data.nome_modelo.toUpperCase(),
          id: models[models.length - 1].id + 1,
        },
      ]);
    }
    if (!findBrand) {
      setBrands([...brands, data.marca.toUpperCase()]);
    }

    const findIndexBrand = brands.findIndex((brand) => {
      return brand.toUpperCase() == data.marca.toUpperCase();
    });

    const newCar: Cars = {
      combustivel: data.combustivel,
      cor: data.cor,
      nome_modelo: data.nome_modelo,
      modelo_id: findModel ? findModel.id : models[models.length - 1].id + 1,
      id: cars[cars.length - 1].id + 1,
      timestamp_cadastro: timestamp,
      ano: data.ano,
      num_portas: data.num_portas,
      valor: parseFloat(data.valor),
      brand: findBrand ? findIndexBrand + 1 : brands.length + 1,
    };

    setCars([...cars, newCar]);
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }

  return (
    <main className="py-6 max-w-lg m-auto">
      <h2 className="w-full text-center text-gray-900 font-bold uppercase mb-2">
        Aqui você pode cadastrar um novo carro
      </h2>
      <form
        noValidate
        onSubmit={handleSubmit(onFormRegister)}
        className="gap-2 w-11/12 m-auto bg-gray-300 flex items-center flex-col p-4 rounded-lg"
      >
        <Input
          register={register("marca")}
          label="Marca"
          placeholder="EX: TOYOTA"
          errorMsg={errors.marca && errors.marca.message}
        />
        <Input
          register={register("ano")}
          label="Ano"
          placeholder="EX: 2020"
          mask="9999"
          maxLength={4}
          errorMsg={errors.ano && errors.ano.message}
          type="number"
        />

        <div className="w-full flex flex-col gap-3 min-[368px]:flex-row">
          <div className="w-full min-[368px]:w-1/2 flex flex-col gap-3">
            <label className="self-start" htmlFor="combustivel">
              Combustível <span className="text-red-600 font-bold">*</span>
            </label>
            <select
              className="w-full h-9 rounded-md outline-1 outline-blue-100 ps-2"
              {...register("combustivel")}
              name="combustivel"
              id="combustivel"
            >
              <option value="">Selecione</option>
              {iCombustivel.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full min-[368px]:w-1/2 flex flex-col gap-3">
            {" "}
            <Input
              label="Portas"
              placeholder="2"
              mask="9"
              maxLength={1}
              register={register("num_portas")}
              errorMsg={errors.num_portas && errors.num_portas.message}
            />
          </div>
        </div>
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
          mask="999999"
          type="number"
        />
        <button
          type="submit"
          className="bg-blue-500 mt-2 text-gray-200 font-bold uppercase border-none py-2 px-4 rounded-xl"
        >
          Confirmar
        </button>
      </form>
      {openModal && <Modal action={closeModal} />}
    </main>
  );
}
