import { ReactNode } from "react";

export interface SlideDirection {
  direction: number;
}

export interface SkillCardProps {
  icon: ReactNode;
  name: string;
  category: string;
}
