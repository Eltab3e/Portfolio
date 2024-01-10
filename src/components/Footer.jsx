import { styles } from "../styles";
import { footerlinks } from "../constants";

function Footer() {
    return (
        <footer className={`${styles.paddingX} w-full flex items-center py-5 z-20  bg-transparent`}>
            <ul className="flex items-center max-w-7xl mx-auto gap-10">
                {footerlinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={`${link.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={link.icon}
                                alt={link.name}
                                style={{ width: "45px", height: "45px" }}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;
