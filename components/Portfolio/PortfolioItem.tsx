import { AiOutlineLink, AiFillGithub } from 'react-icons/ai'
import { PortolioItem } from '../../types/types';
import ReactIcon from '../ReactIcon';

interface Props {
    projectInfo: PortolioItem;
}

const PortfolioItem = ({ projectInfo }: Props) => {
    return (
        <article className='flex w-full flex-col rounded-lg border border-jet-200 transition-transform hover:scale-105 hover:shadow-xl'>
            <div className='group relative mb-2 w-full rounded-t-lg'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={projectInfo.imageSrc} alt='IH project s.r.o' className='w-full rounded-t-lg group-hover:blur-xs' />
                <div className='invisible absolute inset-0 z-50 flex h-full w-full items-center justify-center group-hover:visible'>
                    {
                        projectInfo.websiteUrl &&
                            <a 
                                href={projectInfo.websiteUrl} 
                                className='rounded-full border border-jet-200 bg-orchid/10 p-2 transition duration-200 hover:border-orchid-200'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <ReactIcon icon={<AiOutlineLink />} iconClass='w-8 h-8 text-jet-200 hover:text-orchid-200 transition duration-200' />
                            </a>
                    }
                    {
                        projectInfo.githubUrl &&
                            <a 
                                href={projectInfo.githubUrl}
                                className='rounded-full border border-jet-200 bg-orchid/10 p-2 transition duration-200 hover:border-orchid-200'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <ReactIcon icon={<AiFillGithub />} iconClass='w-8 h-8 text-jet-200 hover:text-orchid-200 transition duration-200' />
                            </a>
                    }
                </div>
            </div>
            <div className='mb-1 flex flex-wrap gap-2 px-2'>
                {
                    projectInfo.technologies.map((technology, index) => (
                        <span key={index} className='rounded-sm border border-jet-200 px-2 py-1 text-xs font-semibold'>
                            {technology}
                        </span>
                    ))
                }
            </div>
            <div className='px-2 pb-2'>
                <h2 className='mb-1 text-lg font-semibold underline underline-offset-4'>{projectInfo.name}</h2>
                <p>{projectInfo.description}</p>
            </div>
        </article>
    )
}

export default PortfolioItem;