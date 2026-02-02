"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        text: "Access Oxbridge transformed my application from good to exceptional. The personalized interview preparation gave me the confidence to showcase my passion for Economics, and I'm now reading PPE at Oxford.",
        name: "Emily Chen",
        course: "PPE, Oxford University",
    },
    {
        text: "The mentors didn't just help me prepare—they helped me understand what Oxbridge was truly looking for. Their insights into the Engineering interview process were invaluable.",
        name: "James Patel",
        course: "Engineering, Cambridge University",
    },
    {
        text: "As a state school student, I felt overwhelmed by the Oxbridge process. Access Oxbridge leveled the playing field and gave me the tools and confidence to succeed. Now I'm studying Medicine at Cambridge.",
        name: "Sarah Thompson",
        course: "Medicine, Cambridge University",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        if (!autoplay) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [autoplay]);

    const nextSlide = () => {
        setAutoplay(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setAutoplay(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label">Student Success Stories</span>
                    <h2 className="section-title">
                        What Our Students <span className="gradient-text">Say</span>
                    </h2>
                </motion.div>

                <div
                    className="testimonials-slider"
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="testimonial-card active"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="testimonial-quote">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <p className="testimonial-text">&quot;{testimonials[currentIndex].text}&quot;</p>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <h4>{testimonials[currentIndex].name}</h4>
                                    <p>{testimonials[currentIndex].course}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="slider-controls">
                    <button
                        className="slider-btn prev"
                        aria-label="Previous testimonial"
                        onClick={prevSlide}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <div className="slider-dots">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`slider-dot ${index === currentIndex ? "active" : ""}`}
                                onClick={() => {
                                    setAutoplay(false);
                                    setCurrentIndex(index);
                                }}
                            ></div>
                        ))}
                    </div>
                    <button
                        className="slider-btn next"
                        aria-label="Next testimonial"
                        onClick={nextSlide}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}
