import React from "react";

const Footer = () => {
    return (
        <footer className="bg-zinc-800 text-gray-300 py-10 px-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Section */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-4">About Us</h2>
                    <p>
                        Welcome to [Your Site Name], your trusted source for [industry]. We are committed to providing you with the best content and services.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
                    <ul>
                        <li className="mb-2">
                            <a href="/about" className="hover:text-white">
                                About Us
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/blog" className="hover:text-white">
                                Blog
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="/contact" className="hover:text-white">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="hover:text-white">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
                    <ul>
                        <li className="mb-2">
                            <span>Email: </span>
                            <a
                                href="mailto:info@yoursite.com"
                                className="hover:text-white"
                            >
                                info@yoursite.com
                            </a>
                        </li>
                        <li className="mb-2">
                            <span>Phone: </span>
                            <a
                                href="tel:+1234567890"
                                className="hover:text-white"
                            >
                                +1 234 567 890
                            </a>
                        </li>
                        <li>
                            <span>Address: </span>123 Main Street, City, Country
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center border-t border-gray-700 mt-8 pt-4">
                <p>
                    &copy; {new Date().getFullYear()} Wix Studio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

