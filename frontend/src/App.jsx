import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import "./App.css";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <MyFooter />
    </>
  );
}

export default App;
