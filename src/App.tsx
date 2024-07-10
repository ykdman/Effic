import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { appContainer } from "./App.css";
import Home from "./pages/Home/Home";
import TodoPage from "./pages/TodoPage/TodoPage";
import CalenderPage from "./pages/Calender/CalenderPage";
import TimerPage from "./pages/Timer/TimerPage";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
      {
        path: "/calender",
        element: <CalenderPage />,
      },
      {
        path: "/timer",
        element: <TimerPage />,
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
