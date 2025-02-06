import React from "react";

const About: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 bg-background ">
            <p className="text-2xl font-bold text-center mb-6 dark: gray-300">
                About Santusht
            </p>
            <p className="text-center text-muted-foreground mb-10 dark: gray-300">
                SANTUSHT empowers you to voice your concerns and aids in
                resolving grievances promptly. It is accessible 24/7 as we
                prioritize your well-being. Share your feedback seamlessly to
                help us enhance your healthcare experience. Your input shapes
                our commitment to compassionate care, ensuring satisfaction and
                trust in every step of your journey.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8  ">
                {/* Image on the Left */}
                <div className="w-full md:w-1/2">
                    {/* <Image
                        src=""
                        alt="About Santusht"
                        className="w-full h-auto rounded-lg"
                    /> */}
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                    <p className="text-lg font-bold text-gray-800 dark:text-gray-100">
                        Elevating Patient Care with Compassion, Accessibility,
                        and Continuous Improvement.
                    </p>
                    <p className="text-gray-600 font-thin dark:text-gray-100">
                        Your voice matters. Prompt resolutions, 24/7 support.
                        Seamless feedback shapes compassionate care. Your
                        satisfaction, our commitment.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-100">
                        <li>
                            <span className="font-semibold">
                                Efficient Grievance Resolution:
                            </span>
                            Ensuring swift and satisfactory solutions for
                            patients.
                        </li>
                        <li>
                            <span className="font-semibold">
                                Seamless Feedback Collection:
                            </span>
                            Enhancing our services for optimal patient
                            satisfaction.
                        </li>
                    </ul>
                    <p className="text-gray-700  dark:text-gray-100">
                        SANTUSHT, our patient grievance and feedback portal,
                        offers round-the-clock support, efficiently resolving
                        grievances, and valuing patient feedback for continuous
                        improvement. Empowering your healthcare journey with
                        prompt, compassionate service, we prioritize
                        satisfaction and trust.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
