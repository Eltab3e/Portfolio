import { styles } from "../../styles";
import { technologies } from "../../constants";
import SectionWrapper from "../../hoc/SectionWrapper";

const TechMobile = () => {
    return (
        <>
            <div>
                <h2 className={`${styles.sectionHeadText}`}>Tech Stack.</h2>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <div
                        className="w-28 h-28"
                        key={technology.name}
                    >
                        <img
                            src={technology.icon}
                            alt="technology images"
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(TechMobile, "");
