import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { appContainer } from "./App.css";
import Home from "./pages/Home/Home";
import TodoPage from "./pages/TodoPage/TodoPage";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale, setDefaultLocale } from "react-datepicker";
import { ko } from "date-fns/locale/ko";
registerLocale("ko", ko);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/todo",
        element: <TodoPage />,
      },
    ],
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
