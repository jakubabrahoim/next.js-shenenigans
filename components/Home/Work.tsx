import {
    SiTypescript,
    SiVuedotjs,
    SiFirebase,
    SiFreelancer,
} from 'react-icons/si';
import ReactIcon from '../ReactIcon';

const Work = () => {
    /* Date is passed in mm/dd/yyyy format */
    const calculateTime = (start: string, end?: string) => {
        const startDate = new Date(start);
        const currentDate = end ? new Date(end) : new Date();

        let diff =
            Math.abs(
                Math.floor(
                    (startDate.getTime() - currentDate.getTime()) /
                        (1000 * 60 * 60 * 24)
                )
            ) / 30;

        if (Math.ceil(diff) >= 12) {
            const years = Math.floor(Math.ceil(diff) / 12);
            const months = Math.ceil(diff) % 12;
            const yearsString = years === 1 ? 'year' : 'years';
            const monthsString = months === 1 ? 'month' : 'months';

            if (months === 0) {
                return `${years} years`;
            } else {
                return `${years} ${yearsString} ${months} ${monthsString}`;
            }
        } else {
            return `${Math.ceil(diff)} months`;
        }
    };

    return (
        <section className='mt-10 mb-6 px-2 sm:px-0'>
            <h2 className='mb-4 text-2xl font-semibold underline underline-offset-4'>
                Work experience
            </h2>
            <div>
                <div className='flex gap-2'>
                    <ReactIcon icon={<SiFreelancer />} iconClass='w-16 h-16' />
                    <div className='mb-4 flex w-fit flex-col gap-1'>
                        <h3 className='text-xl font-medium'>
                            Freelance web developer
                        </h3>
                        <span>Bratislava, Slovakia</span>
                        <div>
                            <span>
                                April 2021 - present,{' '}
                                {calculateTime('04/01/2021')}
                            </span>
                        </div>
                    </div>
                </div>

                <hr className='my-4 w-1/6 border border-jet-200' />

                <div className='flex gap-2'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src='/images/ayanza.png'
                        alt='Ayanza'
                        className='h-16 w-16'
                    />
                    <div className='flex w-fit flex-col gap-1'>
                        <h3 className='text-xl font-medium'>
                            Web developer at{' '}
                            <a
                                className='font-bold text-orchid underline underline-offset-2 transition duration-500 hover:text-orchid-200'
                                href='https://www.ayanza.com'
                            >
                                Ayanza
                            </a>
                        </h3>
                        <span>Bratislava, Slovakia</span>
                        <div className='flex items-center gap-2'>
                            <span>Skills:</span>
                            <ReactIcon
                                icon={<SiTypescript />}
                                iconClass='w-5 h-5 hover:text-orchid-200 transition duration-500'
                            />
                            <ReactIcon
                                icon={<SiVuedotjs />}
                                iconClass='w-5 h-5 hover:text-orchid-200 transition duration-500'
                            />
                            <ReactIcon
                                icon={<SiFirebase />}
                                iconClass='w-5 h-5 hover:text-orchid-200 transition duration-500'
                            />
                        </div>
                        <div>
                            <span>
                                August 2022 - present,{' '}
                                {calculateTime('08/01/2022')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
