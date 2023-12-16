import { styles } from "../../styles";
import { services } from "../../constants";
import SectionWrapper from "../../hoc/SectionWrapper";

const ServiceCard = ({ title, icon }) => (
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img
                src={icon}
                alt="web-development"
                className="w-16 h-16 object-contain"
            />

            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
    </div>
);

const AboutMobile = () => {
    return (
        <>
            <div>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </div>

            <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                I'm an Enthusiastic and motivated self-taught frontend developer, passionate about
                exploring and utilizing modern technologies to create exceptional digital
                experiences. My expertise lies in working with popular frameworks like React,
                Next.js, and Three.js, allowing me to craft visually stunning and interactive
                websites. I thrive on the challenge of solving complex problems with elegant and
                simplified solutions.
            </p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(AboutMobile, "about");