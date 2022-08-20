import { useState } from "react";

import NavigationLink from "./NavigationLink";

import { IconContext } from "react-icons";
import { VscCode, VscHome, VscChromeClose } from 'react-icons/vsc';
import { AiOutlineMenu } from 'react-icons/ai';
import { GiKnifeFork } from 'react-icons/gi';
import { BsPencil } from 'react-icons/bs';
import { RiAdminLine } from 'react-icons/ri';

interface Props {
    navigationType?: 'admin' | undefined;
}

const Navigation = (props: Props) => {   
    let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
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
            {/* Menu button only visible on mobile */}
            <button 
                className={`ml-6 block pt-6 sm:hidden ${isMobileMenuOpen && 'mb-2'}`} 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-labelledby='mobileMenu'
            >
                {
                    !isMobileMenuOpen ?
                    <IconContext.Provider value={{ className: 'w-7 h-7 text-jet-200 font-semibold text-xl' }} >
                        <AiOutlineMenu />
                    </IconContext.Provider>
                    :
                    <IconContext.Provider value={{ className: 'w-7 h-7 text-jet-200  text-xl' }} >
                        <VscChromeClose />
                    </IconContext.Provider>
                }
                <span id='mobileMenu' hidden>Mobile menu</span>
            </button>

            <nav className='ml-3 flex max-w-6xl items-center justify-between pt-2 sm:mx-auto'>
                <span className='hidden text-lg font-semibold text-jet-200 sm:block'>Jakub Abrahoim</span>
                <div className={`${!isMobileMenuOpen ? 'hidden' : 'flex flex-col space-y-1'} sm:flex`}>
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