import { styles } from "../../styles";
import { projects } from "../../constants";
import SectionWrapper from "../../hoc/SectionWrapper";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
    return (
        <div>
            <div className="relative w-full h-[230px]">
                <img
                    src={image}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            <div className="mt-5">
                <h3
                    className="text-white font-bold text-[24px] cursor-pointer"
                    onClick={() => window.open(source_code_link, "_blank")}
                >
                    {name}
                </h3>
                <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <p
                        key={`${name}-${tag.name}`}
                        className={`text-[14px] ${tag.color}`}
                    >
                        #{tag.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

const ProjectsMobile = () => {
    return (
        <>
            <div>
                <p className={`${styles.sectionSubText} `}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </div>

            <div className="w-full flex">
                <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    Following projects showcases my skills and experience through real-world
                    examples of my work. Each project is briefly described with links to code
                    repositories and live demos in it. It reflects my ability to solve complex
                    problems, work with different technologies, and manage projects effectively.
                </p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(ProjectsMobile, "projects");