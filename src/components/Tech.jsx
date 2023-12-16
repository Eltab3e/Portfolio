import { motion } from "framer-motion";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>Languages & Tools</p>
                <h2 className={`${styles.sectionHeadText}`}>Tech Stack.</h2>
            </motion.div>

            <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <div
                        className="w-28 h-28"
                        key={technology.name}
                    >
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "");
