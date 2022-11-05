import type { NextPage } from 'next';
import Head from 'next/head';

import Navigation from '../components/Navigation/Navigation';
import ParticlesBackground from '../components/ParticlesBackground';
import PortfolioWrapper from '../components/Portfolio/PorfolioWrapper';

const Portfolio: NextPage = () => {
	return (
		<section className='min-h-screen bg-alabaster px-4 font-montserrat text-jet-200 xl:px-0'>
			<Head>
				<meta charSet='utf-8' />
				<meta name='author' content='Jakub Abrahoim' />
				<meta name='keywords' content='Jakub Abrahoim, Portfolio, Radio Stream' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' type='image/x-icon' href='/images/portfolioFavicon.ico' />
				<title>Portfolio</title>
			</Head>
			<ParticlesBackground />
            <Navigation />
			<PortfolioWrapper />
		</section>
	)
}

export default Portfolio;
