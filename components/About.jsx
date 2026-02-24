'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Caveat } from 'next/font/google';
import Image from 'next/image';

// Handwriting font for the scrapbook letter feel
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });

gsap.registerPlugin(ScrollTrigger);

// Helper for the red thumbtack graphic
const Pin = () => (
    <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 z-20 w-5 h-5 rounded-full bg-red-600 shadow-[2px_4px_6px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(0,0,0,0.3),inset_2px_2px_4px_rgba(255,255,255,0.4)]">
        {/* Metal pin shadow */}
        <div className="absolute top-[80%] left-1/2 w-[2px] h-[15px] bg-[#333] -z-10 rotate-[20deg] opacity-50 shadow-black"></div>
    </div>
);

const educationData = [
    {
        id: "btech",
        degree: "B.Tech (AI)",
        institution: "G.H. Raisoni College of Engineer...",
        year: "2026",
        score: "8.3 CGPA",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", // Tech/College placeholder
        rotate: "-rotate-6",
        color: "bg-emerald-50",
    },
    {
        id: "hsc",
        degree: "Class 12 (HSC)",
        institution: "New English Junior College",
        year: "2022",
        score: "70.67%",
        img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop", // Graduation placeholder
        rotate: "rotate-3",
        color: "bg-zinc-50",
    },
    {
        id: "ssc",
        degree: "Class 10 (SSC)",
        institution: "Ramesh Chandak English School",
        year: "2020",
        score: "86.80%",
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop", // School placeholder
        rotate: "-rotate-3",
        color: "bg-orange-50",
    }
];

export default function About() {
    const sectionRef = useRef(null);
    const paperRef = useRef(null);
    const photosRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {

            // Animate the paper dropping in
            gsap.fromTo(paperRef.current,
                { y: 100, opacity: 0, rotationZ: -5 },
                {
                    y: 0, opacity: 1, rotationZ: -2,
                    duration: 1.2, ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%"
                    }
                }
            );

            // Animate the photos falling in one by one like scattered polaroids
            photosRef.current.forEach((photo, index) => {
                const randomX = (Math.random() - 0.5) * 50;
                const randomRotate = (Math.random() - 0.5) * 15;

                gsap.fromTo(photo,
                    { y: -150, x: randomX, opacity: 0, rotationZ: randomRotate, scale: 1.2 },
                    {
                        y: 0, x: 0, opacity: 1, rotationZ: photo.dataset.rotate, scale: 1,
                        duration: 1,
                        delay: index * 0.2 + 0.5, // Stagger them after the paper
                        ease: "bounce.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 60%"
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToPhotos = (el) => {
        if (el && !photosRef.current.includes(el)) {
            photosRef.current.push(el);
        }
    };

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative w-full min-h-screen bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-200 overflow-clip py-32 flex flex-col items-center justify-center font-sans isolate"
        >



            {/* Top Section Header */}
            <div className="absolute top-12 left-6 md:left-12 lg:left-32 z-30">
                <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-zinc-400/50"></div>
                    <h3 className="text-3xl md:text-66xl font-black uppercase tracking-tighter text-[#106c57] dark:text-emerald-400">
                        About Me
                    </h3>
                </div>
            </div>

            {/* Massive Background Typography */}
            <div className="absolute top-[10%] left-[-5%] md:left-[5%] flex flex-col pointer-events-none z-0 overflow-hidden leading-[0.80] opacity-[0.15] dark:opacity-40">
                <span className="text-[32vw] md:text-[25vw] lg:text-[18vw] font-black text-zinc-400 dark:text-zinc-800 select-none tracking-tighter">
                    WHO
                </span>
                <span className="text-[39vw] md:text-[25vw] lg:text-[18vw] font-black text-zinc-400 dark:text-zinc-800 select-none tracking-tighter pl-12 md:pl-[15%] mt-[-4%] md:mt-[-2%]">
                    AM I?
                </span>
            </div>

            <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">

                {/* LEFT: Scrapbook Paper Notepad */}
                <div className="relative w-full flex justify-center lg:justify-start">

                    <div
                        ref={paperRef}
                        className="relative w-[95%] sm:w-[85%] lg:w-full max-w-lg aspect-[3/4] bg-[#fdfbf6] dark:bg-[#111110] shadow-[-10px_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[-10px_10px_30px_rgba(0,0,0,0.5)] border border-zinc-200 dark:border-zinc-800 -rotate-2 p-8 md:p-12 z-20"
                    >
                        {/* Tape piece top center */}
                        <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 dark:bg-white/10 backdrop-blur-md shadow-sm -rotate-2 border border-white/50 dark:border-white/5 opacity-80 z-30 mix-blend-overlay"></div>

                        {/* Notepad Lines */}
                        <div className="absolute inset-0 top-16 bottom-16 pointer-events-none opacity-[0.08] dark:opacity-10"
                            style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, currentColor 31px, currentColor 32px)' }}>
                        </div>

                        <h2 className={`${caveat.className} text-4xl md:text-5xl font-bold text-emerald-800 dark:text-emerald-400 mb-8 border-b border-zinc-300 dark:border-zinc-800 pb-2`}>
                            Devashish
                        </h2>

                        <div className={`${caveat.className} text-xl md:text-2xl leading-[32px] text-zinc-800 dark:text-zinc-300 relative z-10 space-y-4`}>
                            <p>
                                I'm intensely passionate developer who thrives on creating systems that are both mathematically robust and aesthetically captivating.
                            </p>
                            <p>
                                My journey is rooted in a deep love for continuous learning, bridging the gap between Vision and Engineering, and pushing the boundaries of web & App experiences.
                            </p>
                            <p>
                                Currently, I'm sculpting interactive architectures out of raw code. When I'm not developing, you'll find me exploring raw geometry and dodging logic bugs!
                            </p>
                        </div>

                        {/* Profile Image pinned to bottom right of notepad */}
                        <div className="absolute -bottom-8 -right-8 w-32 md:w-40 aspect-[4/5] bg-white dark:bg-zinc-900 p-2 md:p-3 shadow-xl rotate-6 z-30 transition-transform hover:scale-105 hover:rotate-2">
                            <Pin />
                            <div className="relative w-full h-full border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                                <Image src="/mass.png" alt="Profile" fill className="object-cover" />
                            </div>
                        </div>

                        {/* Virtual Coffee Cup Stain (using CSS circles/gradients) */}
                        <div className="absolute top-1/2 -left-12 w-32 h-32 rounded-full border-4 border-[#8B4513]/10 dark:border-[#8B4513]/20 mix-blend-multiply dark:mix-blend-color z-0 pointer-events-none skew-x-12 scale-y-75 shadow-[inset_0_0_15px_rgba(139,69,19,0.05)]"></div>
                    </div>
                </div>

                {/* RIGHT: Scattered Education Photos */}
                <div className="relative h-[800px] lg:h-[700px] w-full mt-12 lg:mt-0 flex justify-center lg:justify-end pr-4 lg:pr-12">

                    {educationData.map((edu, index) => {
                        // Spread them vertically
                        const tops = ["top-[0%]", "top-[32%]", "top-[64%]"];
                        // Stagger them horizontally slightly - pushed further to the right
                        const lefts = ["lg:left-[40%]", "lg:left-[15%]", "lg:left-[35%]"];

                        // Extract numeric rotation for GSAP dataset mapping
                        const rawRotation = edu.rotate.replace('rotate-', '').replace('-', '');
                        const actualRotation = edu.rotate.includes('-') ? -rawRotation : rawRotation;

                        return (
                            <div
                                key={edu.id}
                                ref={addToPhotos}
                                data-rotate={actualRotation}
                                className={`absolute ${tops[index]} left-1/2 lg:-translate-x-0 -translate-x-1/2 ${lefts[index]} ${edu.rotate} z-${30 - index * 10}`}
                            >
                                <div className={`w-[280px] sm:w-[320px] bg-white dark:bg-zinc-900 p-3 pb-8 md:p-4 md:pb-12 shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-zinc-200 dark:border-zinc-800 transition-transform hover:scale-105 hover:z-50 duration-300`}>

                                    <Pin />

                                    {/* The "Film/Photo" area */}
                                    <div className={`relative w-full aspect-video ${edu.color} mb-4 overflow-hidden border border-zinc-200 dark:border-zinc-800`}>
                                        <img src={edu.img} alt={edu.degree} className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply dark:mix-blend-screen grayscale-[30%] contrast-125" />

                                        {/* Subtle film grain overlay */}
                                        <div className="absolute inset-0 bg-black/5 dark:bg-white/5"></div>
                                    </div>

                                    {/* Handwritten Capture/Details */}
                                    <div className={`${caveat.className} flex flex-col items-center text-center px-2 text-zinc-900 dark:text-zinc-200`}>
                                        <h3 className="text-2xl font-bold leading-none mb-1 text-[#106c57] dark:text-emerald-400">{edu.degree}</h3>
                                        <p className="text-lg leading-tight opacity-90">{edu.institution}</p>
                                        <div className="w-full flex justify-between items-center mt-3 text-lg border-t border-zinc-200 dark:border-zinc-800 pt-2 border-dashed">
                                            <span className="opacity-70">{edu.year}</span>
                                            <span className="font-bold">{edu.score}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}
