
export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  technologies: string[];
  details: ProjectDetail[];
}

export interface ProjectDetail {
    type: 'text' | 'image' | 'list' | 'header';
    content: string | string[];
}

export interface Skill {
    name: string;
    icon: React.ReactNode;
}
