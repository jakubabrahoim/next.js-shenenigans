import {
    AiOutlineMail,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineGithub,
} from "react-icons/ai";
import ReactIcon from "../ReactIcon";

const Footer = () => {
    return (
        <footer className="flex w-screen max-w-6xl justify-center pt-2 sm:mx-auto sm:justify-end">
            <section className="mr-4 flex items-center justify-center">
                <span className="mr-3 text-lg font-bold">Get in touch</span>
                <a href="mailto:jakub.abrahoim@gmail.com">
                    <ReactIcon
                        icon={<AiOutlineMail />}
                        iconClass="mr-1.5 w-6 h-6 hover:text-orchid-200 transition duration-500 cursor-pointer"
                    />
                </a>
                <a
                    href="https://www.instagram.com/jakub.abrahoim/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <ReactIcon
                        icon={<AiOutlineInstagram />}
                        iconClass="mr-1.5 w-6 h-6 hover:text-orchid-200 transition duration-500 cursor-pointer"
                    />
                </a>
                <a
                    href="https://linkedin.com/in/jakub-abrahoim-b03011196"
                    target="_blank"
                    rel="noreferrer"
                >
                    <ReactIcon
                        icon={<AiOutlineLinkedin />}
                        iconClass="mr-1.5 w-6 h-6 hover:text-orchid-200 transition duration-500 cursor-pointer"
                    />
                </a>
                <a
                    href="https://github.com/jakubabrahoim"
                    target="_blank"
                    rel="noreferrer"
                >
                    <ReactIcon
                        icon={<AiOutlineGithub />}
                        iconClass="w-6 h-6 hover:text-orchid-200 transition duration-500 cursor-pointer"
                    />
                </a>
            </section>
        </footer>
    );
};

export default Footer;
