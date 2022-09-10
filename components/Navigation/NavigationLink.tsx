import Link from "next/link";
import { useRouter } from "next/router";

import ReactIcon from "../ReactIcon";

interface Props {
    href: string;
    icon: JSX.Element;
    caption: string;
}

const NavigationLink = (props: Props) => {
    const { pathname } = useRouter();
    const isRouteActive = pathname === props.href;

    return (
        <Link href={props.href}>
            <a className={
                `group mx-2 rounded-lg px-2 py-1 text-lg font-medium text-jet-200 transition duration-500 hover:bg-stone-200
                ${isRouteActive && 'underline decoration-gray-400 underline-offset-4 hover:decoration-orchid-200'}`
            }>
                <span className='flex items-center'>
                    <ReactIcon icon={props.icon} iconClass='group-hover:text-orchid-200 w-5 h-5 mr-1.5' />
                    {props.caption}
                </span>
            </a>
        </Link>
    )
}

export default NavigationLink;