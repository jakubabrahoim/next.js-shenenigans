import type { NextPage } from 'next';
import Head from 'next/head';

import Navigation from '../components/Navigation/Navigation';

const Portfolio: NextPage = () => {
	return (
		<section className='min-h-screen bg-alabaster font-montserrat text-stone-800'>
			<Head>
				<title>Portfolio</title>
			</Head>
            <Navigation />
		</section>
	)
}

export default Portfolio;
