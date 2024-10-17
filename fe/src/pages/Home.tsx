import { Outlet } from "react-router-dom";
import { AppBar } from "../components/AppBar";

export const Home = () => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="mt-20"> 
          <Outlet />
        </div>
      </div>
    </div>
  );
};
