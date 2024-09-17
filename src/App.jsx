import { Outlet } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import { useCallback } from "react";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      {/* Animation de particules pleine page */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true }, 
          particles: {
            number: {
              value: 100, // Nombre de particules
              density: {
                enable: true,
                area: 800, // Densité des particules
              },
            },
            color: {
              value: "#000000", // Couleur des particules
            },
            shape: {
              type: "cercle", // Forme des particules : cercle
            },
            opacity: {
              value: 0.5, // Opacité des particules
            },
            size: {
              value: 30000, 
              random: true, 
            },
            move: {
              enable: true,
              speed: 1, 
              direction: "none", 
              outModes: {
                default: "out", 
              },
            },
            links: {
              enable: false, 
            },
          },
          fpsLimit: 60, 
          detectRetina: true, 
        }}
      />

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
