import { Filters } from "./Filters";

export function Aside() {
  return (
    <aside className="bg-gray-400 fixed bottom-0 left-[5%] w-11/12 mx-auto flex sm:relative h-20 max-h-24 pb-4  sm:w-max sm:left-0  sm:h-max sm:max-h-none">
      <div className="bg-blue-500 w-full rounded-xl px-4 py-2 max-h-16 overflow-auto sm:flex sm:flex-col sm:max-h-none">
        <h3 className="text-center text-slate-200 font-bold">
          Filtro pro marca
        </h3>
        <Filters />
      </div>
    </aside>
  );
}
