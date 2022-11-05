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
    ]

    return (
        <div className='mx-auto mt-16 max-w-6xl'>
            <h1 className='mb-4 text-2xl font-semibold'>Some of the projects I worked on...</h1>
            <div className='grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3'>
                <PortfolioItem projectInfo={projects[0]} />
                
            </div>
        </div>
    )
}

export default PortfolioWrapper;