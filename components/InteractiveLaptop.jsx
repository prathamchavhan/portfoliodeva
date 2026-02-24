'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BriefcaseBusiness, Code2, Maximize2, Minus, X, LayoutTemplate } from 'lucide-react';

export default function InteractiveLaptop() {
    const [windowState, setWindowState] = useState('open'); // 'open', 'minimized', 'closed'
    const [isFullscreen, setIsFullscreen] = useState(false);

    return (
        <div className="w-full lg:w-1/2 lg:sticky lg:top-24 h-[calc(100vh-12rem)] min-h-[500px] flex flex-col justify-center gap-8 shrink-0">
            {/* PHYSICAL MACBOOK FRAME */}
            <div className="relative w-full max-w-[750px] mx-auto group">
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
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

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
                        <div className="absolute inset-x-0 inset-y-6 md:inset-y-8 p-2 md:p-8 lg:p-12 flex justify-center items-center pointer-events-none z-30">
                            <AnimatePresence>
                                {windowState === 'open' && (
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                        animate={{
                                            scale: isFullscreen ? 1.05 : 1,
                                            opacity: 1,
                                            y: 0,
                                            width: isFullscreen ? '100%' : '100%',
                                            height: isFullscreen ? '100%' : 'auto',
                                        }}
                                        exit={{ scale: windowState === 'minimized' ? 0.3 : 0.9, opacity: 0, y: windowState === 'minimized' ? 200 : 0 }}
                                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                        className={`pointer-events-auto rounded-lg md:rounded-xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] border border-white/20 flex flex-col relative bg-[#1c1c1c] ${isFullscreen ? 'absolute inset-0 z-50 rounded-none border-none' : 'w-full max-w-2xl aspect-[4/2.5]'}`}
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
                                            <div className="w-16 md:w-32 lg:w-40 border-r border-black/50 bg-[#252528] flex flex-col py-4 px-2 lg:px-4 gap-4 shrink-0 overflow-y-auto">
                                                <span className="text-[8px] md:text-[10px] font-bold tracking-widest text-white/30 uppercase pl-1 hidden lg:block">Components</span>
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center justify-center lg:justify-start gap-2 p-1.5 lg:px-2 lg:py-1.5 bg-blue-500/20 text-blue-400 rounded-md">
                                                        <Code2 className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                                                        <span className="text-[10px] md:text-[11px] font-medium hidden lg:block tracking-wide">Core.tsx</span>
                                                    </div>
                                                    <div className="flex items-center justify-center lg:justify-start gap-2 p-1.5 lg:px-2 lg:py-1.5 text-white/40 hover:bg-white/5 hover:text-white/70 transition-colors rounded-md cursor-pointer">
                                                        <BriefcaseBusiness className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                                                        <span className="text-[10px] md:text-[11px] font-medium hidden lg:block tracking-wide">Store.tsx</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Main Canvas (Shadcn styled) */}
                                            <div className="flex-1 relative bg-[#1a1a1c] p-4 lg:p-8 overflow-y-auto pointer-events-auto">
                                                {/* Grid Pattern */}
                                                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23fff'/%3E%3C/svg%3E")` }}></div>

                                                {/* Shadcn UI Dashboard Mockup */}
                                                <div className="relative w-full max-w-sm mx-auto flex flex-col gap-4 md:gap-6 mt-2 md:mt-4 z-10">

                                                    {/* Metric Cards Row */}
                                                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                                                        <div className="bg-[#242426] border border-white/10 rounded-xl p-3 md:p-4 shadow-lg flex flex-col gap-2 hover:border-white/20 transition-colors cursor-default">
                                                            <div className="text-[9px] md:text-sm text-white/50 font-medium">System Role</div>
                                                            <div className="text-sm md:text-2xl font-bold text-white tracking-tight">Engineer</div>
                                                        </div>
                                                        <div className="bg-[#242426] border border-white/10 rounded-xl p-3 md:p-4 shadow-lg flex flex-col gap-2 hover:border-white/20 transition-colors cursor-default">
                                                            <div className="text-[9px] md:text-sm text-white/50 font-medium">Stack Align</div>
                                                            <div className="text-sm md:text-2xl font-bold text-emerald-400 tracking-tight flex items-center gap-1">100%</div>
                                                        </div>
                                                    </div>

                                                    {/* Main Panel */}
                                                    <div className="bg-[#242426] border border-white/10 rounded-xl p-4 md:p-6 shadow-xl flex flex-col gap-4">
                                                        <div className="flex items-center justify-between border-b border-white/10 pb-3 md:pb-4">
                                                            <h3 className="text-[11px] md:text-base font-semibold text-white">Project Scalability</h3>
                                                            <span className="px-2 py-0.5 md:py-1 rounded bg-zinc-800 text-[8px] md:text-xs text-white/60 font-mono border border-white/10">Active</span>
                                                        </div>

                                                        <div className="flex flex-col gap-3 md:gap-4">
                                                            {[85, 92, 78].map((val, idx) => (
                                                                <div key={idx} className="flex flex-col gap-1.5 md:gap-2">
                                                                    <div className="flex justify-between text-[9px] md:text-sm">
                                                                        <span className="text-white/70">{['Architecture', 'Backend Perf', 'Frontend Dev'][idx]}</span>
                                                                        <span className="text-white/40 font-mono">{val}%</span>
                                                                    </div>
                                                                    <div className="h-1.5 md:h-2 w-full bg-black/40 rounded-full overflow-hidden">
                                                                        <motion.div
                                                                            initial={{ width: 0 }}
                                                                            animate={{ width: `${val}%` }}
                                                                            transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                                                                            className="h-full bg-emerald-400 rounded-full"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
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
