export const fetchTotalItems = async () => {
  const response = await fetch("http://localhost:5173/totalItems");
  console.log("response", response);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
