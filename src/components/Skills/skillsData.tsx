import { SkillCardProps } from "./types";
import { ReactIcon } from "../../assets/SkillsIcons/react.tsx";
import { CssIcon } from "../../assets/SkillsIcons/css-3.tsx";
import { NextJsIcon } from "../../assets/SkillsIcons/nextjs-icon.tsx";
import { JavaScriptIcon } from "../../assets/SkillsIcons/javascript.tsx";
import { TypeScriptIcon } from "../../assets/SkillsIcons/typescript-icon.tsx";
import { HtmlIcon } from "../../assets/SkillsIcons/html-5.tsx";
import { MuiIcon } from "../../assets/SkillsIcons/material-ui.tsx";
import { SassIcon } from "../../assets/SkillsIcons/sass.tsx";
import { ReduxIcon } from "../../assets/SkillsIcons/redux.tsx";
import { ReactRouterIcon } from "../../assets/SkillsIcons/react-router.tsx";
import { GitIcon } from "../../assets/SkillsIcons/git-icon.tsx";
import { GcpIcon } from "../../assets/SkillsIcons/google-cloud.tsx";

export const skills: SkillCardProps[] = [
  { icon: <ReactIcon />, name: "React", category: "Framework" },
  { icon: <NextJsIcon />, name: "Next.js", category: "Framework" },
  {
    icon: <JavaScriptIcon />,
    name: "JavaScript",
    category: "Programming Language",
  },
  {
    icon: <TypeScriptIcon />,
    name: "TypeScript",
    category: "Programming Language",
  },
  { icon: <HtmlIcon />, name: "HTML", category: "Layout" },
  { icon: <CssIcon />, name: "CSS", category: "Layout" },
  { icon: <MuiIcon />, name: "Material UI", category: "Library" },
  { icon: <SassIcon />, name: "SASS", category: "Library" },
  { icon: "💅", name: "Styled Components", category: "Library" },
  { icon: <ReduxIcon />, name: "Redux", category: "Library" },
  { icon: <ReactRouterIcon />, name: "React Router", category: "Library" },
  { icon: <GitIcon />, name: "Git", category: "Version Control" },
  { icon: <GcpIcon />, name: "Google Cloud", category: "cloud" },
];
