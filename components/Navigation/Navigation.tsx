import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
    const { pathname } = useRouter();
    const navLinkClass: string = 'px-2 py-1 mx-2 hover:bg-gray-200 rounded-lg';

    return (
        <header>
            <nav className='mx-auto mt-2 flex max-w-4xl justify-between'>
                <span>Jakub Abrahoim</span>
                <div>
                    <Link href='/'>
                        <a className={`${navLinkClass} ${pathname === '/' && 'underline decoration-gray-300 underline-offset-2'}`}>
                            Home
                        </a>
                    </Link>
                    <Link href='#'>
                        <a className={navLinkClass}>Portfolio</a>
                    </Link>
                    <Link href='#'>
                        <a className={navLinkClass}>Cooking</a>
                    </Link>
                    <Link href='#'>
                        <a className={navLinkClass}>Blog</a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;