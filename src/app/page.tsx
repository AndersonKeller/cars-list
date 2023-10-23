import { ListCars } from "@/components/list/ListCars";
export default async function Home() {
  return (
    <>
      <main className="p-6 flex gap-2 max-w-4xl mx-auto">
        <ListCars />
      </main>
    </>
  );
}
