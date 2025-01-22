import { Home, User, Briefcase, Wrench } from "lucide-react";
import { NavigationItems } from "./types";

export const navItems: NavigationItems[] = [
  { label: "Home", icon: <Home size={18} />, target: "hero" },
  { label: "About", icon: <User size={18} />, target: "about" },
  { label: "Skills", icon: <Wrench size={18} />, target: "skills" },
  { label: "Projects", icon: <Briefcase size={18} />, target: "projects" },
];
