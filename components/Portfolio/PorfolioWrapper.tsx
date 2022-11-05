import { PortolioItem } from '../../types/types';
import PortfolioItem from './PortfolioItem';

const PortfolioWrapper = () => {
    const projects: Array<PortolioItem> = [
        {
            name: 'IH project s.r.o',
            description: 'This project was a website for a company called IH project s.r.o. It was also my first website so it doesn\'t look that good 🙈.',
            imageSrc: '/images/ihproject.png',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            websiteUrl: 'https://www.ihproject.sk/index.html',
        },
        {
            name: 'Boček s.r.o',
            description: 'This project was a update for a already existing website for a company called Boček s.r.o.',
            imageSrc: '/images/bocek.png',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            websiteUrl: 'https://www.bocek.sk',
        },
        {
            name: 'Activity Diagrams',
            description: 'Activity Diagrams is a diagraming tool for activity diagrams written with JointJS that generates SystemVerilog code.',
            imageSrc: '/images/activity-diagrams.png',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'JointJS'],
            websiteUrl: 'https://activity-diagrams.web.app',
            githubUrl: 'https://github.com/jakubabrahoim/Activity-Diagrams',
        },
        {
            name: 'Radio-Stream',
            description: 'Radio-Stream is a radio streaming platform where you can listen to your favorite radio stations form around the world.',
            imageSrc: '/images/radio-stream.png',
            technologies: ['React', 'TypeScript', 'React router', 'TailwindCSS', 'Firebase'],
            websiteUrl: 'https://radio-stream.live',
            githubUrl: 'https://github.com/jakubabrahoim/Radio-Stream',
        },
        {
            name: 'Sticker Whiteboard',
            description: 'This was a simple whiteboard app with sticky notes and emojis.',
            imageSrc: '/images/sticker-whiteboard.png',
            technologies: ['Vue', 'TypeScript', 'TailwindCSS', 'GoJS'],
            websiteUrl: 'https://whiteboard-sticky-notes.web.app',
            githubUrl: 'https://github.com/jakubabrahoim/sticker-whiteboard',
        },
        {
            name: 'My personal website',
            description: 'This is my personal website that you are currently on 😎.',
            imageSrc: '/images/personal-website.png',
            technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
            websiteUrl: 'https://jakub-abrahoim.vercel.app',
            githubUrl: 'https://github.com/jakubabrahoim/personal-website',
        }
    ]

    return (
        <div className='mx-auto mt-16 max-w-6xl'>
            <h1 className='mb-4 text-xl font-semibold sm:text-2xl'>Some of the projects I worked on...</h1>
            <div className='mb-10 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3'>
                <PortfolioItem projectInfo={projects[0]} />
                <PortfolioItem projectInfo={projects[1]} />
                <PortfolioItem projectInfo={projects[2]} />
                <PortfolioItem projectInfo={projects[3]} />
                <PortfolioItem projectInfo={projects[4]} />
                <PortfolioItem projectInfo={projects[5]} />
            </div>
        </div>
    )
}

export default PortfolioWrapper;