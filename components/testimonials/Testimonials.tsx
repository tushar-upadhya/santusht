"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Separator } from "../ui/separator";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    feedback: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Kannu Priya",
        role: "Local Guide",
        feedback:
            "U will get best possible treatment in AIIMS DELHI ...FOR general medicine , gynec nd so on do visit new rajkumari nd for cancer ,neuro nd cardio, eye have individual hospital itself in the same ground for more info ask me in comment.",
        image: "/images/kannu-priya.jpg",
    },
    {
        id: 2,
        name: "Md. Sajid Hussain",
        role: "Patient",
        feedback:
            "Best of Best hospital in India. Aiims Hospital every facilities available here cleaned every area and .best doctor team There is no doubt that this place has great infrastructure and great building. Well maintained corridors. Staffs are also very generous.",
        image: "/images/md-sajid-hussain.jpg",
    },
    {
        id: 3,
        name: "Vishal Singh",
        role: "Patient",
        feedback:
            "Hospital ho to AIIMS jaisa. As this hospital helped me and my family in the conditions where we were unable to do something about it. Every thing is in order here, i know that every hospital has some things that we are not happy about.",
        image: "/images/vishal-singh.jpg",
    },
];

const Testimonials = () => {
    return (
        <section className="py-12 bg-primary/10 dark:bg-accent/40 rounded-md">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-[min(6vw,1.5rem)] font-semibold text-foreground dark:text-gray-100">
                    TESTIMONIALS
                    <Separator className="bg-gray-300 dark:bg-gray-700 mx-auto mt-2 w-24 h-[2px]" />
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mt-4 text-[min(4.5vw,1rem)] text-left leading-6 mb-12 capitalize">
                    Our faithful testimonials reflect the heart of our
                    commitment satisfied patients sharing their positive
                    experiences. At SANTUSHT, real stories testify to our
                    compassionate care, effective solutions, and the dedication
                    of our staff. Trust in our services is built on the genuine
                    voices of those we&apos;ve served.Our faithful testimonials
                    reflect the heart of our commitment satisfied patients
                    sharing their positive experiences. At SANTUSHT, real
                    stories testify to our compassionate care, effective
                    solutions, and the dedication of our staff. Trust in our
                    services is built on the genuine voices of those we&apos;ve
                    served.
                </p>
                <Carousel
                    opts={{
                        loop: true,
                        align: "start",
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent className="flex gap-6 ">
                        {testimonials.map((testimonial) => (
                            <CarouselItem
                                key={testimonial.id}
                                className="w-full sm:w-1/2 lg:w-1/3 p-4 md:basis-1/2 lg:basis-1/3 border-none shadow-none"
                            >
                                <div className="capitalize rounded-lg p-6 flex flex-col items-center bg-white dark:bg-accent dark:border dark:border-gray-700">
                                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={64}
                                            height={64}
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 text-[min(4vw,1rem)] leading-relaxed mb-4">
                                        {testimonial.feedback}
                                    </p>
                                    <h4 className="text-lg font-semibold text-foreground dark:text-gray-100">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonials;
