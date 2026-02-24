'use client';

import { useState, useRef, useEffect } from 'react';
import { Home, User, FileText, Briefcase, Mail, Menu } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { Button } from '@/components/ui/button';

const navItems = [
    { name: 'HOME', icon: Home, href: '#home' },
    { name: 'ABOUT', icon: User, href: '#about' },
    { name: 'RESUME', icon: FileText, href: '#resume' },
    { name: 'PROJECTS', icon: Briefcase, href: '#projects' },
    { name: 'CONTACT', icon: Mail, href: '#Footer' },
];

function InteractiveIcon({ item, mouseY, activeSection, lenis }) {
    const ref = useRef(null);

    const distance = useTransform(mouseY, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
        return val - bounds.y - bounds.height / 2;
    });


    const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.3, 1]);
    const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 150, damping: 12 });

    const [isHovered, setIsHovered] = useState(false);
    const isActive = activeSection === item.name.toLowerCase();

    const handleScrollClick = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            if (lenis) {
                if (href === '#home') {
                    lenis.scrollTo(0);
                } else {
                    lenis.scrollTo(href);
                }
            } else {
                // Fallback if lenis is not ready
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else if (href === '#home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <a
            href={item.href}
            onClick={(e) => handleScrollClick(e, item.href)}
            className="relative z-10 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                ref={ref}
                style={{ scale }}
                className={`flex items-center justify-center w-[36px] h-[36px] rounded-full transition-colors duration-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_10px_rgba(0,0,0,0.5)] ${isActive ? 'bg-gradient-to-tr from-[#106c57] to-emerald-400 text-white' : 'bg-white/80 dark:bg-[#1a1a1a]/80 text-gray-400 hover:text-[#106c57] dark:hover:text-emerald-400'}`}
            >
                <item.icon size={16} strokeWidth={isActive ? 2.5 : 2} />
            </motion.div>

            {/* Tooltip */}
            <motion.div
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: isHovered ? 1 : 0, filter: isHovered ? 'blur(0px)' : 'blur(4px)' }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 md:bottom-auto md:mb-0 md:left-full md:ml-5 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 pointer-events-none"
            >
                <span className={`px-4 py-2 font-bold tracking-[0.15em] text-[10px] rounded-lg flex items-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] uppercase whitespace-nowrap bg-white/90 dark:bg-[#161618]/90 backdrop-blur-md border border-gray-100 dark:border-white/10 ${isActive ? 'text-[#106c57] dark:text-emerald-400' : 'text-gray-700 dark:text-gray-300'}`}>
                    {item.name}
                </span>
            </motion.div>
        </a>
    );
}

export default function FloatingNav() {
    const mouseY = useMotionValue(Infinity);
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const { scrollY } = useScroll();
    const lenis = useLenis();
    const timeoutRef = useRef(null);

    const startCollapseTimer = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (isVisible) {
            timeoutRef.current = setTimeout(() => {
                setIsCollapsed(true);
            }, 1500);
        }
    };

    const cancelCollapseTimer = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        // Cleanup on unmount
        return () => cancelCollapseTimer();
    }, []);


    useEffect(() => {
        if (isVisible) {
            setIsCollapsed(false);
            startCollapseTimer();
        }
    }, [isVisible]);

    useMotionValueEvent(scrollY, "change", (latest) => {

        if (latest > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
            setIsCollapsed(true); // Always reset to collapsed when hidden
        }
    });

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'resume', 'projects', 'contact'];
            let current = 'home';
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();

                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);

        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:left-4 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-[100] flex flex-col items-center">
                    <motion.div
                        drag
                        dragMomentum={false}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                        onMouseEnter={() => {
                            cancelCollapseTimer();
                        }}
                        onMouseLeave={() => {
                            if (!isCollapsed) {
                                startCollapseTimer();
                            }
                        }}
                        style={{ touchAction: "none" }}
                    >
                        <AnimatePresence mode="wait">
                            {isCollapsed ? (
                                <motion.div
                                    key="collapsed-btn"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Button
                                        variant="default"
                                        size="icon"
                                        className="w-12 h-12 rounded-full shadow-lg bg-[#106c57] hover:bg-[#0d5946] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white"
                                        onClick={() => {
                                            setIsCollapsed(false);
                                            startCollapseTimer(); // Ensure it collapses again on touch devices
                                        }}
                                    >
                                        <Menu size={20} strokeWidth={2.5} />
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="expanded-dock"
                                    initial={{ opacity: 0, width: 0, height: 0 }}
                                    animate={{ opacity: 1, width: 'auto', height: 'auto' }}
                                    exit={{ opacity: 0, width: 0, height: 0 }}
                                    transition={{ duration: 0.3, staggerChildren: 0.1 }}
                                    onMouseMove={(e) => mouseY.set(e.clientY)}
                                    // Group mouse leave is handled by parent `onMouseLeave`
                                    className="bg-gray-100/50 dark:bg-black/40 backdrop-blur-3xl border border-white/60 dark:border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.5)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(255,255,255,0.05)] rounded-full py-2 px-4 md:py-3 md:px-2 flex flex-row md:flex-col gap-2 relative overflow-visible"
                                >
                                    {navItems.map((item, index) => (
                                        <InteractiveIcon item={item} key={index} mouseY={mouseY} activeSection={activeSection} lenis={lenis} />
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
