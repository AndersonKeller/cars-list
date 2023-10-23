Projeto de listagem de carros.

Deploy vercel: [Cars list](https://cars-list-project.vercel.app/)

## Para rodar o projeto

Após clonar esse repositório:

```bash
npm install
# or
yarn
```

Para rodar o projeto:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado

## Sobre o projeto

Optei por consumir o json no formato proposto [https://wswork.com.br/cars_by_brand.json](https://wswork.com.br/cars_by_brand.json), criando uma cópia local como base, pois assim evitava pegar o json quebrado no formato da resposta.

Optei por usar os cookies para persitir os dados após adicionar algum carro a listagem, também mantendo o formato dos dados.

Tecnologias:

-Next.js como framework.

-Zod e react-hook-form com typescript para validar os dados para cadastro de um novo carro. Pela facilidade em validar os dados e a forma como trabalham juntos

-Zustand para gerenciamento de estados globais e juntamente com a lib nookies para persistir os mesmos. Pela simplicidade de implementar o zustand e para usar a maioria dos dados de forma global.

-Tailwind para estilização.

## Componente List - documentação

Como usar o componente de listagem:

-interface que é usado na listagem de carros:

```typescript
interface Cars= {
  id: number,
  timestamp_cadastro: number,
  modelo_id: number,
  ano: number,
  combustivel: string,
  num_portas: number,
  cor: string,
  nome_modelo: string,
  valor: number,
  brand: number,
}[]
```

-Estrutura

```
/src
    /components
      /list
      ComplementsCar.tsx
      InfosCar.tsx
      ListCars.tsc
        /aside
          Aside.tsx
          Filters.tsx
```

- Você pode pode copiar toda a pasta list dentro de src/components

  -E importar o componente ListCars na página que deseja exibi-lá

  Exemplo:

  ```typescript
  import { ListCars } from "@/components/list/ListCars";
  //O componente pega a lista de carros diretamente do state global de carros
  export default async function Home() {
    return (
      <>
        <main className="p-6 flex gap-2 max-w-4xl mx-auto">
          <ListCars />
        </main>
      </>
    );
  }
  ```

- Acessando a pasta components/list teremos a seguinte estrutura

```typescript
//ListCars.tsx
export function ListCars() {
  //list sendo um state para atualizar a lista que será renderizada
  const [list, setList] = useState([] as Cars[]);
  //cars é um state global gerenciado pelo zustand, persiste o array de carros
  const { cars } = carListStore();
  //filteresCars é um state que gerencia se a lista está filtrada por marca
  const { filteredCars, setFilter } = filterCarsStore();
  //brands é um state de marcas existentes, e também inclui novas marcas caso ainda não existam
  const { brands } = brandListStore();
  //começa com o filtro de marcas vazio, cada vez que se volta a rota home, onde ela está sendo renderizada
  useEffect(() => {
    setFilter([]);
  }, []);
  //observa alterações de filtro, e caso aconteça, joga o filtro para a lista a ser renderizada
  useEffect(() => {
    if (filteredCars.length > 0) {
      setList(filteredCars);
    } else {
      setList(cars);
    }
  }, [filteredCars]);
  //espera que a lista esteja pronta para ser renderizada, caso contrário exibe o <Loading/>
  return list.length > 0 ? (
    <>
      /*importa e usa o componente <Aside /> responsável pela exibição do filtro
      de marcas*/
      <Aside />
      <ul className="w-11/12 max-w-3xl m-auto flex flex-wrap justify-center gap-3 items-start mb-20">
        <h2 className="w-full text-center text-gray-900 font-bold">
          Mostrando:{" "}
          {filteredCars.length == 0 ? (
            <span>TODOS</span>
          ) : (
            <span>{brands[list[0].brand - 1]}</span>
          )}
        </h2>
        /*faz um map na lista, trazendo o componente <InfosCar /> passando o carro
        como prop*/
        {list.map((car: Cars) => (
          <InfosCar key={car.id} car={car} />
        ))}
      </ul>
    </>
  ) : (
    <Loading />
  );
}
```

```typescript
//Aside.tsx
//responsável por montar o componente de listagem de marcas em tela
//importa e usa o componente <Filters/>
export function Aside() {
  return (
    <aside className="bg-gray-400 fixed bottom-0 left-[5%] w-11/12 mx-auto flex  h-20 max-h-24 pb-4 sm:w-max sm:left-0  sm:h-max sm:max-h-none  sm:sticky sm:top-5 sm:mt-8">
      <div className="bg-blue-500 w-full rounded-xl px-4 py-2 max-h-16 overflow-auto sm:gap-2 sm:w-max sm:flex sm:flex-col sm:max-h-none">
        <h3 className="text-center text-slate-200 font-bold">
          Filtro pro marca
        </h3>
        <Filters />
      </div>
    </aside>
  );
}
```

```typescript
//Filters.tsx
const { brands } = brandListStore();
//brandList é um state que atualiza as marcas disponíveis para listagem e filtragem
const [brandList, setBrandList] = useState([] as string[]);
//faz uso dos states globais
const { cars } = carListStore();
const { setFilter } = filterCarsStore();
//getByBrand pega a marca clicada e seta o filtro de carros, para definir qual a marca de carros que deve ser exibida
function getByBrand(brand: string) {
  if (brand == "todos") {
    setFilter([]);
  } else {
    const findIndexBrand = brandList.findIndex(
      (item) => item.toUpperCase() == brand.toUpperCase()
    );

    const filtered = cars.filter((car) => car.brand == findIndexBrand + 1);

    setFilter(filtered);
  }
  scroll({ top: 0 });
}
//começa setando as marcas com aquelas que estão sendo gerenciadas pelo state global
useEffect(() => {
  setBrandList(brands);
}, []);
//retorna um botão para cada marca, passando a função getByBrand com seu nome como parâmetro
return (
  <div className="flex gap-2 items-center justify-start overflow-auto sm:flex-col sm:max-h-none">
    <button
      onClick={() => getByBrand("todos")}
      className="focus:bg-blue-700 focus:text-gray-300 hover:bg-blue-800 hover:text-gray-300 shadow-md bg-blue-400 px-1 rounded-md"
    >
      TODOS
    </button>
    {brandList &&
      brandList.map((brand) => (
        <button
          onClick={() => getByBrand(brand)}
          key={brand}
          className="focus:bg-blue-700 focus:text-gray-300 hover:bg-blue-800 hover:text-gray-300 shadow-md bg-blue-400 px-1 rounded-md"
        >
          {brand}
        </button>
      ))}
  </div>
);
```

```typescript
//InfosCar.tsx
//recebe o carro como prop
//traz as informações principais de cada carro na lista
export function InfosCar({ car }: InfosCarProps) {
  //faz uso da lista de marcas do store
  const { brands } = brandListStore();
  //pega a lista de marcas e atribui um nome de acordo com a key brand do carro
  const brandName = brands[car.brand - 1];
  return (
    <>
      <li className="p-4 flex w-full flex-wrap items-center bg-gray-800 shadow-md gap-2 rounded-lg hover:bg-black hover:shadow-2xl justify-evenly transition-all duration-500 ease-in-out border-gray-50 border max-w-[300px]">
        <h3 className="font-bold w-full text-[12px] text-blue-200 bg-gray-100 px-4 rounded-md shadow-md">
          {car.nome_modelo.toUpperCase()}
        </h3>
        <div className="w-[48%] flex flex-col items-start gap-2 ">
          <p className="text-indigo-500">{brandName}</p>
          <p className="text-gray-400">{car.ano}</p>
          <p className="text-gray-400">
            R$ {car.valor.toFixed(2).replaceAll(".", ",")}
          </p>
        </div>
        /** importa o componente <ComplementsCar /> passando o carro como prop.
        * */
        <ComplementsCar car={car} />
      </li>
    </>
  );
}
```

```typescript
//ComplementsCar.tsx
//exibe as informações complementares de cada carro
export function ComplementsCar({ car }: ComplementsCarProps) {
  return (
    <div className="flex min-w-[48%] text-[12px] flex-col items-end gap-2 justify-start w-max">
      <span className="bg-blue-400 rounded-md p-1 text-gray-200">
        {car.combustivel}
      </span>
      <span className="bg-blue-50 rounded-md p-1 text-gray-100 w-max">
        {car.num_portas} portas
      </span>
      <span className="bg-gray-500 rounded-md p-1 uppercase text-gray-100">
        {car.cor}
      </span>
    </div>
  );
}
```
