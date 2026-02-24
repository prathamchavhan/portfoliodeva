'use client';

import { motion } from 'framer-motion';

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

export default function ResumeContent() {
    return (
        <div className="w-full lg:w-1/2 flex flex-col gap-24 py-8 lg:py-0">
            {/* EXPERIENCE SECTION */}
            <div className="flex flex-col gap-8">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="border-b border-black/10 dark:border-white/10 pb-4"
                >
                    <h3 className="text-3xl md:text-66xl font-black uppercase tracking-tighter text-[#106c57] dark:text-emerald-400">
                        Experience
                    </h3>
                </motion.div>

                <div className="flex flex-col gap-10">
                    {experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col gap-1"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                                <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{exp.role}</h4>
                                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1">{exp.duration}</span>
                            </div>
                            <p className="text-sm font-medium text-[#4F947E] dark:text-[#5cb096] mb-2 cursor-pointer hover:underline">{exp.company}</p>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* SKILLS SECTION */}
            <div className="flex flex-col gap-8">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="border-b border-black/10 dark:border-white/10 pb-4"
                >
                    <h3 className="text-3xl md:text-66xl font-black uppercase tracking-tighter text-[#106c57] dark:text-emerald-400">
                        Technical Skills
                    </h3>
                </motion.div>

                <div className="flex flex-col gap-8">
                    {skills.map((skillGroup, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col gap-3"
                        >
                            <h4 className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold">{skillGroup.category}</h4>
                            <div className="flex flex-wrap gap-2.5">
                                {skillGroup.items.map((skill, j) => (
                                    <span
                                        key={j}
                                        className="px-4 py-1.5 bg-black/5 dark:bg-white/10 rounded-full text-[13px] font-medium text-zinc-800 dark:text-zinc-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ACHIEVEMENTS SECTION */}
            <div className="flex flex-col gap-8">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="border-b border-black/10 dark:border-white/10 pb-4"
                >
                    <h3 className="text-3xl md:text-66xl font-black uppercase tracking-tighter text-[#106c57] dark:text-emerald-400">
                        Achievements
                    </h3>
                </motion.div>

                <div className="flex flex-col gap-4">
                    {achievements.map((ach, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-2 shrink-0" />
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                                {ach}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
