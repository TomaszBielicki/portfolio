export interface Skill {
  icon: string;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export interface SlideDirection {
  direction: number;
}