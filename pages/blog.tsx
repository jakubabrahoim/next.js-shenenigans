import type { NextPage } from 'next';
import Head from 'next/head';

import Navigation from '../components/Navigation/Navigation';

const Cooking: NextPage = () => {
	return (
		<section className='min-h-screen bg-alabaster font-montserrat text-stone-800'>
			<Head>
				<meta charSet='utf-8' />
				<meta name='author' content='Jakub Abrahoim' />
				<meta name='keywords' content='Jakub Abrahoim, Blog' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' type='image/x-icon' href='/images/blogFavicon.ico' />
				<title>Blog</title>
			</Head>
            <Navigation />
		</section>
	)
}

export default Cooking;
