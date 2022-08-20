import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navigation from '../components/Navigation/Navigation'

const Cooking: NextPage = () => {
	return (
		<section className='min-h-screen bg-zinc-100'>
			<Head>
				<title>Cooking</title>
			</Head>
            <Navigation />
		</section>
	)
}

export default Cooking;
