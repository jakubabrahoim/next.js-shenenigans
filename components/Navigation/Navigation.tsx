import { useState } from "react";

import NavigationLink from "./NavigationLink";

import ReactIcon from "../ReactIcon";
import { VscCode, VscHome, VscChromeClose } from 'react-icons/vsc';
import { AiOutlineMenu } from 'react-icons/ai';

interface Props {
    navigationType?: 'admin' | undefined;
}

const Navigation = (props: Props) => {   
    let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    

    /* Admin specific navigation */
    if(props.navigationType === 'admin') return (
        <header className='h-0.5/10'>
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
                    <ReactIcon icon={<AiOutlineMenu />} iconClass='w-7 h-7 text-jet-200 font-semibold text-xl' />
                    :
                    <ReactIcon icon={<VscChromeClose />} iconClass='w-7 h-7 text-jet-200 font-semibold text-xl' />
                }
                <span id='mobileMenu' hidden>Mobile menu</span>
            </button>

            <nav className='ml-3 flex max-w-6xl items-center justify-between pt-2 sm:mx-auto'>
                <span className='hidden text-lg font-semibold text-jet-200 sm:block'>
                    Jakub Abrahoim
                </span>
                <div className={`${!isMobileMenuOpen ? 'hidden' : 'flex flex-col space-y-1'} sm:flex sm:flex-row sm:space-y-0`}>
                    <NavigationLink href='/' icon={<VscHome />} caption='Home' />
                    <NavigationLink href='/portfolio' icon={<VscCode />} caption='Portfolio' />    
                </div>
            </nav>
        </header>
    )
}

export default Navigation;