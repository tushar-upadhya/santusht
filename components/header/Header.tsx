"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "../theme/theme-toggler/ThemeToggler";
import HeaderOne from "./header-one/HeaderOne";
import Logo from "./logo/Logo";
import MobileNav from "./mobile-nav/MobileNav";
import Nav from "./nav/Nav";

const Header: React.FC = () => {
    const [header, setHeader] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setHeader(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                header
                    ? "py-4 bg-white shadow-lg dark:bg-accent"
                    : "py-6 dark:bg-transparent"
            } sticky top-0 z-30 transition-all ${
                pathname === "/" ? "bg-[#fef9f5]" : ""
            }`}
        >
            <div className="container mx-auto -mb-4">
                <div className="-mt-4">
                    <HeaderOne />
                </div>
                <div className="flex items-center justify-between">
                    <Logo />
                    <div className="flex items-center gap-x-3">
                        {/* Navigation */}
                        <Nav
                            containerStyles="hidden xl:flex gap-x-8 items-center"
                            linkStyles="relative hover:text-primary transition-all"
                            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                        />
                        <ThemeToggler />
                        {/* Mobile Navigation */}
                        <div className="xl:hidden mr-4">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
