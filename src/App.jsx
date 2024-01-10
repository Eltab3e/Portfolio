import { BrowserRouter } from "react-router-dom";
import {
    Navbar,
    Hero,
    About,
    Experience,
    Projects,
    Courses,
    Tech,
    Contact,
    Footer,
    StarsCanvas,
} from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>

                <About />
                <Experience />
                <Projects />
                <Courses />
                <Tech />

                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
