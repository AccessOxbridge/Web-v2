"use client";

import { motion } from "framer-motion";

export default function CtaSection() {
    return (
        <section className="cta-section">
            <div className="container">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="cta-logo">
                        <img src="/images/logo.png" alt="Access Oxbridge" />
                    </div>
                    <h2>Begin Your Journey</h2>
                    <p>
                        Join hundreds of successful students who transformed their dreams into
                        reality with Access Oxbridge.
                    </p>
                    <a href="#get-started" className="btn btn-primary btn-large">
                        Schedule Your Consultation
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
