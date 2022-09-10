import { IconContext } from "react-icons";

interface Props {
    icon: JSX.Element;
    iconClass: string;
    tooltip?: string
}

const ReactIcon = ({icon, iconClass, tooltip}: Props) => {
    if(tooltip) return (
        <div className='group flex items-center gap-2'>
            <IconContext.Provider value={{className: iconClass}}>
                {icon}
            </IconContext.Provider>
            <span className='rounded-lg bg-jet-200/20 px-2 py-1 text-orchid-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                {tooltip}
            </span>
        </div>
    )

    return (
        <IconContext.Provider value={{className: iconClass}}>
            {icon} 
        </IconContext.Provider>
    )
}

export default ReactIcon;