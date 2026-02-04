"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
    CheckCircle2,
    Target,
    FileText,
    BookOpen,
    Users,
    Clock,
    Award,
    GraduationCap,
    ArrowRight
} from "lucide-react";
import "./Services.css";
import { useState } from "react";



const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Services() {
    const [isOxbridge, setIsOxbridge] = useState(true);

    const ukSteps = [
        {
            number: 1,
            title: "Early Preparation and Qualification Planning",
            desc: "Understanding UK requirements and aligning international qualifications with course expectations.",
            icon: <Users />
        },
        {
            number: 2,
            title: "Course Research and Application Strategy",
            desc: "Choosing suitable courses and beginning academic enrichment.",
            icon: <BookOpen />
        },
        {
            number: 3,
            title: "UCAS Application and Personal Statement",
            desc: "Completing applications accurately and meeting key UK university deadlines.",
            icon: <FileText />
        },
        {
            number: 4,
            title: "Offers Interviews and Visa Planning",
            desc: "Responding to offers preparing interviews and organising visa documentation.",
            icon: <Target />
        },
        {
            number: 5,
            title: "Results, Visa and University Preparation",
            desc: "Confirming university placement and preparing for arrival in the UK.",
            icon: <CheckCircle2 />,
            isSuccess: true
        }
    ];

    const oxbridgeSteps = [
        {
            number: 1,
            title: "Early Academic Foundation and Subject Alignment",
            desc: "Understanding Oxbridge expectations and aligning all preparation accordingly.",
            icon: <Users />
        },
        {
            number: 2,
            title: "Strategic Course, College and Admissions Test Planning",
            desc: "Choosing College and course and understanding relevant Admissions Test content.",
            icon: <BookOpen />
        },
        {
            number: 3,
            title: "Early UCAS Personal Statement Submission and Interview Preparation",
            desc: "Completing applications accurately and meeting the early Oxbridge application deadline.",
            icon: <FileText />
        },
        {
            number: 4,
            title: "Admissions Tests and Interview Prep",
            desc: "Preparing for interviews and Admissions Tests.",
            icon: <Target />
        },
        {
            number: 5,
            title: "Decisions, Results and University Preparation",
            desc: "Responding to outcomes and preparing for Oxbridge study if successful.",
            icon: <CheckCircle2 />,
            isSuccess: true
        }
    ];

    const steps = isOxbridge ? oxbridgeSteps : ukSteps;

    const services = [
        { title: "UCAS Personal Statement Support", icon: FileText, desc: "Individual guidance to help students articulate academic motivation, supercurricular engagement, and subject readiness through a clear, authentic, and intellectually focused personal statement." },
        { title: "Admissions Test Preparation", icon: Clock, desc: "Structured preparation for Oxbridge and competitive admissions tests, developing problem-solving ability, exam technique, and subject-specific thinking under timed conditions." },
        { title: "Oxbridge Interview Preparation", icon: GraduationCap, desc: "Rigorous interview preparation focused on academic discussion, critical thinking, and confidence, guided by Oxbridge graduates who understand subject-specific interview expectations." },
        { title: "Medicine Interview Preparation", icon: Award, desc: "Targeted preparation for medical school interviews, including MMI and panel formats, with emphasis on ethical reasoning, communication skills, and reflective thinking." },
        { title: "International Application Guidance", icon: Users, desc: "Specialist support for international students, addressing curriculum differences, admissions expectations, and application strategy when applying to Oxbridge and UK universities." },
        { title: "Curriculum Support (GCSE/A-Level/IB)", icon: BookOpen, desc: "Targeted academic tuition to build the strong subject foundations, grades, and intellectual confidence required for successful applications to Oxbridge and other elite universities." },
    ];

    return (
        <section id="services">
            <div className={`services-section ${isOxbridge ? 'oxbridge-mode' : 'uk-mode'}`}>
                {/* 1. Detached Header Section */}
                <div className="services-header">
                    <div className="toggle-container">
                        {['UK Universities', 'Oxbridge'].map((tab) => {
                            const active = (tab === 'Oxbridge') === isOxbridge;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setIsOxbridge(tab === 'Oxbridge')}
                                    className={`toggle-btn ${active ? 'active' : 'inactive'}`}
                                >
                                    {active && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-white shadow-md rounded-full -z-10"
                                            style={{ borderRadius: '9999px' }}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {tab}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 2. The Timeline */}
                <div className="timeline-container">
                    {/* Background Track */}
                    <div className="timeline-track-bg" />

                    {/* Animated Progress Track */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="timeline-track-progress"
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <LayoutGroup>
                        <div className="timeline-grid">
                            <AnimatePresence mode="popLayout">
                                {steps.map((step, idx) => {
                                    const isEven = idx % 2 === 1;
                                    return (
                                        <motion.div
                                            layout
                                            key={step.title}
                                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                                            className="timeline-step"
                                        >
                                            {/* Top Content (Odd Steps) */}
                                            <div className={`timeline-content-top ${isEven ? 'hidden-md' : ''}`}>
                                                {!isEven && <StepContent step={step} isOxbridge={isOxbridge} idx={idx} />}
                                            </div>

                                            {/* The Node */}
                                            <div className="node-wrapper">
                                                <div className={`timeline-node ${step.isSuccess
                                                    ? 'success'
                                                    : isOxbridge
                                                        ? 'oxbridge'
                                                        : 'standard'
                                                    }`}>
                                                    {step.icon}
                                                </div>
                                            </div>

                                            {/* Bottom Content (Even Steps) */}
                                            <div className={`timeline-content-bottom ${!isEven ? 'hidden-md' : ''}`}>
                                                {isEven && <StepContent step={step} isOxbridge={isOxbridge} idx={idx} />}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    </LayoutGroup>
                </div>

                {/* Core Services Grid */}
                <div className="services-title-container">
                    <h2 className="section-heading">
                        Our Tailored <span className={`${isOxbridge ? 'text-gray-dark' : 'text-gray-light'}`}>
                            Services
                        </span>
                    </h2>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    className="services-grid"
                >
                    {services.map((service, idx) => (
                        <div key={idx} className="service-card-wrapper">
                            <motion.div
                                className={`service-card ${isOxbridge ? 'oxbridge-theme' : 'uk-theme'}`}
                            >
                                <div className="card-icon-box">
                                    <service.icon />
                                </div>

                                <h3 className={`card-title ${!isOxbridge ? 'text-white' : 'text-dark'}`}>
                                    {service.title}
                                </h3>
                                <p className={`card-desc ${!isOxbridge ? 'text-gray-light' : 'text-gray-dark'}`}>
                                    {service.desc}
                                </p>

                                <div className="card-cta">
                                    Find Your Mentor <ArrowRight className="w-4 h-4" />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function StepContent({ step, isOxbridge, idx }: { step: any, isOxbridge: boolean, idx: number }) {
    return (
        <div className="step-details">
            <span className="step-phase">
                Phase 0{step.number}
            </span>
            <h3 className={`step-title ${!isOxbridge ? 'text-white' : 'text-dark'}`}>
                {step.title}
            </h3>
            <p className={`step-desc ${!isOxbridge ? 'text-gray-medium' : 'text-gray-dark'}`}>
                {step.desc}
            </p>
        </div>
    );
}
