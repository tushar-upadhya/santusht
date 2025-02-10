import logo from "@/public/logo-full.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
    title?: string;
    description?: string;
}

const Logo: React.FC<LogoProps> = ({ title, description }) => {
    return (
        <Link href="/" className="flex items-center gap-2">
            <Image
                src={logo}
                priority
                height={50}
                width={150}
                alt="logo"
                className="h-auto w-auto max-w-[80px] sm:max-w-[80px] md:max-w-[80px]"
            />
            {(title || description) && (
                <div className="hidden sm:block text-left">
                    {title && (
                        <p className="text-lg font-semibold dark:text-gray-300">
                            {title}
                        </p>
                    )}
                    {description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {description}
                        </p>
                    )}
                </div>
            )}
        </Link>
    );
};

export default Logo;
