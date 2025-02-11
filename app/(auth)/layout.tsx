import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="py-12">
            <div className="container mx-auto">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:h-[480px] mb-6 xl:mb-24">
                    <div className="flex flex-col justify-center text-center xl:text-left">
                        {/* Image */}
                        <div className="w-full h-[200px] sm:h-[300px] bg-cover bg-center mb-6">
                            <Image
                                src="/assets/auth.png"
                                alt="Auth Image"
                                width={342}
                                height={342}
                                layout="intrinsic"
                                className="transition-all hover:rotate-2 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right side content (Contact Form) */}
                    <div className="xl:ml-12 mt-8 xl:mt-0">
                        <section className="flex flex-1 flex-col items-center justify-center bg-white dark:bg-accent p-4 lg:p-10 min-h-screen">
                            {children}
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Layout;
