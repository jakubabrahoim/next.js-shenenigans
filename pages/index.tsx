import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navigation from '../components/Navigation/Navigation'

const Home: NextPage = () => {
	return (
		<section className='min-h-screen bg-zinc-100 font-montserrat'>
			<Head>
				<title>Home</title>
			</Head>
			<Navigation />
		</section>
	)
}

export default Home;
