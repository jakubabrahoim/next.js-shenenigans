import type { NextPage } from 'next';
import Head from 'next/head';

import Navigation from '../components/Navigation/Navigation';
import HomeWrapper from '../components/Home/HomeWrapper';

const Home: NextPage = () => {
	return (
		<section className='min-h-screen bg-zinc-100 font-montserrat text-stone-800'>
			<Head>
				<meta charSet='utf-8' />
				<meta name='author' content='Jakub Abrahoim' />
				<meta name='keywords' content='Jakub Abrahoim' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>Home</title>
			</Head>
			<Navigation />
			<HomeWrapper />
		</section>
	)
}

export default Home;
