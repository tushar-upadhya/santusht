import About from "@/components/about/About";
import AssistanceBanner from "@/components/assistance-banner/AssistanceBanner";
import Hero from "@/components/hero/Hero";
import React from "react";

const HomePage: React.FC = () => {
    return (
        <div className="container mx-auto">
            <Hero />
            <AssistanceBanner />
            <About />
        </div>
    );
};

export default HomePage;
