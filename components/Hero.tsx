"use client";

import "../app/globals.css";
import { motion, useScroll, useTransform } from "framer-motion";

import Counter from "./Counter";
import TypewriterEffect from "./TypewriterEffect";

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 500]); // Parallax effect

    return (
        <section className="hero">
            <motion.div
                className="hero-background"
                style={{ y }}
            ></motion.div>
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            The Masters of <span className="gradient-text">Elite University Admissions</span>
                        </motion.h1>
                        <motion.div
                            className="hero-description"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="typewriter-hero-container">
                                <span className="exclusive-text">Exclusive Access to</span>
                                <TypewriterEffect
                                    words={["Graduates", "Admissions Experts", "Interview Specialists", "Senior Strategists"]}
                                    className="typewriter-text"
                                    cursorClassName="typewriter-cursor"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            className="hero-cta"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <a href="#get-started" className="btn btn-primary">
                                Start Your Journey
                            </a>
                            <a href="#services" className="btn btn-secondary">
                                Explore Services
                            </a>
                        </motion.div>
                        <motion.div
                            className="hero-stats"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <div className="stat-item">
                                <span className="stat-number">
                                    <Counter target={1} />
                                </span>
                                <span className="stat-label">No. UK Mentor supplier</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">
                                    <Counter target={98} />
                                </span>
                                <span className="stat-label">% Student Satisfaction</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">
                                    <Counter target={400} />
                                </span>
                                <span className="stat-label">+ Success Rate Increase</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <span className="scroll-text">Scroll to explore</span>
                <div className="scroll-arrow"></div>
            </motion.div>
        </section>
    );
}
