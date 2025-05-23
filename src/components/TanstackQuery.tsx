import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {};

function TanstackQuery() {
  const data = useQuery({ queryKey: ["todo"], queryFn: fetchData });
  return <div>TanstackQuery</div>;
}

export default TanstackQuery;
