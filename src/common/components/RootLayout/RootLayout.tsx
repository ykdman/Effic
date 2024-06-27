import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
