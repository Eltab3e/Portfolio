import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { styles } from "../styles";

const Navbar = () => {
    const [active, setActive] = useState("About");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const sections = navLinks.map((link) => ({
                id: link.id,
                title: link.title,
                element: document.getElementById(link.id),
            }));

            let detectedSection = null;

            for (const section of sections) {
                if (section.element) {
                    const rect = section.element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;
                    const elementBottom = elementTop + rect.height;

                    if (scrollTop >= elementTop - 200 && scrollTop < elementBottom - 200) {
                        detectedSection = section.title;
                        break;
                    }
                }
            }

            if (detectedSection) {
                setActive(detectedSection);
            } else if (scrollTop < 200) {
                setActive("About");
            }
        };

        const handleHashChange = () => {
            const hash = window.location.hash.replace("#", "");
            const link = navLinks.find((l) => l.id === hash);
            if (link) {
                setActive(link.title);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("hashchange", handleHashChange);

        setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
                scrolled ? "bg-primary" : "bg-transparent"
            }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/Portfolio/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-12 h-12 object-contain"
                    />
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title ? "text-[#915eff]" : "text-secondary"
                            } hover:text-[#915eff] text-[18px] font-medium cursor-pointer transition-colors duration-200 relative`}
                        >
                            <a
                                href={`#${link.id}`}
                                onClick={() => {
                                    setActive(link.title);
                                    setTimeout(() => {
                                        const scrollEvent = new Event("scroll");
                                        window.dispatchEvent(scrollEvent);
                                    }, 100);
                                }}
                            >
                                {link.title}
                                {active === link.title && (
                                    <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#915eff] rounded-full" />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                        active === link.title ? "text-white" : "text-secondary"
                                    } hover:text-white transition-colors duration-200`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                    }}
                                >
                                    <a
                                        href={`#${link.id}`}
                                        onClick={() => {
                                            setActive(link.title);
                                            setTimeout(() => {
                                                const scrollEvent = new Event("scroll");
                                                window.dispatchEvent(scrollEvent);
                                            }, 100);
                                        }}
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
