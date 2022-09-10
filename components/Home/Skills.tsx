import { SiTailwindcss, SiJavascript, SiHtml5, SiTypescript, SiReact, SiPostgresql, SiVuedotjs, SiGit, SiNodedotjs, SiPython, SiCss3, SiFirebase } from 'react-icons/si';
import ReactIcon from '../ReactIcon';

const Skills = () => {
    const iconClass: string = 'w-10 h-10 hover:text-orchid-200 transition duration-500';

    return (
        <section className='mt-10 px-2 sm:px-0'>
            <h2 className='mb-4 text-2xl font-semibold underline underline-offset-4'>Skills</h2>
            <div className='grid grid-cols-2 justify-items-start gap-6 sm:grid-cols-4 sm:p-4 lg:w-2/3'>
                <ReactIcon icon={<SiHtml5 />} iconClass={iconClass} tooltip='HTML5' />
                <ReactIcon icon={<SiCss3 />} iconClass={iconClass} tooltip='CSS3'/>
                <ReactIcon icon={<SiTailwindcss />} iconClass={iconClass} tooltip='TailwindCSS'/>
                <ReactIcon icon={<SiNodedotjs />} iconClass={iconClass} tooltip='Node.js' />
                <ReactIcon icon={<SiJavascript />} iconClass={iconClass} tooltip='JavaScript' />
                <ReactIcon icon={<SiTypescript />} iconClass={iconClass} tooltip='TypeScript' />
                <ReactIcon icon={<SiReact />} iconClass={iconClass} tooltip='React' />
                <ReactIcon icon={<SiVuedotjs />} iconClass={iconClass} tooltip='Vue' />
                <ReactIcon icon={<SiPostgresql />} iconClass={iconClass} tooltip='PostgreSQL' />
                <ReactIcon icon={<SiFirebase />} iconClass={iconClass} tooltip='Firebase' />
                <ReactIcon icon={<SiGit />} iconClass={iconClass} tooltip='Git' />
                <ReactIcon icon={<SiPython />} iconClass={iconClass} tooltip='Python' />
            </div>  
        </section>
    )
}

export default Skills;