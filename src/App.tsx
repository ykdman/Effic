import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./common/components/RootLayout/RootLayout";
import { appContainer } from "./App.css";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return (
    <section className={appContainer}>
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
