import { Nav } from "./Nav";

export function Header() {
  return (
    <header
      className="bg-blue-50 w-full flex flex-col
    items-center justify-center py-4 shadow-md gap-4"
    >
      <h1 className="text-gray-900 uppercase font-bold text-lg">Seu Carro</h1>
      <Nav />
    </header>
  );
}
