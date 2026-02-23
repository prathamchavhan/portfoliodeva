'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const education = [
    {
        institution: "G.H. Raisoni College of Engineering and Management, Nagpur",
        degree: "B.Tech (AI)",
        score: "8.3 CGPA",
        year: "2026"
    },
    {
        institution: "New English Junior College, Nagpur",
        degree: "Class 12 (HSC)",
        score: "70.67%",
        year: "2022"
    },
    {
        institution: "Ramesh Chandak English School",
        degree: "Class 10 (SSC)",
        score: "86.80%",
        year: "2020"
    }
];

const skills = [
    { category: "Languages", items: ["Python", "Dart", "Java"] },
    { category: "Frameworks", items: ["Flutter", "Flask", "Django"] },
    { category: "Databases", items: ["MySQL", "SQLite", "PostgreSQL", "JSON"] },
    { category: "AI/ML", items: ["Scikit-learn", "OpenCV", "NLP", "Pandas"] },
    { category: "Tools", items: ["Git", "VS Code", "Supabase", "Android Studio", "Postman"] }
];

const experience = [
    {
        role: "Full Stack Developer",
        company: "Dataventics Software Solutions",
        duration: "6 months",
        description: "Gained hands-on experience of FLUTTER with complete production ready App Development."
    },
    {
        role: "Machine Learning Intern",
        company: "Prodigy Infotech",
        duration: "1 month",
        description: "Gained hands-on experience with ML models and small-scale projects."
    }
];

const achievements = [
    "Led backend development using Flask & SQL, showing strong logical and analytical thinking.",
    "Winner of G.H. Raisoni Hackathon for an AI Sign Language Generator, proving critical problem-solving ability.",
    "HackerRank Python 4★ – demonstrates excellent logical reasoning and algorithmic skills.",
    "HackerRank Software Engineer Certified – validated structured and logical problem-solving.",
    "Kaggle ML Certified – strengthened data-driven thinking and model logic.",
    "Django Web Development (CPD Certified) – reinforced engineering logic and systematic learning."
];

export default function Resume() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".resume-section", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full min-h-screen bg-[#F5F5F3] dark:bg-[#111] py-24 px-8 md:px-24 text-foreground relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col gap-20">

                {/* Header Section */}
                <div className="resume-section flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="h-[1px] w-12 bg-foreground/30"></div>
                        <span className="text-sm font-semibold tracking-[0.3em] uppercase opacity-70">Resume</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#106c57] dark:text-emerald-400">
                        Experience & Skills
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column */}
                    <div className="flex flex-col gap-16">

                        {/* Experience */}
                        <div className="resume-section flex flex-col gap-8">
                            <h3 className="text-2xl font-bold uppercase tracking-widest border-b border-foreground/10 pb-4">Experience</h3>
                            <div className="flex flex-col gap-8">
                                {experience.map((exp, i) => (
                                    <motion.div key={i} whileHover={{ x: 10 }} className="flex flex-col gap-2">
                                        <div className="flex justify-between items-end">
                                            <h4 className="text-xl font-bold">{exp.role}</h4>
                                            <span className="text-sm opacity-60 font-mono">{exp.duration}</span>
                                        </div>
                                        <p className="text-lg opacity-80 font-medium text-[#106c57] dark:text-emerald-400">{exp.company}</p>
                                        <p className="opacity-70 text-sm md:text-base leading-relaxed">{exp.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div className="resume-section flex flex-col gap-8">
                            <h3 className="text-2xl font-bold uppercase tracking-widest border-b border-foreground/10 pb-4">Education</h3>
                            <div className="flex flex-col gap-6">
                                {education.map((edu, i) => (
                                    <motion.div key={i} whileHover={{ x: 10 }} className="flex flex-col gap-1">
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-lg font-bold leading-tight">{edu.institution}</h4>
                                            <span className="text-sm opacity-60 font-mono whitespace-nowrap ml-4">{edu.year}</span>
                                        </div>
                                        <p className="opacity-80 font-medium">{edu.degree}</p>
                                        <p className="text-sm opacity-60 font-mono">Score: {edu.score}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-16">

                        {/* Skills */}
                        <div className="resume-section flex flex-col gap-8">
                            <h3 className="text-2xl font-bold uppercase tracking-widest border-b border-foreground/10 pb-4">Technical Skills</h3>
                            <div className="flex flex-col gap-6">
                                {skills.map((skillGroup, i) => (
                                    <div key={i} className="flex flex-col gap-3">
                                        <h4 className="text-sm uppercase tracking-widest opacity-60 font-bold">{skillGroup.category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill, j) => (
                                                <span
                                                    key={j}
                                                    className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="resume-section flex flex-col gap-8">
                            <h3 className="text-2xl font-bold uppercase tracking-widest border-b border-foreground/10 pb-4">Achievements</h3>
                            <ul className="flex flex-col gap-4 list-disc list-inside opacity-80 text-sm md:text-base leading-relaxed">
                                {achievements.map((ach, i) => (
                                    <motion.li key={i} whileHover={{ x: 5 }} className="pl-2">
                                        {ach}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
