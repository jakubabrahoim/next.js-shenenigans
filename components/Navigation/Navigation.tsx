import Link from "next/link";

const Navigation = () => {
    return (
        <header>
            <nav className='mx-auto mt-2 flex max-w-4xl justify-between'>
                <span>Jakub Abrahoim</span>
                <div>
                    <Link href='/'>
                        <a className="px-2 py-1">Home</a>
                    </Link>
                    <Link href='/'>
                        <a className="px-2 py-1">Portfolio</a>
                    </Link>
                    <Link href='/'>
                        <a className="px-2 py-1">Cooking</a>
                    </Link>
                    <Link href='/'>
                        <a className="px-2 py-1">Blog</a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;