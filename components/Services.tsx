"use client";

import { motion } from "framer-motion";

export default function Services() {
    const services = [
        {
            title: "Personal Statement",
            icon: "fa-file-alt",
            desc: "Craft a compelling narrative that showcases your intellectual curiosity and academic passion.",
            features: [
                "One-on-one mentorship",
                "Unlimited revisions",
                "Subject-specific guidance",
            ],
        },
        {
            title: "Interview Preparation",
            icon: "fa-comments",
            desc: "Master the Oxbridge interview with comprehensive mock sessions and expert feedback.",
            features: [
                "Subject-expert mock interviews",
                "Real-time feedback & analysis",
                "College-specific preparation",
            ],
            featured: true,
        },
        {
            title: "Admissions Tests",
            icon: "fa-book-open",
            desc: "Excel in MAT, STEP, TSA, BMAT and other critical admissions assessments.",
            features: [
                "Expert tuition",
                "Practice materials",
                "Test strategies",
            ],
        },
        {
            title: "Course Selection",
            icon: "fa-map-marked-alt",
            desc: "Navigate the complexities of choosing the right course and college for your profile.",
            features: [
                "Strategic guidance",
                "College matching",
                "Subject exploration",
            ],
        },
        {
            title: "UCAS Application",
            icon: "fa-star",
            desc: "Perfect every element of your UCAS application with comprehensive review and guidance.",
            features: [
                "Application optimization",
                "Timeline management",
                "Quality assurance",
            ],
        },
        {
            title: "Premium Package",
            icon: "fa-crown",
            desc: "Complete end-to-end support for the ultimate competitive advantage.",
            features: [
                "All services included",
                "Priority access",
                "Dedicated mentor",
            ],
        },
    ];

    return (
        <section className="services-section" id="services">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label">Our Services</span>
                    <h2 className="section-title">
                        Comprehensive <span className="gradient-text">Admissions Support</span>
                    </h2>
                    <p className="section-description">
                        From initial application to final interview, we provide end-to-end
                        guidance tailored to your unique strengths and aspirations.
                    </p>
                </motion.div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`service-card ${service.featured ? "service-featured" : ""}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {service.featured && <div className="featured-badge">Most Popular</div>}
                            <div className="service-icon">
                                <i className={`fas ${service.icon}`}></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <ul className="service-features">
                                {service.features.map((feature, i) => (
                                    <li key={i}>
                                        <i className="fas fa-check"></i> {feature}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="service-link">
                                Learn More <i className="fas fa-arrow-right"></i>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
