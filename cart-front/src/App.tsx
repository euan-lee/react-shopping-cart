import { getProducts } from "./Apis/api";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getProducts,
  });
  console.log("data", data);
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return <>hi</>;
};

export default App;
