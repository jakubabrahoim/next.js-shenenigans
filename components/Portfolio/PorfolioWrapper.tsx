import PortfolioItem from "./PortfolioItem";

const PortfolioWrapper = () => {
    const projects = [
        {
            name: 'Website for IHProject s.r.o',
        },
    ]

    return (
        <div className='mx-auto mt-16 max-w-6xl'>
            <h1 className='mb-4 text-2xl font-semibold'>Some of the projects I worked on...</h1>
            <div className='grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3'>
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
            </div>
        </div>
    )
}

export default PortfolioWrapper;