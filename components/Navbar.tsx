"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        document.body.style.overflow = !mobileMenuOpen ? "hidden" : "auto";
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
            <div className="container">
                <div className="nav-content">
                    <div className="logo">
                        <img
                            src="/images/logo.png"
                            alt="Access Oxbridge Logo"
                            className="logo-image"
                        />
                    </div>
                    <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
                        <li>
                            <a href="#about" onClick={closeMobileMenu}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#services" onClick={closeMobileMenu}>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#results" onClick={closeMobileMenu}>
                                Results
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials" onClick={closeMobileMenu}>
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="btn-nav" onClick={closeMobileMenu}>
                                Get Started
                            </a>
                        </li>
                    </ul>
                    <button
                        className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
                        aria-label="Toggle menu"
                        onClick={toggleMobileMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
