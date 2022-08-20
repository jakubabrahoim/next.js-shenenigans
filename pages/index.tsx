import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navigation from '../components/Navigation/Navigation'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<Navigation />
			<p className='text-lg font-bold'>Hello bishes 😎</p>
		</div>
	)
}

export default Home;
