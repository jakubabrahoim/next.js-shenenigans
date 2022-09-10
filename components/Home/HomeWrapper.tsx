import About from "./About";
import Education from "./Education";
import Skills from "./Skills";

const HomeWrapper = () => {
    return (
        <div className="mx-auto mt-16 max-w-6xl">
            <About />
            <Skills />
            <Education />
        </div>
    );
};

export default HomeWrapper;
