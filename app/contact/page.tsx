"use client";

import ContactForm from "@/components/forms/contact-form/ContactForm";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
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
        <section className="py-12">
            <div className="container mx-auto">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:h-[480px] mb-6 xl:mb-24">
                    {/* Left side content (Image, Text, Contact Info, Address) */}
                    <div className="flex flex-col justify-center text-center xl:text-left">
                        {/* Image */}
                        <div className="w-full h-[200px] sm:h-[300px] bg-cover bg-center mb-6">
                            <Image
                                src={""}
                                alt="Auth Image"
                                width={342}
                                height={342}
                                layout="intrinsic"
                                className="transition-all dark:bg-contact_illustration_dark.svg hover:rotate-2 hover:scale-105"
                            />
                        </div>
                        {/* Text */}
                        <div className="flex justify-center xl:justify-start items-center mb-4 text-lg gap-x-4 text-primary">
                            Say Hello 👋
                        </div>
                        <h1 className="text-[min(4vw,1rem)] leading-relaxed font-bold max-w-md mb-4 sm:mb-8 capitalize">
                            For personalized assistance, our Contact Us section
                            ensures swift communication. Reach out to SANTUSHT
                            anytime for immediate support or information. Our
                            dedicated team is ready to address your concerns,
                            providing the help you need promptly. Your
                            well-being is our top priority, and we&apos;re here
                            for you.
                        </h1>
                        {/* Contact Info (Phone Numbers) */}
                        <div className="flex items-center gap-x-4 sm:gap-x-8 justify-center xl:justify-start">
                            <div className="text-sm sm:text-base">
                                <Button
                                    variant={"link"}
                                    onClick={() => handleCopy("011-26588500")}
                                    className="text-primary font-medium rounded-md text-[min(4vw,1rem)] leading-relaxed dark:border-orange-500 dark:text-gray-300"
                                >
                                    011-26588500
                                </Button>
                                {" | "}
                                <Button
                                    variant={"link"}
                                    onClick={() => handleCopy("011-26588900")}
                                    className="text-primary font-medium rounded-md text-[min(4vw,1rem)] leading-relaxed dark:border-orange-500 dark:text-gray-300"
                                >
                                    011-26588900
                                </Button>
                            </div>
                        </div>
                        {/* Email Info */}
                        <div className="flex items-center gap-x-4 sm:gap-x-8 justify-center xl:justify-start mt-4">
                            <Button
                                variant={"link"}
                                onClick={() =>
                                    handleMail("contact@santusht.com")
                                }
                                className="text-primary font-medium rounded-md text-[min(4vw,1rem)] leading-relaxed dark:border-orange-500 dark:text-gray-300"
                            >
                                contact@santusht.com
                            </Button>
                        </div>
                    </div>

                    {/* Right side content (Contact Form) */}
                    <div className="xl:ml-12 mt-8 xl:mt-0">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
