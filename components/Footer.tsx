import React from 'react';
import { LinkedinIcon, MailIcon } from './icons/Icons';

export const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-slate-950/50">
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold font-display text-white mb-4">Get In Touch</h2>
                    <p className="text-slate-400 mb-8 max-w-md text-center">
                        I'm currently seeking new opportunities and would love to hear from you. Feel free to reach out via email or connect with me on social media.
                    </p>
                    <div className="flex space-x-6 mb-8">
                        <a href="mailto:erednor@gmail.com" aria-label="Email" className="text-slate-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110">
                            <MailIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/ethan-rednor/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110">
                            <LinkedinIcon />
                        </a>
                    </div>
                    <div className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Ethan Rednor. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};