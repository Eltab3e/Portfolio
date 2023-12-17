import { BrowserRouter } from "react-router-dom";
import {
    Navbar,
    Hero,
    About,
    Projects,
    Path,
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
                <Projects />
                <Path />
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
