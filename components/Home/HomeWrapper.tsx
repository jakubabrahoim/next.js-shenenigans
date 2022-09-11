import About from './About';
import Education from './Education';
import Skills from './Skills';
import Work from './Work';
import Hobbies from './Hobbies';

const HomeWrapper = () => {
    return (
        <div className='mx-auto mt-16 max-w-6xl'>
            <About />
            <Skills />
            <Education />
            <Work />
            <Hobbies />
        </div>
    );
};

export default HomeWrapper;
