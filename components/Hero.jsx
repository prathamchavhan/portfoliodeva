'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const container = useRef(null);
    const text1 = useRef(null);
    const text2 = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax effect on scroll
            gsap.to(text1.current, {
                y: -100,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                }
            });

            gsap.to(text2.current, {
                y: -150,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                }
            });

            gsap.to(imageRef.current, {
                y: 50,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.5,
                }
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative w-full h-[100vh] overflow-hidden bg-[#EAE7DC] dark:bg-black flex flex-col items-center justify-center pt-20">

            {/* Top Header */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute top-8 w-full px-8 flex justify-between items-start z-20"
            >
                <div className="text-sm font-semibold tracking-widest invisible md:visible">
                    <ThemeToggleButton variant="circle" start="top-right" />
                </div>
                <h2 className="text-xl md:text-3xl font-bold tracking-tighter uppercase text-center text-[#111] dark:text-white">
                    Hi There, I'm Devashish Dhumal
                </h2>
                <div className="text-xs uppercase font-semibold flex flex-col gap-1 items-end tracking-widest text-[#111] dark:text-white">
                    <a href="#" className="hover:underline">Twitter</a>
                    <a href="#" className="hover:underline">LinkedIn</a>
                </div>
            </motion.div>

            {/* Center Image */}
            <div className="absolute inset-0 flex items-end justify-center z-10 pointer-events-none">
                {/* Placeholder for the user's portrait image */}
                <motion.img
                    ref={imageRef}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    src="./dev.png"
                    alt="Albert Portrait"
                    className="h-[80vh] object-cover object-top drop-shadow-2xl"
                    style={{
                        maskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
                        WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)'
                    }}
                />
            </div>


            <div className="absolute flex flex-col items-center justify-center w-full z-0 pointer-events-none gap-8">
                <motion.h1
                    ref={text1}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[#106c57] dark:text-white font-black text-[12vw] leading-none uppercase tracking-tighter whitespace-nowrap"
                    style={{ textShadow: '0px 10px 30px rgba(0,0,0,0.05)' }}
                >
                    FULL <span className="mx-8 md:mx-16 font-light"></span> -  Stack
                </motion.h1>
            </div>


            <div className="absolute top-[65%] flex flex-col items-center justify-center w-full z-20 pointer-events-none gap-8">
                <motion.h1
                    ref={text2}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="text-[#106c57] dark:text-white font-black text-[13vw] leading-none uppercase tracking-tighter whitespace-nowrap"
                    style={{ textShadow: '0px 20px 40px rgba(0,0,0,0.1)' }}
                >
                    Developer <span className="text-[11vw] font-light opacity-80">&lt;/&gt;</span>
                </motion.h1>
            </div>


            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 max-w-[150px] z-20"
            >
                <p className="text-xs uppercase tracking-widest text-right font-mono text-[#333] dark:text-gray-300 leading-relaxed">
                    I am a full-stack and mobile app developer who transforms ideas into powerful digital solutions by combining intuitive frontend design, robust backend systems, and seamless mobile experiences.
                </p>
            </motion.div>

            {/* Background Waves (SVG) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full absolute top-0 left-0">
                    <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.2" className="animate-pulse" />
                    <path d="M0,70 Q25,50 50,70 T100,70 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.1" />
                </svg>
            </div>
        </section>
    );
}
