import { NavLink } from "@/lib/types/navtype";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
    links: NavLink[] | undefined;
    containerStyles?: string;
    linkStyles?: string;
    underlineStyles?: string;
}

const Nav = ({
    links = [],
    containerStyles = "",
    linkStyles = "",
    underlineStyles = "",
}: NavProps) => {
    const path = usePathname();

    // Ensure links array is valid, fallback to empty array if undefined
    if (!links || links.length === 0) {
        return null; // Or render a fallback component if needed
    }

    return (
        <nav className={containerStyles}>
            {links.map((link) => (
                <Link
                    href={link.path}
                    key={link.path} // Using link.path as the key instead of index
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
