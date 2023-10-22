export default function Loading() {
  return (
    <ul className="flex flex-col max-w-lg gap-3 w-11/12 m-auto">
      <li className="bg-gray-300 rounded-md h-[150px] w-full shadow-lg animate-pulse"></li>
      <li className="bg-gray-300 rounded-md h-[150px] w-full shadow-lg animate-pulse "></li>
      <li className="bg-gray-300 rounded-md h-[150px] w-full shadow-lg animate-pulse "></li>
      <li className="w-full flex justify-center items-center gap-4 mt-3">
        <div className="rounded-full w-6 h-6 bg-gray-400 animate-pulse delay-0"></div>
        <div className="rounded-full w-6 h-6 bg-gray-400 animate-pulse delay-75"></div>
        <div className="rounded-full w-6 h-6 bg-gray-400 animate-pulse delay-100"></div>
      </li>
    </ul>
  );
}
