import NavigationLink from "./NavigationLink";

import { VscCode, VscHome } from 'react-icons/vsc';
import { GiKnifeFork } from 'react-icons/gi';
import { BsPencil } from 'react-icons/bs';

const Navigation = () => {
    return (
        <header>
            <nav className='mx-auto mt-2 flex max-w-4xl items-center justify-between'>
                <span className="text-lg font-semibold">Jakub Abrahoim</span>
                <div className='flex'>
                    <NavigationLink href='/' icon={<VscHome />} caption='Home' />
                    <NavigationLink href='#' icon={<VscCode />} caption='Portfolio' />
                    <NavigationLink href='#' icon={<GiKnifeFork />} caption='Cooking' />
                    <NavigationLink href='#' icon={<BsPencil />} caption='Blog' />
                </div>
            </nav>
        </header>
    )
}

export default Navigation;