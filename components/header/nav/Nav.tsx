import { NavLink } from "@/lib/types/navtype";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
    links: NavLink[];
    containerStyles?: string;
    linkStyles?: string;
    underlineStyles?: string;
}

const Nav = ({
    links,
    containerStyles = "",
    linkStyles = "",
    underlineStyles = "",
}: NavProps) => {
    const path = usePathname();

    return (
        <nav className={containerStyles}>
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`capitalize ${linkStyles}`}
                >
                    {link.path === path && <span className={underlineStyles} />}
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
