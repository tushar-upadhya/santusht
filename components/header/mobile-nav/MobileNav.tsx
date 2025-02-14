import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { adminLinks, links } from "@/lib/links/NavLinks";
import { AlignJustify } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";

const MobileNav: React.FC = () => {
    const pathname = usePathname();

    const isAdminRoute = pathname.startsWith("/admin");
    return (
        <div className="mx-auto container">
            <Sheet>
                <SheetTrigger asChild>
                    <AlignJustify className="cursor-pointer" />
                </SheetTrigger>

                <SheetContent>
                    <div className="flex flex-col items-center justify-between h-full py-8">
                        <div className="flex flex-col items-center gap-y-32">
                            <Logo />

                            <Nav
                                links={isAdminRoute ? adminLinks : links}
                                containerStyles="flex flex-col items-center gap-y-6"
                                linkStyles="text-[min(4.5vw,1rem)] leading-normal"
                            />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;
