import {
    icon1,
    icon2,
    icon3,
    icon4,
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
    sass,
    tailwind,
    figma,
    github,
    git,
    threejs,
    jest,
    gamescope,
    carhub,
    astronime,
    summarizer,
    gpt3,
    realtor,
    linkedin,
    githublogo,
} from "../assets";

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "path",
        title: "Path",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: icon1,
    },
    {
        title: "Web Designer",
        icon: icon2,
    },
    {
        title: "SEO Expert",
        icon: icon3,
    },
    {
        title: "UI / UX",
        icon: icon4,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
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
        name: "Redux Toolkit",
        icon: rtk,
    },
    {
        name: "React Query",
        icon: reactquery,
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
        name: "Github",
        icon: github,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "Jest",
        icon: jest,
    },
];

const path = [
    {
        title: "CS50: Introduction to Computer Science",
        company_name: "edX",
        icon: cs50,
        iconBg: "#E6DEDD",
        date: "March 2022 - May 2022",
        points: [
            "Acquired a broad and comprehensive understanding of computer science and programming.",
            "Developed the ability to think algorithmically and efficiently solve programming problems.",
            "Explored and studied concepts such as abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.",
            "Gained familiarity with various programming languages, including C, Python, SQL, JavaScript, as well as CSS and HTML.",
        ],
    },
    {
        title: "Front End Web Developer Nanodegree Program",
        company_name: "Udacity",
        icon: udacity,
        iconBg: "#383E56",
        date: "May 2022 - Sept 2022",
        points: [
            "Explored a variety of JavaScript design patterns and developed proficiency in utilizing popular developer tools, testing suites, and frameworks.",
            "Showcased and honed my skills through engaging in-class projects.",
            "Received expert evaluations on my project submissions, along with valuable feedback aimed at propelling my progress through the program successfully.",
            "Engaged in regular communication with a mentor, who offered guidance, support, addressed queries, and directed me to valuable resources along the way.",
        ],
    },
    {
        title: "ReactJS",
        company_name: "Udemy",
        icon: reactjs,
        iconBg: "#383E56",
        date: "Sept 2022 - Feb 2023",
        points: [
            "Successfully developed robust and high-performance web applications that deliver exceptional user experiences with their speed, responsiveness, and user-friendly interfaces.",
            "Mastered React functional components, implemented optimized file and folder structures, and adhered to the CSS BEM model for efficient styling and maintainability.",
            "Acquired proficiency in utilizing React hooks for state management, as well as fetching data from APIs and effectively consuming that data within the application.",
            "Gained expertise in utilizing Redux and Redux Toolkit for advanced state management, implementing authentication features, writing unit tests, and incorporating advanced animations to enhance the visual appeal and interactivity of the web applications.",
        ],
    },
    {
        title: "Next.js",
        company_name: "Udemy",
        icon: next,
        iconBg: "#E6DEDD",
        date: "Feb 2023 - Present",
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
        link: "https://drive.google.com/file/d/1Je9Z3IWT-wX8E4ISm6FryKikcFFM-R6Q/view",
        icon: "CV",
    },
    {
        name: "Github",
        link: "https://github.com/Eltab3e",
        icon: githublogo,
    },
];

export { navLinks, services, technologies, path, projects, footerlinks };
