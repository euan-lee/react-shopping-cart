import { fetchTotalItems } from "./apis/api";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTotalItems,
  });

  console.log("data", data);
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return <>hi</>;
};
export default App;
