"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
    {
        quote: "As a state school student, I felt overwhelmed by the Oxbridge process. Access Oxbridge leveled the playing field and gave me the tools and confidence to succeed. Now I'm studying Medicine at Cambridge.",
        name: "Sarah Thompson",
        course: "Medicine, Cambridge University"
    },
    {
        quote: "Access Oxbridge pushed my Engineering thinking well beyond school level and clarified exactly what Oxford tutors value in technical interviews.",
        name: "Arjun P.",
        course: "Engineering Student"
    },
    {
        quote: "I would like to thank the entire team, including the organisers and the two tutors who worked with Austin, for their invaluable support and guidance throughout the process. We are extremely grateful for the role you played in his success.",
        name: "Elizabeth A.",
        course: "Parent"
    },
    {
        quote: "As a parent, I valued the clarity and structure Access Oxbridge provided. The process felt calm, well organised and reassuring at every stage.",
        name: "Helen W.",
        course: "Parent"
    },
    {
        quote: "The mentors understood Philosophy at a deep level and challenged my reasoning every session. It was far more demanding than anything I experienced at school.",
        name: "Sofia R.",
        course: "Philosophy Student"
    },
    {
        quote: "Access Oxbridge helped me think more clearly under pressure. The preparation felt realistic, intellectually stretching and closely aligned with real interviews.",
        name: "Mateo G.",
        course: "Student"
    },
    {
        quote: "As a parent, I appreciated how tailored the guidance felt to my son's needs. The advice was thoughtful, measured and clearly targeted to help him improve.",
        name: "Kerri J.",
        course: "Parent"
    },
    {
        quote: "What impressed me most was how authentic the Economics interview preparation felt. The technical questioning reflected the real admissions experience closely.",
        name: "Ayman S.",
        course: "Cambridge Economics Student"
    },
    {
        quote: "The personalised strategy gave me clear direction throughout the process. I always understood what I needed to improve and why it mattered academically.",
        name: "Yuvraj M.",
        course: "LSE Student"
    },
    {
        quote: "We chose Access Oxbridge for its personalised approach. As parents, the balance between academic challenge and reassurance was exactly what we wanted.",
        name: "Sarah K.",
        course: "Parent"
    },
    {
        quote: "The Physics preparation strengthened how I explained complex ideas and responded confidently to unfamiliar questions in interviews. Thank you!",
        name: "Isabella M.",
        course: "Physics Student"
    },
    {
        quote: "I felt informed, supported and confident in the guidance my child received. I could not recommend this enough to give your son or daughter the tools they need.",
        name: "Jonathan S.",
        course: "Parent"
    },
    {
        quote: "Access Oxbridge challenged my critical thinking and helped me articulate historical interpretations through multiple mock interviews before the real thing!",
        name: "Kwame D.",
        course: "History Student"
    },
    {
        quote: "The Mathematics interview preparation was demanding and honest. It improved how I approached unfamiliar problems rather than relying on memorised methods.",
        name: "Jayanth V.",
        course: "Cambridge Mathematics Student"
    },
    {
        quote: "Access Oxbridge transformed my application from good to exceptional. The personalized interview preparation gave me the confidence to showcase my passion for Economics, and I'm now reading PPE at Oxford.",
        name: "Emily Chen",
        course: "PPE, Oxford University"
    },
    {
        quote: "The mentors didn't just help me prepare—they helped me understand what Oxbridge was truly looking for. Their insights into the Engineering interview process were invaluable.",
        name: "James Patel",
        course: "Engineering, Cambridge University"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
    const [autoplay, setAutoplay] = useState(true);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        if (!autoplay) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(interval);
    }, [autoplay, nextSlide]);

    const handleDotClick = (index: number) => {
        setAutoplay(false);
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    };

    return (
        <section className="testimonials-section" id="testimonials">
            {/* Decorative elements */}
            <div className="decorative-dot dot-1"></div>
            <div className="decorative-dot dot-2"></div>
            <div className="decorative-dot dot-3"></div>
            <div className="decorative-dot dot-4"></div>

            <div className="container testimonials-container">
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>What Our Students <span className="gradient-text">Say</span></h2>
                </motion.div>

                <div
                    className="testimonial-display"
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                >
                    <div className="quote-icon-container">
                        <Quote size={64} fill="currentColor" />
                    </div>

                    <div className="testimonial-text-content">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 }
                                }}
                            >
                                <p className="testimonial-quote-text">
                                    &quot;{testimonials[currentIndex].quote}&quot;
                                </p>

                                <div className="testimonial-meta">
                                    <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                                    <p className="author-course">{testimonials[currentIndex].course}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="slider-navigation">
                    <div className="nav-buttons">
                        <button
                            className="nav-btn"
                            onClick={() => { setAutoplay(false); prevSlide(); }}
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="dots-container">
                            {/* Show a subset of dots if too many, but for 16 we can show them or just show active neighborhood */}
                            {testimonials.map((_, index) => (
                                <div
                                    key={index}
                                    className={`dot ${index === currentIndex ? "active" : ""}`}
                                    onClick={() => handleDotClick(index)}
                                ></div>
                            ))}
                        </div>

                        <button
                            className="nav-btn"
                            onClick={() => { setAutoplay(false); nextSlide(); }}
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
