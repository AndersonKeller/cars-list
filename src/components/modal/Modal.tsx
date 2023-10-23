import Link from "next/link";
interface ModalProps {
  action: () => void;
}
export function Modal({ action }: ModalProps) {
  return (
    <main className="w-full flex items-center justify-center h-screen fixed top-0 left-0 bg-gray-400/75">
      <section className="w-11/12 max-w-md p-6 rounded-2xl shadow-lg bg-gray-50 flex gap-3 flex-col items-center justify-center">
        <h3 className="text-green-700 uppercase font-bold">
          Carro cadastrado com sucesso!
        </h3>
        <button
          className="shadow-lg py-2 px-4 bg-gray-200 rounded-lg"
          onClick={action}
        >
          Continuar criando
        </button>
        <Link className="underline" href={"/"}>
          Voltar para a listagem
        </Link>
      </section>
    </main>
  );
}
