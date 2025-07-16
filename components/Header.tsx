import React from 'react';

interface HeaderProps {
    isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#home" className="text-xl font-bold font-display text-white tracking-wider">
                        Ethan Rednor
                    </a>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#projects" className="text-slate-300 hover:text-sky-400 transition-colors duration-300">Projects</a>
                        <a href="#skills" className="text-slate-300 hover:text-sky-400 transition-colors duration-300">Skills</a>
                        <a href="#about" className="text-slate-300 hover:text-sky-400 transition-colors duration-300">About</a>
                        <a href="mailto:erednor@gmail.com" className="text-slate-300 hover:text-sky-400 transition-colors duration-300">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};