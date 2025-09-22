import brandLogo from "../../assets/logo.png";
import "./style.css"; // import custom css

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">

                {/* Logo + Description */}
                <div className="footer-logo-section">
                    <img
                        src={brandLogo}
                        alt="Brand Logo"
                        className="footer-logo"
                    />
                    <p className="footer-description">
                        Your Partner in Commercial Real Estate Success
                    </p>
                </div>

                {/* Services */}
                <div>
                    <h6 className="footer-title">Our Services</h6>
                    <ul className="footer-list">
                        <li>
                            <a href="#about-us" className="footer-link">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#investment-focus" className="footer-link">
                                Investment Focus
                            </a>
                        </li>
                        <li>
                            <a href="#contact-us" className="footer-link">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h6 className="footer-title">Contact Us</h6>
                    <ul className="footer-contact-list">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor"
                                width="24" height="26">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:info@owndesign.co.uk" className="footer-link">
                                info@owndesign.co.uk
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="footer-divider" />

            {/* Bottom */}
            <div className="footer-bottom">
                Copyright &copy; {new Date().getFullYear()} On The Spot Pressure Washing. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
