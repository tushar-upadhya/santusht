import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import React from "react";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";

const MobileNav: React.FC = () => {
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
                                containerStyles="flex flex-col items-center gap-y-6"
                                linkStyles="text-2xl"
                            />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNav;
