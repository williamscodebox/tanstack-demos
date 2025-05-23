import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function TanstackQuery() {
  const query = useQuery({ queryKey: ["todo"], queryFn: fetchData });
  console.log(query);
  return (
    <div className="flex flex-col items-center justify-center bg-gray-600 text-white font-bold text-2xl">
      <div className="mb-4">TanstackQuery</div>
      <div className="border-5 p-10 mb-4">
        {query.isLoading && "Loading..."}
        {query.error && `Error: ${(query.error as Error).message}`}
        {query.data && <pre>{JSON.stringify(query.data, null, 2)}</pre>}
      </div>
    </div>
  );
}

export default TanstackQuery;
