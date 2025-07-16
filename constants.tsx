
import React from 'react';
import type { Project, Skill } from './types';
import { AnsysIcon, CadIcon, CamIcon, FeaIcon, SolidWorksIcon, StaplerIcon } from './components/icons/Icons';

export const SKILLS: Skill[] = [
    { name: 'SolidWorks', icon: <SolidWorksIcon /> },
    { name: 'ANSYS', icon: <AnsysIcon /> },
    { name: 'FEA', icon: <FeaIcon /> },
    { name: 'CAD Modeling', icon: <CadIcon /> },
    { name: 'Mastercam', icon: <CamIcon /> },
    { name: 'Mechanical Design', icon: <StaplerIcon /> },
];

export const PROJECTS: Project[] = [
  {
    id: 'fea-running-shoe',
    title: 'FEA of Carbon Fiber Running Shoes',
    category: 'Finite Element Analysis',
    shortDescription: 'ANSYS analysis of a carbon fiber augmented running shoe to study the effects of running styles on performance and material stress.',
    longDescription: 'This project involved a comprehensive Finite Element Analysis (FEA) using ANSYS to explore the biomechanics of modern running shoes featuring carbon fiber plates. The primary goal was to understand how different foot strikes (heel, balanced, forefoot) affect vertical deformation and strain energy distribution in the shoe, particularly within the carbon plate.',
    imageUrl: 'assets/images/project-shoe-main.jpg',
    technologies: ['ANSYS', 'FEA', 'Biomechanics', 'Material Science'],
    details: [
      { type: 'header', content: 'Analysis Overview' },
      { type: 'text', content: 'New running shoes contain carbon fiber plates imbedded in the midsole to increase energy return to the runner. The core question was: How does this technology affect different running styles? Using a custom material model to approximate the non-linear behavior of HyperFoam, the stress-strain response was matched to experimental data.' },
      { type: 'image', content: 'assets/images/project-shoe-detail-1.jpg' },
      { type: 'header', content: 'Key Findings on Foot Strike' },
      { type: 'text', content: 'It was found that foot strike played a crucial role in vertical deformation. The posterior half of the carbon plate acts like a cantilever beam. Heel and balanced strikes, which allow for greater vertical deformation and bending, resulted in higher strain energy in the plate, suggesting increased running efficiency.' },
      { type: 'list', content: [
          'Heel Strike Energy: 4.23%',
          'Balanced Strike Energy: 3.27%',
          'Forefoot Strike Energy: 0.98%'
      ]},
      { type: 'image', content: 'assets/images/project-shoe-detail-2.jpg' },
      { type: 'image', content: 'assets/images/project-shoe-detail-3.jpg' },
      { type: 'image', content: 'assets/images/project-shoe-detail-4.jpg' },
      { type: 'image', content: 'assets/images/project-shoe-detail-5.jpg' },
      { type: 'image', content: 'assets/images/project-shoe-detail-6.jpg' },
      { type: 'text', content: 'Surprisingly, the addition of the carbon plate itself had only a small stiffening effect compared to the foam-only model, but its contribution to energy return was significant, especially for runners who are not forefoot strikers.' },
    ]
  },
  {
    id: 'race-car-cad',
    title: 'SolidWorks CAD/CAM Race Car',
    category: 'CAD & CAM',
    shortDescription: 'Design, modeling, and CAM toolpath generation for a race car model using SolidWorks and Mastercam.',
    longDescription: 'This project showcases skills in advanced 3D modeling and manufacturing processes. A detailed race car model was created in SolidWorks, focusing on complex surfacing and precise assembly. Following the design phase, the model was imported into Mastercam to generate 3-axis milling toolpaths for production.',
    imageUrl: 'assets/images/project-car-main.jpg',
    technologies: ['SolidWorks', 'Mastercam', 'CAD', 'CAM', '3-Axis Milling'],
    details: [
      { type: 'header', content: 'Design in SolidWorks' },
      { type: 'text', content: 'The car was modeled using a combination of solid and surface modeling techniques to achieve a lightweight yet structurally sound design. All components were designed for manufacturability and assembled to ensure proper fit and function.' },
      { type: 'image', content: 'assets/images/project-car-detail-1.jpg' },
      { type: 'image', content: 'assets/images/project-car-detail-2.jpg' },
      { type: 'header', content: 'Manufacturing with Mastercam' },
      { type: 'text', content: 'A setup sheet was created, detailing operation info, tool selection (1/4 Endmill), and parameters like spindle speed (12000 RPM) and feedrate. High-speed area rest roughing toolpaths were generated to efficiently remove material.' },
      { type: 'image', content: 'assets/images/project-car-detail-3.jpg' },
      { type: 'image', content: 'assets/images/project-car-detail-4.jpg' },
    ]
  },
  {
    id: 'stapler-design',
    title: 'Mechanical Stapler Design',
    category: 'Mechanical Design',
    shortDescription: 'Complete design and documentation of a mechanical stapler, including part modeling, assembly, and technical drawings.',
    longDescription: 'This project involved the ground-up design of a standard office stapler in SolidWorks. The goal was to create a functional, ergonomic, and manufacturable product. The process included individual part modeling, creating a full assembly, and producing detailed technical drawings with proper dimensioning and tolerancing.',
    imageUrl: 'assets/images/project-stapler-main.jpg',
    technologies: ['SolidWorks', 'Mechanical Design', 'Technical Drawings', 'DFM'],
    details: [
      { type: 'header', content: 'Part Modeling and Assembly' },
      { type: 'text', content: 'Each component of the stapler, from the main housing to the smallest pin, was modeled individually. These parts were then brought together in an assembly file, with mates applied to simulate the real-world mechanical movement.' },
      { type: 'image', content: 'assets/images/project-stapler-detail-1.jpg' },
      { type: 'image', content: 'assets/images/project-stapler-detail-2.jpg' },
      { type: 'image', content: 'assets/images/project-stapler-detail-3.jpg' },
      { type: 'header', content: 'Technical Documentation' },
      { type: 'text', content: 'Comprehensive technical drawings were created for key components like the blade, staple carrier, and top housing. These drawings included all necessary dimensions, views (orthographic, isometric, section), and annotations required for manufacturing.' },
      { type: 'image', content: 'assets/images/project-stapler-detail-4.jpg' },
      { type: 'image', content: 'assets/images/project-stapler-detail-5.jpg' },
      { type: 'image', content: 'assets/images/project-stapler-detail-6.jpg' },
      { type: 'image', content: 'assets/images/project-stapler-detail-7.jpg' },
      { type: 'text', content: 'An exploded view was also created to clearly illustrate how the individual parts assemble into the final product, which is crucial for both assembly instructions and maintenance guides.' },
    ]
  },
];
