import type { NextPage } from 'next';
import Head from 'next/head';

import Navigation from '../components/Navigation/Navigation';
import AdminWrapper from '../components/Admin/AdminWrapper';

const Cooking: NextPage = () => {
	return (
		<section className='h-screen bg-alabaster font-montserrat text-stone-800'>
			<Head>
				<title>Admin</title>
			</Head>
            <Navigation navigationType='admin' />
			<AdminWrapper />
		</section>
	)
}

export default Cooking;
