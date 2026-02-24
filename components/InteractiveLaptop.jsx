'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BriefcaseBusiness, Code2, Maximize2, Minus, X, LayoutTemplate, MousePointerClick, FileText, Download, MonitorSmartphone, Trophy, Award } from 'lucide-react';
import { FaJava, FaBrain, FaGitAlt } from "react-icons/fa";
import {
    SiPython, SiDart, SiFlutter, SiFlask, SiDjango, SiMysql, SiSqlite,
    SiPostgresql, SiJson, SiScikitlearn, SiOpencv, SiPandas,
    SiSupabase, SiAndroidstudio, SiPostman
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { ReactLenis } from 'lenis/react';

export default function InteractiveLaptop() {
    const [windowState, setWindowState] = useState('open'); // 'open', 'minimized', 'closed'
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [activeTab, setActiveTab] = useState('resume'); // 'dashboard', 'resume'

    return (
        <div className="w-full lg:w-1/2 lg:sticky lg:top-24 h-[calc(100vh-12rem)] min-h-[500px] flex flex-col justify-center gap-8 shrink-0">
            {/* PHYSICAL MACBOOK FRAME */}
            <div className="relative w-full max-w-[750px] mx-auto group">

                {/* Click / Touch Hint */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute -top-12 -right-4 md:-top-16 md:-right-8 z-[60] flex flex-col items-center pointer-events-none rotate-[12deg]"
                >
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="flex flex-col items-center"
                    >
                        <div className="bg-white text-black text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 whitespace-nowrap border border-black/10">
                            <MousePointerClick className="w-3 h-3 md:w-3.5 md:h-3.5 bg-black text-white p-0.5 rounded-sm" />
                            Scroll it ,Click it ,Touch it ,Feel it!
                        </div>
                        <svg width="40" height="50" viewBox="0 0 100 100" className="mt-1 mr-12 text-black drop-shadow-md overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                d="M 90 0 C 120 40, 90 80, 60 80 C 30 80, 20 40, 50 40 C 80 40, 70 90, 20 95"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeDasharray="6 4"
                                strokeLinecap="round"
                                animate={{ strokeDashoffset: [0, -20] }}
                                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                            />
                            <path d="M 10 100 L 30 85 L 35 98 Z" fill="currentColor" />
                        </svg>
                    </motion.div>
                </motion.div>

                {/* The Screen / Bezel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full aspect-[16/10] bg-black rounded-t-[1.5rem] rounded-b-md p-2 md:p-3 shadow-2xl relative border border-white/5 flex flex-col pt-4 md:pt-5 overflow-hidden"
                >
                    {/* Camera Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-4 rounded-b-xl bg-[#0c0c0c] z-30 flex justify-center items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-900/50 flex justify-center items-center">
                            <div className="w-0.5 h-0.5 rounded-full bg-blue-400"></div>
                        </div>
                    </div>

                    {/* INNER SCREEN (Desktop Background) */}
                    <div className="relative w-full h-full rounded-sm overflow-hidden bg-zinc-900 border flex flex-col border-black"
                        // style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        style={{ backgroundImage: "url('/mm.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        {/* macOS Top Menu Bar (Fake) */}
                        <div className="w-full h-5 md:h-6 bg-white/10 backdrop-blur-md flex items-center justify-between px-3 md:px-4 z-40 border-b border-white/10 text-[8px] md:text-[10px] text-white font-medium tracking-wide">
                            <div className="flex items-center gap-3 md:gap-4">
                                <span className="font-bold cursor-default"></span>
                                <span className="font-bold cursor-default hidden sm:block">Finder</span>
                                <span className="cursor-default hidden sm:block text-white/80">File</span>
                                <span className="cursor-default hidden sm:block text-white/80">Edit</span>
                                <span className="cursor-default hidden sm:block text-white/80">View</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="cursor-default text-white/80">100%</span>
                                <span className="cursor-default">Tue 9:41 AM</span>
                            </div>
                        </div>

                        {/* WINDOW SYSTEM (AnimatePresence) */}
                        <div className="absolute inset-x-0 inset-y-6 flex justify-center items-center pointer-events-none z-50">
                            <AnimatePresence>
                                {windowState === 'open' && (
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                        animate={
                                            isFullscreen
                                                ? { scale: 1, opacity: 1, y: 0, width: '100%', height: 'calc(100% + 4rem)' }
                                                : { scale: 1, opacity: 1, y: 0, width: '85%', height: '80%' }
                                        }
                                        exit={{ scale: windowState === 'minimized' ? 0.3 : 0.9, opacity: 0, y: windowState === 'minimized' ? 200 : 0 }}
                                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                        className={`pointer-events-auto overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] border border-white/20 flex flex-col relative bg-[#1c1c1c] ${isFullscreen ? 'absolute inset-0 z-50 rounded-none border-none' : 'w-full max-w-2xl rounded-lg md:rounded-xl aspect-[4/2.5]'}`}
                                        style={isFullscreen ? { position: 'absolute', top: '-1.5rem', left: 0, right: 0 } : {}}
                                    >

                                        {/* Window Title Bar */}
                                        <div className="h-8 md:h-10 w-full bg-[#2a2a2a] border-b border-black/40 flex items-center px-3 md:px-4 shrink-0 justify-between select-none">
                                            {/* Traffic Lights */}
                                            <div className="flex gap-1.5 md:gap-2 group/lights cursor-default relative z-50">
                                                <button onClick={(e) => { e.stopPropagation(); setWindowState('closed') }} className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center transition-colors hover:bg-[#ff5f56]/80 focus:outline-none z-50 pointer-events-auto">
                                                    <X className="w-2 h-2 text-black/60 opacity-0 group-hover/lights:opacity-100" />
                                                </button>
                                                <button onClick={(e) => { e.stopPropagation(); setWindowState('minimized') }} className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] flex items-center justify-center transition-colors hover:bg-[#ffbd2e]/80 focus:outline-none z-50 pointer-events-auto">
                                                    <Minus className="w-2 h-2 text-black/60 opacity-0 group-hover/lights:opacity-100" />
                                                </button>
                                                <button onClick={(e) => { e.stopPropagation(); setIsFullscreen(!isFullscreen) }} className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f] border border-[#1aab29] flex items-center justify-center transition-colors hover:bg-[#27c93f]/80 focus:outline-none z-50 pointer-events-auto">
                                                    <Maximize2 className="w-2 h-2 text-black/60 opacity-0 group-hover/lights:opacity-100" />
                                                </button>
                                            </div>
                                            <div className="text-[9px] md:text-[11px] font-semibold text-white/50 tracking-wider flex items-center gap-2">
                                                <LayoutTemplate className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
                                                portfolio_workspace
                                            </div>
                                            <div className="w-12"></div> {/* Spacer */}
                                        </div>

                                        {/* Window Content (Framer Mockup) */}
                                        <div className="flex-1 flex overflow-hidden">
                                            {/* Sidebar */}
                                            <div className="w-16 md:w-32 lg:w-40 border-r border-zinc-800 bg-zinc-950 lg:bg-zinc-900/50 flex flex-col py-4 px-2 lg:px-4 gap-4 shrink-0 overflow-y-auto">
                                                <span className="text-[8px] md:text-[10px] font-bold tracking-widest text-zinc-500 uppercase pl-1 hidden lg:block">Workspace</span>
                                                <div className="flex flex-col gap-1">
                                                    <div
                                                        onClick={(e) => { e.stopPropagation(); setActiveTab('dashboard'); }}
                                                        className={`flex items-center justify-center lg:justify-start gap-2 p-1.5 lg:px-2 lg:py-1.5 rounded-md cursor-pointer transition-colors ${activeTab === 'dashboard' ? 'bg-zinc-800 text-zinc-50' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'}`}
                                                    >
                                                        <Code2 className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                                                        <span className="text-[10px] md:text-[11px] font-medium hidden lg:block tracking-wide">Technical Skills</span>
                                                    </div>
                                                    <div
                                                        onClick={(e) => { e.stopPropagation(); setActiveTab('resume'); }}
                                                        className={`flex items-center justify-center lg:justify-start gap-2 p-1.5 lg:px-2 lg:py-1.5 rounded-md cursor-pointer transition-colors ${activeTab === 'resume' ? 'bg-zinc-800 text-zinc-50' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'}`}
                                                    >
                                                        <FileText className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                                                        <span className="text-[10px] md:text-[11px] font-medium hidden lg:block tracking-wide">Resume.pdf</span>
                                                    </div>
                                                    <div
                                                        onClick={(e) => { e.stopPropagation(); setActiveTab('achievements'); }}
                                                        className={`flex items-center justify-center lg:justify-start gap-2 p-1.5 lg:px-2 lg:py-1.5 rounded-md cursor-pointer transition-colors ${activeTab === 'achievements' ? 'bg-zinc-800 text-zinc-50' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200'}`}
                                                    >
                                                        <Trophy className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                                                        <span className="text-[10px] md:text-[11px] font-medium hidden lg:block tracking-wide">Achievements</span>
                                                    </div>

                                                </div>
                                            </div>

                                            {/* Main Canvas (Shadcn styled) */}
                                            <ReactLenis
                                                className="flex-1 relative bg-zinc-950 p-4 lg:p-8 overflow-y-auto pointer-events-auto custom-scrollbar"
                                                options={{ smoothWheel: true, duration: 1.2, wheelMultiplier: 0.8 }}
                                            >
                                                {/* Grid Pattern */}
                                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23fff'/%3E%3C/svg%3E")` }}></div>

                                                {/* Content Rendering based on Tab */}
                                                {activeTab === 'dashboard' && (
                                                    <motion.div
                                                        key="dashboard"
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="relative w-full max-w-sm mx-auto flex flex-col gap-4 md:gap-6 mt-2 md:mt-4 z-10"
                                                    >
                                                        {/* Metric Cards Row */}
                                                        {/* <div className="grid grid-cols-2 gap-2 md:gap-4">
                                                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 md:p-4 shadow-sm flex flex-col gap-2 hover:border-zinc-700 transition-colors cursor-default">
                                                                <div className="text-[9px] md:text-sm text-zinc-400 font-medium tracking-tight">Current Role</div>
                                                                <div className="text-xs md:text-xl font-bold text-zinc-50 tracking-tight">Full-Stack Dev</div>
                                                            </div>
                                                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 md:p-4 shadow-sm flex flex-col gap-2 hover:border-zinc-700 transition-colors cursor-default">
                                                                <div className="text-[9px] md:text-sm text-zinc-400 font-medium tracking-tight">Experience</div>
                                                                <div className="text-xs md:text-xl font-bold text-emerald-400 tracking-tight flex items-center gap-1">2+ Years</div>
                                                            </div>
                                                        </div> */}

                                                        {/* Main Panel */}
                                                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 shadow-sm flex flex-col gap-4 mb-10">
                                                            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 md:pb-4">
                                                                <h3 className="text-[11px] md:text-base font-semibold text-zinc-50 tracking-tight">Technical Skills</h3>
                                                                <span className="px-2 py-0.5 md:py-1 rounded-full bg-zinc-800 text-[8px] md:text-xs text-zinc-300 font-medium">Expert</span>
                                                            </div>

                                                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 mt-2">
                                                                {[
                                                                    { name: 'Python', icon: SiPython, color: "text-[#3776AB]" },
                                                                    { name: 'Dart', icon: SiDart, color: "text-[#0175C2]" },
                                                                    { name: 'Java', icon: FaJava, color: "text-[#ed8b00]" },
                                                                    { name: 'Flutter', icon: SiFlutter, color: "text-[#02569B]" },
                                                                    { name: 'Flask', icon: SiFlask, color: "text-zinc-50" },
                                                                    { name: 'Django', icon: SiDjango, color: "text-[#44B78B]" },
                                                                    { name: 'MySQL', icon: SiMysql, color: "text-[#4479A1]" },
                                                                    { name: 'SQLite', icon: SiSqlite, color: "text-[#003B57]" },
                                                                    { name: 'PostgreSQL', icon: SiPostgresql, color: "text-[#336791]" },
                                                                    { name: 'JSON', icon: SiJson, color: "text-zinc-50" },
                                                                    { name: 'Scikit-learn', icon: SiScikitlearn, color: "text-[#F7931E]" },
                                                                    { name: 'OpenCV', icon: SiOpencv, color: "text-zinc-50" },
                                                                    { name: 'NLP', icon: FaBrain, color: "text-pink-400" },
                                                                    { name: 'Pandas', icon: SiPandas, color: "text-zinc-50" },
                                                                    { name: 'Git', icon: FaGitAlt, color: "text-[#F05032]" },
                                                                    { name: 'VS Code', icon: VscVscode, color: "text-[#007ACC]" },
                                                                    { name: 'Supabase', icon: SiSupabase, color: "text-[#3ECF8E]" },
                                                                    { name: 'Android Studio', icon: SiAndroidstudio, color: "text-[#3DDC84]" },
                                                                    { name: 'Postman', icon: SiPostman, color: "text-[#FF6C37]" },
                                                                ].map((skill, idx) => (
                                                                    <div key={idx} className="flex flex-col items-center justify-center gap-2 p-3 bg-zinc-950/50 border border-zinc-800/50 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all cursor-default group">
                                                                        <skill.icon className={`w-6 h-6 md:w-8 md:h-8 opacity-70 group-hover:opacity-100 transition-opacity ${skill.color}`} />
                                                                        <span className="text-[10px] text-zinc-400 font-medium tracking-wide group-hover:text-zinc-200 transition-colors text-center">{skill.name}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {activeTab === 'achievements' && (
                                                    <motion.div
                                                        key="achievements"
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="relative w-full max-w-[500px] mx-auto flex flex-col gap-4 md:gap-6 mt-2 md:mt-4 z-10"
                                                    >
                                                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 shadow-sm flex flex-col gap-4 mb-10">
                                                            <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 md:pb-4">
                                                                <Trophy className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                                                                <h3 className="text-[11px] md:text-base font-semibold text-zinc-50 tracking-tight">Milestones & Achievements</h3>
                                                            </div>
                                                            <div className="flex flex-col gap-3">
                                                                {[
                                                                    {
                                                                        title: "Flask & SQL Backend Lead",
                                                                        desc: "Led backend development using Flask & SQL, showing strong logical and analytical thinking."
                                                                    },
                                                                    {
                                                                        title: "Hackathon Winner",
                                                                        desc: "Winner of G.H. Raisoni Hackathon for an AI Sign Language Generator, proving critical problem-solving ability."
                                                                    },
                                                                    {
                                                                        title: "HackerRank Python 4★",
                                                                        desc: "Demonstrates excellent logical reasoning and algorithmic skills."
                                                                    },
                                                                    {
                                                                        title: "HackerRank Software Engineer Certified",
                                                                        desc: "Validated structured and logical problem-solving."
                                                                    },
                                                                    {
                                                                        title: "Kaggle ML Certified",
                                                                        desc: "Strengthened data-driven thinking and model logic."
                                                                    },
                                                                    {
                                                                        title: "Django Web Development (CPD Certified)",
                                                                        desc: "Reinforced engineering logic and systematic learning."
                                                                    }
                                                                ].map((item, idx) => (
                                                                    <div key={idx} className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-zinc-950/50 border border-zinc-800/50 hover:bg-zinc-800/80 hover:border-zinc-700 transition-all cursor-default group">
                                                                        <div className="mt-1">
                                                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] group-hover:scale-125 transition-transform"></div>
                                                                        </div>
                                                                        <div className="flex flex-col gap-1 md:gap-1.5">
                                                                            <h4 className="text-[11px] md:text-sm font-semibold text-zinc-200 tracking-wide">{item.title}</h4>
                                                                            <p className="text-[10px] md:text-xs text-zinc-400 leading-relaxed max-w-prose">{item.desc}</p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {activeTab === 'resume' && (
                                                    <motion.div
                                                        key="resume"
                                                        initial={{ opacity: 0, scale: 0.95 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="relative w-full max-w-md mx-auto flex flex-col items-center gap-6 mt-4 md:mt-8 z-10"
                                                    >
                                                        {/* Resume PDF Viewer Container */}
                                                        <div className="w-full h-[60vh] md:h-[70vh] flex flex-col gap-4 z-20">


                                                            {/* Interactive iFrame */}
                                                            <div className="flex-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl shadow-sm relative overflow-hidden">
                                                                <iframe
                                                                    src="/DevashishDhumalResume.pdf"
                                                                    className="w-full h-full border-none"
                                                                    title="Deva Resume PDF"
                                                                />
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </ReactLenis>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* macOS Dock */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-1.5 flex gap-2 shadow-2xl z-40">
                            {/* Finder Dummy */}
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-b from-blue-400 to-blue-600 flex justify-center items-center shadow-sm relative group cursor-not-allowed transition-transform hover:-translate-y-2 hover:scale-110">
                                <div className="w-1 h-1 bg-white/50 rounded-full absolute -bottom-2 opacity-0"></div>
                                <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>

                            <div className="w-px h-8 md:h-10 bg-white/20 mx-1 rounded-full"></div>

                            {/* App Icon that opens Window */}
                            <button
                                onClick={(e) => { e.stopPropagation(); setWindowState('open') }}
                                className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#282a36] flex justify-center items-center shadow-lg relative cursor-pointer group transition-transform hover:-translate-y-2 hover:scale-110 outline-none hover:shadow-[0_0_15px_rgba(74,222,128,0.5)] z-50 pointer-events-auto"
                            >
                                {windowState === 'open' && (
                                    <div className="w-1 h-1 bg-white/80 rounded-full absolute -bottom-1.5"></div>
                                )}
                                <Code2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />

                                {/* Tooltip */}
                                <span className="absolute -top-8 bg-black/80 backdrop-blur-md text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
                                    Workspace
                                </span>
                            </button>
                        </div>

                    </div>

                    {/* MacBook Pro Logo / Chin */}
                    <div className="w-full text-center pb-0.5 pt-1.5 bg-black md:pt-2">
                        <span className="text-[8px] md:text-[10px] text-white/30 font-semibold tracking-[0.15em]">MacBook Pro</span>
                    </div>

                </motion.div>

                {/* Laptop Base (Silver Keyboard Deck Edge) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="w-[110%] -ml-[5%] h-3 md:h-5 bg-gradient-to-b from-[#b5b5b5] via-[#a0a0a0] to-[#737373] dark:from-[#3a3a3a] dark:via-[#2a2a2a] dark:to-[#1a1a1a] rounded-b-xl rounded-t-sm shadow-[0_20px_40px_-5px_rgba(0,0,0,0.5)] relative border border-white/40 dark:border-white/10 border-t-0 flex justify-center -mt-0.5 z-10"
                >
                    {/* Thumb Indentation */}
                    <div className="w-16 md:w-24 h-1 md:h-1.5 bg-gradient-to-b from-[#999] to-[#777] dark:from-[#222] dark:to-[#111] rounded-b-md shadow-inner"></div>
                </motion.div>

            </div>
        </div>
    );
}
