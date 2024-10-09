import { Outlet } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import Animation from "./page/Animation/animation";

const App = () => {
  return (
    <>
      <Animation />
      <Aside />
      <div className="main-content">
        <Navbar />
        <section style={{ scrollBehavior: "smooth" }}>
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default App;
