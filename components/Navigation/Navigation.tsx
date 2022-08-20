import NavigationLink from "./NavigationLink";

import { VscCode, VscHome } from 'react-icons/vsc';
import { GiKnifeFork } from 'react-icons/gi';
import { BsPencil } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';

const Navigation = () => {
    return (
        <header>
            <nav className='mx-auto flex max-w-5xl items-center justify-between pt-2'>
                <span className="text-lg font-semibold">Jakub Abrahoim</span>
                <div className='flex'>
                    <NavigationLink href='/' icon={<VscHome />} caption='Home' />
                    <NavigationLink href='/portfolio' icon={<VscCode />} caption='Portfolio' />
                    <NavigationLink href='#' icon={<GiKnifeFork />} caption='Cooking' />
                    <NavigationLink href='#' icon={<BsPencil />} caption='Blog' />
                    <NavigationLink href='#' icon={<GrUserAdmin />} caption='Admin' />
                </div>
            </nav>
        </header>
    )
}

export default Navigation;