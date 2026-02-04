"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterEffectProps {
    words: string[];
    className?: string;
    cursorClassName?: string;
}

export default function TypewriterEffect({
    words,
    className = "text-xl md:text-2xl text-white/80 font-light tracking-wide",
    cursorClassName = "inline-block w-[2px] h-[1.2em] bg-white/80 ml-1"
}: TypewriterEffectProps) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Main typewriter loop
    useEffect(() => {
        if (words.length === 0) return;

        const typingSpeed = reverse ? 40 : 100;
        const pauseTime = 2000;

        const timeout = setTimeout(() => {
            if (!reverse && subIndex === words[index].length) {
                // Pause at the end of the word
                setTimeout(() => setReverse(true), pauseTime);
                return;
            }

            if (reverse && subIndex === 0) {
                setReverse(false);
                setIndex((prev) => (prev + 1) % words.length);
                return;
            }

            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    // Cursor blink logic
    useEffect(() => {
        const interval = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center min-h-[1.5em] inline-flex">
            <p className={className}>
                {words[index].substring(0, subIndex)}
            </p>
            <motion.span
                animate={{ opacity: blink ? 1 : 0 }}
                transition={{ duration: 0 }}
                className={cursorClassName}
            />
        </div>
    );
}
