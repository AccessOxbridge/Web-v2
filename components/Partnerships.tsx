"use client";

import { motion } from "framer-motion";

export default function Partnerships() {
    const partners = [
        {
            name: "University of Cambridge",
            img: "/cambridge.png",
            scale: 1,
        },
        {
            name: "University of Oxford",
            img: "/oxford.png",
        },
        {
            name: "LSE",
            img: "/lse.png",
        },
        {
            name: "UCL",
            img: "/ucl.png",
        },
        {
            name: "King's College London",
            img: "/kings.png",
        },
        {
            name: "Durham University",
            img: "/durham.png",
            scale: 1,
        },
        {
            name: "Imperial College London",
            img: "/imperial.png",
            scale: 1,
        },
        {
            name: "University of Edinburgh",
            img: "/edinburgh.png",
        },
        {
            name: "University of Bristol",
            img: "/bristol.png",
        },
        {
            name: "University of Manchester",
            img: "/manchester.png",
        },
        {
            name: "Queen Elizabeth's School",
            img: "/queeneli.png",
        },
        {
            name: "Scientia",
            img: "/scientia.png",
        },
    ];

    // Create a long enough list for seamless scrolling
    const carouselPartners = [...partners, ...partners, ...partners, ...partners];

    return (
        <section className="partnerships-section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label">Partnerships & Destinations</span>
                    <h2 className="section-title">
                        Where Our Students <span className="gradient-text">Succeed</span>
                    </h2>
                    <p className="section-description">
                        We&apos;ve helped students gain admission to the UK&apos;s most prestigious institutions
                    </p>
                </motion.div>

                <div className="partners-carousel-container">
                    <div className="partners-carousel-track">
                        {carouselPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="partner-logo-item"
                                style={partner.scale ? {
                                    width: `${200 * partner.scale}px`,
                                    height: `${80 * partner.scale}px`
                                } : undefined}
                            >
                                <img
                                    src={partner.img}
                                    alt={partner.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
