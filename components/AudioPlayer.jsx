'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {

        const audio = new Audio('/sounds/ambient.mp3');
        audio.loop = true;
        audio.volume = 0.15; // Start with a gentle, low volume (15%)
        audioRef.current = audio;

        // Sync React state with actual HTML5 Audio state
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.pause();
            audio.src = '';
            audioRef.current = null;
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {

            audioRef.current.play().catch(error => {
                console.error("Audio playback failed (browser may have blocked it):", error);
            });
        }
    };

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            onClick={togglePlay}
            className="fixed bottom-6 right-6 z-[100] w-12 h-12 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-[#106c57] dark:hover:text-emerald-400 hover:scale-110 transition-all cursor-pointer group"
            aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
        >
            {isPlaying ? (
                <Volume2 size={20} strokeWidth={2} className="animate-pulse" />
            ) : (
                <VolumeX size={20} strokeWidth={2} />
            )}

            {/* Tooltip for the audio player */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="px-3 py-1.5 font-medium text-xs rounded-md shadow-sm whitespace-nowrap bg-white/90 dark:bg-[#161618]/90 backdrop-blur-md border border-gray-100 dark:border-white/10 text-gray-700 dark:text-gray-300">
                    {isPlaying ? 'Mute Audio' : 'Play Audio'}
                </span>
            </div>

            {/* Visualizer waves when playing */}
            {isPlaying && (
                <div className="absolute -z-10 w-full h-full rounded-full border border-[#106c57]/30 dark:border-emerald-500/30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            )}
        </motion.button>
    );
}
