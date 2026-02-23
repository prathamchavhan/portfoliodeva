'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const pRef1 = useRef(null);
    const pRef2 = useRef(null);
    const bgTextRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Main heading stagger animation
            gsap.from(textRef.current.children, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });

            // Paragraphs fade up
            gsap.from([pRef1.current, pRef2.current], {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: pRef1.current,
                    start: "top 85%",
                }
            });

            // Parallax sliding background text
            gsap.to(bgTextRef.current, {
                xPercent: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[80vh] bg-white dark:bg-[#0a0a0a] text-foreground flex flex-col items-center justify-center py-32 px-8 overflow-hidden md:px-24"
        >
            {/* Background Parallax Text */}
            <div
                ref={bgTextRef}
                className="absolute top-1/3 left-0 whitespace-nowrap text-[18vw] font-black opacity-[0.03] dark:opacity-5 pointer-events-none uppercase flex gap-12 z-0"
            >
                <span>CREATIVE</span>
                <span style={{ WebkitTextStroke: '1px currentColor', color: 'transparent' }}>DEVELOPER</span>
                <span>DESIGNER</span>
                <span style={{ WebkitTextStroke: '1px currentColor', color: 'transparent' }}>ENGINEER</span>
            </div>

            <div className="max-w-6xl w-full flex flex-col gap-16 relative z-10">

                <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-foreground/30"></div>
                    <span className="text-sm font-semibold tracking-[0.3em] uppercase opacity-70">About Me</span>
                </div>

                <div
                    ref={textRef}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter"
                >
                    <div className="overflow-hidden pb-2">
                        <span className="inline-block text-[#106c57] dark:text-emerald-400">Engineering</span>
                    </div>
                    <div className="overflow-hidden pb-2">
                        <span className="inline-block">smooth interfaces &</span>
                    </div>
                    <div className="overflow-hidden pb-2">
                        <span className="inline-block">scalable architectures.</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mt-8 md:mt-16 text-base md:text-lg opacity-80 leading-relaxed font-mono">
                    <motion.div ref={pRef1} whileHover={{ scale: 1.02 }} className="p-4 -m-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        I am a passionate software developer who bridges the gap between design and engineering. My focus is on building scalable web applications that not only look beautiful but also provide a seamless, accessible user experience.
                    </motion.div>
                    <motion.div ref={pRef2} whileHover={{ scale: 1.02 }} className="p-4 -m-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        My expertise lies in translating complex problems into elegant, maintainable code. Whether it's crafting silky-smooth GSAP animations or architecting robust backend systems, I am always eager to push the boundaries of what's possible on the web.
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
