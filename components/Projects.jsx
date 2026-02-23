'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Activity, Code2, ScanLine } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Hyreso App",
        description: "A modern job-hiring and recruitment application featuring job listings, smart filters, recruiter dashboards, candidate profiles, and integrated AI interview assistance for seamless hiring workflows.",
        tech: ["Flutter", "Dart", "Supabase", "REST APIs", "Firebase", "AI/ML APIs"],
        link: "https://play.google.com/store/apps/details?id=com.hyreso.app&hl=en_IN",
        type: "Play Store",
        color: "bg-gradient-to-br from-teal-400 to-emerald-600",
        image: "./hyreso.png"
    },
    {
        title: "Crop Bazar",
        description: "A comprehensive agritech marketplace application connecting farmers, traders, and buyers. The platform enables crop trading, real-time mandi prices, agri-inputs marketplace, logistics support, and digital supply-chain management for agriculture.",
        tech: ["Flutter", "Dart", "REST APIs", "Cloud Backend", "Payment Integration", "Maps APIs"],
        link: "https://play.google.com/store/apps/details?id=com.thecropbazar.market&hl=en_IN",
        type: "Play Store",
        color: "bg-gradient-to-br from-green-400 to-green-700",
        image: "/cropbazaar.png"
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
    const isHoveringCode = useRef(false);

    useEffect(() => {
        let animationId;
        let currentScroll = 0;

        const autoScroll = () => {
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
        <section ref={containerRef} className="w-full bg-white dark:bg-[#0a0a0a] text-foreground relative z-10 pb-24">

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
                    <div ref={phoneRef} className="absolute inset-0 flex items-center justify-end lg:justify-center">
                        <div className="relative w-[320px] h-[650px] flex-shrink-0">

                            {/* Hardware Buttons */}
                            <div className="absolute top-[180px] -right-[4px] w-[5px] h-[60px] bg-[#222] dark:bg-[#555] rounded-r-md shadow-md z-0"></div>
                            <div className="absolute top-[140px] -left-[4px] w-[5px] h-[25px] bg-[#222] dark:bg-[#555] rounded-l-md shadow-md z-0"></div>
                            <div className="absolute top-[190px] -left-[4px] w-[5px] h-[55px] bg-[#222] dark:bg-[#555] rounded-l-md shadow-md z-0"></div>
                            <div className="absolute top-[260px] -left-[4px] w-[5px] h-[55px] bg-[#222] dark:bg-[#555] rounded-l-md shadow-md z-0"></div>

                            {/* Phone Frame */}
                            <div className="relative w-full h-full rounded-[3.5rem] border-[14px] border-[#111] dark:border-[#222] bg-black shadow-2xl z-10 overflow-hidden ring-4 ring-black/10 dark:ring-white/5">

                                {/* iPhone 13 Notch */}
                                <div className="absolute top-0 inset-x-0 flex justify-center z-50 pointer-events-none">
                                    <div className="w-[140px] h-[30px] bg-black rounded-b-3xl flex items-center justify-center gap-4 px-4 relative">
                                        <div className="w-12 h-1.5 bg-[#222] dark:bg-[#111] rounded-full"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#111] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]"></div>
                                    </div>
                                </div>

                                {/* Dynamic Screens */}
                                <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                                    {projects.slice(0, 2).map((project, i) => (
                                        <div
                                            key={i}
                                            ref={el => screensRef.current[i] = el}
                                            className="absolute inset-0 w-full h-full opacity-0"
                                            style={{ opacity: i === 0 ? 1 : 0 }}
                                        >
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover object-top"
                                                />
                                            ) : (
                                                <div className={`w-full h-full ${project.color} flex flex-col items-center justify-center p-8 text-center text-white`}>
                                                    <h4 className="text-3xl font-black tracking-tighter leading-tight drop-shadow-md">
                                                        {project.title}
                                                    </h4>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- MACBOOK M4 MOCKUP (Project 3) --- */}
                    <div ref={laptopRef} className="absolute inset-0 flex items-center justify-end lg:justify-center opacity-0 scale-90 md:scale-75 lg:scale-95 ml-[-6rem] md:ml-[-4rem] lg:ml-0 translate-x-12 lg:translate-x-0">
                        <div className="relative flex flex-col items-center">

                            {/* MacBook Screen Frame */}
                            <div className="relative w-[450px] lg:w-[540px] aspect-[16/10.5] bg-black rounded-t-2xl border-[6px] border-[#1a1a1a] dark:border-[#2a2a2a] shadow-2xl overflow-hidden ring-1 ring-white/10">

                                {/* MacBook M4 Notch */}
                                <div className="absolute top-0 inset-x-0 flex justify-center z-50">
                                    <div className="w-[100px] h-[22px] bg-[#1a1a1a] dark:bg-[#2a2a2a] rounded-b-[14px] flex items-center justify-center relative">
                                        <div className="w-2 h-2 rounded-full bg-[#050505] flex items-center justify-center shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]">
                                            <div className="w-0.5 h-0.5 rounded-full bg-blue-500/50"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* MacBook Screen Content - Realistic Code Editor */}
                                <div className="w-full h-full bg-[#1e1e1e] text-[#d4d4d4] font-mono text-[10px] sm:text-xs pt-8 p-4 flex flex-col relative overflow-hidden">

                                    {/* Editor Tabs */}
                                    <div className="absolute top-0 left-0 w-full h-8 bg-[#2d2d2d] flex items-end px-2 gap-1 z-40">
                                        <div className="bg-[#1e1e1e] px-4 py-1.5 rounded-t font-sans text-[10px] text-white/80 border-t border-blue-500/50 flex items-center gap-2">
                                            <span className="text-yellow-400">app.py</span>
                                            <span className="text-white/40 hover:text-white/80 cursor-pointer">×</span>
                                        </div>
                                        <div className="px-4 py-1.5 rounded-t font-sans text-[10px] text-white/40 flex items-center gap-2">
                                            <span>model.py</span>
                                        </div>
                                    </div>

                                    {/* Code Content */}
                                    <div className="flex-1 overflow-hidden relative mt-2 flex">

                                        {/* Line Numbers */}
                                        <div className="w-8 flex-shrink-0 text-[#858585] text-right pr-3 select-none flex flex-col pt-2 opacity-50">
                                            {[...Array(20)].map((_, i) => <div key={i}>{i + 1}</div>)}
                                        </div>

                                        {/* Scrolling Code */}
                                        <div
                                            ref={codeScrollRef}
                                            data-lenis-prevent="true"
                                            onMouseEnter={() => isHoveringCode.current = true}
                                            onMouseLeave={() => isHoveringCode.current = false}
                                            onTouchStart={() => isHoveringCode.current = true}
                                            onTouchEnd={() => isHoveringCode.current = false}
                                            className="flex-1 relative overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20 pr-2 overscroll-contain"
                                        >
                                            <div className="pt-2 pb-12 flex flex-col leading-relaxed">
                                                <p><span className="text-[#c586c0]">import</span> <span className="text-[#4ec9b0]">torch</span></p>
                                                <p><span className="text-[#c586c0]">import</span> <span className="text-[#4ec9b0]">cv2</span></p>
                                                <p><span className="text-[#c586c0]">import</span> <span className="text-[#4ec9b0]">numpy</span> <span className="text-[#c586c0]">as</span> <span className="text-[#4ec9b0]">np</span></p>
                                                <p><span className="text-[#c586c0]">import</span> <span className="text-[#4ec9b0]">mediapipe</span> <span className="text-[#c586c0]">as</span> <span className="text-[#4ec9b0]">mp</span></p>
                                                <p className="mt-4"><span className="text-[#569cd6]">def</span> <span className="text-[#dcdcaa]">extract_keypoints</span>(results):</p>
                                                <p className="pl-4">pose = np.array([[res.x, res.y, res.z, res.visibility] <span className="text-[#c586c0]">for</span> res <span className="text-[#c586c0]">in</span> results.pose_landmarks.landmark]).flatten() <span className="text-[#c586c0]">if</span> results.pose_landmarks <span className="text-[#c586c0]">else</span> np.zeros(<span className="text-[#b5cea8]">33</span>*<span className="text-[#b5cea8]">4</span>)</p>
                                                <p className="pl-4">face = np.array([[res.x, res.y, res.z] <span className="text-[#c586c0]">for</span> res <span className="text-[#c586c0]">in</span> results.face_landmarks.landmark]).flatten() <span className="text-[#c586c0]">if</span> results.face_landmarks <span className="text-[#c586c0]">else</span> np.zeros(<span className="text-[#b5cea8]">468</span>*<span className="text-[#b5cea8]">3</span>)</p>
                                                <p className="pl-4"><span className="text-[#c586c0]">return</span> np.concatenate([pose, face])</p>
                                                <p className="mt-4"><span className="text-[#6a9955]"># Load the trained model</span></p>
                                                <p>model = torch.load(<span className="text-[#ce9178]">'gloss_to_pose.pth'</span>)</p>
                                                <p>model.eval()</p>
                                                <p className="mt-4"><span className="text-[#c586c0]">while</span> <span className="text-[#569cd6]">True</span>:</p>
                                                <p className="pl-4">ret, frame = cap.read()</p>
                                                <p className="pl-4"><span className="text-[#6a9955]"># Processing frame through MediaPipe</span></p>
                                                <p className="pl-4">predictions = model(features)</p>
                                                <p className="pl-4">cv2.imshow(<span className="text-[#ce9178]">'AI Sign Language'</span>, frame)</p>
                                                <p className="mt-4"><span className="text-[#6a9955]"># Wait for exit</span></p>
                                                <p className="pl-4"><span className="text-[#c586c0]">if</span> cv2.waitKey(<span className="text-[#b5cea8]">1</span>) & <span className="text-[#b5cea8]">0xFF</span> == <span className="text-[#569cd6]">ord</span>(<span className="text-[#ce9178]">'q'</span>):</p>
                                                <p className="pl-8"><span className="text-[#c586c0]">break</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MacBook Base (Keyboard/Trackpad Deck) */}
                            <div className="relative w-[520px] lg:w-[620px] h-[16px] bg-[#d1d5db] dark:bg-[#374151] rounded-b-[16px] shadow-2xl flex justify-center border-t border-white/20">
                                {/* Trackpad Indent */}
                                <div className="w-[100px] h-[4px] bg-[#9ca3af] dark:bg-[#1f2937] rounded-b-md"></div>
                                {/* Bottom Lip Glow */}
                                <div className="absolute bottom-0 w-full h-[2px] bg-white/10 rounded-b-full"></div>
                            </div>
                        </div>
                    </div>
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
