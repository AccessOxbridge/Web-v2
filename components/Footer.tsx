"use client";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo-container">
                            <img
                                src="/images/logo.png"
                                alt="Access Oxbridge Logo"
                                className="footer-logo-image"
                            />
                        </div>
                        <h3 className="footer-brand-name">ACCESS OXBRIDGE</h3>
                        <p>
                            Empowering exceptional students to achieve Oxbridge excellence through
                            expert mentorship and proven strategies.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" aria-label="Facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul>
                            <li>
                                <a href="#services">Personal Statement</a>
                            </li>
                            <li>
                                <a href="#services">Interview Preparation</a>
                            </li>
                            <li>
                                <a href="#services">Admissions Tests</a>
                            </li>
                            <li>
                                <a href="#services">Course Selection</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li>
                                <a href="#about">About Us</a>
                            </li>
                            <li>
                                <a href="#results">Our Results</a>
                            </li>
                            <li>
                                <a href="#testimonials">Success Stories</a>
                            </li>
                            <li>
                                <a href="#get-started">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li>
                                <a href="#">Admissions Guide</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        &copy; 2026 Access Oxbridge. All rights reserved. Empowering future
                        leaders.
                    </p>
                </div>
            </div>
        </footer>
    );
}
