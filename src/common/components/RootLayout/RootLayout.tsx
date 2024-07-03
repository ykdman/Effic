import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";
import { contentWrapper } from "../../../App.css";
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
