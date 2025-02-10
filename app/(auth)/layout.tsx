import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen bg-white dark:bg-accent">
            {/* Image Section */}
            <section className="hidden lg:flex w-1/2 items-center justify-center xl:w-2/5">
                <div className="flex justify-center items-center max-h-[800px] max-w-[430px] flex-col">
                    <Image
                        src="/assets/auth.png"
                        alt="Auth Image"
                        width={342}
                        height={342}
                        layout="intrinsic"
                        className="transition-all hover:rotate-2 hover:scale-105"
                    />
                </div>
            </section>

            {/* children */}
            <section className="flex flex-1 flex-col items-center justify-center bg-white dark:bg-accent p-4 lg:p-10 min-h-screen">
                {children}
            </section>
        </div>
    );
};

export default Layout;
