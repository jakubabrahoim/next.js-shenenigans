import type { NextPage } from 'next';
import Head from 'next/head';

import Navigation from '../components/Navigation/Navigation';

const Portfolio: NextPage = () => {
	return (
		<section className='min-h-screen bg-alabaster font-montserrat text-jet-200'>
			<Head>
				<meta charSet='utf-8' />
				<meta name='author' content='Jakub Abrahoim' />
				<meta name='keywords' content='Jakub Abrahoim, Portfolio' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' type='image/x-icon' href='/images/portfolioFavicon.ico' />
				<title>Portfolio</title>
			</Head>
            <Navigation />
			<div className='mx-auto mt-16 max-w-6xl'>
				<h1 className='text-center text-4xl font-bold'>Comming soon</h1>
			</div>
		</section>
	)
}

export default Portfolio;
