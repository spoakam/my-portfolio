
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    onViewProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewProject }) => {
    return (
        <div className="bg-slate-800/50 rounded-lg overflow-hidden group transform transition-all duration-500 hover:scale-105 hover:bg-slate-800 shadow-lg hover:shadow-2xl hover:shadow-sky-500/10">
            <div className="relative overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-6">
                <p className="text-sky-400 text-sm font-semibold mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-white mb-2 font-display">{project.title}</h3>
                <p className="text-slate-400 mb-4 h-20">{project.shortDescription}</p>
                <button
                    onClick={() => onViewProject(project)}
                    className="w-full bg-sky-600 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-500 transition-all duration-300 transform group-hover:translate-y-1"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};
