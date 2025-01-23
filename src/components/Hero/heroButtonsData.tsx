import { Github, Linkedin, Mail } from "lucide-react";
import { ButtonsProps } from "./types";

export const buttonsData: ButtonsProps[] = [
  {
    name: "Contact Me",
    variant: "contained",
    size: "large",
    startIcon: <Mail />,
    href: "mailto:tomasz.bielicki@gmail.com",
  },
  {
    name: "GitHub",
    variant: "outlined",
    size: "large",
    startIcon: <Github />,
    href: "https://github.com/yourusername",
    target: "_blank",
  },
  {
    name: "LinkedIn",
    variant: "outlined",
    size: "large",
    startIcon: <Linkedin />,
    href: "https://linkedin.com/in/yourusername",
    target: "_blank",
  },
];
