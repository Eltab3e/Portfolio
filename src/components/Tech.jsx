import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Tech = () => {
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
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>Languages & Tools</p>
                <h2 className={`${styles.sectionHeadText}`}>Tech Stack</h2>
            </motion.div>

            <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology, index) => (
                    <div
                        className="w-28 h-28"
                        key={`technology-${index}`}
                        index={index}
                        {...technology}
                    >
                        {isMobile && (
                            <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                                <div className="bg-mobile rounded-[20px] min-h-[120px] flex items-center justify-center">
                                    <img
                                        src={technology.icon}
                                        alt={technology.name}
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                            </div>
                        )}

                        {!isMobile && <BallCanvas icon={technology.icon} />}
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "tech");
