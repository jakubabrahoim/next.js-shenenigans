import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navigation from '../components/Navigation/Navigation'

const Portfolio: NextPage = () => {
	return (
		<section className='min-h-screen bg-zinc-100 font-montserrat text-stone-800'>
			<Head>
				<title>Portfolio</title>
			</Head>
            <Navigation />
		</section>
	)
}

export default Portfolio;
