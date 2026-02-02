"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label">Who We Are</span>
                    <h2 className="section-title">
                        Excellence Through <span className="gradient-text">Expert Mentorship</span>
                    </h2>
                    <p className="section-description">
                        We are a collective of distinguished Oxbridge graduates dedicated to
                        democratizing access to elite education. Our mission is to empower
                        exceptional students with the knowledge, strategy, and confidence to
                        succeed in the world&apos;s most competitive admissions processes.
                    </p>
                </motion.div>
                <div className="about-grid">
                    <motion.div
                        className="about-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="about-card-image">
                            <img
                                src="https://sspark.genspark.ai/cfimages?u1=ZeEGM%2FlSTs%2FFkEHo53c3Uku%2Fp1S9ykOhV4VbRr5hOXSo7J4dEz8u%2Fs6p8NZ37Ne5gd0avlimzw%2FmoWB8i%2BD80znNat9geiG5WXyFXGD3dsmLQgpp1eHz1jFNrRq0VrcAP%2B2OPwJnW2706Uf%2BWLHABMDPaIoyQ%2Fd6JWQyhDzgyDiSsSv8v%2F8FJ%2FZ%2FuDqR12U%3D&u2=SpoAGPFwJqDiOX%2F4&width=2560"
                                alt="Historic Oxford College"
                            />
                        </div>
                        <div className="about-card-content">
                            <div className="card-icon">
                                <i className="fas fa-university"></i>
                            </div>
                            <h3>Heritage & Prestige</h3>
                            <p>
                                Navigate the centuries-old traditions and unique admissions processes
                                of Oxford and Cambridge with insider knowledge from those who&apos;ve
                                succeeded.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="about-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="about-card-image">
                            <img
                                src="https://sspark.genspark.ai/cfimages?u1=j%2FbV2Q9me7ZxYa9QvH7he3gKgW%2FTfyH9qVnBhXqs4OTkRJ550se%2FgUYONb%2Bs7GA6SKLHOvcjp6MhOmUY6ZKAwAwJDpPFQYVfqtjZIn%2FcGjEJabXCmY%2FjsEROrynCPOPIfMiAtglvQUo%2FHBlO0%2BK3J3jb981H1XDA&u2=L69ZDKZpZYbXHa67&width=2560"
                                alt="Student mentoring session"
                            />
                        </div>
                        <div className="about-card-content">
                            <div className="card-icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3>Strategic Excellence</h3>
                            <p>
                                Our data-driven approach combines proven methodologies with
                                personalized strategies, resulting in a 400% increase in success
                                rates for our students.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
