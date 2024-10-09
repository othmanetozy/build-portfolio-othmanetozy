import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Animation = () => {
  const particlesInit = useCallback(async (main) => {
    // This loads the tsparticles bundle which contains all the features
    await loadFull(main);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // You can perform any actions once the particles are loaded if needed
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // ... other options
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
      }}
    />
  );
};

export default Animation;