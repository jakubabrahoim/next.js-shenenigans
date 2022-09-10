import { IconContext } from "react-icons";

interface Props {
    icon: JSX.Element;
    iconClass: string;
    tooltip?: string
}

const ReactIcon = ({icon, iconClass, tooltip}: Props) => {
    if(tooltip) return (
        <div className='group relative'>
            <span className='absolute left-full mt-0.5 ml-1 hidden rounded-lg bg-jet-200/20 px-2 py-1 text-orchid-200 group-hover:block'>
                {tooltip}
            </span>
            <IconContext.Provider value={{className: iconClass}}>
                {icon}
            </IconContext.Provider>
        </div>
    )

    return (
        <IconContext.Provider value={{className: iconClass}}>
            {icon} 
        </IconContext.Provider>
    )
}

export default ReactIcon;