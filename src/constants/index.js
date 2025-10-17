import {
    icon1,
    icon2,
    icon3,
    icon4,
    illa,
    bona,
    upwork,
    cs50,
    udacity,
    html,
    css,
    javascript,
    typescript,
    reactjs,
    next,
    reactquery,
    rtk,
    styledcomponents,
    tailwind,
    sass,
    jest,
    github,
    gamescope,
    carhub,
    astronime,
    summarizer,
    gpt3,
    realtor,
    linkedin,
    resume,
    githublogo,
} from "../assets";

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "courses",
        title: "Courses",
    },
    {
        id: "tech",
        title: "Tech",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Front-end Development",
        icon: icon1,
    },
    {
        title: "Testing and Debugging",
        icon: icon2,
    },
    {
        title: "Accessibility Enhancement",
        icon: icon4,
    },
    {
        title: "SEO Optimization",
        icon: icon3,
    },
];

const technologies = [
    {
        name: "HTML",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next",
        icon: next,
    },
    {
        name: "React Query",
        icon: reactquery,
    },
    {
        name: "Redux Toolkit",
        icon: rtk,
    },
    {
        name: "Styled Components",
        icon: styledcomponents,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "SASS",
        icon: sass,
    },
    {
        name: "Jest",
        icon: jest,
    },
    {
        name: "Github",
        icon: github,
    },
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "ILLA",
        icon: illa,
        iconBg: "#E6DEDD",
        date: "Nov 2024 - Present",
        points: [
            "Implemented complex form handling and validation using React Hook Form.",
            "Integrated Google Maps APIs to visualize data such as routes, locations, and coordinates.",
            "Worked closely with designers to refine UI layouts and improve overall user experience consistency.",
            "Participated in agile development cycles, contributing to sprint planning, code reviews, and testing.",
            "Added Mixpanel and Google Analytics integration to gather insights into platform engagement, monitor user interactions, and feature performance.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Bona Invest",
        icon: bona,
        iconBg: "#E6DEDD",
        date: "Aug 2023 - Sep 2024",
        points: [
            "Conducted extensive testing and debugging to ensure system reliability.",
            "Implemented robust user authentication and secure routes for data privacy.",
            "Designed and crafted components and pages prioritizing a user-friendly and responsive interface.",
            "Collaborated closely with backend teams to ensure seamless data flow for real-time updates and transactions.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Upwork",
        icon: upwork,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Jul 2023",
        points: [
            "Transformed Figma design concepts into dynamic, responsive React applications.",
            "Employed advanced optimization strategies, enhancing loading times and improving overall user experiences.",
        ],
    },
];

const courses = [
    {
        title: "CS50: Introduction to Computer Science",
        company_name: "edX",
        icon: cs50,
        iconBg: "#E6DEDD",
        points: [
            "Acquired a broad and comprehensive understanding of computer science and programming.",
            "Developed the ability to think algorithmically and efficiently solve programming problems.",
            "Explored and studied concepts such as abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.",
            "Gained familiarity with various programming languages, including C, Python, SQL, JavaScript, as well as CSS and HTML.",
        ],
    },
    {
        title: "Front-end Development Nano-degree Program",
        company_name: "Udacity",
        icon: udacity,
        iconBg: "#383E56",
        points: [
            "Explored a variety of JavaScript design patterns and developed proficiency in utilizing popular developer tools, testing suites, and frameworks.",
            "Showcased and honed my skills through engaging in-class projects.",
            "Received expert evaluations on my project submissions, along with valuable feedback aimed at propelling my progress through the program successfully.",
            "Engaged in regular communication with a mentor, who offered guidance, support, addressed queries, and directed me to valuable resources along the way.",
        ],
    },
    {
        title: "Web Development Bootcamp 1",
        company_name: "Scrimba",
        icon: reactjs,
        iconBg: "#383E56",
        points: [
            "Successfully developed robust and high-performance web applications that deliver exceptional user experiences with their speed, responsiveness, and user-friendly interfaces.",
            "Mastered React functional components, implemented optimized file and folder structures, and adhered to the CSS BEM model for efficient styling and maintainability.",
            "Acquired proficiency in utilizing React hooks for state management, as well as fetching data from APIs and effectively consuming that data within the application.",
            "Gained expertise in utilizing Redux and Redux Toolkit for advanced state management, implementing authentication features, writing unit tests, and incorporating advanced animations to enhance the visual appeal and interactivity of the web applications.",
        ],
    },
    {
        title: "Web Development Bootcamp 2",
        company_name: "Udemy",
        icon: next,
        iconBg: "#E6DEDD",
        points: [
            "Acquired a comprehensive understanding of essential Next.js features, including pre-rendering techniques, server-side rendering (SSR), efficient data fetching, file-based routing, and authentication mechanisms.",
            "Developed proficiency in building both client-side and full-stack React.js applications using Next.js, leveraging its powerful capabilities and seamless integration with React.",
            "Applied theoretical knowledge gained through hands-on experience by building real projects, allowing me to solidify my skills and effectively demonstrate my understanding of Next.js concepts.",
            "Implemented various forms of page pre-rendering, including server-side rendering and static site generation. Additionally, incorporated data fetching and pre-fetching techniques to enhance the performance and interactivity of my applications.",
        ],
    },
];

const projects = [
    {
        name: "Game-Scope",
        description: "Your one-stop destination for all things gaming.",
        tags: [
            {
                name: "next.js",
                color: "orange-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "styled",
                color: "pink-text-gradient",
            },
            {
                name: "react-query",
                color: "green-text-gradient",
            },
        ],
        image: gamescope,
        source_code_link: "https://github.com/Eltab3e/Game-Scope",
    },
    {
        name: "Car-Hub",
        description: "Luxury cars rental website with advanced filters and search functionality.",
        tags: [
            {
                name: "next.js",
                color: "orange-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
            {
                name: "rest-api",
                color: "green-text-gradient",
            },
        ],
        image: carhub,
        source_code_link: "https://github.com/Eltab3e/CarHub",
    },
    {
        name: "Summarizer",
        description:
            "An article summarizer that transforms lengthy articles into concise summaries.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
            {
                name: "rtk",
                color: "orange-text-gradient",
            },
            {
                name: "rest-api",
                color: "green-text-gradient",
            },
        ],
        image: summarizer,
        source_code_link: "https://github.com/Eltab3e/Summarizer",
    },
    {
        name: "Astronime",
        description: "The ultimate source for anime (News, Upcoming, and Reviews).",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css-modules",
                color: "pink-text-gradient",
            },
            {
                name: "rest-api",
                color: "green-text-gradient",
            },
        ],
        image: astronime,
        source_code_link: "https://github.com/Eltab3e/Astronime",
    },
    {
        name: "GPT-3",
        description: "Advanced openAI GPT-3 landing page UI concept.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css-modules",
                color: "pink-text-gradient",
            },
        ],
        image: gpt3,
        source_code_link: "https://github.com/Eltab3e/GPT-3",
    },
    {
        name: "Realtor",
        description: "A website showcasing luxurious homes for rent and sale in Dubai.",
        tags: [
            {
                name: "nextjs",
                color: "orange-text-gradient",
            },
            {
                name: "chakura-ui",
                color: "pink-text-gradient",
            },
            {
                name: "rest-api",
                color: "green-text-gradient",
            },
        ],
        image: realtor,
        source_code_link: "https://github.com/Eltab3e/Realtor",
    },
];

const footerlinks = [
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/aeltabie/",
        icon: linkedin,
    },
    {
        name: "Resume",
        link: "https://drive.google.com/file/d/1mLpRjUc4tbmJrQ-5X8fZ2ml1DOJOzDwJ/view?usp=sharing",
        icon: resume,
    },
    {
        name: "Github",
        link: "https://github.com/Eltab3e",
        icon: githublogo,
    },
];

export { navLinks, services, experiences, technologies, courses, projects, footerlinks };
