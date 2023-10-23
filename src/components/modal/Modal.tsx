import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";
interface ModalProps {
  action: () => void;
}
export function Modal({ action }: ModalProps) {
  return (
    <main className="w-full flex items-center justify-center h-screen fixed top-0 left-0 bg-gray-400/75">
      <section className="w-11/12 max-w-md p-6 rounded-2xl shadow-lg bg-gray-200 flex gap-5 flex-col items-center justify-center">
        <h3 className="flex items-center gap-2 flex-wrap justify-center w-full text-green-700 uppercase font-bold sm:text-base">
          Carro cadastrado com sucesso
          <span>
            <BsCheckCircleFill />
          </span>
        </h3>
        <button
          className="shadow-lg py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 hover:scale-105"
          onClick={action}
        >
          Continuar criando
        </button>
        <Link className="underline hover:scale-105" href={"/"}>
          Voltar para a listagem
        </Link>
      </section>
    </main>
  );
}
