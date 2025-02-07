"use client";

import ContactForm from "@/components/contact-form/ContactForm";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { HomeIcon, MailIcon } from "lucide-react";
import React from "react";

const ContactPage: React.FC = () => {
    const handleCopy = (phoneNumber: string) => {
        navigator.clipboard.writeText(phoneNumber);
        toast({
            title: "Number Copied!",
            description: `${phoneNumber} has been copied to your clipboard.`,
        });
    };

    const handleMail = (email: string) => {
        window.location.href = `mailto:${email}`;
    };

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
                        <h1 className="text-[min(4vw,1rem)] leading-relaxed font-bold max-w-md mb-4 sm:mb-8 capitalize">
                            For personalized assistance, our Contact Us section
                            ensures swift communication. Reach out to SANTUSHT
                            anytime for immediate support or information. Our
                            dedicated team is ready to address your concerns,
                            providing the help you need promptly. Your
                            well-being is our top priority, and we're here for
                            you.
                        </h1>
                        <div className="flex items-center gap-x-4 sm:gap-x-8 justify-center xl:justify-start">
                            <div className="text-sm sm:text-base">
                                <Button
                                    variant={"outline"}
                                    onClick={() => handleCopy("011-26588500")}
                                    className="text-primary font-medium rounded-md text-[min(4vw,1rem)] leading-relaxed border dark:border-orange-500 dark:text-gray-300"
                                >
                                    011-26588500
                                </Button>
                                {" | "}
                                <Button
                                    variant={"outline"}
                                    onClick={() => handleCopy("011-26588900")}
                                    className="text-primary font-medium rounded-md text-[min(4vw,1rem)] leading-relaxed border dark:border-orange-500 dark:text-gray-300"
                                >
                                    011-26588900
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* illustration */}
                    <div className="hidden xl:flex w-full bg-top bg-no-repeat bg-contain bg-contact_illustration_light dark:bg-contact_illustration_dark" />
                </div>

                {/* info text & form */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-16 xl:gap-24 mb-16 xl:mb-32">
                    {/* info text */}
                    <div className="flex flex-col text-[min(4vw,1rem)] leading-relaxed gap-y-6 sm:gap-y-10">
                        {/* mail */}
                        <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-x-8 sm:gap-y-0">
                            {/* Mail Icon will be hidden on small screens */}
                            <MailIcon
                                size={18}
                                className="text-primary hidden sm:block"
                            />
                            <div className="text-[min(4vw,1rem)] leading-relaxed -ml-4">
                                <Button
                                    variant={"ghost"}
                                    onClick={() =>
                                        handleMail("patientcare@aiims.edu")
                                    }
                                    className="text-primary font-medium rounded-md text-[min(4vw,1rem)] leading-relaxed dark:border-orange-500 dark:text-gray-300 mb-2 sm:mb-0"
                                >
                                    patientcare@aiims.edu
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    onClick={() => handleMail("care@aiims.edu")}
                                    className="text-primary font-medium rounded-md text-[min(4vw,1rem)] leading-relaxed dark:border-orange-500 dark:text-gray-300"
                                >
                                    care@aiims.edu
                                </Button>
                            </div>
                        </div>
                        {/* address */}
                        <div className="flex items-center gap-x-4 sm:gap-x-8">
                            <HomeIcon size={18} className="text-primary" />
                            <div className="text-[min(4vw,.6rem)] leading-relaxed">
                                All India Institute Of Medical Sciences, Delhi
                                Ansari Nagar, Delhi 110029
                            </div>
                        </div>
                    </div>

                    {/* contact form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
