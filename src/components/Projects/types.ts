export interface ProjectsData {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
}

export interface ProjectProps {
  project: ProjectsData;
  index: number;
}
