import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { worker } from "./Mocks/browser.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

if (import.meta.env.VITE_NODE_ENV === "development") {
  worker.start();
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
