"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";

export default function TrustSection() {
    return (
        <section className="trust-section">
            <div className="container">
                <div className="stats-grid">
                    {/* Left: 400% Increase */}
                    <motion.div
                        className="stat-box"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <span className="stat-number">
                            <Counter target={400} />%
                        </span>
                        <span className="stat-label">Success Rate Increase</span>
                    </motion.div>

                    {/* Middle: 98% Satisfaction */}
                    <motion.div
                        className="stat-box"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="stat-number">
                            <Counter target={98} />%
                        </span>
                        <span className="stat-label">Student Satisfaction</span>
                    </motion.div>

                    {/* Right: 500+ Vetted Experts */}
                    <motion.div
                        className="stat-box"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <span className="stat-number">
                            <Counter target={500} />+
                        </span>
                        <span className="stat-label">Vetted Admissions Experts</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
