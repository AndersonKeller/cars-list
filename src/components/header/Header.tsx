import { Nav } from "./Nav";

export function Header() {
  return (
    <header
      className="bg-blue-900 w-full flex flex-col
    items-center justify-center py-3 shadow-md gap-2"
    >
      <h1 className="text-gray-200 uppercase font-bold text-lg">Seu Carro</h1>
      <p className=" text-gray-300">
        Vamos encontrar o carro que você procura?
      </p>
      <Nav />
    </header>
  );
}
