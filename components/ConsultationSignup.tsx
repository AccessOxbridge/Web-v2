"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";

const consultationStages = [
    {
        number: "01",
        title: "Academic Competitiveness Review",
        description: "We assess your child’s academic profile in the context of their intended universities, using a detailed, admissions-informed framework to provide a clear and honest view of current competitiveness, as well as where targeted improvements can significantly strengthen their chances."
    },
    {
        number: "02",
        title: "Strengths and Development Opportunities",
        description: "We identify the aspects of your child’s profile that admissions tutors consistently value most, and highlight realistic, high-impact opportunities to develop academic and extracurricular strengths that can materially improve application outcomes."
    },
    {
        number: "03",
        title: "Personalised Admissions Strategy",
        description: "You will see how a carefully structured strategy — informed by experience, clear priorities, and the right timing — can make a substantial difference. We outline a pathway designed to help your child present the strongest possible application in a highly competitive environment."
    },
    {
        number: "04",
        title: "Clear Next Steps and Support Options",
        description: "You will leave with a structured, actionable plan and a clear sense of direction. Many families find that once the right steps are defined by an experienced advisor, the admissions process feels far more manageable, focused, and achievable."
    }
];

export default function ConsultationSignup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
        role: "Parent"
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Handle form submission logic here
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="consultation-section" id="get-started">
            <div className="container">
                <div className="consultation-grid">
                    {/* Left side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="consultation-info"
                    >
                        <span className="section-label">Free Consultation</span>
                        <h2 className="section-title">
                            Clarity, Direction, and <span className="gradient-text">Confidence</span>
                        </h2>
                        <p className="consultation-intro">
                            Our complimentary consultation is designed to give parents clarity, direction, and confidence in their child’s university application journey. Drawing on our extensive experience guiding students through highly competitive admissions processes, many families discover that their child is far closer to competitive admission than they initially believed — and that, with the right guidance, meaningful improvements are both realistic and achievable.
                        </p>

                        <div className="consultation-stages">
                            {consultationStages.map((stage, index) => (
                                <div key={stage.number}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="stage-item"
                                    >
                                        <div className="stage-number">{stage.number}</div>
                                        <div className="stage-content">
                                            <h3>{stage.title}</h3>
                                            <p>{stage.description}</p>
                                        </div>
                                    </motion.div>
                                    {index < consultationStages.length - 1 && (
                                        <div className="stage-divider" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="no-obligations-box">
                            <h4>No Obligations</h4>
                            <p>
                                This consultation is exploratory and focused on providing honest, professional advice. If we believe your child’s goals are achievable with the right approach, we will explain how and outline the steps required. If not, we will be transparent and guide you appropriately.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="booking-form-wrapper"
                    >
                        <div className="booking-form-card">
                            <h3>Book Your Consultation</h3>
                            <p>Complete the form below and our team will contact you to schedule your session.</p>

                            <form onSubmit={handleSubmit} className="booking-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+44 20 XXXX XXXX"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="role">I am a...</label>
                                        <div className="select-wrapper">
                                            <select
                                                id="role"
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                            >
                                                <option value="Parent">Parent</option>
                                                <option value="Student">Student</option>
                                                <option value="School Teacher">School Teacher</option>
                                            </select>
                                            <ChevronDown className="select-icon" size={18} />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Your Goals & Questions</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="E.g., I'm interested in applying to Oxford for Computer Science..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className={`btn btn-primary btn-block ${isSubmitting ? "loading" : ""} ${isSuccess ? "success" : ""}`}
                                    disabled={isSubmitting || isSuccess}
                                >
                                    {isSuccess ? "Request Sent! ✓" : isSubmitting ? "Sending..." : "Submit Booking Request"}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                .consultation-section {
                    padding: var(--section-padding) 0;
                    background-color: var(--white);
                    position: relative;
                }

                .consultation-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: start;
                }

                .consultation-info {
                    max-width: 600px;
                }

                .consultation-intro {
                    font-size: 1.2rem;
                    line-height: 1.8;
                    color: var(--primary-navy);
                    margin-bottom: 48px;
                    font-style: italic;
                    border-left: 4px solid var(--accent-gold);
                    padding-left: 24px;
                }

                .consultation-stages {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    margin-bottom: 64px;
                }

                .stage-item {
                    display: flex;
                    gap: 24px;
                    align-items: flex-start;
                }

                .stage-divider {
                    height: 1px;
                    background-color: var(--light-gray);
                    margin: 32px 0 32px 64px;
                    opacity: 0.5;
                }

                .stage-number {
                    font-family: var(--font-display);
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--accent-gold);
                    line-height: 1;
                    opacity: 0.8;
                }

                .stage-content h3 {
                    font-size: 1.5rem;
                    color: var(--primary-dark);
                    margin-bottom: 12px;
                }

                .stage-content p {
                    font-size: 1rem;
                    color: var(--medium-gray);
                    line-height: 1.6;
                }

                .no-obligations-box {
                    background: var(--off-white);
                    padding: 32px;
                    border-radius: 12px;
                    border: 1px solid var(--light-gray);
                }

                .no-obligations-box h4 {
                    font-size: 1.25rem;
                    color: var(--accent-burgundy);
                    margin-bottom: 16px;
                }

                .no-obligations-box p {
                    font-size: 0.95rem;
                    color: var(--medium-gray);
                    margin-bottom: 0;
                }

                .booking-form-wrapper {
                    position: sticky;
                    top: 120px;
                }

                .booking-form-card {
                    background: var(--white);
                    padding: 48px;
                    border-radius: 20px;
                    box-shadow: var(--shadow-xl);
                    border: 1px solid var(--light-gray);
                }

                .booking-form-card h3 {
                    font-size: 2rem;
                    margin-bottom: 12px;
                }

                .booking-form-card p {
                    font-size: 1rem;
                    color: var(--medium-gray);
                    margin-bottom: 32px;
                }

                .booking-form {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .form-group label {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--primary-dark);
                }

                .form-group input,
                .form-group textarea,
                .form-group select {
                    padding: 14px 18px;
                    border: 1px solid var(--light-gray);
                    border-radius: 8px;
                    font-family: var(--font-body);
                    font-size: 1rem;
                    background: var(--off-white);
                    transition: all 0.3s ease;
                }

                .form-group input:focus,
                .form-group textarea:focus,
                .form-group select:focus {
                    outline: none;
                    border-color: var(--accent-gold);
                    background: var(--white);
                    box-shadow: 0 0 0 4px rgba(201, 169, 97, 0.1);
                }

                .select-wrapper {
                    position: relative;
                }

                .select-wrapper select {
                    width: 100%;
                    appearance: none;
                }

                .select-icon {
                    position: absolute;
                    right: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--medium-gray);
                    pointer-events: none;
                }

                @media (max-width: 1024px) {
                    .consultation-grid {
                        grid-template-columns: 1fr;
                        gap: 60px;
                    }

                    .booking-form-wrapper {
                        position: static;
                    }
                }

                @media (max-width: 640px) {
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                    
                    .booking-form-card {
                        padding: 32px 24px;
                    }
                }
            `}</style>
        </section>
    );
}
