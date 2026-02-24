'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PhoneMockup, MacbookMockup } from './ProjectMockups';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Hyreso App",
        description: "A modern job-hiring and recruitment application featuring job listings, smart filters, recruiter dashboards, candidate profiles, and integrated AI interview assistance for seamless hiring workflows.",
        tech: ["Flutter", "Dart", "Supabase", "REST APIs", "Firebase", "AI/ML APIs"],
        link: "https://play.google.com/store/apps/details?id=com.hyreso.app&hl=en_IN",
        type: "Play Store",
        color: "bg-gradient-to-br from-teal-400 to-emerald-600",
        image: "./hyreso.png",
        downloadLink: "/resume.pdf"
    },
    {
        title: "Crop Bazar",
        description: "A comprehensive agritech marketplace application connecting farmers, traders, and buyers. The platform enables crop trading, real-time mandi prices, agri-inputs marketplace, logistics support, and digital supply-chain management for agriculture.",
        tech: ["Flutter", "Dart", "REST APIs", "Cloud Backend", "Payment Integration", "Maps APIs"],
        link: "https://play.google.com/store/apps/details?id=com.thecropbazar.market&hl=en_IN",
        type: "Play Store",
        color: "bg-gradient-to-br from-green-400 to-green-700",
        customUI: true
    },
    {
        title: "AI Sign Language System",
        description: "A Flask-based accessibility-focused web application that converts real-time speech into sign language skeleton poses. Uses NLP to extract glosses and a trained model to generate keypoints.",
        tech: ["Flask", "Python", "PyTorch", "MediaPipe", "NLP", "WebSockets", "MySQL"],
        link: "https://github.com/deva41103/Beyond_words.git",
        type: "GitHub",
        color: "bg-gradient-to-br from-indigo-500 to-blue-600"
    }
];

export default function Projects() {
    const containerRef = useRef(null);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);
    const phoneRef = useRef(null);
    const laptopRef = useRef(null);
    const screensRef = useRef([]);
    const codeScrollRef = useRef(null);
    const cropScrollRef = useRef(null);
    const isHoveringCode = useRef(false);
    const isHoveringCrop = useRef(false);

    useEffect(() => {
        let animationId;
        let currentScroll = 0;

        const autoScroll = () => {
            // Auto-scroll MacBook Code
            if (codeScrollRef.current && !isHoveringCode.current) {
                currentScroll += 0.3; // Very slow auto-scrolling
                codeScrollRef.current.scrollTop = currentScroll;

                // Reset to top when near the bottom
                if (codeScrollRef.current.scrollTop + codeScrollRef.current.clientHeight >= codeScrollRef.current.scrollHeight - 1) {
                    currentScroll = 0;
                }
            } else if (codeScrollRef.current) {
                // Sync currentScroll if the user manually scrolled
                currentScroll = codeScrollRef.current.scrollTop;
            }

            animationId = requestAnimationFrame(autoScroll);
        };

        autoScroll();
        return () => cancelAnimationFrame(animationId);
    }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // First, let's fade in the header
            gsap.from(".projects-header", {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });

            // Set up scroll triggers for each project text step
            const steps = gsap.utils.toArray('.project-step');

            steps.forEach((step, i) => {
                ScrollTrigger.create({
                    trigger: step,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => activateScreen(i),
                    onEnterBack: () => activateScreen(i),
                });
            });

            function activateScreen(index) {
                // Device Toggle Logic
                if (index < 2) {
                    // Show Phone, Hide Laptop
                    gsap.to(phoneRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", autoAlpha: 1 });
                    gsap.to(laptopRef.current, { opacity: 0, scale: 0.9, duration: 0.6, ease: "power3.out", autoAlpha: 0 });
                } else {
                    // Hide Phone, Show Laptop
                    gsap.to(phoneRef.current, { opacity: 0, scale: 0.9, duration: 0.6, ease: "power3.out", autoAlpha: 0 });
                    gsap.to(laptopRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", autoAlpha: 1 });
                }

                // Phone Screens Toggle Logic
                screensRef.current.forEach((screen, i) => {
                    if (!screen) return;
                    if (i === index) {
                        gsap.to(screen, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" });
                    } else {
                        gsap.to(screen, { opacity: 0, y: 40, scale: 0.95, duration: 0.6, ease: "power3.out" });
                    }
                });
            }

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id='projects' className="w-full bg-white dark:bg-[#0a0a0a] text-foreground relative z-10 pb-24">

            {/* Header */}
            <div className="max-w-6xl mx-auto px-8 md:px-24 pt-32 pb-16 projects-header">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="h-[1px] w-12 bg-foreground/30"></div>
                        <span className="text-sm font-semibold tracking-[0.3em] uppercase opacity-70">Selected Works</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#106c57] dark:text-emerald-400">
                        Projects
                    </h2>
                </div>
            </div>

            {/* Sticky Scrolling Layout */}
            <div className="max-w-6xl mx-auto px-8 md:px-24 flex flex-col md:flex-row relative">

                {/* Left Column (Scrolling Text) */}
                <div ref={leftColumnRef} className="w-full md:w-[45%] lg:w-1/2 flex flex-col pt-12">
                    {projects.map((project, i) => (
                        <div key={i} className="project-step min-h-screen flex flex-col justify-center py-24 md:pr-24 lg:pr-32 relative">
                            <div className="text-6xl md:text-8xl font-black opacity-[0.03] dark:opacity-5 absolute top-1/2 -translate-y-1/2 -left-8 pointer-events-none">
                                0{i + 1}
                            </div>

                            <div className="flex flex-col gap-6 relative z-10">
                                <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#106c57] dark:text-emerald-400">
                                    {project.title}
                                </h3>

                                <p className="text-base md:text-lg opacity-80 leading-relaxed font-mono">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tech.map((tech, j) => (
                                        <span
                                            key={j}
                                            className="px-3 py-1 bg-black/5 dark:bg-white/5 text-xs font-mono uppercase tracking-wider rounded-md opacity-80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold border border-foreground/20 rounded-full px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
                                    >
                                        Live App <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column (Sticky Devices) */}
                <div ref={rightColumnRef} className="hidden md:flex w-[55%] lg:w-1/2 h-screen sticky top-0 items-center justify-end lg:justify-center pl-16 lg:pl-24 relative">

                    {/* --- IPHONE MOCKUP --- */}
                    <PhoneMockup
                        ref={phoneRef}
                        projects={projects}
                        screensRef={screensRef}
                        cropScrollRef={cropScrollRef}
                        isHoveringCrop={isHoveringCrop}
                    />

                    {/* --- MACBOOK M4 MOCKUP (Project 3) --- */}
                    <MacbookMockup ref={laptopRef} codeScrollRef={codeScrollRef} isHoveringCode={isHoveringCode} />
                </div>

            </div>

            {/* More Projects Button */}
            <div className="max-w-6xl mx-auto px-8 md:px-24 flex justify-center -mt-12 md:-mt-24 mb-24 relative z-20">
                <Link href="/projects" passHref>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#106c57] dark:bg-emerald-500 px-8 py-4 font-bold tracking-widest text-white transition-all duration-300 hover:bg-[#0d5948] dark:hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,108,87,0.4)] dark:hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]"
                    >
                        <span className="uppercase text-sm tracking-[0.2em] flex items-center gap-3 relative z-10">
                            More Projects
                            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>

                        {/* Hover effect background fill */}
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out bg-white/20 group-hover:scale-100"></div>
                    </motion.button>
                </Link>
            </div>

        </section>
    );
}
