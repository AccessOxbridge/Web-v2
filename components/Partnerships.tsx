"use client";

import { motion } from "framer-motion";

export default function Partnerships() {
    const partners = [
        {
            name: "University of Cambridge",
            img: "https://sspark.genspark.ai/cfimages?u1=Cs9W6ToEiKldDiRgW0qQe1LaCWzki%2FxtPmzMvW3hX95i2yYuBv%2FwlcwBviyBt4loAMZqP09xmmN03ipeBqLcnYF2QvX8eYBeHMD2sDY5hAuCGswH&u2=YwQjFjk9qGPuniUT&width=2560",
        },
        {
            name: "University of Oxford",
            img: "https://sspark.genspark.ai/cfimages?u1=GumY89bXifA83siMRgUzEduAqsunVcwn5LStswe8yVx9doYd0%2B44m2FMIFmq2J7DCVSJNiTmSYrhzoyW6RgDOdJlehlwZbCfg1vYeqrz%2BUenIPU6bgWlVpOr2MReIbGgHmpNzeeYf0q1iILnXnqmsgbVTe%2Bl94aZ3RVgR%2BSruoyeWRrr%2Fx%2BC%2BcbeuFPA%2FGc%3D&u2=D1965lAU8p%2Bzcv2T&width=2560",
        },
        {
            name: "Imperial College London",
            img: "https://sspark.genspark.ai/cfimages?u1=ElYMgXIXUdB5qBYpVw8NP%2BDVTrJAF5KxKq28Vy3cjCmEshQDNKrPDXMa0L4nZRJBjzQT%2B8dvNGYJTgrjzhsBvXNWj72AjR9hgvxw8j2WuTGmVXv5uRVa9mTzkA%2FC2rweuYGWxH2piETEhIAM0NQtq0fS61tBHeUlK0RNk0zd%2B%2FnuTgWBHKRYipRJ1KvWKejLUsQFYw%3D%3D&u2=CCmuv%2FiBQxwG3v7m&width=2560",
        },
        {
            name: "University College London",
            img: "https://sspark.genspark.ai/cfimages?u1=dB2kVOZdqjAmlYrOcS%2BolvUNyW%2BKeX%2FkLRFcahzbl9vCFqAT5f8V%2ByEJzlm94AN4blQHeP9TiUghR3YUwdTfGKfLr6XocM67g31nkxb%2Bm38GQ2Gu67xAGBlCMcw6prBiMtuR%2BhYn63J2OJaLmQ%3D%3D&u2=%2F3pf2nsYBKNy6JYy&width=2560",
        },
        {
            name: "LSE",
            placeholder: true,
            text: "LSE",
        },
        {
            name: "Durham",
            placeholder: true,
            text: "Durham",
        },
    ];

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
                            >
                                {partner.placeholder ? (
                                    <>
                                        {/* Fallback for placeholders if needed, or use a default logo */}
                                        <div className="text-center font-bold text-xl text-gray-400">{partner.text}</div>
                                    </>
                                ) : (
                                    <img src={partner.img} alt={partner.name} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
