import logo from "@/public/logo-full.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
    return (
        <Link href="/">
            <Image src={logo} priority height={70} alt="logo" />
        </Link>
    );
};

export default Logo;
