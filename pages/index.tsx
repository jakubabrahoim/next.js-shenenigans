import { useCallback } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Navigation from '../components/Navigation/Navigation';
import HomeWrapper from '../components/Home/HomeWrapper';
import Footer from '../components/Footer/Footer';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Home: NextPage = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    return (
        <section className='min-h-screen bg-alabaster font-montserrat text-jet-200 sm:px-2'>
            <Head>
                <meta charSet='utf-8' />
                <meta name='author' content='Jakub Abrahoim' />
                <meta name='keywords' content='Jakub Abrahoim' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <link
                    rel='icon'
                    type='image/x-icon'
                    href='/images/homeFavicon.ico'
                />
                <title>Home</title>
            </Head>
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
            <Navigation />
            <HomeWrapper />
            <Footer />
        </section>
    );
};

export default Home;
