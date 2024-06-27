import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";
import { mainWrapper } from "./RootLayout.css";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={mainWrapper}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
