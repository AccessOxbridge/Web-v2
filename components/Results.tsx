"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";
import Image from "next/image";

export default function Results() {
    return (
        <section className="results-section" id="results">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label">Our Impact</span>
                    <h2 className="section-title">
                        Proven <span className="gradient-text">Results</span>
                    </h2>
                    <p className="section-description">
                        Numbers that speak to our commitment to excellence and student success.
                    </p>
                </motion.div>
                <div className="results-grid">
                    {[
                        { target: 400, symbol: "%", label: "Average success rate increase for our students" },
                        { target: 500, symbol: "+", label: "Students successfully placed at Oxbridge" },
                        { target: 98, symbol: "%", label: "Student satisfaction rating" },
                        { target: 50, symbol: "+", label: "Degree programs covered by our mentors" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="result-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="result-number">
                                <Counter target={item.target} />
                            </div>
                            <div className="result-symbol">{item.symbol}</div>
                            <p className="result-label">{item.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* UCAS Offers Showcase */}
                <div className="ucas-offers-section">
                    <motion.h3
                        className="ucas-offers-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Real Offers, Real Success
                    </motion.h3>
                    <motion.p
                        className="ucas-offers-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Authentic UCAS offer screenshots from our successful students
                    </motion.p>
                    <div className="ucas-screenshots-grid">
                        {[
                            {
                                course: "Medicine (A100)",
                                uni: "Imperial College London",
                                img: "/images/ucas-offer-example.png",
                            },
                            {
                                course: "Computer Science",
                                uni: "University of Cambridge",
                                img: "/images/ucas-offer-example.png",
                            },
                            {
                                course: "PPE",
                                uni: "University of Oxford",
                                img: "/images/ucas-offer-example.png",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="ucas-screenshot-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="screenshot-wrapper">
                                    <img src={item.img} alt={`UCAS Offer - ${item.course}`} />
                                    <div className="screenshot-overlay">
                                        <p className="screenshot-course">{item.course}</p>
                                        <p className="screenshot-university">{item.uni}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="ucas-disclaimer">
                        *Student names and personal information anonymized for privacy
                    </p>
                </div>
            </div>
        </section>
    );
}
