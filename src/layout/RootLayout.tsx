import { Outlet } from "react-router-dom";
import MainNavigation from "../common/components/MainNavigation/MainNavigation";
import { contentWrapper } from "../App.css";
// import { mainWrapper } from "./RootLayout.css";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <div className={contentWrapper}>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
