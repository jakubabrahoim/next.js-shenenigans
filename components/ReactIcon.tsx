import { IconContext } from "react-icons";

interface Props {
    icon: JSX.Element;
    iconClass: string;
    tooltip?: string
}

const ReactIcon = ({icon, iconClass}: Props) => {
    return (
        <IconContext.Provider value={{className: iconClass}}>
            {icon} 
        </IconContext.Provider>
    )
}

export default ReactIcon;