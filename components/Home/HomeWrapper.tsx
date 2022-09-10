import About from "./About";
import Skills from "./Skills";

const HomeWrapper = () => {
    return (
        <div className='mx-auto mt-20 max-w-6xl'>
            <About />
            <Skills />
        </div>
    )
}

export default HomeWrapper;