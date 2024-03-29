import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { courses } from "../constants";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const CourseCard = ({ title, company_name, icon, iconBg, date, points }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={date}
            iconStyle={{ background: iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={icon}
                        alt={company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{title}</h3>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                >
                    {company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {points.map((point, index) => (
                    <li
                        key={`courses-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Courses = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Learning Path</p>
                <h2 className={styles.sectionHeadText}>Courses & Certifications</h2>
            </motion.div>

            <div className="mt-20 flex flex-col overflow-hidden">
                <VerticalTimeline>
                    {courses.map((course, index) => (
                        <CourseCard
                            key={`courses-${index}`}
                            index={index}
                            {...course}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Courses, "courses");
