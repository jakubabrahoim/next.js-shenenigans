import { GiKnifeFork, GiTv } from 'react-icons/gi';
import { MdDirectionsBike } from 'react-icons/md';
import { SiReact } from 'react-icons/si';
import ReactIcon from '../ReactIcon';

const Hobbies = () => {
    return (
        <section className='mt-10 mb-6 px-2 sm:px-0'>
            <h2 className='mb-4 text-2xl font-semibold underline underline-offset-4'>
                Hobbies
            </h2>
            <div className='flex flex-col gap-4 text-lg'>
                <span className='flex items-center gap-2'>
                    <ReactIcon icon={<MdDirectionsBike />} iconClass='w-7 h-7' />
                    Bike riding
                </span>
                <span className='flex items-center gap-2'>
                    <ReactIcon icon={<GiKnifeFork />} iconClass='w-7 h-7' />
                    Cooking
                </span>
                <span className='flex items-center gap-2'>
                    <ReactIcon icon={<GiTv />} iconClass='w-7 h-7' />
                    Watching movies and TV shows
                </span>
                <span className='flex items-center gap-2'>
                    <ReactIcon icon={<SiReact />} iconClass='w-7 h-7' />
                    Web dev
                </span>
            </div>
        </section>
    );
}

export default Hobbies;