"use client";

import { motion } from "framer-motion";

export default function TrustSection() {
    return (
        <section className="trust-section">
            <div className="container">
                <div className="trust-grid">
                    {[
                        { icon: "fa-shield-alt", text: "Proven Track Record" },
                        { icon: "fa-users", text: "Top 1% Mentors" },
                        { icon: "fa-award", text: "Award-Winning Support" },
                        { icon: "fa-graduation-cap", text: "Oxbridge Alumni Network" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="trust-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <i className={`fas ${item.icon}`}></i>
                            <span>{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
