import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Root() {
  return (
    <div className="container">
      <Navigation />
      <Outlet />
      <ToastContainer />
    </div>
  );
}
