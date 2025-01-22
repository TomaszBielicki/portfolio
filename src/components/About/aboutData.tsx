import { Code, Coffee, Globe, Laptop } from "lucide-react";
import { AboutTileData, AboutParagraphData } from "./types";

export const highlights: AboutTileData[] = [
  {
    icon: <Code size={24} />,
    title: "Clean Code",
    description: "Writing maintainable, and efficient code",
  },
  {
    icon: <Globe size={24} />,
    title: "Modern Web",
    description: "Building responsive and accessible applications",
  },
  {
    icon: <Coffee size={24} />,
    title: "Problem Solver",
    description: "Turning complex problems into simple solutions",
  },
  {
    icon: <Laptop size={24} />,
    title: "Fast Learner",
    description: "Always staying up-to-date with latest technologies",
  },
];

export const paragraphs: AboutParagraphData = {
  p1: "I'm a passionate React Developer with a strong foundation in modern web technologies. With several years of experience in building responsive and performant web applications, I focus on creating clean, efficient, and maintainable code.",
  p2: "My expertise lies in React ecosystem, including state management with Redux, routing with React Router, and server-side rendering with Next.js. I'm always eager to learn new technologies and tackle challenging projects.",
};
