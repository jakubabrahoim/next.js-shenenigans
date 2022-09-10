import { SiTailwindcss, SiJavascript, SiHtml5, SiTypescript, SiReact, SiPostgresql, SiVuedotjs, SiGit, SiNodedotjs, SiPython, SiCss3, SiFirebase } from 'react-icons/si';
import ReactIcon from '../ReactIcon';

const Skills = () => {
    const iconClass: string = 'w-10 h-10 hover:text-orchid-200 transition duration-500';

    return (
        <section className='mt-10'>
            <h2 className='mb-6 text-2xl font-semibold underline underline-offset-4'>Skills</h2>
            <div className='ml-4 grid w-2/3 grid-cols-4 justify-items-start gap-6'>
                <ReactIcon icon={<SiHtml5 />} iconClass={iconClass} />
                <ReactIcon icon={<SiCss3 />} iconClass={iconClass} />
                <ReactIcon icon={<SiTailwindcss />} iconClass={iconClass} />
                <ReactIcon icon={<SiJavascript />} iconClass={iconClass} />
                <ReactIcon icon={<SiTypescript />} iconClass={iconClass} />
                <ReactIcon icon={<SiReact />} iconClass={iconClass} />
                <ReactIcon icon={<SiVuedotjs />} iconClass={iconClass} />
                <ReactIcon icon={<SiNodedotjs />} iconClass={iconClass} />
                <ReactIcon icon={<SiPostgresql />} iconClass={iconClass} />
                <ReactIcon icon={<SiFirebase />} iconClass={iconClass} />
                <ReactIcon icon={<SiGit />} iconClass={iconClass} />
                <ReactIcon icon={<SiPython />} iconClass={iconClass} />
            </div>  
        </section>
    )
}

export default Skills;