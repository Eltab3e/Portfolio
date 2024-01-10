import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { mobilebg } from "../assets/index.js";

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className="text-[#915EFF]">Ahmed</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I specialize in crafting stunning <br className="sm:block hidden" /> web
                        experiences with seamless functionality.
                    </p>
                </div>
            </div>

            {!isMobile && <ComputersCanvas />}

            <div className="absolute xs:bottom-10 bottom-32 w-full flex flex-col justify-center items-center">
                {isMobile && (
                    <img
                        src={mobilebg}
                        className="w-full h-[230px] px-4"
                        alt="placeholder"
                    />
                )}
                <a
                    href="/Portfolio/#about"
                    aria-label="Scroll"
                >
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
