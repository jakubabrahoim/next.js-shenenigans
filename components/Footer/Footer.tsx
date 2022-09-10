import { AiOutlineMail, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import ReactIcon from "../ReactIcon";

const Footer = () => {
    return (
        <footer className="flex w-screen max-w-6xl justify-between pt-2 sm:mx-auto">
            <div></div>
            <div className="mr-4 flex items-center justify-center">
                <span className='mr-3 font-bold'>Get in touch</span>
                <ReactIcon icon={<AiOutlineMail />} iconClass='mr-1.5 w-6 h-6 hover:text-orchid-200 transition duration-500 cursor-pointer'/>
                <ReactIcon icon={<AiOutlineInstagram />} iconClass='mr-1.5 w-6 h-6 hover:text-orchid-200 transition duration-500 cursor-pointer'/>
                <ReactIcon icon={<AiOutlineLinkedin />} iconClass='w-6 h-6 hover:text-orchid-200 transition duration-500 cursor-pointer'/>
            </div>
        </footer>
    );
}

export default Footer;