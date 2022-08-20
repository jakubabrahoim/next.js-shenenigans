import NavigationLink from "./NavigationLink";

import { VscCode, VscHome } from 'react-icons/vsc';
import { GiKnifeFork } from 'react-icons/gi';
import { BsPencil } from 'react-icons/bs';
import { RiAdminLine } from 'react-icons/ri';

interface Props {
    navigationType?: 'admin' | undefined;
}

const Navigation = (props: Props) => {    
    if(props.navigationType === 'admin') return (
        <header>
            <nav className='pt-2'>
                <div className='flex'>
                    <NavigationLink href='/' icon={<VscHome />} caption='Home' />
                </div>
            </nav>
        </header>
    )
    
    return (
        <header>
            <nav className='mx-auto flex max-w-5xl items-center justify-between pt-2'>
                <span className="text-lg font-semibold text-jet-200">Jakub Abrahoim</span>
                <div className='flex'>
                    <NavigationLink href='/' icon={<VscHome />} caption='Home' />
                    <NavigationLink href='/portfolio' icon={<VscCode />} caption='Portfolio' />
                    <NavigationLink href='/cooking' icon={<GiKnifeFork />} caption='Cooking' />
                    <NavigationLink href='/blog' icon={<BsPencil />} caption='Blog' />
                    <NavigationLink href='/admin' icon={<RiAdminLine />} caption='Admin' />
                </div>
            </nav>
        </header>
    )
}

export default Navigation;