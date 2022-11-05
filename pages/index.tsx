import type { NextPage } from 'next';
import Head from 'next/head';

import Navigation from '../components/Navigation/Navigation';
import HomeWrapper from '../components/Home/HomeWrapper';
import Footer from '../components/Footer/Footer';
import ParticlesBackground from '../components/ParticlesBackground';



const Home: NextPage = () => {
    

    return (
        <section className='min-h-screen bg-alabaster px-4 font-montserrat text-jet-200 xl:px-0'>
            <Head>
                <meta charSet='utf-8' />
                <meta name='author' content='Jakub Abrahoim' />
                <meta name='keywords' content='Jakub Abrahoim, Freelance, Web Developer, FIIT STU' />
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
            <ParticlesBackground />
            <Navigation />
            <HomeWrapper />
            <Footer />
        </section>
    );
};

export default Home;
