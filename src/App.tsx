import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import QueryProvider from "./providers/QueryProvider";
import ErrorBoundary from "./pages/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </ErrorBoundary>
  );
}

export default App;
