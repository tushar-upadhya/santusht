"use client";

import ContactForm from "@/components/contact-form/ContactForm";
import { HomeIcon, MailIcon } from "lucide-react";
import React from "react";

const ContactPage: React.FC = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* text & illustration */}
                <div className="grid grid-cols-1 xl:grid-cols-2 pt-8 sm:pt-12 xl:h-[480px] mb-6 xl:mb-24">
                    {/* text */}
                    <div className="flex flex-col justify-center text-center xl:text-left">
                        <div className="flex justify-center xl:justify-start items-center mb-4 text-lg gap-x-4 text-primary">
                            Say Hello 👋
                        </div>
                        <h1 className="text-2xl sm:text-4xl font-bold max-w-md mb-4 sm:mb-8 capitalize">
                            santusht
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                            011-26588500 | 011-26588900
                        </p>
                    </div>
                    {/* illustration */}
                    <div className="hidden xl:flex w-full bg-top bg-no-repeat bg-contain bg-contact_illustration_light dark:bg-contact_illustration_dark" />
                </div>

                {/* info text & form */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 sm:gap-16 xl:gap-24 mb-16 xl:mb-32">
                    {/* info text */}
                    <div className="flex flex-col text-base gap-y-6 sm:gap-y-10 xl:text-lg">
                        {/* mail */}
                        <div className="flex items-center gap-x-4 sm:gap-x-8">
                            <MailIcon size={18} className="text-primary" />
                            <div className="text-sm sm:text-base">
                                patientcare@aiims.edu | care@aiims.edu
                            </div>
                        </div>
                        {/* address */}
                        <div className="flex items-center gap-x-4 sm:gap-x-8">
                            <HomeIcon size={18} className="text-primary" />
                            <div className="text-sm sm:text-base">
                                All India Institute Of Medical Sciences, Delhi
                                Ansari Nagar, Delhi 110029
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
