"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [activeButton, setActiveButton] = useState<"normal" | "sending" | "success" | "error">("normal");
    const [btnText, setBtnText] = useState("Submit Inquiry");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setActiveButton("sending");
        setBtnText("Sending...");

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setActiveButton("success");
            setBtnText("Message Sent! ✓");

            // Reset after 3 seconds
            setTimeout(() => {
                setActiveButton("normal");
                setBtnText("Submit Inquiry");
                (e.target as HTMLFormElement).reset();
            }, 3000);

        } catch (error) {
            setActiveButton("error");
            setBtnText("Error - Try Again");

            setTimeout(() => {
                setActiveButton("normal");
                setBtnText("Submit Inquiry");
            }, 3000);
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">
                        Start Your <span className="gradient-text">Success Story</span>
                    </h2>
                    <p className="section-description">
                        Take the first step toward Oxbridge excellence. Our team is ready to
                        guide you.
                    </p>
                </motion.div>
                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3>Why Choose Access Oxbridge?</h3>
                        <ul className="contact-benefits">
                            {[
                                "Top 1% mentors with recent Oxbridge experience",
                                "Personalized strategies tailored to your strengths",
                                "Proven 400% increase in success rates",
                                "Comprehensive support from application to admission",
                                "Access to exclusive Oxbridge alumni network",
                            ].map((benefit, index) => (
                                <li key={index}>
                                    <i className="fas fa-check-circle"></i>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="contact-details">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <span>info@accessoxbridge.io</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <span>+44 20 XXXX XXXX</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>London, United Kingdom</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="university">Preferred University</label>
                                <select id="university" name="university" required defaultValue="">
                                    <option value="" disabled>Select...</option>
                                    <option value="oxford">University of Oxford</option>
                                    <option value="cambridge">University of Cambridge</option>
                                    <option value="both">Both</option>
                                    <option value="undecided">Undecided</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Intended Course/Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="e.g., PPE, Engineering, Medicine"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Tell Us About Your Goals</label>
                                <textarea id="message" name="message" rows={4}></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                style={
                                    activeButton === "success"
                                        ? { background: "linear-gradient(135deg, #28a745 0%, #20c997 100%)" }
                                        : activeButton === "error"
                                            ? { background: "linear-gradient(135deg, #dc3545 0%, #c82333 100%)" }
                                            : {}
                                }
                                disabled={activeButton === "sending" || activeButton === "success"}
                            >
                                {btnText}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
