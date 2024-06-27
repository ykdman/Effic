import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./common/components/RootLayout/RootLayout";

const router = createBrowserRouter([{ path: "/", element: <RootLayout /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
