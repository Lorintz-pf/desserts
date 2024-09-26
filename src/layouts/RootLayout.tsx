import { Home } from "./Home";
import { Outlet } from "react-router";
const RootLayout = () => {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
};

export default RootLayout;
