'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { SiPython, SiHtml5, SiJavascript, SiJupyter, SiDart } from 'react-icons/si';
import { FaCode, FaCog } from 'react-icons/fa';

const allProjects = [
    { title: "career_guidance", tech: "Python", updated: "5 days ago", type: "Public", color: "from-blue-400 to-indigo-600" },
    { title: "Aroyag", tech: "HTML", updated: "last week", type: "Public", color: "from-emerald-400 to-green-600" },
    { title: "Portfolio", tech: "JavaScript", updated: "3 weeks ago", type: "Public", color: "from-amber-400 to-orange-600" },
    { title: "StockGPT", tech: "Jupyter Notebook", updated: "3 weeks ago", type: "Public", color: "from-purple-400 to-fuchsia-600" },
    { title: "medicine_alarm", tech: "HTML", updated: "Jan 19", type: "Public", color: "from-rose-400 to-red-600" },
    { title: "3d_avatar_generator", tech: "Jupyter Notebook", updated: "Jan 14", type: "Public", color: "from-cyan-400 to-blue-600" },
    { title: "travel_planner", tech: "Dart", updated: "Jan 10", type: "Public", color: "from-sky-400 to-indigo-600" },
    { title: "Chatt_App", tech: "HTML", updated: "Dec 30, 2025", type: "Public", desc: "Forked from DishantShahare358/Chatt_App", color: "from-pink-400 to-rose-600" },
    { title: "communication", tech: "HTML", updated: "Dec 30, 2025", type: "Public", color: "from-violet-400 to-purple-600" },
    { title: "Anime", tech: "Dart", updated: "Dec 24, 2025", type: "Public", color: "from-fuchsia-400 to-pink-600" },
    { title: "Beyond_words", tech: "Jupyter Notebook", updated: "Dec 11, 2025", type: "Public", color: "from-teal-400 to-emerald-600" },
    { title: "deva41103", tech: "config", updated: "Dec 11, 2025", type: "Public", desc: "Config files for my GitHub profile.", color: "from-gray-400 to-gray-600" },
    { title: "Freelancing", tech: "HTML", updated: "Dec 11, 2025", type: "Public", desc: "The Freelancing Platform is the project developed using python having Flask as a Framework and Sql as a database.", color: "from-blue-500 to-cyan-600" },
    { title: "demo", tech: "Other", updated: "Sep 10, 2025", type: "Public", color: "from-orange-400 to-red-600" },
    { title: "QR_Generator", tech: "HTML", updated: "Sep 9, 2025", type: "Public", color: "from-indigo-400 to-purple-600" },
    { title: "dev", tech: "Python", updated: "Sep 9, 2025", type: "Public", color: "from-blue-600 to-indigo-800" },
    { title: "hackthon", tech: "Python", updated: "Aug 24, 2025", type: "Public", color: "from-green-500 to-emerald-700" },
    { title: "img_to_url", tech: "HTML", updated: "Aug 6, 2025", type: "Public", color: "from-cyan-500 to-teal-700" },
    { title: "api_integration", tech: "Dart", updated: "Jul 9, 2025", type: "Public", color: "from-indigo-500 to-blue-700" },
    { title: "Flipkart", tech: "Dart", updated: "Jul 6, 2025", type: "Public", color: "from-yellow-400 to-orange-600" },
    { title: "PRODIGY_ML_05", tech: "Jupyter Notebook", updated: "Jun 19, 2024", type: "Public", color: "from-violet-500 to-purple-700" },
    { title: "PRODIGY_ML_04", tech: "Jupyter Notebook", updated: "Jun 17, 2024", type: "Public", color: "from-violet-500 to-purple-700" },
    { title: "PRODIGY_ML_03", tech: "Jupyter Notebook", updated: "Jun 17, 2024", type: "Public", color: "from-violet-500 to-purple-700" },
    { title: "PRODIGY_ML_02", tech: "Jupyter Notebook", updated: "Jun 16, 2024", type: "Public", color: "from-violet-500 to-purple-700" },
    { title: "PRODIGY_ML_01", tech: "Jupyter Notebook", updated: "Jun 16, 2024", type: "Public", color: "from-violet-500 to-purple-700" },
];

const getTechIcon = (techName) => {
    switch (techName.toLowerCase()) {
        case 'python': return <SiPython className="text-[#3776AB]" />;
        case 'html': return <SiHtml5 className="text-[#E34F26]" />;
        case 'javascript': return <SiJavascript className="text-[#F7DF1E]" />;
        case 'jupyter notebook': return <SiJupyter className="text-[#F37626]" />;
        case 'dart': return <SiDart className="text-[#0175C2]" />;
        case 'config': return <FaCog className="text-zinc-500" />;
        default: return <FaCode className="text-emerald-500" />;
    }
};

export default function MoreProjects() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Custom cursor tracker
    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    // Smooth scrolling setup with Lenis
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return (
        <section className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-foreground relative overflow-hidden selection:bg-[#106c57]/30 dark:selection:bg-emerald-500/30">

            {/* Custom Animated Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#106c57] dark:border-emerald-400 pointer-events-none z-[100] mix-blend-difference hidden md:block"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.1
                }}
            />

            {/* Background design matching global theme */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#106c57]/5 dark:bg-emerald-600/5 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#106c57]/5 dark:bg-cyan-600/5 blur-[120px]" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] dark:opacity-[0.05]"></div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 pointer-events-none">
                <div className="max-w-7xl mx-auto flex items-center pointer-events-auto">
                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.05, x: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white dark:bg-[#111] border border-zinc-200 dark:border-white/10 shadow-lg px-5 py-2.5 rounded-full inline-flex items-center gap-3 text-zinc-800 dark:text-white font-mono uppercase tracking-widest text-sm cursor-pointer hover:border-[#106c57] dark:hover:border-emerald-500 transition-colors group"
                        >
                            <ArrowLeft size={16} className="text-[#106c57] dark:text-emerald-400 group-hover:-translate-x-1 transition-transform" />
                            Back Home
                        </motion.button>
                    </Link>
                </div>
            </nav>


            {/* Header Content */}
            <header className="relative z-10 pt-40 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
                <div
                    className="absolute inset-0 z-0 opacity-20 dark:opacity-30 pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-opacity duration-500"
                    style={{
                        backgroundImage: "url('/sketch.png')", // <-- Update this path!
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <div className="h-[1px] w-12 bg-[#106c57]/30 dark:bg-emerald-400/30"></div>
                        <span className="text-sm font-semibold tracking-[0.3em] uppercase opacity-70 text-[#106c57] dark:text-emerald-400">
                            Github Archives
                        </span>
                        <div className="h-[1px] w-12 bg-[#106c57]/30 dark:bg-emerald-400/30"></div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, type: "spring" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-[#106c57] dark:text-emerald-400"
                    >
                        Complete <br className="md:hidden" />
                        <span className="text-zinc-800 dark:text-white">
                            Arsenal
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-mono tracking-tight max-w-2xl mx-auto"
                    >
                        Dive into {allProjects.length} open-source repositories, experiments, and full-stack projects built over the years.
                    </motion.p>

                    {/* Animated Scroll Mouse Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-16 flex flex-col items-center gap-3 opacity-80"
                    >
                        <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-semibold text-[#106c57] dark:text-emerald-400">Scroll</span>
                        <div className="w-6 h-10 border-2 border-[#106c57]/50 dark:border-emerald-400/50 rounded-full flex justify-center p-1">
                            <motion.div
                                animate={{ y: [0, 14, 0], opacity: [1, 0.5, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                className="w-1.5 h-1.5 bg-[#106c57] dark:bg-emerald-400 rounded-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Alternating Zig-Zag Layout */}
            <main className="relative z-10 px-6 md:px-12 pb-48 max-w-6xl mx-auto flex flex-col gap-32 md:gap-48 mt-12">
                {allProjects.map((project, idx) => (
                    <ProjectRow key={idx} project={project} index={idx} />
                ))}
            </main>
        </section>
    );
}

// Normal Scrolling Alternating Row Component
function ProjectRow({ project, index }) {
    const isEven = index % 2 === 0;
    const description = project.desc || `An interactive ${project.tech} repository showcasing modern programming practices, clean architecture, and responsive design.`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24 w-full`}
        >
            {/* Text Section / Info */}
            <div className="flex-1 flex flex-col items-start text-left w-full order-2 md:order-none">
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-300 bg-zinc-200/60 dark:bg-white/10 px-4 py-1.5 rounded-full border border-zinc-300 dark:border-white/10 uppercase tracking-wider shadow-sm">
                        {project.type}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-500 font-mono uppercase font-medium">
                        Updated {project.updated}
                    </span>
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white mb-6 leading-[1.1]">
                    {project.title}
                </h3>

                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-xl font-medium">
                    {description}
                </p>

                <div className="flex flex-wrap items-center gap-6 mt-auto">
                    <div className="flex items-center gap-3 px-4 py-2 bg-zinc-100 dark:bg-zinc-900/50 rounded-full border border-zinc-200 dark:border-zinc-800">
                        <span className={`w-3 h-3 rounded-full bg-gradient-to-br ${project.color} shadow-sm`}></span>
                        <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{project.tech}</span>
                    </div>

                    <a
                        href={`https://github.com/deva41103/${project.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-transform shadow-lg hover:shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    >
                        View Repository <ExternalLink size={16} />
                    </a>
                </div>
            </div>

            {/* Visual Card Section */}
            <div className="flex-1 w-full order-1 md:order-none">
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-2xl shadow-black/5 dark:shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-zinc-200/80 dark:border-white/10 bg-zinc-50 dark:bg-[#0c0c0c] flex items-center justify-center">

                    {/* Background Gradient Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-700`} />

                    {/* Grid Pattern overlay */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05] dark:opacity-[0.1]"></div>

                    {/* Big Central Tech Icon */}
                    <motion.div
                        className="relative z-10 opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-2xl"
                        whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 5 : -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                        <div className="text-[140px] md:text-[180px] text-zinc-800 dark:text-white drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
                            {getTechIcon(project.tech)}
                        </div>
                    </motion.div>

                    {/* Github overlay icon hovering top right */}
                    <div className="absolute top-6 right-6 p-4 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-md border border-zinc-200 dark:border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                        <Github size={28} className="text-zinc-800 dark:text-white" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
