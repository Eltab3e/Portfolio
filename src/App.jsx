import { BrowserRouter } from "react-router-dom";
import {
    Navbar,
    Hero,
    About,
    AboutMobile,
    Path,
    Projects,
    ProjectsMobile,
    Tech,
    TechMobile,
    Contact,
    StarsCanvas,
    Footer,
} from "./components";

const App = () => {
    const isMobile = window.innerWidth <= 860;

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>

                {isMobile ? <AboutMobile /> : <About />}
                {isMobile ? <ProjectsMobile /> : <Projects />}
                <Path />
                {isMobile ? <TechMobile /> : <Tech />}

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
