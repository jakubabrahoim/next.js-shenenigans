import type { NextPage } from 'next';
import Head from 'next/head';

import Navigation from '../components/Navigation/Navigation';
import AdminWrapper from '../components/Admin/AdminWrapper';

const Cooking: NextPage = () => {
	return (
		<section className='h-screen bg-alabaster font-montserrat text-stone-800'>
			<Head>
				<meta charSet='utf-8' />
				<meta name='author' content='Jakub Abrahoim' />
				<meta name='keywords' content='Jakub Abrahoim, Admin' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' type='image/x-icon' href='/images/adminFavicon.ico' />
				<title>Admin</title>
			</Head>
            <Navigation navigationType='admin' />
			<AdminWrapper />
		</section>
	)
}

export default Cooking;
