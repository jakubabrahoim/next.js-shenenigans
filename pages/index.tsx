import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<p className='text-lg font-bold'>Hello bishes 😎</p>
			<Link href='/about/1'> 
				<a className='rounded-lg bg-gray-200 p-2 text-white transition hover:bg-gray-800'>Go to about [id]</a> 
			</Link>
		</div>
	)
}

export default Home;
