import { useCallback } from 'react';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles id='particles' className='!-z-50' init={particlesInit} options={{
            fpsLimit: 120,
            particles: {
                color: {
                    value: "#503e51",
                },
                move: {
                    enable: true,
                    direction: "none",
                    random: true,
                    speed: 1,
                    attract: {
                        rotateX: 600,
                        rotateY: 1200,
                    },
                    out_mode: "out",
                },
                number: {
                    value: 40,
                    density: {
                        enable: true,
                        area: 500,
                    },
                },
                opacity: {
                    value: 0.3,
                    random: true,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: 3,
                    random: true,
                },
            },
            detectRetina: true,
        }} />
    );
}

export default ParticlesBackground;