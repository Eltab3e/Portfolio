import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const AboutCard = ({ index, title, icon }) => {
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
            {isMobile ? (
                <div className="xs:w-[250px] w-full">
                    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                            <img
                                src={icon}
                                alt="web-development"
                                className="w-16 h-16 object-contain"
                            />

                            <h3 className="text-white text-[20px] font-bold text-center">
                                {title}
                            </h3>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="xs:w-[250px] w-full">
                    <motion.div
                        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                    >
                        <div
                            options={{
                                max: 45,
                                scale: 1,
                                speed: 450,
                            }}
                            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                        >
                            <img
                                src={icon}
                                alt="web-development"
                                className="w-16 h-16 object-contain"
                            />

                            <h3 className="text-white text-[20px] font-bold text-center">
                                {title}
                            </h3>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                A self-taught Front-end Developer with nearly two years of hands-on experience, I'm
                driven by a passion for tackling complex challenges, creating user-friendly
                interfaces, and crafting exceptional, visually appealing user experiences
                prioritizing usability and performance. <br />
                <br />
                My expertise lies in working with popular frameworks like{" "}
                <a
                    href="https://react.dev/"
                    className="text-[#915eff]"
                >
                    React
                </a>{" "}
                and{" "}
                <a
                    href="https://nextjs.org/"
                    className="text-[#915eff]"
                >
                    Next.js
                </a>
                , allowing me to craft visually stunning and interactive websites. I thrive in
                collaborative environments and actively seek opportunities to collaborate within
                dynamic teams, I aim to contribute my evolving expertise and enthusiasm to elevate
                user experiences and exceed goals.
            </motion.p>

            <div className="mt-20 flex flex-wrap justify-center gap-10">
                {services.map((service, index) => (
                    <AboutCard
                        key={`service-${index}`}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
