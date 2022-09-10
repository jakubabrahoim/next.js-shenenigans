import { IconContext } from "react-icons";
import { AiOutlineMail, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="flex w-screen max-w-6xl justify-between pt-2 sm:mx-auto">
            <div></div>
            <div className="mr-4 flex items-center justify-center">
                <span className='mr-3 font-bold'>Get in touch</span>
                <IconContext.Provider value={{className: 'mr-1.5 w-6 h-6 hover:text-orchid-200 transition duration-500 cursor-pointer'}}>
                    <AiOutlineMail />
                </IconContext.Provider>
                <IconContext.Provider value={{className: 'mr-1.5 w-6 h-6 hover:text-orchid-200 transition duration-500 cursor-pointer'}}>
                    <AiOutlineInstagram />
                </IconContext.Provider>
                <IconContext.Provider value={{className: 'w-6 h-6 hover:text-orchid-200 transition duration-500 cursor-pointer'}}>
                    <AiOutlineLinkedin />
                </IconContext.Provider>
            </div>
        </footer>
    );
}

export default Footer;