const Education = () => {
    return (
        <section className='mt-10 px-2 sm:px-0'>
            <h2 className='mb-4 text-2xl font-semibold underline underline-offset-4'>
                Education
            </h2>
            <div className='mb-2 flex items-center'>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                    src='/images/fiit-logo.png'
                    alt='FIIT logo'
                    className='mr-4'
                />
                <div>
                    <h3 className='text-xl font-medium underline underline-offset-2'>
                        Bachelor&apos;s degree
                    </h3>
                    <h4>
                        Faculty of Informatics and Information Technologies,
                        Slovak University of Technology
                    </h4>
                    <span>Information Technology, </span>
                    <span>September 2018 - Jun 2022</span>
                </div>
            </div>
            <div className='mb-2 flex items-center'>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                    src='/images/fiit-logo.png'
                    alt='FIIT logo'
                    className='mr-4'
                />
                <div>
                    <h3 className='text-xl font-medium underline underline-offset-2'>
                        Master&apos;s degree
                    </h3>
                    <h4>
                        Faculty of Informatics and Information Technologies,
                        Slovak University of Technology
                    </h4>
                    <span>Intelligent Software Systems, </span>
                    <span>September 2022 - Jun 2024</span>
                </div>
            </div>
        </section>
    );
};

export default Education;
