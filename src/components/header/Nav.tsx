import Link from "next/link";
import { GoHome } from "react-icons/go";
import { MdOutlineCreate } from "react-icons/md";
export function Nav() {
  return (
    <nav className="w-1/2 max-w-sm m-auto flex justify-between items-center">
      <Link className="w-16 flex flex-col gap-1 items-center" href={"/"}>
        <GoHome className="w-6 h-6 text-white" />
        <p className="uppercase text-[12px] text-white">Home</p>
      </Link>
      <Link
        className="w-16 flex flex-col gap-1 items-center"
        href={"/cadastrar"}
      >
        <MdOutlineCreate className="w-6 h-6 text-white" />
        <p className="uppercase text-[12px] text-white">Cadastrar</p>
      </Link>
    </nav>
  );
}
