import TanstackQuery from "./components/TanstackQuery";

function App() {
  return (
    <div className="flex flex-col h-full items-center justify-center bg-gray-600 text-white font-bold text-2xl">
      <div className="m-2"></div>
      <div>
        <TanstackQuery />
      </div>
    </div>
  );
}

export default App;
