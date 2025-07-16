
import React, { useEffect } from 'react';
import type { Project } from '../types';
import { CloseIcon } from './icons/Icons';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectDetailRenderer: React.FC<{ detail: Project['details'][0] }> = ({ detail }) => {
    switch (detail.type) {
        case 'header':
            return <h3 className="text-2xl font-bold font-display text-sky-400 mt-8 mb-4">{detail.content}</h3>;
        case 'text':
            return <p className="text-slate-300 mb-4 leading-relaxed">{detail.content}</p>;
        case 'image':
            return <img src={detail.content as string} alt="Project detail" className="w-full h-auto object-cover rounded-lg my-6 shadow-lg" />;
        case 'list':
            return (
                <ul className="list-disc list-inside space-y-2 my-4 pl-4 text-slate-300">
                    {(detail.content as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        default:
            return null;
    }
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!project) return null;

    return (
        <div 
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4" 
            onClick={onClose}
        >
            <div 
                className="bg-slate-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative border border-slate-700"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
                    aria-label="Close project details"
                >
                    <CloseIcon />
                </button>
                <div className="relative h-72">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-t-xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
                </div>
                
                <div className="p-8">
                    <p className="text-sky-400 font-semibold mb-2">{project.category}</p>
                    <h2 className="text-4xl font-bold font-display text-white mb-4">{project.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map(tech => (
                            <span key={tech} className="bg-slate-700 text-sky-300 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                        ))}
                    </div>
                    
                    <p className="text-lg text-slate-300 mb-6 italic">{project.longDescription}</p>
                    
                    <div className="border-t border-slate-700 pt-6">
                        {project.details.map((detail, index) => (
                            <ProjectDetailRenderer key={index} detail={detail} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
