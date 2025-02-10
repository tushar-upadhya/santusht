"use client";

import React, { useState } from "react";
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";

const fullStackRoadmap = [
    {
        month: 1,
        topics: [
            "HTML and CSS",
            "JavaScript and DOM Manipulation",
            "Responsive Design and Bootstrap",
            "Version Control with Git and GitHub",
            "Backend Development with Node.js and Express",
            "Databases with SQL and MongoDB",
        ],
    },
    {
        month: 2,
        topics: [
            "React Basics",
            "State Management with Redux",
            "Authentication & Authorization",
            "RESTful APIs",
            "GraphQL Basics",
        ],
    },
    {
        month: 3,
        topics: [
            "Advanced JavaScript Concepts",
            "TypeScript Basics",
            "Next.js Framework",
            "SEO & Performance Optimization",
            "Unit Testing with Jest",
        ],
    },
    {
        month: 4,
        topics: [
            "Backend Security Best Practices",
            "JWT & OAuth",
            "WebSockets & Real-time Data",
            "Docker & Containerization",
            "CI/CD Pipeline Implementation",
            "Backend Security Best Practices",
            "JWT & OAuth",
            "WebSockets & Real-time Data",
            "Docker & Containerization",
            "CI/CD Pipeline Implementation",
        ],
    },
];

const Departments: React.FC = () => {
    const [selectedMonth, setSelectedMonth] = useState(0);

    return (
        <div className="py-12">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row rounded-2xl bg-white dark:bg-accent">
                    <Sidebar
                        months={fullStackRoadmap.map(
                            (roadmap) => `Month ${roadmap.month}`
                        )}
                        selectedMonth={selectedMonth}
                        onSelectMonth={setSelectedMonth}
                    />
                    <Content
                        title={`Month ${fullStackRoadmap[selectedMonth].month}`}
                        content={fullStackRoadmap[selectedMonth].topics}
                    />
                </div>
            </div>
        </div>
    );
};

export default Departments;
