
import React, { useState } from 'react';
import type { Project } from '../types';
import { PROJECTS, SKILLS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { ChevronDoubleDownIcon } from '../components/icons/Icons';

// Section Component
interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
    return (
        <section id={id} className={`py-20 md:py-32 ${className || ''}`}>
            <div className="container mx-auto px-6">
                {children}
            </div>
        </section>
    );
};

// Hero Section
const HeroSection: React.FC = () => (
    <section id="home" className="relative min-h-screen flex items-center bg-slate-900 py-24 md:py-0">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text Content */}
                <div className="text-center md:text-left order-2 md:order-1">
                    <h1 className="text-5xl lg:text-6xl font-bold text-white font-display tracking-wide leading-tight">
                        Ethan Rednor
                    </h1>
                    <p className="text-xl md:text-2xl text-sky-300 mt-4 font-display">
                        Mechanical Engineer
                    </p>
                    <p className="text-slate-400 mt-6 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                        A passionate and innovative engineer from Lehigh University specializing in CAD, FEA, and manufacturing. I transform complex challenges into high-performance, real-world solutions.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <a 
                            href="#projects" 
                            className="bg-sky-600 text-white font-bold py-3 px-8 rounded-md hover:bg-sky-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/30 text-center"
                        >
                            View Projects
                        </a>
                        <a 
                            href="mailto:erednor@gmail.com" 
                            className="bg-slate-700/50 text-slate-300 font-bold py-3 px-8 rounded-md hover:bg-slate-700 hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Right Column: Profile Image */}
                <div className="flex justify-center md:justify-end order-1 md:order-2">
                    <div className="relative w-full max-w-xs sm:max-w-sm group">
                        <div className="absolute -inset-1.5 bg-gradient-to-br from-sky-500 to-slate-700 rounded-full blur-lg opacity-60 transition duration-500 group-hover:opacity-80 group-hover:blur-xl"></div>
                        <img 
                            src="assets/images/profile-ethan-rednor.jpg" 
                            alt="Ethan Rednor Profile Photo" 
                            className="relative w-full h-auto object-cover rounded-full shadow-2xl transition duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
            
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
                <a href="#projects" aria-label="Scroll to projects section">
                    <ChevronDoubleDownIcon />
                </a>
            </div>
        </div>
    </section>
);


// About Section
const AboutSection: React.FC = () => (
    <Section id="about" className="bg-slate-950/50">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">My Engineering Philosophy</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-400 leading-relaxed">
                My approach to engineering is built on a foundation of rigorous analysis and hands-on application. I believe in a first-principles approach, ensuring that every design choice is backed by solid data and a deep understanding of the underlying physics. From the finite element analysis of advanced materials to the precise toolpaths of CAM software, my work is driven by a pursuit of performance, efficiency, and elegant design. This portfolio is a collection of projects where I've applied this philosophy to solve real-world challenges.
            </p>
        </div>
    </Section>
);

// Skills Section
const SkillsSection: React.FC = () => (
    <Section id="skills" className="bg-slate-900">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">Technical Skills</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-12"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
                {SKILLS.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-lg group transition-all duration-300 hover:bg-slate-800 hover:-translate-y-2">
                        <div className="text-sky-400 mb-4 transition-transform duration-300 group-hover:scale-110">{skill.icon}</div>
                        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

// Projects Section
const ProjectsSection: React.FC<{ onViewProject: (project: Project) => void }> = ({ onViewProject }) => (
    <Section id="projects" className="bg-slate-950/50">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">Portfolio Projects</h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto mb-12"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} onViewProject={onViewProject} />
            ))}
        </div>
    </Section>
);

export const Home: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleViewProject = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <HeroSection />
            <ProjectsSection onViewProject={handleViewProject} />
            <SkillsSection />
            <AboutSection />
            <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        </>
    );
};
